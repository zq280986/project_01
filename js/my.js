(function (){
    $('.monitor .tabs').on('click','a',function(){
        $(this)
        .addClass('active')
        .siblings('a')
        .removeClass('active')
        $('.monitor .content')
        .eq($(this)
        .index())
        .show()
        .siblings('.content')
        .hide()
    })
    $('.marquee-view .marquee').each(function(){
        var row=$(this)
        .children()
        .clone()
        $(this).append(row)
    })
})();
(function(){
    var myChart=echarts.init(document.querySelector('.pie'))
    var option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#006cff',
                '#60cda0',
                '#ed8884',
                '#ff9f7f',
                '#0096ff', 
                '#9fe6b8', 
                '#32c5e9', 
                '#1d9dff'],
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: ['10%','70%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5
            },
            data: [
                { value: 20, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 25, name: '河北' },
                { value: 20, name: '江苏' },
                { value: 25, name: '浙江' },
                { value: 30, name: '四川' },
                { value: 42, name: '湖北' }
            ],
            label:{
                fontSize: 10
            },
            labelLine:{
                length:6,
                length2:8
            }
          }
        ]
      };
      myChart.setOption(option)
      window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
      });
})();
(function(){
    var myChart=echarts.init(document.querySelector('.users .bar'))
    var item = {
        name:'',
        value: 1200,
        // 柱子颜色
        itemStyle: {
          color: '#254065'
        },
         // 鼠标经过柱子颜色
        emphasis: {
          itemStyle: {
            color: '#254065'
          }
        },
        // 工具提示隐藏
        tooltip: {
          extraCssText: 'opacity:0'
        },
      }
    var option={
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [
                 { offset: 0, color: '#00fffb' }, // 0 起始颜色
                 { offset: 1, color: '#0061ce' }  // 1 结束颜色
           ]
        ),
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top:'3%',
          left: '0%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          show:true,
          borderColor:'rgba(0, 240, 255, 0.3)',
        },
        xAxis: [
          {
            type: 'category',
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            axisTick: {
              alignWithLabel: false,
              show:false,
            },
            axisLabel:{
                color:'#4c9bfd'
            },
            axisLine:{
                lineStyle:{
                    color:'rgba(0, 240, 255, 0.3)'
                }
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            axisTick:{
                show:false
            },
            axisLabel:{
                color:'#4c9bfd'
            },
            axisLine:{
                lineStyle:{
                    color:'rgba(0, 240, 255, 0.3)'
                }
            },
            splitLine:{
                lineStyle:{
                    color: 'rgba(0, 240, 255, 0.3)',
                }
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [
                2100,
                1900,
                1700,
                1560,
                1400,
                item,
                item,
                item,
                900,
                750,
                600,
                480,
                240
              ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
      });
})();
(function(){
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
  };   
  var myChart=echarts.init(document.querySelector('.line'))
  var option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: "axis"
    },
    legend: {
      // 距离容器10%
      right: "10%",
      // 修饰图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "#4c9bfd"
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: "value",
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: "#4c9bfd"
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: "预期销售额",
        type: "line",
        stack: "总量",
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: "实际销售额",
        type: "line",
        stack: "总量",
        smooth: true,
        data: data.year[1]
      }
    ]
  };
  myChart.setOption(option)
  $('.sales .caption').on('click','a',function(){
    index = $(this).index() - 1;
    $(this)
        .addClass('active')
        .siblings('a')
        .removeClass('active') ;
        var arr=data[this.dataset.type]
        // console.log(arr);
        option.series[0].data=arr[0]
        option.series[1].data=arr[1]
        myChart.setOption(option)  
  })
  var as=$('.sales .caption a')
  var index=0
  var timer=setInterval(function(){
    index++;
    if(index>=4)index=0;
    as.eq(index).click()
  },1000);
  $('.sales').hover(
    function(){
    clearInterval(timer);
  },
  function() {
    clearInterval(timer);
    timer = setInterval(function() {
      index++;
      if (index >= 4) index = 0;
      as.eq(index).click();
    }, 1000);
  }
  )
})();
(function(){
  var myChart = echarts.init(document.querySelector(".radar"));
  // 2.指定配置

  var option = {
    tooltip: {
      show: true,
      // 控制提示框组件的显示位置
      position: ["60%", "10%"]
    },
    radar: {
      indicator: [
        { name: "机场", max: 100 },
        { name: "商场", max: 100 },
        { name: "火车站", max: 100 },
        { name: "汽车站", max: 100 },
        { name: "地铁", max: 100 }
      ],
      // 修改雷达图的大小
      radius: "65%",
      shape: "circle",
      // 分割的圆圈个数
      splitNumber: 4,
      name: {
        // 修饰雷达图文字的颜色
        textStyle: {
          color: "#4c9bfd"
        }
      },
      // 分割的圆圈线条的样式
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255, 0.5)"
        }
      },
      splitArea: {
        show: false
      },
      // 坐标轴的线修改为白色半透明
      axisLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)"
        }
      }
    },
    series: [
      {
        name: "北京",
        type: "radar",
        // 填充区域的线条颜色
        lineStyle: {
          normal: {
            color: "#fff",
            width: 1,
            opacity: 0.5
          }
        },
        data: [[90, 19, 56, 11, 34]],
        // 设置图形标记 （拐点）
        symbol: "circle",
        // 这个是设置小圆点大小
        symbolSize: 5,
        // 设置小圆点颜色
        itemStyle: {
          color: "#fff"
        },
        // 让小圆点显示数据
        label: {
          show: true,
          fontSize: 10
        },
        // 修饰我们区域填充的背景颜色
        areaStyle: {
          color: "rgba(238, 197, 102, 0.6)"
        }
      }
    ]
  };
  // 3.把配置和数据给对象
  myChart.setOption(option);
  // 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    myChart.resize()
  })
})();
(function(){
  var hotData = [
    {
      city: '北京',  // 城市
      sales: '25, 179',  // 销售额
      flag: true, //  上升还是下降
      brands: [   //  品牌种类数据
        { name: '可爱多', num: '9,086', flag: true },
        { name: '娃哈哈', num: '8,341', flag: true },
        { name: '喜之郎', num: '7,407', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '6,724', flag: false },
        { name: '好多鱼', num: '2,170', flag: true },
      ]
    },
    {
      city: '河北',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '3,457', flag: false },
        { name: '娃哈哈', num: '2,124', flag: true },
        { name: '喜之郎', num: '8,907', flag: false },
        { name: '八喜', num: '6,080', flag: true },
        { name: '小洋人', num: '1,724', flag: false },
        { name: '好多鱼', num: '1,170', flag: false },
      ]
    },
    {
      city: '上海',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '2,345', flag: true },
        { name: '娃哈哈', num: '7,109', flag: true },
        { name: '喜之郎', num: '3,701', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '2,724', flag: false },
        { name: '好多鱼', num: '2,998', flag: true },
      ]
    },
    {
      city: '江苏',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '2,156', flag: false },
        { name: '娃哈哈', num: '2,456', flag: true },
        { name: '喜之郎', num: '9,737', flag: true },
        { name: '八喜', num: '2,080', flag: true },
        { name: '小洋人', num: '8,724', flag: true },
        { name: '好多鱼', num: '1,770', flag: false },
      ]
    },
     {
      city: '山东',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '9,567', flag: true },
        { name: '娃哈哈', num: '2,345', flag: false },
        { name: '喜之郎', num: '9,037', flag: false },
        { name: '八喜', num: '1,080', flag: true },
        { name: '小洋人', num: '4,724', flag: false },
        { name: '好多鱼', num: '9,999', flag: true },
      ]
    }
  ]
  
  let ul=document.querySelector('.province .sup')
  for(let i=0;i<hotData.length;i++){
    let li=document.createElement('li')
    li.innerHTML=`
    <span>${hotData[i].city}</span>
    <span>${hotData[i].sales}<s class=${hotData[i].flag?'icon-up':'icon-down'}></s></span>
    `
    ul.appendChild(li)
  }
    let lis=document.querySelectorAll('.sup li')
    for(let j=0;j<lis.length;j++){
      // console.log(this);
      lis[j].addEventListener('mouseenter',function(){
        console.log(j);
        // let lib=document.querySelectorAll('.sub li')
        for(let a=0;a<lis.length;a++){
          // console.log(this);
          lis[a].classList.remove('active')
        }
        this.classList.add('active')
        // console.log(hotData[j].brands[j].name);
        let str=''
        for(let x=0;x<hotData[j].brands.length;x++){      
          str+=`<li>
          <span>${hotData[j].brands[x].name}</span>
          <span>${hotData[j].brands[x].num}<s class=${hotData[j].brands[x].flag?'icon-up':'icon-down'}></s></span>
          </li>`
        }
        document.querySelector('.sub').innerHTML=str
      })
    }
  //  lis[o].trigger('mosuenter')
})();