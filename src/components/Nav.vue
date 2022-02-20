<template>
  <div class="container" id="nav">
    <!-- 导航栏 -->
    <div class="bgbox" id="box" >
      <div class="box1" id="xbox1">
        <ul>
          <li>
            <div class="btn from-left">
              <a @click="jump(0)">Home</a>
            </div>
          </li>
          <!-- <li>
            <div class="btn from-right">
              <a @click="jump(1)">Introduction</a>
            </div>
          </li>
          <li>
            <div class="btn from-middle">
              <a @click="jump(2)">Groups</a>
            </div>
          </li>
          <li>
            <div class="btn from-bottom">
              <a @click="jump(3)">Projects</a>
            </div>
          </li> -->
          <li>
            <div class="btn from-right">
              <a @click="jump(1)">About</a>
            </div>
          </li>
          <li>
            <div class="btn from-left">
              <a @click="jump(2)">Contact</a>
            </div>
          </li>
        </ul>
        
      </div>
    </div>
    <!-- 导航栏开关 -->
    <div class="bar" id="bar" @click="change">
      <!-- <div class="bar" id="bar" onclick="change(this)"> -->
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    
    <!-- 登录/注册 -->
        <div class="navlogin" >
          <div v-if="(username == ''?true:false)" @click="jump(3)">
           
              <router-link to="/login" >
              <span class="nav">
              <span class="span1">L</span><span class="span2">ogin</span>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span class="nav">
                <span class="span1">S</span><span class="span2">ign</span>
              </span>
              
              </router-link>
           
          </div>
          <div v-else>
              <span class="span1">W</span><span class="span2">elcome</span>   
              {{username}} &nbsp;&nbsp;
              <span @click="loginout" class="nav"> 
                <span class="span1">C</span ><span class="span2">ancel</span> 
              </span>
          </div>
        </div>
   
  </div>
</template>

<script>
/* eslint-disable */
import jquery from "../assets/js/turn.js/extras/jquery.min.1.7";
// import { setTimeout } from 'timers';

