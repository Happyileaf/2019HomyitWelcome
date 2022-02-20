<template>
  <div id="page03">
    <!-- <button id="backCloud" @click="cloudsCover(0)">X</button> -->
    <img
      class="backCloud"
      id="backCloud"
      @click="cloudsCover(0)"
      src="static/images/page03/backCloud.png"
      alt
    />
    <div class="sky" id="sky">
      <img class="cloud" id="ui" src="static/images/page03/设计.png" alt />
      <img class="cloud" id="frontEnd" src="static/images/page03/前端.png" alt />
      <img class="cloud" id="backEnd" src="static/images/page03/后端.png" alt />
      <img class="cloud" id="cloud1" src="static/images/page03/云1.png" alt />
      <img class="cloud" id="cloud2" src="static/images/page03/云2.png" alt />

      <img class="bird" id="bird1" src="static\images/page03/鸟1.png" alt />
      <img class="bird" id="bird2" src="static\images/page03/鸟2.png" alt />
      <img class="bird" id="bird3" src="static\images/page03/鸟3.png" alt />
      <img class="bird" id="bird4" src="static\images/page03/鸟4.png" alt />

      <img class="hotAirBalloon" id="hotAirBalloon" src="static\images/page03/热气球.png" alt />
    </div>

    <img class="cloudSide" id="leftCloud" src="static\images/page03/背景云右.png" alt />

    <img class="cloudSide" id="rightCloud" src="static\images/page03/背景云右.png" alt />
    <div class="msgBox" id="uiBox">
      <h3>UI</h3>
      <p>
        用户界面(User Interface)是指对软件的人机交互、操作逻辑、界面美观的整体设计。
        好的UI设计不仅是让软件变得有个性有品味，还要让软件的操作变得舒适、简单、自由、充分体现软件的定位和特点。
      </p>
    </div>
    <div class="msgBox" id="frontEndBox">
      <h3>前端</h3>
      <p>
        前端开发是创建Web页面或app等前端界面呈现给用户的过程，
        通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互。移动互联网带来了大量高性能的移动终端设备以及快速的无线网络，
        HTML5，node.jS的广泛应用，各类框架类库层出不穷。
      </p>
    </div>
    <div class="msgBox" id="backEndBox">
      <h3>后端</h3>
      <p>
        网站后端也叫网站后台技术或者动态网站技术，上面我们也说了静态页面的缺点就是不能动态的改变页面上的内容和实现一些代码逻辑，比如我们要实现用户的注册登录验证、或者购物结算等，这些都是要代码逻辑来实现的，还有我们需要一个后台来往我们的网页添加一些消息新闻通知等，因为不是每一个网站的使用者都懂前端技术来来改变页面内容，而且这样也太不方便了，所以需要网站后台来实现这些功能，这些东西都是需要网站后台技术来实现的。常见的网站后端开发语言有asp、asp.net、jsp、php等。同时网站后台技术还包括数据库如MySQL、sqlserver等，数据库是用来存储后台数据的。
      </p>
    </div>

    <div id="flowclouds">
      <img class="flowcloud" id="flowcloud1-1" src="static\images/page03/behindcloud.png" alt />
      <img class="flowcloud" id="flowcloud1-2" src="static\images/page03/behindcloud.png" alt />
      <img class="flowcloud" id="flowcloud2-1" src="static\images/page03/frontcloud 拷贝.png" alt />
      <img class="flowcloud" id="flowcloud2-2" src="static\images/page03/frontcloud 拷贝.png" alt />
      <img class="flowcloud" id="flowcloud3-1" src="static\images/page03/frontcloud 拷贝 2.png" alt />
      <img class="flowcloud" id="flowcloud3-2" src="static\images/page03/frontcloud 拷贝 2.png" alt />
      <img class="flowcloud" id="flowcloud4-1" src="static\images/page03/frontcloud.png" alt />
      <img class="flowcloud" id="flowcloud4-2" src="static\images/page03/frontcloud.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "Balloon",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    balloonMove() {
      var ui = document.getElementById("ui");
      var frontEnd = document.getElementById("frontEnd");
      var backEnd = document.getElementById("backEnd");
      var msgBox = document.getElementsByClassName("msgBox");

      // var hotAirBalloon = document.getElementsByClassName("hotAirBalloon");
      var hotAirBalloon = document.getElementById("hotAirBalloon");
      var cover = 0;

      var obj;
      document.onclick = function(event) {
        event = event || window.event;
        if (
          event.target.id == "ui" ||
          event.target.id == "frontEnd" ||
          event.target.id == "backEnd"
        ) {
          obj = event.target;
          if (event.target.id == "ui") {
            setTimeout(() => {
              msgBox[0].style.opacity = "1";
              msgBox[0].classList.add("showMsg");
            }, 1500);
          }
          if (event.target.id == "frontEnd") {
            setTimeout(() => {
              msgBox[1].style.opacity = "1";
              msgBox[1].classList.add("showMsg");
            }, 1500);
          }

          if (event.target.id == "backEnd") {
            setTimeout(() => {
              msgBox[2].style.opacity = "1";
              msgBox[2].classList.add("showMsg");
            }, 1500);
          }

          
          var pretop = getComputedStyle(hotAirBalloon, null)["top"];
          var preleft = getComputedStyle(hotAirBalloon, null)["left"];
          // alert(pretop);
          // alert(preleft);

          var objtop = getComputedStyle(obj, null)["top"];
          var objleft = getComputedStyle(obj, null)["left"];
          hotAirBalloon.style.top = getComputedStyle(obj, null)["top"];
          hotAirBalloon.style.left = getComputedStyle(obj, null)["left"];
          cover = 1;
          cloudsCover(cover);
          function cloudsCover(cover) {
            var leftCloud = document.getElementById("leftCloud");
            var rightCloud = document.getElementById("rightCloud");
            var msgBox = document.getElementsByClassName("msgBox");
            var backCloud = document.getElementById("backCloud");

            if (cover) {
              leftCloud.classList.add("leftCover");
              rightCloud.classList.add("rightCover");

              backCloud.style.opacity = "1";
            } else {
              alert(pretop);
              leftCloud.classList.remove("leftCover");
              rightCloud.classList.remove("rightCover");
              msgBox[0].style.opacity = "0";
              msgBox[1].style.opacity = "0";
              msgBox[2].style.opacity = "0";
              msgBox[0].classList.remove("showMsg");
              msgBox[1].classList.remove("showMsg");
              msgBox[2].classList.remove("showMsg");

              
              
            }
          }
        }
      };
    },
    // cloudsCenterMove() {
    //   var cloud1 = document.getElementById("flowcloud1-1");
    //   var cloud2 = document.getElementById("flowcloud2-1");
    //   var cloud3 = document.getElementById("flowcloud3-1");
    //   var cloud4 = document.getElementById("flowcloud4-1");

    //   var clouds = [cloud1, cloud2, cloud3, cloud4];
    //   var cloudspos = [0, 0, 0, 0];
    //   var cloudsspeed = [0.01, 0.02, 0.03, 0.05];

    //   function cloudsCenter() {
    //     for (var i = 0; i < cloudspos.length; i++)
    //       if (cloudspos[i] >= 100) {
    //         cloudspos[i] = -99.999;
    //       } else {
    //         cloudspos[i] = cloudspos[i] + cloudsspeed[i];

    //         clouds[i].style.left = cloudspos[i] + "vw";
    //       }
    //   }

    //   var id1 = setInterval(cloudsCenter, 0.1);
    // },
    // cloudsLeftMove() {
    //   var cloud1 = document.getElementById("flowcloud1-2");
    //   var cloud2 = document.getElementById("flowcloud2-2");
    //   var cloud3 = document.getElementById("flowcloud3-2");
    //   var cloud4 = document.getElementById("flowcloud4-2");

    //   var clouds = [cloud1, cloud2, cloud3, cloud4];
    //   var cloudspos = [-100, -100, -100, -100];
    //   var cloudsspeed = [0.01, 0.02, 0.03, 0.05];

    //   function cloudsLeft() {
    //     for (var i = 0; i < cloudspos.length; i++)
    //       if (cloudspos[i] >= 100) {
    //         cloudspos[i] = -99.999;
    //       } else {
    //         cloudspos[i] = cloudspos[i] + cloudsspeed[i];

    //         clouds[i].style.left = cloudspos[i] + "vw";
    //       }
    //   }

    //   var id1 = setInterval(cloudsLeft, 0.1);
    // },
    cloudsCover(cover) {
      var leftCloud = document.getElementById("leftCloud");
      var rightCloud = document.getElementById("rightCloud");
      var msgBox = document.getElementsByClassName("msgBox");
      var backCloud = document.getElementById("backCloud");
      if (cover) {
        leftCloud.classList.add("leftCover");
        rightCloud.classList.add("rightCover");
        backCloud.style.opacity = "1";
      } else {
        leftCloud.classList.remove("leftCover");
        rightCloud.classList.remove("rightCover");
        msgBox[0].style.opacity = "0";
        msgBox[1].style.opacity = "0";
        msgBox[2].style.opacity = "0";
        msgBox[0].classList.remove("showMsg");
        msgBox[1].classList.remove("showMsg");
        msgBox[2].classList.remove("showMsg");
        backCloud.style.opacity = "0";
        
      }
    }
  },

  mounted: function() {
    this.balloonMove();
    // this.cloudsCenterMove();
    // this.cloudsLeftMove();
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

#page03 {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url("../../static/images/page03/背景.png");
  background-color: black;
  background-size: cover;
  overflow: hidden;
}

