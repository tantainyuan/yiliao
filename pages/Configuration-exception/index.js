// pages/Configuration-exception/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    blood :{
      low:'12',
      heigh:'125'
    },
    blood1:{
      low:'12',
      heigh:'125'
    },
    index:2,
    array: ['手腕温度异常(picker)', '心率异常(picker)', '血压异常(picker)'],
    state:true,//开关状态
    state1:true,
    state2:true
},
// 开关
switch1Change: function (e) {
  let index = this.data.index
  if(index==0){
    this.setData({
      state:e.detail.value
    })
  } else if (index==1){
    this.setData({
      state1:e.detail.value
    })
  }else {
    this.setData({
      state2:e.detail.value
    })
  }
  
  
},
lowValueChangeAction: function (e) {

  this.setData({
   'blood.low': e.detail.lowValue
  })
},

heighValueChangeAction: function (e) {
  this.setData({
    'blood.heigh': e.detail.heighValue
  })
},
lowValueChangeAction1: function (e) {

    this.setData({
      'blood1.low': e.detail.lowValue
    })
  },

  heighValueChangeAction1: function (e) {
    this.setData({
      'blood1.heigh': e.detail.heighValue
    })
  },
// 选择类型
bindPickerChange: function (e) {
  console.log(e)
  this.setData({
    index: e.detail.value
  })
  if(this.data.index==2){
    // this.selectComponent("#zy-slider").hide()
    console.log(132123)
  }else{
    this.selectComponent("#zy-slider").show()
  }
},
onShow: function () {
  if(this.data.index!=2){
    this.selectComponent("#zy-slider").show()
  }
},
})