<template>
  <div id="wall2">
    <div class="back" @click="back"></div>
    <div class="item" id="sofa">
      <img src="static/images/room03/沙发.png" alt />
    </div>
    <div class="item" id="bookcase">
      <img src="static/images/room03/书柜.png" alt />
    </div>
    <div class="item" id="greenPlant">
      <img src="static/images/room03/绿植.png" alt />
    </div>

    <div id="pictureWall">
      <div class="picture" id="picture1" @click="zoom(1)">
        <div class="pic1">
          <img :src="pictures[0].imgUrl" alt />
        </div>
      </div>
      <div class="picture" id="picture2" @click="zoom(2)">
        <div class="pic2">
          <img :src="pictures[1].imgUrl" alt />
        </div>
      </div>

      <div class="picture" id="picture3" @click="zoom(3)">
        <div class="pic3">
          <img :src="pictures[2].imgUrl" alt />
        </div>
      </div>
      <div class="picture" id="picture4" @click="zoom(4)">
        <div class="pic4">
          <img :src="pictures[3].imgUrl" alt />
        </div>
      </div>
      <div class="picture" id="picture5" @click="zoom(5)">
        <div class="pic5">
          <img :src="pictures[4].imgUrl" alt />
        </div>
      </div>
      <div class="picture" id="picture6" @click="zoom(6)">
        <div class="pic6">
          <img :src="pictures[5].imgUrl" alt />
        </div>
      </div>
      <div class="picture" id="picture7" @click="zoom(7)">
        <div class="pic7">
          <img :src="pictures[6].imgUrl" alt />
        </div>
      </div>
      <div class="picture" id="picture8" @click="zoom(8)">
        <div class="pic8">
          <img :src="pictures[7].imgUrl" alt />
        </div>
      </div>
      <div class="picture" id="picture9" @click="zoom(9)">
        <div class="pic9">
          <img :src="pictures[8].imgUrl" alt />
        </div>
      </div>
      <div class="picture" id="picture10" @click="zoom(10)">
        <div class="pic10">
          <img :src="pictures[9].imgUrl" alt />
        </div>
      </div>
      <div class="picture" id="picture11" @click="zoom(11)">
        <div class="pic11">
          <img :src="pictures[10].imgUrl" alt />
        </div>
      </div>
      <div class="picture" id="picture12" @click="zoom(12)">
        <div class="pic12">
          <img :src="pictures[11].imgUrl" alt />
        </div>
      </div>
      <!-- <div class="picture" id="picture1" @click="zoom(1)">
        <div class="pic1">
          <img src="static/images/room03/1.jpg" alt />
        </div>
      </div>
      <div class="picture" id="picture2" @click="zoom(2)">
        <div class="pic2">
          <img src="static/images/room03/2.jpg" alt />
        </div>
      </div>

      <div class="picture" id="picture3" @click="zoom(3)">
        <div class="pic3">
          <img src="static/images/room03/11.jpg" alt />
        </div>
      </div>
      <div class="picture" id="picture4" @click="zoom(4)">
        <div class="pic4">
          <img src="static/images/room03/4.jpg" alt />
        </div>
      </div>
      <div class="picture" id="picture5" @click="zoom(5)">
        <div class="pic5">
          <img src="static/images/room03/5.jpg" alt />
        </div>
      </div>
      <div class="picture" id="picture6" @click="zoom(6)">
        <div class="pic6">
          <img src="static/images/room03/6.jpg" alt />
        </div>
      </div>
      <div class="picture" id="picture7" @click="zoom(7)">
        <div class="pic7">
          <img src="static/images/room03/7.jpg" alt />
        </div>
      </div>
      <div class="picture" id="picture8" @click="zoom(8)">
        <div class="pic8">
          <img src="static/images/room03/8.jpg" alt />
        </div>
      </div>
      <div class="picture" id="picture9" @click="zoom(9)">
        <div class="pic9">
          <img src="static/images/room03/9.jpg" alt />
        </div>
      </div>
      <div class="picture" id="picture10" @click="zoom(10)">
        <div class="pic10">
          <img src="static/images/room03/10.jpg" alt />
        </div>
      </div>
      <div class="picture" id="picture11" @click="zoom(11)">
        <div class="pic11">
          <img src="static/images/room03/3.jpg" alt />
        </div>
      </div>
      <div class="picture" id="picture12" @click="zoom(12)">
        <div class="pic12">
          <img src="static/images/room03/12.jpg" alt />
        </div>
      </div>-->
    </div>

    <div class="zoombox" @click.self="closezoom">
      <div class="zoomin">
        <img :src="path" alt />
      </div>
    </div>
  </div>
