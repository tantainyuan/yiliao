// pages/Reminder-calendar/index.js
Page({

  /**
   * 页面的初始数据
   * 
   */
  
  data: {
    axis:[
      {
        time:'2018-2-15',
        name:'张三',
        event:'垃圾太多'
      },
      {
        time: '2018-2-15',
        name: '王三',
        event: '垃圾太多'
      },
      {
        time: '2018-2-15',
        name: '张三',
        event: '垃圾太多'
      },
      {
        time: '2018-2-15',
        name: '张三',
        event: '垃圾太多'
      },
 
    ]
  },
 day:function (e){
   console.log(e.detail);
   
 }
})