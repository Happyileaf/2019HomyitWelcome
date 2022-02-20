<template>
  <div id="home">
    <!-- <router-link to="/home/one">子页面1</router-link> -->
    <!-- <router-view />
    <router-view name="intro" class />
    <router-view name="balloon" class />
    <router-view name="case" class />
    <router-view name="homeroad" class />-->
    <Index></Index>
    <Intro></Intro>
    <Balloon></Balloon>
    <Case></Case>
    <HomeRoad></HomeRoad>
  </div>
</template>
<script>
import Index from "../pages/Index";
import Intro from "../pages/Intro";
import Balloon from "../pages/Balloon";
import Case from "../pages/Case";
import HomeRoad from "../pages/HomeRoad";
export default {
  name: "Home",
  components: {
    Index,
    Intro,
    Balloon,
    Case,
    HomeRoad
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    scrollFunc(e) {
      // alert("aaa");
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
    },
    nulloption(){

    }
  },
  mounted: function() {
    this.onmousewheel = document.onmousewheel = this.scrollFunc;
    

    // window.addEventListener("scroll", this.scrollFunc);
  },
  beforeDestroy: function() {
    // window.removeEventListener("scroll", this.scrollFunc);
    this.onmousewheel = document.onmousewheel = this.nulloption;
  }
};
</script>
<style scoped>
</style>

