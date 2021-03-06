//logs.js
import {Api} from '../../utils/api.js';
var api = new Api();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  	QrData:[]
  },
    

  onLoad(){
    const self = this;
    self.getQrData()
  },


  onShow(){
    const self = this;
   
  },

  getQrData(){
    const self = this;
    const postData = {};
    postData.token = wx.getStorageSync('token');
    postData.param = wx.getStorageSync('info').user_no+','+wx.getStorageSync('info').login_name+','+wx.getStorageSync('login').userType;
    postData.output = 'url';
    postData.ext = 'png';
    const callback = (res)=>{
      console.log(res);
      self.data.QrData = res;
      self.setData({
        web_QrData:self.data.QrData,
        web_name:wx.getStorageSync('info').login_name
      });
     
      wx.hideLoading();
    };
    api.getQrCode(postData,callback);
 },




})

