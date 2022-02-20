<template>
  <div class="page" id="projectCase">
    <img class="caseCloud" id="caseCloud1" src="static\images/page04/图层3.png" alt />
    <img class="caseCloud" id="caseCloud2" src="static\images/page04/图层6.png" alt />
    <img class="caseCloud" id="caseCloud3" src="static\images/page04/图层1.png" alt />
    <img class="caseCloud" id="caseCloud4" src="static\images/page04/图层2.png" alt />
    <img class="caseCloud" id="caseCloud5" src="static\images/page04/图层6.png" alt />
    <img class="caseCloud" id="caseCloud6" src="static\images/page04/图层7.png" alt />
    <img class="caseCloud" id="caseCloud7" src="static\images/page04/图层4.png" alt />
    <img class="caseCloud" id="caseCloud8" src="static\images/page04/图层4.png" alt />
    <img class="caseCloud" id="caseCloud9" src="static\images/page04/图层4.png" alt />
    <img class="caseCloud" id="caseCloud10" src="static\images/page04/图层1.png" alt />
    <img class="caseCloud" id="caseIcon" src="static\images/page04/项 目 实 例.png" alt />
    <img class="caseBoy" id="caseBoy" ref="caseBoy" src="static\images/page04/人.png" alt />
    <!-- <img class="caseCloud" id="productsText" src="static\images/page04/Our products.png" alt /> -->
    <P class="case" id="case">组件化是指解耦复杂系统时将多个功能模块拆分、重组的过程，有多种属性、状态反映其内部特性。</P>

    <div class="cases" id="case1">
      <dl>
        <dt>
          <a href="http://sis.jxnu.edu.cn/" target="_blank">江西师范大学国际教育学院官网</a>
        </dt>
        <dd>http://sis.jxnu.edu.cn/</dd>
      </dl>
    </div>
    <div class="cases" id="case2">
      <dl>
        <dt>
          <a href="http://mar.jxnu.edu.cn/" target="_blank">江西师范大学马克思主义学院官网</a>
        </dt>
        <dd>http://mar.jxnu.edu.cn/</dd>
      </dl>
    </div>
    <div class="cases" id="case3">
      <dl>
        <dt>
          <a href="http://gljcpj.jxnu.edu.cn/" target="_blank">江西师范大学管理决策评价研究中心</a>
        </dt>
        <dd>http://gljcpj.jxnu.edu.cn/</dd>
      </dl>
    </div>
    <div class="cases" id="case4">
      <dl>
        <dt>
          <a
            href="http://gljcpj.jxnu.edu.cn/index.php/System/HyStart/login.html"
            target="_blank"
          >江西师范大学决策评价中心后台管理</a>
        </dt>
        <dd>http://gljcpj.jxnu.edu.cn/index.php/System/HyStart/login.html</dd>
      </dl>
    </div>
    <div class="cases" id="case5">
      <dl>
        <dt>九江易吃网</dt>
        <dd>React主要用于构建UI</dd>
      </dl>
    </div>
    <div class="cases" id="case6">
      <dl>
        <dt>江西省五河治理项目建设管理系统</dt>
        <dd>AngularJS有着诸多特性，最为核心的是：MVC（Model–view–controller）、模块化、自动化双向数据绑定、语义化标签、依赖注入等等。</dd>
      </dl>
    </div>
  </div>
