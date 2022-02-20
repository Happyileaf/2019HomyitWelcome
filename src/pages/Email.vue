<template>
  <nav class="page" id="email">
    <div class="icon">
      <div class="icons" id="positionIconBox">
        <div class="positionIcon" @mouseover="type(0)">
          <img src="static/images/page06/定位.png" alt />
        </div>

        <div class="positionIconTxt">
          <div class="potxt">{{txt0}}</div>
        </div>
      </div>

      <div class="icons" id="qqIconBox">
        <div class="qqIcon" @mouseover="type2">
          <img src="static/images/page06/企鹅.png" alt />
        </div>

        <div class="qqIconTxt">
          <div class="qqtxt">
            <img src="static/images/page06/二维码.png" alt />
          </div>
        </div>
      </div>

      <div class="icons" id="mailIconBox">
        <div class="mailIcon" @mouseover="type(2)">
          <img src="static/images/page06/e-mail.png" alt />
        </div>

        <div class="mailIconTxt">
          <div class="emtxt">{{txt2}}</div>
        </div>
      </div>
    </div>

    <div id="postbox" @click="emaildis">
      <img src="static/images/page06/邮筒.png" alt />
    </div>
    <div class="msgbox">
      <canvas id="cav"></canvas>
      <svg>
        <rect width="100%" height="100%" rx="1vmin" ry="1vmin" />
      </svg>
      <form action class>
        <textarea
          id="msg"
          cols="30"
          rows="10"
          v-model="msg"
          
          @click="ifWrite"
          v-on:input="txtchange"
        ></textarea>
        <span class="comment">comments</span>
        <div class="sub" v-show="judge">
          <input type="reset" value="clear" />
          <input type="submit" value="submit" @click="sendMsg()" />
        </div>
      </form>
    </div>
  </nav>
</template>

<script>
import jquery from "../assets/js/turn.js/extras/jquery.min.1.7";
// import { setTimeout, clearTimeout } from "timers";

import axios from "axios";
import qs from "qs";

