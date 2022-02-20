<template>
  <div class="homeroadbox" style="height: 500vh">
    <nav class="home_road" style="position: relative">
      <!-- 浮动的云 -->
      <div class="cloudBox">
        <div class="cloud" style="right: 79%;">
          <img src="static/images/page05/云1.png" alt />
        </div>
        <div class="cloud" style="right: 35%">
          <img src="static/images/page05/云2.png" alt />
        </div>
        <div class="cloud" style="right: 5%">
          <img src="static/images/page05/云3.png" alt />
        </div>
      </div>

      <!-- 草丛+路 -->
      <div class="grassAll">
        <div>
          <img src="static/images/page05/草坪.png" alt />
        </div>
        <div>
          <div>
            <img src="static/images/page05/路.png" alt />
          </div>
        </div>
        <div>
          <img src="static/images/page05/灌木丛1.png" alt />
        </div>
        <div>
          <img src="static/images/page05/灌木丛2.png" alt />
        </div>
        <div>
          <img src="static/images/page05/右下.png" alt />
        </div>

        <!-- 房子 -->
        <div class="rohome">
          <div>
            <router-link to="/building"><img src="static/images/page05/房子2.png" alt /></router-link>
            <!-- <img src="static/images/page05/房子2.png" alt /> -->
          </div>

          <div>
            <img src="static/images/page05/邮筒.png" alt />
          </div>

          <div class="cig">
            <div class="h">
              <div>
                <img src="static/images/page05/H.png" alt />
              </div>
            </div>
            <div class="o">
              <div>
                <img src="static/images/page05/O.png" alt />
              </div>
            </div>
            <div class="m">
              <div>
                <img src="static/images/page05/M.png" alt />
              </div>
            </div>
            <div class="y">
              <div>
                <img src="static/images/page05/Y.png" alt />
              </div>
            </div>
            <div class="i">
              <div>
                <img src="static/images/page05/I.png" alt />
              </div>
            </div>
            <div class="t">
              <div>
                <img src="static/images/page05/T.png" alt />
              </div>
            </div>
            <div class="cigin">
              <div>
                <img src="static/images/page05/烟.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 人 -->
      <div class="people">
        <img src="static/images/page05/人.png" alt />
      </div>
      <!-- 路牌+萤火虫 -->
      <div class="sign">
        <div>
          <img src="static/images/page05/木牌.png" alt />
          <div class="wel">
            <img src="static/images/page05/Welcome.png" alt />
          </div>
        </div>
        <canvas id="cav"></canvas>
      </div>

      <div class="sign">
        <div>
          <img src="static/images/page05/木牌.png" alt />
          <div class="wel">
            <img src="static/images/page05/Welcome.png" alt />
          </div>
        </div>
        <canvas id="cav"></canvas>
      </div>
    </nav>
  </div>
</template>