#backCloud {
  position: absolute;
  width: 7vw;
  top: 6vh;
  left: 7vw;
  opacity: 0;
  cursor: pointer;
  z-index: 999;
  transition: 3s;
}

#sky {
  width: 100%;
  height: 75vh;
  position: absolute;
}

#flowclouds {
  width: 100vw;
  /* min-height: 25vh; */
  height: 20vh;

  position: absolute;
  bottom: 0;
}

.cloud {
  position: absolute;
}

#hotAirBalloon {
  position: absolute;
  width: 1rem;
  top: 15vh;
  left: 42vw;

  transition: 3s;

  z-index: 99;
  animation: balloonFlow 5s infinite linear;
}

#leftCloud {
  position: absolute;
  width: 5.5rem;
  height: 80vh;
  left: -5.5rem;
  /* top: 10%; */
  transition: 2s 0.5s;
}

#rightCloud {
  position: absolute;
  width: 5rem;
  height: 80vh;

  right: -5.5rem;
  /* top: 10%; */
  transition: 2s 0.5s;
}

.leftCover {
  left: -5vw !important;
  transition: 2s 0.5s;
}

.rightCover {
  right: -5vw !important;
  transition: 2s 0.5s;
}

.msgBox {
  width: 55vw;
  height: 45vh;
  position: absolute;
  transition: 1s linear;
  z-index: -1;
}