</template>
<script>
import jquery from "../assets/js/turn.js/extras/jquery.min.1.7";
export default {
  name: "Case",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    // 左右移动
    levelMove:function(){
      //获取该部分高度和宽度
      // console.log('sss');
      var caseHeight = document.querySelector("#projectCase").offsetHeight;
      var caseWidth = document.querySelector("#projectCase").offsetWidth;
       // 页面滚动的距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop;
      // 该部分到顶部的高度
      var caseTop = document.querySelector("#projectCase").offsetTop;
      // 两部分高度差值
      var differ = scrollTop - caseTop;
      var fourHeight = caseHeight*0.25;
      var fourWidth = caseWidth *0.25;

      // console.log(differ);
      
    
      // 数学表达式
      //区域1
      if(differ >= 0  && differ< fourHeight){
      var value =  differ / fourHeight ;
      // console.log(value);    
      $('#caseBoy').css('right',fourWidth*2 + fourWidth*value + 'px');
      $('#caseBoy').css('opacity',value);
      // console.log('1');

      }
      //区域2
      if(differ >= fourHeight  && differ< fourHeight*2){
         var value = ( differ - fourHeight) / fourHeight ;
      $('#caseBoy').css('right',fourWidth*3 - fourWidth*2*value + 'px');
      // console.log('2');
      }
      //区域3
      if(differ >=  fourHeight*2 && differ< fourHeight*3){
          var value = ( differ - fourHeight*2) / fourHeight ;
      $('#caseBoy').css('right',fourWidth + fourWidth*2*value + 'px');
      
      // console.log('3');

      }
      //区域4
      if(differ >= fourHeight*3  && differ< caseHeight ){
          var value = ( differ - fourHeight*3) / fourHeight ;
      $('#caseBoy').css('right',fourWidth*3 - fourWidth*2*value + 'px');
      // $('#caseBoy').css('opacity',1-value);
      // console.log('4');
      }

      if(differ >=  fourHeight*2.5 && differ< fourHeight*3){
        var value = ( differ - fourHeight*2.5) / fourHeight*2 ;
      $('#caseBoy').css('opacity',1-value);

      }
    },
    // 上下移动
    updownMove:function(){
      
      //获取该部分高度和宽度
      var caseHeight = document.querySelector("#projectCase").offsetHeight;
      var caseWidth = document.querySelector("#projectCase").offsetWidth;
       // 页面滚动的距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop;
      // 该部分到顶部的高度
      var caseTop = document.querySelector("#projectCase").offsetTop;
      // 页面可使高度
      var bodyHeight = parseInt( $(window).height()  );
      // 两部分高度差值
      var differ = scrollTop - caseTop;
      var fourHeight = caseHeight*0.25;
      // 在这一部分设置display为block
        if(differ >=0 && differ < fourHeight*4){
        $('#caseBoy').css('display','block');
      }else{
        $('#caseBoy').css('display','none');
      }
      // 第一区域向下
      // console.log(scrollTop+','+differ);
      
      if(differ >= 0  && differ< fourHeight*1.5){
      var value =  differ / (fourHeight *1.5) ;
      // console.log(document.body.clientHeight);
      $('#caseBoy').css('top',(bodyHeight  -  document.querySelector("#caseBoy").offsetHeight )*value + 'px');
      // console.log('222');
      }
    }
  },

  mounted: function() {
    // 水平运动
    window.addEventListener("scroll", this.levelMove);
    // 上下运动
    window.addEventListener("scroll", this.updownMove);

  },
  destroyed:function(){
     window.removeEventListener("scroll", this.levelMove);
     window.removeEventListener("scroll", this.updownMove);
  }
};
</script>
<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  font-size: calc(0.5rem + 10vw + 10vh);
}

body::-webkit-scrollbar {
  display: none;
}

#projectCase {
  width: 100vw;
  height: 330vh;
  position: relative;
  background: url("../../static/images/page04/背景.png");
  background-size: 100% 100%;
}

.caseCloud {
  position: absolute;
}

#caseCloud1 {
  width: 0.36rem;
  height: 0.2rem;
  top: 52vh;
  right: 20vw;
}

#caseCloud2 {
  width: 0.5rem;
  height: 0.2rem;

  top: 63vh;
  left: 63vw;
}

#caseCloud3 {
  width: 0.9rem;

  top: 73vh;
  left: 55vw;
}

#caseCloud4 {
  width: 0.75rem;
  height: 0.3rem;

  top: 103vh;
  left: 10vw;
}

#caseCloud5 {
  width: 1rem;
  height: 0.35rem;

  top: 115vh;
  left: 19vw;
}

#caseCloud6 {
  width: 0.4rem;
  height: 0.2rem;

  top: 125vh;
  left: 12vw;
}

#caseCloud7 {
  width: 1.9rem;

  top: 200vh;
  left: 21vw;
}

#caseCloud8 {
  width: 1.2rem;

  top: 197vh;
  left: 50vw;
}

#caseCloud9 {
  width: 0.9rem;
  height: 0.25rem;

  top: 183vh;
  left: 59vw;
}

#caseCloud10 {
  width: 0.7rem;

  top: 165vh;
  right: 15vw;
}

#caseIcon {
  width: 0.25rem;
  top: 40vh;
  left: 6vw;
}

#productsText {
  width: 0.25rem;
  top: 41vh;
  left: 47.5vw;
}

/* cases布局 */

.cases {
  max-width: 90vh;
  display: flex;
  transform: rotate(90deg);
  position: absolute;
}

dl,
dd,
dt {
  margin: 0;
  list-style: none;
  text-decoration: none;
  text-align: left;
}

dt {
  font-size: 0.1rem;
}
dd {
  font-size: 0.07rem;
  color: lightslategrey;
}

.cases::before {
  content: "———————";
  color: lightgrey;

  margin: auto 0;
}

#case1 {
  top: 125vh;
  right: -5vw;
}
#case2 {
  top: 165vh;
  left: -5vw;
}
#case3 {
  top: 220vh;
  left: 60vw;
}
#case4 {
  top: 245vh;
  right: -10vw;
}
#case5 {
  top: 250vh;
  left: -5vw;
}
#case6 {
  top: 270vh;
  left: 0vw;
}

/* 案例概述p 布局 */
p {
  width: 0.05rem;
  font-size: 0.1rem;
  word-wrap: break-word;

  position: absolute;
  top: 45vh;
  left: 45vw;
}

a {
  list-style: none;
  text-decoration: none;
  color: black;
}
dt:hover,
a:hover {
  color: red;
  transition: 0.3s;
}

/* 人物运动图片 */

#caseBoy {
  width: 0.8rem;
  position: fixed;
  top: 5vh;
  right: 15vw;
  display: none;
  /* transition: 0.5s; */
  /* opacity: 0; */
}
</style>
