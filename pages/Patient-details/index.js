// pages/Patient-details/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    currentTab: 0,
    date:'2016-09-01'
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

  // 患者随访
  // 时间
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
})