export default {
  name: "Nav",
  data() {
    return {
      msg: "",
      username:"",
      sec:['#page01','houseBox','page06'],
    };
  },
  methods: {
    change() {
      // console.log($('.bgbox').css('opacity') );
      if($('.bgbox').css('display') == 'none'){
         $('.bar').addClass('change');
        $('.bgbox').css('display','block');
        $('.bgbox').css('padding','0 0');
        $('.box1 ul').css('display','block');
      
      }else{
        $('.bar').removeClass('change');
        $('.bgbox').css('padding','0 50vw');
        $('.box1 ul').css('display','none');
        setTimeout(function(){
         $('.bgbox').css('display','none');
        },500)
      


      }
    },
    // 缺少页面间的跳转部分
    jump:function(x){
      // console.log(window.location.href.match(/.+\/([^?]*)/)[1]);
      var pageName = window.location.href.match(/.+\/([^?]*)/)[1];
      if(x==0){
        this.$router.push({ path: "/home" });
      }else if(x==1){
        this.$router.push({ path: "/building" });
      }else if(x==2){
        this.$router.push({ path: "/email" });
      }
      this.change();
      if(x==3){
      if($('.bgbox').css('display') != 'none'){
        this.change();
      }

      }
    },
     run:function(x){
       // 这部分到页面顶部的距离
      //  console.log(x);
      var pageName = window.location.href.match(/.+\/([^?]*)/)[1];

      if(pageName == 'home'){
             var name = this.sec[x];
            var nameTop = document.querySelector(name).offsetTop;
             // 页面滚动的距离
          // window.pageYOffset = nameTop;
          document.documentElement.scrollTop =nameTop; 
          // document.body.scrollTop = nameTop;
          // scrollTop = nameTop;
          // this.change();
          }
    },
    loginout:function(){
      this.username ='';
      this.setCookie('username','',-1);
    },
     //设置cookie
    setCookie: function (cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      // console.info(cname + "=" + cvalue + "; " + expires);
      document.cookie = cname + "=" + cvalue + "; " + expires;
      // console.info(document.cookie);
    },
    //获取cookie
    // getCookie: function (cname) {
    //   var name = cname + "=";
    //   var ca = document.cookie.split(';');
    //   for (var i = 0; i < ca.length; i++) {
    //     var c = ca[i];
    //     while (c.charAt(0) == ' ') c = c.substring(1);
    //     if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    //   }
    //   return "";
    //   },
    // 用户名是否存在
     checkCookieIfExsit:function(name){
      var exsits = false;
      var allCookie = document.cookie;
      var cookieArr = allCookie.split(";");
      for (var i = 0; i < cookieArr.length; i++) {
          //这里在获取cookie名的时候一定要注意，不同的cookie是以分号和空格隔开的，所以要记得去除前导空格
          var cookieName = cookieArr[i].split("=")[0].trim();
          if (cookieName === name) {
              exsits = true;
              break;
          }
      }
      return exsits;
    },
    
  },
 
  mounted: function(){
    
    // this.setCookie("username",'zl', 2);
    if( this.checkCookieIfExsit('username') != false ){
      // this.username= this.getCookie('username');
     this.username = this.$cookieStore.getCookie('username');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  padding: 0;
  margin: 0;

  font-size: calc(0.5rem + 10vw + 10vh);
}

.container {
  width: 100px;
  height: 100px;
  
}

.bgbox {
  width: 100vw;
  height: 100vh;
  padding:0 50vw;
  box-sizing: border-box;
  display: none;
  transition: padding 0.5s;
 z-index: 3000;

}

.box1 {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 80vh;
  margin: 0 auto;
  padding: 10vh 0;
  background-color: rgb(58, 132, 175);
  /* display: none; */
}

.bgbox ul {
   
  width:  35vw;
  margin: 0;
  padding: 0;
  /* height: 100%; */

  line-height: 6vh;
}

.bgbox ul li {
  list-style: none;
  text-align: center;
  padding: 0 2vw;
  margin-bottom: 2vh;
}

.bgbox ul li a {
  cursor: pointer;
  text-decoration: none;
  font-size: 0.15rem;
  display: block;
  color: rgb(255, 255, 255);
  letter-spacing: 0.2em;
  padding: 1vh 0;
}

.btn {
  position: relative;

  margin-bottom: 1rem;
  font-size: 0.07rem;

  -webkit-transition: all 600ms cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 600ms cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;

  margin: 0 auto;
  z-index: 2;
}

.btn:before,
.btn:after {
  content: "";
  position: absolute;
  -webkit-transition: inherit;
  transition: inherit;
  z-index: -1;
}

/* 文字变色 */
.btn a:hover {
  color: rgb(0, 0, 0);
  -webkit-transition-delay: 0.8s;
  transition-delay: 0.8s;
}

/* 白色边框的浮现 */
.btn:hover:before {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

/* 白底的浮现 */
.btn:hover:after {
  background: rgba(255, 255, 255, 0.5);
  -webkit-transition-delay: 0.4s;
  transition-delay: 0.4s;
}

/* From Left */

.from-left:before,
.from-left:after {
  top: 0;
  width: 0;
  height: 100%;
}

.from-left:before {
  right: 0;
  border: 1px solid white;
  border-left: 0;
  border-right: 0;
}

.from-left:after {
  left: 0;
}

.from-left:hover:before,
.from-left:hover:after {
  width: 100%;
}

/* From Right */

.from-right:before,
.from-right:after {
  top: 0;
  width: 0;
  height: 100%;
}

.from-right:before {
  left: 0;
  border: 1px solid white;
  border-left: 0;
  border-right: 0;
}

.from-right:after {
  right: 0;
}

.from-right:hover:before,
.from-right:hover:after {
  width: 100%;
}

/* From Middle */

.from-middle:before {
  top: 0;
  left: 50%;
  height: 100%;
  width: 0;
  border: 1px solid white;
  border-left: 0;
  border-right: 0;
}

.from-middle:after {
  bottom: 0;
  left: 0;
  height: 0;
  width: 100%;
  background: white;
}

.from-middle:hover:before {
  left: 0;
  width: 100%;
}

.from-middle:hover:after {
  top: 0;
  height: 100%;
}

/* From Bottom */

.from-bottom:before,
.from-bottom:after {
  left: 0;
  height: 0;
  width: 100%;
}

.from-bottom:before {
  top: 0;
  border: 1px solid white;
  border-top: 0;
  border-bottom: 0;
}

.from-bottom:after {
  bottom: 0;
  height: 0;
}

.from-bottom:hover:before,
.from-bottom:hover:after {
  height: 100%;
}

.bar {
  width: 40px;
  height: 30px;
  left: 30px;
  position: absolute;
  top: 20px;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: rgb(115, 136, 238);
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-8px, 6px);
  transform: rotate(-45deg) translate(-8px, 6px);
  background-color: white;
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
  background-color: white;
}

/* 登录/注册/注销 */
.navlogin{
  position: absolute;
  width: 25vw;
  top: 3vh;right: -90vw;
  display: flex;
  justify-content: flex-end;
}
.navlogin .span1{
   color:rgb(115, 136, 238);
  cursor: pointer;

   font-size:xx-large
}
.navlogin .span2{
   color:rgb(158, 167, 211);
  cursor: pointer;

}
.navlogin .nav:hover span{
  color: rgb(243, 231, 127);
  cursor: pointer;

}

</style>