export default {
  name: "Email",
  data() {
    return {
      username: "123",
      password: "123",
      msg: "",
      judge: false,
      time: [0, 0, 0],
      inter: [0, 0, 0],
      txt0: "",
      txt2: "",
      content: ["江西师范大学先骕楼北面理电学院1楼xxxx", "", "xxxxxxxx@qq.com"],
      clname: ["positionIconTxt", "", "mailIconTxt"],
      times:0,
    };
  },
  methods: {
    // 打字机文本赋值

    type: function(i) {
      var name = document.getElementsByClassName(this.clname[i])[0];
      // 设置透明度
      name.style.opacity = "1";
      // 打字
      if (i == 0) {
        if (this.txt0 == "") this.typein(i, 0);
      } else if (i == 2) {
        if (this.txt2 == "") this.typein(i, 0);
      }

      // 延时10s后消失
      this.time[i] = 0;
      if (this.inter[i] != 0) clearInterval(this.inter[i]);
      var t2 = setInterval(() => {
        this.time[i]++;
        // console.log( this.time[i]);

        if (this.time[i] >= 20) {
          clearInterval(t2);
          name.style.opacity = "0";
          this.time[i] = 0;
          this.inter[i] = 0;
          if (i == 0) this.txt0 = "";
          else this.txt2 = "";
        }
      }, 1000);
      this.inter[i] = t2;
    },
    typein: function(i, j) {
      var content = this.content[i];
      var t1 = setInterval(() => {
        if (j < content.length) {
          if (i == 0) this.txt0 += content[j];
          else this.txt2 += content[j];
          j++;
        } else {
          clearTimeout(t1._id);
        }
      }, 100);
    },
    type2: function() {
      $(".qqIconTxt").css("opacity", "1");
      //延迟消失

      if (this.time[1] != 0) clearTimeout(this.time[1]);
      var t = null;
      t = setTimeout(function() {
        $(".qqIconTxt").css("opacity", "0");
      }, 20000);
      this.time[1] = t;
    },
    emailsroll: function() {
      // console.log($('.msgbox').css('display'));
      if ($(".msgbox").css("display") != "none") {
        if (event.wheelDelta > 0 || event.detail < 0) {
          setTimeout(function() {
            $(".msgbox").css("display", "none");
          }, 2000);
          $(".msgbox").css("opacity", "0");

          // 出现
          $("#email .icons").css("opacity", "1");
          $("#email .icons>div").css("transform", "scale(1)");
          this.txt0 = "";
          this.txt2 = "";
          // $('#email .positionIconTxt').css('opacity','0');
          // $('#email .qqIconTxt').css('opacity','0');
          // $('#email .mailIconTxt').css('opacity','0');
        }
      }
    },
    emaildis: function() {
      // 消失
      $("#email .icons").css("opacity", "0");
      $("#email .icons>div").css("transform", "scale(0)");
      $("#email .positionIconTxt").css("opacity", "0");
      $("#email .qqIconTxt").css("opacity", "0");
      $("#email .mailIconTxt").css("opacity", "0");
      for (var i = 0; i < 3; i++) {
        clearInterval(this.inter[i]);
        this.inter[i] = 0;
        this.time[i] = 0;
      }
      this.txt0 = "";
      this.txt2 = "";

      // 出现
      $(".msgbox").css("display", "block");
      $(".msgbox").css("opacity", "1");
      $("#cav").css("display", "block");
      $("#cav").css("animation-play-state", "running");
      this.cav();
      setTimeout(function() {
        $(".comment").css("opacity", "1");
      }, 2000);
    },
    cav: function() {
      var ca = document.getElementById("cav");
      // 画布宽高
      ca.width = parseInt($(".msgbox").css("width"));
      ca.height = parseInt($(".msgbox").css("height"));
      var cxt = ca.getContext("2d");
      var num = 30; // 11个萤火虫
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
    up: function() {
      $(".comment").css("transform", "translateY(-100%)");
    },
    txtchange: function() {
      if (this.msg != "") this.judge = true;
      else this.judge = false;
    },
    sendMsg() {
      axios({
        url: "/api/PC/MessageServlet",
        method: "post",
        data: {
          username: this.username,
          // password: this.password,
          content:this.msg
          // remember: this.remember,
        },
        transformRequest: [
          function(data) {
            data = qs.stringify(data);
            return data;
          }
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        dataType: "json"
      })
        .then(res => {
          console.log(res);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
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
    ifWrite:function () {
      if(this.checkCookieIfExsit('username')==false){
        $('#msg').blur();
        alert('请登录后留言');
      }else{
        if(this.times==0){
          this.up();
          this.times++;
        }
      }
    }

  },
  mounted: function() {
    // chrome and ie
    window.addEventListener("mousewheel", this.emailsroll, false);
    //// firefox
    window.addEventListener("DOMMouseScroll", this.emailsroll, false);
  },
  destroyed: function() {
    window.removeEventListener("mousewheel", this.emailsroll, false);
    window.removeEventListener("DOMMouseScroll", this.emailsroll, false);
  }
};
</script>
<style scoped>
/* @import url("../assets/css/email.css"); */
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
    
}
#email img{
    width: 100%;height: 100%;
}
html,
body {
   width: 100%;height: 100%;
    font-size: calc(0.5rem + 1vw);
    overflow: hidden;
    font-family: '微软楷体';
}
/* 初始透明度为0.7 */
.icons{
    opacity: 0.7;
    transition: opacity 2s
}
.icons:hover{
    opacity: 1;
    transition: opacity 1s;
}
.icons>div:nth-of-type(2){
    opacity: 0;
    transition: opacity 1s;
}
.icons>div{
    transition: all 3s;
}
#email {
    width: 100vw;height: 100vh;
    position: relative;
    background: url("../../static/images/page06/背景.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    overflow: hidden;

}
#email .icon{
    width: 100%;height: 100%;
    position: absolute;
    top: 0;left: 0;
}
#postbox {
    width: 11vw;
    /* height: 55vh; */
    position: absolute;
    right: 5vw;
    bottom: 3vh;
    cursor: pointer;
}


/* 定位 */
#positionIconBox {
    position: absolute;
    top: 5vh;left: 15vw;
    display: flex;
    width: 35vw;
    height: 24vh;

    animation: flying 20s linear infinite alternate;
}
.positionIcon{
    width: 11vw;
    height: 24vh;
    position: relative;
}
.positionIconTxt{
    position: relative;
    left: 0;top: 5vh;
    width: 24vw;height: 7vh;
    font-size: 1.2vw;
}

.potxt{
    width: 100%;height: 100%;
    background-color: #fff;
    /* border-width: 1vh 1vw; */
    border-color: #ffffff;
    border-style: solid;
    border-radius: 1px;
    /* 文字竖直居中 */
    display: flex;
    align-items: center;
}
.potxt::before,
.qqtxt::before,
.emtxt::before{
    content: '';
    width: 0;height: 0;
    position: absolute;
    overflow: hidden;font-size: 0;
}
.potxt::before{
    border-width: 0.75vw;
    border-style: solid dashed dashed;
    border-color: transparent #ffffff transparent transparent; 
    left: -1.5vw;top: 2vh;
}

/* qq图像 */

#qqIconBox {
    top: 50vh;
    left: 20vw;
    width: 22vw;height: 22vh;
    position: absolute;
    display: flex;
    animation: flying 20s linear 1s infinite alternate;
    
}
.qqIcon{
    width: 11vw;
    height: 22vh;
}

/* 二维码 */
.qqIconTxt{
    width: 11vw;
    height: 32vh;
    background: #fff;
    
}
.qqtxt{
    background: #fff;
    width: 100%;height: 100%;
    border-color: #fff;
    border-style: solid;
}
.qqtxt::before{
    border-width: 0.75vw;
    border-style: solid dashed dashed;
    border-color: transparent #ffffff transparent transparent; 
    left: 9.5vw;top: 6vh;
}


