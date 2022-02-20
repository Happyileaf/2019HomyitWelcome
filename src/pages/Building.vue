<template>
  <div id="home">
    <!-- <router-link to="/home/one">子页面1</router-link> -->
    <router-view />
    <router-view name="house" class />
    <router-view name="housein" class />
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    }

  },
  
  
};
</script>
<style scoped>
</style>

