// pages/Reminder-record/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    showbj:true
  },
  swichNav: function (e) {
    console.log(e);
    
    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {

      return false;

    } else {

      that.setData({

        currentTab: e.target.dataset.current,

      })
    }
  },
  // 遮罩层
  longTap:function(){
    let that =this
    that.setData({
      showbj:false
    })
  },
  offshade:function(){
    let that =this
    that.setData({
      showbj:true
    })
  }
 
  
})