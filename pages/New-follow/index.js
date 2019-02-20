// pages/New-follow/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView: true,
    type: '病症',
  },

  change: function () {
    let that = this
    let type = that.data.type === "病症" ? '分组' : '病症'
    that.setData({
      showView: (!that.data.showView),
      type: type
    })

  },
  longTap: function () {

    let that = this
    that.setData({
      showbj: (!that.data.showbj)
    })
  }
})