</template>

<script>
import jquery from "../assets/js/turn.js/extras/jquery.min.1.7";

import axios from "axios";
import Qs from "qs";
export default {
  name: "Housein",
  data() {
    return {
      msg: "",
      path: "",
      pictures: [
        {
          pic: "",
          // imgUrl: "static/images/room03/1.jpg",
          imgUrl: ""
        },
        {
          pic: "",
          // imgUrl: "static/images/room03/2.jpg",
          imgUrl: ""
        },
        {
          pic: "",
          // imgUrl: "static/images/room03/3.jpg",
          imgUrl: ""
        },
        {
          pic: "",
          // imgUrl: "static/images/room03/4.jpg",
          imgUrl: ""
        },
        {
          pic: "",
          // imgUrl: "static/images/room03/5.jpg",
          imgUrl: ""
        },
        {
          pic: "",
          // imgUrl: "static/images/room03/6.jpg",
          imgUrl: ""
        },
        {
          pic: "",
          // imgUrl: "static/images/room03/7.jpg",
          imgUrl: ""
        },
        {
          pic: "",
          // imgUrl: "static/images/room03/8.jpg",
          imgUrl: ""
        },
        {
          pic: "",
          // imgUrl: "static/images/room03/9.jpg",
          imgUrl: ""
        },
        {
          pic: "",
          // imgUrl: "static/images/room03/10.jpg",
          imgUrl: ""
        },
        {
          pic: "",
          // imgUrl: "static/images/room03/11.jpg",
          imgUrl: ""
        },
        {
          pic: "",
          // imgUrl: "static/images/room03/12.jpg",
          imgUrl: ""
        }
      ]
    };
  },
  methods: {
    // 返回上一页
    back: function() {
      $(".next .cat").css("display", "block");
      $("#wall2").css("transform", "translateX(100%)");
      $(".houseBox").css("transform", "translateX(0)");
    },
    zoom: function(x) {
      var picpath = "http://www.homyit.cn/images/pc/" + x + ".jpg";
      $(".zoombox").css("display", "flex");
      this.path = picpath;
    },
    closezoom: function() {
      $(".zoombox").css("display", "none");
    },
    scrollInNext: function() {
      if (event.wheelDelta > 0 || event.detail < 0) {
        this.back();
      }
    },
    getMsg() {
      axios
        .post("http://www.homyit.cn/PC/PhotoServlet", {
          params: {}, //是发送请求的查询参数对象
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          },
          dataType: "json"
        })
        .then(res => {
          console.log("hhh");
          console.log(res);

          this.pictures = res.data;
          console.log(this.members);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  mounted: function() {
    // chrome and ie
    window.addEventListener("mousewheel", this.scrollInNext, false);
    //// firefox
    window.addEventListener("DOMMouseScroll", this.scrollInNext, false);
    this.getMsg(); 
  },
  destroyed: function() {
    window.removeEventListener("mousewheel", this.scrollInNext, false);
    window.removeEventListener("DOMMouseScroll", this.scrollInNext, false);
  }
};
</script>

<style scoped>
/* @import url("../assets/css/housein.css"); */
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}
html,
body {
    width: 100%;height: 100%;
    overflow: hidden;
    font-size: calc(0.5rem + 10vw + 10vh);
}

/* 整个墙 */
#wall2 {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;left: 0;
    transform: translateX(100%);
    background: url("../../static/images/room03/背景.png");
    background-size: 100vw 100vh;
    transition: transform 2s;
   
}

#wall2 img{
    width: 100%;height: 100%;
}
/* 图画 */
#pictureWall {
    width: 100vw;
    height: 70vh;
    position: absolute;
}