<script>
import jquery from "../assets/js/turn.js/extras/jquery.min.1.7";
export default {
  name: "HomeRoad",
  data() {
    return {
      msg: "hallo world"
    };
  },

  mounted: function() {
    // 初始化页面执行一次
    this.divTop();
    // 每次滚动执行
    window.addEventListener("scroll", this.divTop);
    // 云的浮动
    this.cloudMove(0);
    this.cloudMove(1);
    this.cloudMove(2);
    this.cav();
    window.addEventListener("resize", this.cavSize);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.divTop);
  },

  methods: {
    //监听是否完全滚动到某区域 top==0
    divTop: function() {
      // 页面滚动的距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 这部分到页面顶部的距离
      var offsetTop = document.querySelector(".homeroadbox").offsetTop;
      // 这部分页面的高度
      var offsetHeight = document.querySelector(".homeroadbox").offsetHeight;
      //这部分子盒子的高度
      var divHeight = document.querySelector(".home_road").offsetHeight;
      $(".cig div").css("animation-play-state", "paused");
      $(".cig ").css("animation-play-state", "paused");
      var eveyscroll = (offsetHeight - divHeight) / 13;
      // console.log(scrollTop);
      if (
        scrollTop >= offsetTop &&
        scrollTop <= offsetTop + offsetHeight - divHeight
      ) {
        $(".home_road")
          .css("position", "fixed")
          .css("top", "0");
        $(".cloudBox").css("opacity", "0");

        // 滚动到不同地方，触发不同事件
        // 云朵出现。透明度改变
        if (
          scrollTop >= offsetTop + eveyscroll &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          // alert('sss');
          $(".cloudBox").css("opacity", "0.5");
        }
        if (
          scrollTop >= offsetTop + eveyscroll * 1.5 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".cloudBox").css("opacity", "1");
        }
        if (
          scrollTop >= offsetTop + eveyscroll * 2 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".grassAll>div:nth-of-type(1)").css(
            "transform",
            "translateY(100%)"
          );
        }
        // 草地出现
        if (
          scrollTop >= offsetTop + eveyscroll * 3 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".grassAll>div:nth-of-type(1)").css("transform", "translateY(70%)");
        }
        if (
          scrollTop >= offsetTop + eveyscroll * 4 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".grassAll>div:nth-of-type(1)").css("transform", "translateY(0%)");

          $(".grassAll>div:nth-of-type(3)").css(
            "transform",
            "translatex(-100%)"
          );
          $(".grassAll>div:nth-of-type(4)").css(
            "transform",
            "translatex(100%)"
          );
        }
        // 灌木丛出现
        if (
          scrollTop >= offsetTop + eveyscroll * 5 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".grassAll>div:nth-of-type(3)").css("transform", "translatex(0%)");
          $(".grassAll>div:nth-of-type(4)").css("transform", "translatex(0%)");

          $(".grassAll>div:nth-of-type(5)").css("opacity", "0");
          $(".grassAll>div:nth-of-type(5)").css("transform", "scale(2)");
        }
        // 右下角灌木丛出现
        if (
          scrollTop >= offsetTop + eveyscroll * 6 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".grassAll>div:nth-of-type(5)").css("opacity", "1");
          $(".grassAll>div:nth-of-type(5)").css("transform", "scale(1)");

          $(".rohome").css("transform", "translateY(-100%)");
          $(".rohome").css("opacity", "0");
        }
        // 房子出现,从天而降
        if (
          scrollTop >= offsetTop + eveyscroll * 7 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".rohome").css("transform", "translateY(0)");
          $(".rohome").css("opacity", "1");

          $(".grassAll>div:nth-of-type(2)").css("height", "0");
        }
        // 马路出现
        if (
          scrollTop >= offsetTop + eveyscroll * 8 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".grassAll>div:nth-of-type(2)").css("height", "59%");

          $(".sign").css("opacity", "0");
        }
        // 路牌出现
        if (
          scrollTop >= offsetTop + eveyscroll * 9 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".sign").css("opacity", "1");

          $(".people").css("opacity", "0");
          $(".people").css("transform", "translateX(-100%)");
        }
        // 人出现
        if (
          scrollTop >= offsetTop + eveyscroll * 10 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".people").css("opacity", "1");
          $(".people").css("transform", "translateX(0)");

          $(".cig ").css("animation-play-state", "paused");
          $(".cig div").css("opacity", "0");
        }
        // 烟冒出
        if (
          scrollTop >= offsetTop + eveyscroll * 11 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".cig div").css("animation-play-state", "running");
          $(".cig div").css("opacity", "1");
          $(".cig div").css("transition", "opacity 1s");
          $(".cig ").css("animation-play-state", "running");

          $(".home_road").css("transform", "scale(1)");
          // $(".home_road").css("opacity", "1");
        }
        // 房子放大
        if (
          scrollTop >= offsetTop + eveyscroll * 12 &&
          scrollTop <= offsetTop + offsetHeight - divHeight
        ) {
          $(".home_road").css("transform", "scale(3)");
          // $('.home_road').css('background-color','rgba(0,0,0,1)');
          // $(".home_road").css("opacity", "0");

          // this.clickJump();
        }
      }

      if (scrollTop < offsetTop) {
        $(".home_road")
          .css("position", "absolute")
          .css("top", "0");
      }

      // if (scrollTop > offsetTop + offsetHeight - divHeight) {
      //   $(".home_road")
      //     .css("position", "absolute")
      //     .css("top", "")
      //     .css("bottom", "0");
      // }
      // console.log( $('.home_road').css('position'));
    },
    // 云朵移动
    cloudMove: function(i) {
      var speed = Math.random() * 5 + 20;
      var x = 0;
      var box = document
        .getElementsByClassName("homeroadbox")[0]
        .getElementsByClassName("cloud")[i];
      // console.log(box.style.right);
      var y = parseInt(box.style.right);
      move();
      function move() {
        box.style.right = x + y + "%";
        x += 0.1;
        // console.log(x);
        var t = setTimeout(move, speed);
        if (x + y >= 100) {
          y = 0;
          x = -15;
        }
      }
    },
    // 画布描绘
    cav: function() {
      var ca = document.getElementById("cav");
      // 画布宽高
      ca.width = parseInt($(".sign").css("width"));
      ca.height = parseInt($(".sign").css("height"));
      var cxt = ca.getContext("2d");
      var num = 11; // 11个萤火虫
      var data = [];

      // console.log('a:'+$('.sign').css('width')+'b:'+$('.sign').css('height'));

      function draw() {
        var w = ca.width;
        var h = ca.height;
        cxt.clearRect(0, 0, w, h);
        for (var i = 0; i < num; i++) {
          data[i] = {
            x: Math.random() * w,
            y: Math.random() * h
          };
          circle(data[i].x, data[i].y);
        }

        setTimeout(draw, 2000);
      }
      draw();

      // 绘制萤火虫
      function circle(x, y) {
        cxt.save();
        cxt.fillStyle = "#fffa65";
        cxt.beginPath();
        cxt.arc(x, y, 2, 0, 2 * Math.PI);
        cxt.closePath();
        cxt.fill();
        cxt.restore();
      }
    },
    cavSize: function() {
      var ca = document.getElementById("cav");
      // 画布宽高
      ca.width = parseInt($(".sign").css("width"));
      ca.height = parseInt($(".sign").css("height"));
    },
    //几秒后进入跳转页面
    // clickJump() {
    //   const timejump = 15;
    //   if (!this.timer) {
    //     this.count = timejump;
    //     this.show = false;
    //     this.timer = setInterval(() => {
    //       if (this.count > 0 && this.count <= timejump) {
    //         this.count--;
    //       } else {
    //         this.show = true;
    //         clearInterval(this.timer);
    //         this.timer = null;
    //         //跳转的页面写在此处
    //         this.$router.push({ path: "/" });
    //       }
    //     }, 100);
    //   }
    // }
  }
};
</script>

