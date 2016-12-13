// pages/show/show.js
var init_top = 2000;
var init_left = 500;
var break_top = 0;
Page({
  data: {
    image_array: [{
      top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/001.jpg",
    }, {
     top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/0011.jpg",
    }, {
     top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/1953a3ec08fa513dee2d87283c6d55fbb0fbd99a.jpg",
    }, {
     top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/6d01e41190ef76c640dadc9b9516fdfaae516756.jpg",
    }, {
       top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/c1880a23dd54564e0160aeb0b4de9c82d0584f0a.jpg",
    }, {
       top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/c9e8940a304e251fdb0c0f0ea686c9177d3e53ad.jpg",
    }, {
       top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/g80hpt.png"
    }, {
       top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/h3hvai.png"
    }, {
       top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/j2ee9g.png"
    }, {
       top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/jinp9r.png"
    }, {
       top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/jk73bc.png"
    }, {
       top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/rvcn8b.png"
    }, {
       top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/sstsd1.png"
    }, {
       top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/tt1dtg.png"
    }, {
       top: Math.random() * init_top,
      left: Math.random() * init_left,
      show_image_class: "show_image",
      image_src: "../../image/show/yl8szp.png"
    }],




  },



  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
      
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭 
  },

  choose_as_center: function (e) {
 
    console.log("choose_as center")
    var arr = this.data.image_array;
    for (var i = 0; i < arr.length; i++){
      if (e.currentTarget.id == "show_image_" + i){
        
        arr[i].show_image_class = arr[i].show_image_class === "show_image_center" ? "show_image": "show_image_center"
        break_top = arr[i].top === break_top ? break_top : arr[i].top - 800
        break_top = break_top < 0 ? 0 : break_top
        arr[i].top = arr[i].top === break_top ? Math.random() * init_top : break_top
        arr[i].left = arr[i].left === 5 ? Math.random() * init_left : 5
        this.setData({
        image_array: arr
        })
      } else {
         var arr = this.data.image_array;
        arr[i].show_image_class = "show_image"
         this.setData({
        image_array: arr
        })
      }
    }

   
  }


})