.picture,
.item {
    position: absolute;
}
.picture{
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
#picture1 {
    width: 8.5vw;height: 18vh;
    top: 6vh;
    left: 9vw;
    background-image: url('../../static/images/room03/相框1.png');
}
.picture div{
    position: absolute;
    filter: blur(1px);
    cursor: pointer;
}
.pic1{
    height: 72%;
    top: 4.3vh;
    width: 90%;
    left: 0.5vw;
}
#picture2 {
    width: 12.5vw;height: 22vh;
    top: 24vh;
    left: 9vw;
    background-image: url('../../static/images/room03/相框2.png');

}
.pic2{
    height: 45%;
    top: 10.5vh;
    width: 92%;
    left: 0.5vw;
}
#picture3 {
    width: 6.5vw;height: 13vh;
    top: 23vh;
    left: 23vw;
    background-image: url('../../static/images/room03/相框4.png');

}
.pic3{
    height: 46%;
    top: 3.8vh;
    width: 92%;
    left: 0.3vw;
}
#picture4 {
    width: 9.5vw;height: 17vh;
    top: 1vh;
    left: 30vw;
    background-image: url('../../static/images/room03/相框5.png');

}
.pic4{
    height: 51%;
    top: 6.5vh;
    width: 90%;
    left: 0.5vw;
}
#picture5 {
    width: 6.5vw;height: 14vh;
    top:38vh;
    left: 33vw;
    background-image: url('../../static/images/room03/相框1.png');

}
.pic5{
    height: 74%;
    top: 3.1vh;
    width: 90%;
    left: 0.4vw;
}
#picture6 {
    width: 12.5vw;height: 27vh;
    top: 16vh;
    left: 42vw;
    background-image: url('../../static/images/room03/相框2.png');

}
.pic6{
    height: 45%;
    top: 13vh;
    width: 92%;
    left: 0.5vw;
}
#picture7 {
    width: 9.5vw;height: 18vh;
    top: 11vh;
    left: 55vw;
    background-image: url('../../static/images/room03/相框4.png');

}
.pic7{
    height: 47%;
    top: 4.9vh;
    width: 90%;
    left: 0.5vw;
}
#picture8 {
    width: 7.5vw;height: 14vh;
    top: 30vh;
    left: 65vw;
    background-image: url('../../static/images/room03/相框3.png');

}
.pic8{
    height: 71%;
    top: 3.5vh;
    width: 90%;
    left: 0.4vw;
}
#picture9 {
    width: 9.5vw;height: 16vh;
    top: 0vh;
    left: 70vw;
    background-image: url('../../static/images/room03/相框5.png');

}
.pic9{
    height: 49%;
    top: 5.6vh;
    width: 90%;
    left: 0.6vw;
}
#picture10 {
    width: 8.5vw;height: 14vh;
    top: 41vh;
    left: 73vw;
    background-image: url('../../static/images/room03/相框5.png');

}
.pic10{
    height: 49%;
    top: 5.5vh;
    width: 89%;
    left: 0.6vw;
}
#picture11 {
    width: 8.5vw;height: 18vh;
    top: 1vh;
    left: 85vw;
    background-image: url('../../static/images/room03/相框2.png');

}
.pic11{
    height: 45%;
    top: 8.8vh;
    width: 93%;
    left: 0.3vw;
}
#picture12 {
    width: 8.5vw;height: 15vh;
    top: 21vh;
    left: 85vw;
    background-image: url('../../static/images/room03/相框4.png');

}
.pic12{
    height: 48%;
    top: 4vh;
    width: 90%;
    left: 0.5vw;
}
#sofa {
    width: 41.5vw;height: 38vh;
    bottom: 11vh;
    left: 29vw;

}

#bookcase {
    width: 16.5vw;height: 46vh;
    bottom: 19vh;
    right: 1vw;

}

#greenPlant {
    width: 8.5vw;height: 29vh;
    bottom: 21vh;
    left: 5vw;

}

/* 返回 */
.back{
    position: absolute;
    top: 0;left: 0;
    width: 10vw;height: 100%;
    z-index: 100;
}
/* 放大图片盒子 */
.zoombox{
    width: 100%;height: 100%;
    position: absolute;
    top: 0;left: 0;
    background:rgba(0, 0, 0, 0.6);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
}
.zoomin{
    height: 60%;
    max-width: 60%;
    width: auto;
}
</style>


