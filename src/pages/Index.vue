<template>
  <div class="page" id="page01">
    <div id="skyWrap">
      <img class="cloud" id="cloud1" src="static\images\云1.png" alt />
      <img class="cloud" id="cloud2" src="static\images/云2.png" alt />
      <img class="cloud" id="cloud3" src="static\images/云3.png" alt />
      <img class="sunIcon" id="sunIcon" src="static\images/太阳.png" alt />
      <!-- <img class="UINavigationBar" id="UINavigationBar" src="static\images/导航栏.png" alt /> -->
    </div>
    <div id="seaWrap">
      <img class="wave" id="wave1" src="static\images/波纹.png" alt />
      <img class="wave" id="wave2" src="static\images/page02/波纹.png" alt />

      <img class="studio" id="studio" src="static\images/HOMYIT STUDIO.png" alt />
    </div>
    <img class="logo" id="logo" src="static\images/人物.png" alt />
  </div>
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    myMove() {
      // var wave = document.getElementById("wave");
      var cloud1 = document.getElementById("cloud1");
      var cloud2 = document.getElementById("cloud2");
      var cloud3 = document.getElementById("cloud3");
      var logo = document.getElementById("logo");

      var clouds = [cloud1, cloud2, cloud3];
      var cloudspos = [9, 30, 50];
      var cloudsspeed = [0.01, 0.02, 0.03];

      var logoWidth = 5;
      // var logoTop = 35;
      var logoBottom = 50;
      var logoLeft = 65;
      // var logoRight = 20;

      logo.style.width = logoWidth + "vw";
      // logo.style.top = logoTop + "vh";
      logo.style.left = logoLeft + "vw";
      logo.style.bottom = logoBottom + "vh";
      // logo.style.right = logoRight + "vw";

      var id1 = setInterval(seaAndSkyMove, 0.1);
      var id2 = setInterval(logoMove, 0.1);

      document.onscroll = function() {};

      function seaAndSkyMove() {
        for (var i = 0; i < cloudspos.length; i++)
          if (cloudspos[i] > 110) {
            cloudspos[i] = -15;
          } else {
            cloudspos[i] = cloudspos[i] + cloudsspeed[i];

            clouds[i].style.left = cloudspos[i] + "vw";
          }
      }

      function logoMove() {
        // logo.style.width = logoWidth + "vw";
        // logo.style.top = logoTop + "vh";
        // logo.style.left = logoLeft + "vw";

        if (logoLeft <= 37) {
          clearInterval(id2);
          logo.style.transition = "0.5s";
        } else {
          logoWidth = logoWidth + 0.008;
          // logoTop = logoTop + 0.0001;
          logoBottom = logoBottom - 0.0075;
          logoLeft = logoLeft - 0.015;
          logo.style.bottom = logoBottom + "vh";
          logo.style.left = logoLeft + "vw";
          logo.style.width = logoWidth + "vw";
        }
      }
    },
    // handleScroll() {
    //   var logoBottom = parseFloat(logo.style.bottom);
    //   var logoLeft = parseFloat(logo.style.left);

    //   logoBottom = logoBottom - 1.0;
    //   logoLeft = logoLeft - 0.5;
    //   logo.style.bottom = logoBottom + "vh";
    //   logo.style.left = logoLeft + "vw";
    // },
    scrollFunc(e) {
       var logo = document.getElementById("logo");
      var logoBottom = parseFloat(logo.style.bottom);
      var logoLeft = parseFloat(logo.style.left);

      e = e || window.event;
      

      if (e.wheelDelta) {
        
        //判断浏览器IE，谷歌滑轮事件
        if (parseFloat(logo.style.left) <= 37) {
          if (e.wheelDelta > 0) {
            //当滑轮向上滚动时
            // alert(logoLeft);
            logoBottom = logoBottom + 4.1;
            logoLeft = logoLeft + 1.9;
            // alert(logoLeft);
            logoLeft < 37 ? logoLeft : (logoLeft = 37);
            logoBottom < 35.9975 ? logoBottom : (logoBottom = 35.9975);
            logo.style.bottom = logoBottom + "vh";
            logo.style.left = logoLeft + "vw";
          }

          if (e.wheelDelta < 0) {
            //当滑轮向下滚动时

            logoBottom = logoBottom - 4.1;
            logoLeft = logoLeft - 1.9;
            logoLeft < 37 ? logoLeft : (logoLeft = 37);
            logoBottom < 35.9975 ? logoBottom : (logoBottom = 35.9975);
            logo.style.bottom = logoBottom + "vh";
            logo.style.left = logoLeft + "vw";
          }
        }
      }
    }
  },

  mounted: function() {
    this.myMove();
    // window.addEventListener("scroll", this.handleScroll,"ture");
    // window.onmousewheel = document.onmousewheel = this.scrollFunc;
  },
 
};
</script>
<style scoped>
@import url("../assets/css/common.css");
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

/* 第一页     ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！ */

#page01 {
  width: 100vw;
  height: 100vh;
  position: relative;
}

#skyWrap {
  width: 100vw;
  height: 45.5vh;
  background: rgba(157, 206, 245, 1);
  position: relative;
  overflow: hidden;
}

#seaWrap {
  width: 100vw;
  height: 54.5vh;
  background: rgba(83, 106, 195, 1);
  position: relative;
  overflow: hidden;
}

#skyWrap .cloud {
  position: absolute;
  width: 15vw;
}

#skyWrap #cloud1 {
  left: 9vw;
  top: 5vh;
  /* animation: wavemove 25s infinite linear; */
}

#skyWrap #cloud2 {
  left: 30vw;
  top: 33vh;
  /* animation: wavemove 25s infinite linear; */
}

#skyWrap #cloud3 {
  left: 50vw;
  top: 0vh;
  /* animation: wavemove 25s infinite linear; */
}

#skyWrap #UINavigationBar {
  width: 3vw;
  position: absolute;
  left: 3vw;
  top: 5vh;
}

#skyWrap #sunIcon {
  width: 5vw;
  position: absolute;
  right: 3vw;
  top: 8vh;
}

#seaWrap #studio {
  width: 10vw;
  position: absolute;
  left: 5vw;
  bottom: 10vh;
}

#seaWrap .wave {
  position: absolute;
  left: -100vw;
  padding: 5vh 5vw;
  width: 100vw;
  height: 54.5vh;
  box-sizing: border-box;
  /* background-color: red; */
  /* animation: wavemove 25s infinite linear; */
}

#seaWrap #wave1 {
  left: 0vw;
  animation: wavemove 25s infinite linear;
}

#seaWrap #wave2 {
  left: -100vw;
  animation: wavemove 25s infinite 12.5s linear;
}

#logo {
  width: 5vw;
  position: absolute;
  /* top: 20vh; */
  bottom: 50vh;
  left: 65vw;
  z-index: 100;
  transform-origin: 50% 100% 0;
  /* animation: shake 1s infinite linear; */
}

@keyframes wavemove {
  0% {
    left: -100vw;
  }

  50% {
    left: 0vw;
  }

  100% {
    left: 100vw;
  }
}

/* @keyframes shake {
  0% {
    transform: rotate(0deg);
    
  }
  25% {
    transform: rotate(5deg);
    
  }
  50% {
    transform: rotate(0deg);
    
  }
  75% {
    transform: rotate(-5deg);
    
  }
  100% {
    transform: rotate(0deg);
    
  }
} */
</style>