.msgBox p {
  display: flex;
  align-items: center;
}

.showMsg {
  z-index: 100;
}

#uiBox {
  /* display: none; */
  top: 20%;
  right: 15vw;
  opacity: 0;
}

#frontEndBox {
  /* display: none; */
  top: 20%;
  right: 6vw;
  opacity: 0;
}
#backEndBox {
  /* display: none; */
  top: 20%;
  left: 12vw;
  opacity: 0;
}
/* .move1 {
            animation: moveToUi 3s linear 1 alternate forwards;

        }

        .move2 {
            animation: moveToFrontEnd 3s linear 1 alternate forwards;

        }

        .move3 {
            animation: moveToBackEnd 3s linear 1 alternate forwards;

        } */

#ui {
  width: 0.8rem;
  top: 22vh;
  left: 5vw;
  animation: moveAround 7s infinite 0.1s linear;
  cursor: pointer;
}

#frontEnd {
  width: 1.1rem;
  top: 3vh;
  left: 23vw;
  animation: moveAround 7s infinite 0.7s linear;
   cursor: pointer;
}

#backEnd {
  width: 1.3rem;
  top: 13vh;
  right: 10vw;
  animation: moveAround 7s infinite 0.5s linear;
   cursor: pointer;
}

/* 
        #ui:hover,
        #frontEnd:hover,
        #backEnd:hover{
            transform: scale(1.2);
            transition: 1.0s;
        } */

#cloud1 {
  width: 0.5rem;
  top: 45vh;
  left: 23vw;
  animation: moveAround 7s infinite 0.3s linear;
}

#cloud2 {
  width: 0.3rem;
  top: 40vh;
  left: 60vw;
  animation: moveAround 7s infinite 0.2s linear;
}

.flowcloud {
  width: 110vw;
  position: absolute;
  bottom: 0;
}
#flowcloud img{
  width: 100%;
}

#flowcloud1-1 {
  bottom: 7vh;
  left: 0vw;
  animation: wavemove1 35s infinite linear;
}

#flowcloud1-2 {
  bottom: 7vh;
  left: 0vw;
  animation: wavemove2 35s infinite  linear;
}

#flowcloud2-1 {
  bottom: 0;
  left: 0vw;
  animation: wavemove1 20s infinite linear;
}

#flowcloud2-2 {
  bottom: 0;
  left: 0vw;
  animation: wavemove2 20s infinite  linear;
}

#flowcloud3-1 {
  bottom: 0;
  left: 0vw;
  animation: wavemove1 25s infinite linear;
}

#flowcloud3-2 {
  bottom: 0;
  left: 0vw;
  animation: wavemove2 25s infinite linear;
}

#flowcloud4-1 {
  bottom: -1vh;
  left: 0vw;
  animation: wavemove1 10s infinite linear;
}

#flowcloud4-2 {
  bottom: -1vh;
  left: 0vw;
  animation: wavemove2 10s infinite  linear;
}

@keyframes wavemove1 {
  0% {
    transform: translateX(0)
  }

  100% {
    transform: translateX(100%);
  }
}
@keyframes wavemove2 {
  0% {
    transform: translate(-100%);
  }
  100%{
    transform: translateX(0);
  }
}

/* @keyframes moveToUi {
  0% {
    top: 15vh;
    left: 42vw;
  }

  50% {
  }

  100% {
    top: 22vh;
    left: 5vw;
  }
}

@keyframes moveToFrontEnd {
  0% {
    top: 15vh;
    left: 42vw;
  }

  50% {
  }

  100% {
    top: 3vh;
    left: 23vw;
  }
}

@keyframes moveToBackEnd {
  0% {
    top: 15vh;
    left: 42vw;
  }

  50% {
  }

  100% {
    top: 13vh;
    left: 75vw;
  }
} */

@keyframes moveAround {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(4vw, 0);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes balloonFlow {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(0, 3vh);
  }
  50% {
    transform: translate(0, 0);
  }
  75% {
    transform: translate(0, -3vh);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
