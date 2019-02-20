// pages/Patient/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView: true,
    type:'病症',
    showbj:true
  },
  change:function(){
    let that =this
    let type = that.data.type ==="病症"? '分组':'病症'
    that.setData({
      showView: (!that.data.showView),
      type:type
    })
    
  },
  longTap:function(){
    
    let that =this
    that.setData({
      showbj: (!that.data.showbj)
    })
  },
  offshaide1:function(){
    let that =this
    that.setData({
      showbj:true
    })
  },
  chuangfa:function(){
    console.log(115615);
    
  }
 
})