<style>
/* @import url("../assets/css/home_road.css"); */
*{
    padding: 0;
    margin: 0;
    text-decoration: none;
}
.homeroadbox img{
    width: 100%;height: 100%;
}
body,html{
    width: 100%;
  
}
/* body::-webkit-scrollbar {
    display: none;
} */

.homeroadbox{
    /* background-color: #111111; */
    position: relative;
}
.home_road{
    /* top: 0; */
    width: 100%;height: 100%;
    height: 100vh;
    z-index: 100;
    background-image: url('../../static/images/page05/背景.png');
    /* background-color: #fff; */
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;
    transform-origin: 60% 50%;
   
    opacity: 1;
    transition: all 2s;
    z-index: 800;
}

/* 3朵云 */
/* 整体位置 */
.homeroadbox .cloudBox{
    position: absolute;
    top: 0;left: 0;
    width: 100%;
    height: 30%;
    z-index: 100;
    opacity: 0;
    transition: all 0.5s;
    
}
/* 云朵1 */
.homeroadbox .cloud:nth-of-type(1){
    position: absolute;
    top: 10%;right: 79%;
    height: 12vh;width: 15vw;
    z-index: 10;
   
}
/* 云朵2 */
.homeroadbox .cloud:nth-of-type(2){
    position: absolute;
    top: 75%;right: 35%;
    height: 7vh;width: 14vw;
    z-index: 20;
  
}
/* 云朵3 */
.homeroadbox .cloud:nth-of-type(3){
    position: absolute;
    top: 4%;
    right: 5%;
    height: 6vh;width: 18vw;
    z-index: 30;
   
}
/* 房子+邮筒 +*/
.rohome{
    position: absolute;
    top: 0vh;left: 44vw;
    width: 24vw;height: 28vh;
    z-index: 100;
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.3s,opacity 0.3s;
}