/* 邮箱 */

#mailIconBox {
    position: absolute;
    top: 30vh;
    left: 43vw;
    display: flex;
    flex-direction: row-reverse;
    width: 30vw;
    height: 30vh;
    animation: flying 20s linear infinite alternate;
}
.mailIcon{
    width: 11vw;
    height: 24vh;
    top: 0;left: 0vw;;
    position: relative;
}
.mailIconTxt{
    position: relative;
    left: 0;top: 7vh;
    width: 17vw;height: 7vh;
    font-size: 1.5vw;
}
.emtxt{
    width: 100%;height: 100%;
    background-color: #fff;
    /* border-width: 1vh 1vw; */
    border-color: #ffffff;
    border-style: solid;
    border-radius: 1px;
    /* 文字竖直居中 */
    display: flex;
    align-items: center;
    /* opacity: 0; */
}
.emtxt::before{
    border-width: 0.75vw;
    border-style: solid dashed dashed;
    border-color: transparent  transparent transparent #ffffff; 
    left: 17vw;top: 2vh;
}


@keyframes flying {
    0% {
        transform: translate(0, 0);
    }

    10% {
        transform: translate(-1vw, 1vh);
        /* 左下 */
    }

    20% {
        transform: translate(1vw, 1vh);
        /* 右下 */
    }

    30% {
        transform: translate(1vw, -1vh);
        /* 右上 */
    }

    40% {
        transform: translate(-1vw, -1vh);
        /* 左上 */
    }

    50% {
        transform: translate(1vw, -1vh);
        /* 右上 */
    }

    60% {
        transform: translate(-1vw, 1vh);
        /* 左下 */
    }

    70% {
        transform: translate(0, 1vh);
        /* 下 */
    }

    80% {
        transform: translate(1vw, -1vh);
        /* 右上 */
    }
    90% {
        transform: translate(1vw, 1vh);
        /* 右下 */
    }
    100% {
        transform: translate(-1vw, -1vh);
        /* 左上 */
    }
}

.test{width: 300px;padding: 30px 20px;position: relative;margin-left: 100px;border: 5px solid #00FFFF;}

.test::after,
.test::before
{width: 0;height: 0;position: absolute;overflow: hidden;font-size: 0;}

.test::before{
    content: '';
    border-width: 20px;
    border-style: solid dashed dashed;
    border-color: #0ff transparent transparent;
    left: 80px;bottom: -40px;
}

.test::after{
    content: '';
    border-width: 20px;
    border-style: solid dashed dashed;
    border-color: #482B78 transparent transparent;
    left: 80px;
    bottom: -35px;
}

/* 留言板 */
.msgbox{
    width: 100%;height: 100%;
    display: none;
    opacity: 0;
    transition: opacity 2s;
}
#cav{
    display: none;
    transition: opacity 4s;
    position: absolute;
    top: 0;left: 0;
    animation-play-state: paused;
    animation: light 3s linear 2s infinite alternate;
}
@keyframes light{
    100%{
        opacity: 0;
    }
}

/* 表单 */
.msgbox form{
    position: absolute;
    top: 15vh;left: 18vw;
    height: 56vh;width: 65vw;
    font-size: 3vmin;
    font-family: '微软黑体';
    z-index: 800;
    

}
.msgbox svg{
    position: absolute;
    top: 15vh;left: 18vw;
    height: 50vh;width: 65vw;
}
.msgbox  svg rect{
    fill: none;
    stroke-width: 3px;
    stroke: beige;
    stroke-dasharray: 0 3000;
    animation: msgdraw 2s linear forwards;
}
@keyframes msgdraw{
    100%{
        stroke-dasharray: 3000 3000;
    }
}

/* 画出边框 */

.msgbox form textarea{
    background: none;
    color: white;
    border: none;
    outline: none;
    width: 100%;height: 90%;
    /* z-index: 1000; */
    padding: 10px;
    font-size: 3vmin;
    font-family: '微软黑体';
   
}
/* 文字上移 */
.msgbox span{
    position: absolute;
    top: 0;left: 1vw;
    color: yellow;
    /* transform: translateY(-100%); */
    transition: all 1s;
    z-index: 100;
    opacity: 0;
}

.msgbox .sub{
    position: absolute;
    bottom: 0;right: 0;
    width: 40%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.msgbox .sub input{
    background: none;
    border-radius :0.5vmin;;
    border:1px solid  #f9ca24; 
    color: #f9ca24;
    width: 5vw;height: 50%;
    cursor: pointer;
    font-size: 1vw;
    transition: background 1s ,color 1s;
    outline: none;
    
}
.msgbox input:hover{
    background: #f9ca24;
    color:#fff;
}
.msgbox input[type="reset"]{
    margin-right: 2vmin;
}

</style>


