// pages/statistics/index.js

import * as echarts from '../../ec-canvas/echarts';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberone:{
           onInit: function (canvas, width, height) {
           const barChart = echarts.init(canvas, null, {
              width: width,
              height: height
          });
           canvas.setChart(barChart);
           barChart.setOption(getBarOption());
          return barChart;
      }
      },

      membertwo: {
        onInit: function (canvas, width, height) {
          const scatterChart = echarts.init(canvas, null, {
            width: width,
            height: height
          });
          canvas.setChart(scatterChart);
          scatterChart.setOption(getScatterOption());
  
          return scatterChart;
        }
      }
  },
})

function getBarOption(){
  return {
        tooltip: {
        trigger: 'item',
        show: true
    },
    legend: {
        orient: 'vertical',
          right: 20,
          top: 20,
          textStyle:{
              fontSize:28
          },
          selectedMode:false,
        data:['直接访问','邮件营销','联盟广告'],
        formatter: function (name) {
            return  name;
        }
    },
    title: {
            text: '59',
            subtext:'总报警次数',
	        x: 75,
	        y: 50,
            textAlign: 'center',
            textStyle: {
                fontSize:28
            }
	        
	    },
       color: ['#508EF9', '#50EBF9', '#FFCD00'],
       backgroundColor:'#fff',
    
    series: [
        {
            type:'pie',
            center: [80, 80],
            top:20,
            left:20,
            radius: [40, 60],
            avoidLabelOverlap: false,
            hoverLink:false,
            silent: true,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                readOnly: false
            },
           
            data:[
                {value:666, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'}
            ]
        }
    ]
  }
}

// 第二个图
function getScatterOption (){
    return {

    }

}