.rohome>div:nth-of-type(1){
    position: relative;
    top: 15vh;left: 15vw;
    width:10vw;height: 15vh; 
}
.rohome>div:nth-of-type(2){
    position: absolute;
    top: 26vh;left: 15vw;
    width:1vw;height: 4vh; 
}
.rohome .cig{
    position: absolute;
    width: 69%;bottom: 45%;
    top: 0;right: 4.5vw;
    transform-origin: 100% 100%;
    animation: cigro 8s ease-in-out infinite alternate;
           
}
@keyframes cigro{
   
    100%{
        transform: rotate(3deg)
    }
    
}

.cig>div{
    position: absolute;
    width: 100%;height: 100%;
    bottom: 0;right: 0;
}
.cig>div>div{
    position: absolute;
    width: 2vw;height: 5vh;
    bottom: 0;right: 0;
    transform: scale(0);
    
}
.cig .h{
    animation:pathhX  4s  cubic-bezier(.57,.32,.71,.64)  forwards;
}
.cig .h div{
    animation:pathhY  4s cubic-bezier(.42,.63,.38,.68)  forwards;
}
@keyframes pathhX{to{right: 80%}}
@keyframes pathhY{to{bottom: 54%;transform: scale(1)}}
@keyframes pathhX1{to{right: 80%}}
@keyframes pathhY1{to{bottom: 54%;transform: scale(1)}}
.cig .o{
    animation: pathoX 3.75s  cubic-bezier(.57,.32,.71,.64) 0.25s forwards;
}
.cig .o div{
    animation: pathoY 3.75s cubic-bezier(.42,.63,.38,.68) 0.25s forwards;
}
@keyframes pathoX{to{right: 62%}}
@keyframes pathoY{to{bottom: 52%;transform: scale(1)}}
@keyframes pathoX1{to{right: 62%}}
@keyframes pathoY1{to{bottom: 52%;transform: scale(1)}}
.cig .m{
    animation: pathmX 3.5s  cubic-bezier(.57,.32,.71,.64) 0.5s forwards;
}
.cig .m div{
    animation: pathmY 3.5s cubic-bezier(.42,.63,.38,.68) 0.5s forwards;
}
@keyframes pathmX{to{right: 44%}}
@keyframes pathmY{to{bottom: 45%;transform: scale(1)}}
@keyframes pathmX1{to{right: 44%}}
@keyframes pathmY1{to{bottom: 45%;transform: scale(1)}}
.cig .y{
    animation: pathyX 3.25s  cubic-bezier(.57,.32,.71,.64) 0.75s forwards;
}
.cig .y div{
    animation: pathyY 3.25s cubic-bezier(.42,.63,.38,.68) 0.75s forwards;
    
}
@keyframes pathyX{to{right: 25%}}
@keyframes pathyY{to{bottom: 38%;transform: scale(0.9)}}
@keyframes pathyX1{to{right: 25%}}
@keyframes pathyY1{to{bottom: 38%;transform: scale(0.9)}}
.cig .i{
    animation: pathiX 3s  cubic-bezier(.57,.32,.71,.64) 1s forwards;
}
.cig .i div{
    animation: pathiY 3s cubic-bezier(.42,.63,.38,.68) 1s forwards;
}
@keyframes pathiX{to{right:15%;}}
@keyframes pathiY{to{bottom: 25%;transform: scale(0.7);}}
@keyframes pathiX1{to{right:15%;}}
@keyframes pathiY1{to{bottom: 25%;transform: scale(0.7);}}
.cig .t{
    animation: pathtX 2.75s  cubic-bezier(.57,.32,.71,.64) 1.25s forwards;
}
.cig .t div{
    animation: pathtY 2.75s cubic-bezier(.42,.63,.38,.68) 1.25s forwards;
}
@keyframes pathtX{to{right: 6%}}
@keyframes pathtY{to{bottom: 16%;transform: scale(0.6);}}
@keyframes pathtX1{to{right: 6%}}
@keyframes pathtY1{to{bottom: 16%;transform: scale(0.6);}}

