// pages/Follow-record/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'2016-09-01',
    date1:'2016-09-01'
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindDateChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date1: e.detail.value
    })
  },
})