//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
  },
  //事件处理函数
 
  onLoad: function () {
   
  },
 merchentType:function(){
 	wx.navigateTo({
 		url:'/pages/merchentType/merchentType'
 	})
 },
 detail:function(){
 	wx.navigateTo({
 		url:'/pages/detail/detail'
 	})
 },
})
