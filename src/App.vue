<template>
  <div id="app">
    <Navbox id="nav"></Navbox>
    <router-view />
    <!-- <router-view name="intro" class />
    <router-view name="balloon" class />
    <router-view name="case" class />
    <router-view name="homeroad" class />-->
    <router-view name="house" class />
    <router-view name="housein" class />
    <router-view name="email" class />
  </div>
</template>

<script>
import Navbox from "@/components/Nav";
export default {
  name: "App",
  components: {
    Navbox
  },
  methods: {
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  created: function() {
    if (this.isMobile()) {
      window.location.href =
        "http://39.106.65.18/officialWebPhoneFe/index.html#/";
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  outline: none;
}
html,
body {
  width: 100%;
  overflow-x: hidden;

  font-size: calc(0.5rem + 10vw + 10vh);
}

/* body::-webkit-scrollbar {
  display: none;
} */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  font-size: 0.1rem;
}

#nav {
  width: 6vw;
  position: fixed;
  /* top:30px; */
  /* left:30px; */
  z-index: 999;
}
</style>