.cig .cigin div{
    animation: pathth 2.5s ease-out 1.5s forwards;
    transform: scale(0)
}
@keyframes pathth{to{transform: scale(0.5);}}
@keyframes pathth1{to{transform: scale(0.5);}}




/* 马路+草丛 */
.grassAll{
    position: absolute;
    top: 30%;left: 0;
    width: 100%;height: 70%;
}
.grassAll>div{
    position: absolute;
    /* display: none; */
}
/* 马路 */
.grassAll>div:nth-of-type(1){
    bottom: 0;left: 0;
    width: 100%;height: 65%;
    z-index: 10;
    display: block;
    transform: translateY(100%);
    transition: all 0.25s;
}
.grassAll>div:nth-of-type(2){
    bottom: 0;left: 0;
    width: 83%;height: 0%;
    z-index: 50;
    overflow: hidden;
    transition: all 0.5s;
    display: block;
}
.grassAll>div:nth-of-type(2)>div{
    position: absolute;
    bottom: 0;left: 0;
    width: 82vw;height: 41vh;
}
.grassAll>div:nth-of-type(3){
    top: 13%;left: 0;
    width: 60%;height: 50%;
    z-index: 6;
    transform: translateX(-100%);
    transition: all 0.25s;
    display: block;

}
.grassAll>div:nth-of-type(4){
    top: 10%;right: 0;
    width: 50%;height: 50%;
    z-index: 5;
    transform: translateX(100%);
    transition: all 0.25s;
    display: block;

}
.grassAll>div:nth-of-type(5){
    bottom: 0;right: 0;
    width: 65%;height: 50%;
    z-index: 40;
    transform: scale(2.5);
    opacity: 0;
    transition: all 0.5s;
    display: block;
}

/* 人 */
.people{
    position: absolute;
    bottom: 0vh;left: 0vw;
    height: 54vh;width: 15vw;
    z-index: 100;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 1s;
}
/* 路牌 */
.sign{
    position: absolute;
    top: 46vh;left: 17vw;
    height: 28vh;width: 23vw;
    z-index: 100;
    opacity: 0;
    transition: opacity 1s;
}
.sign>div{
    position: absolute;
    width: 10vw;height: 20vh;
    bottom: 0vh;left: 5vw;
}
.sign>div .wel{
    position: absolute;
    top: 9vh;left: 0.4vw;
    height: 3vh;width: 9vw;
}
/* 萤火虫画布 */
canvas{
    position: absolute;
    top: 0;left: 0;
    z-index: 100;
    /* transition: opacity 2s; */
    animation: opa 2s infinite ;
}
@keyframes opa{
    100%{
        opacity: 0;
    }
}

</style>
