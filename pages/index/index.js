//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    motto: 'Welcome ',
   toShow: 'About me',
   modalHidden:true,
   modalHidden2:true,
   about_name : '_______ZZshow 0.2',
   about_me : "\n功能介绍:\n\n\t~提供一些现代折纸的教程\n\n\t~提供现代折纸作品的展示",
   about_calme: "并没用于任何商业用途\n\n如觉得侵犯了您的权利\n\n请联系我们\n\n我们会及时修正\n联系方式\t xxxxxxxxxxx",
   toInAboutMe:'其他声明：'
  },
  //事件处理函数
  bindViewTap: function() {
   this.setData({
     modalHidden2 :false
   })
  },

  bindtoInAboutMe: function(){
    this.setData({
      modalHidden :false,
       modalHidden2: true
    })
  },
  modalChange: function(e) {
    this.setData({
      modalHidden: true,
     modalHidden2 :false
    })
  },
  modalChange2: function(e) {
    this.setData({
      modalHidden2: true
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }

})
