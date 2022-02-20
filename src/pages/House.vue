<template>
  <div class="houseBox">
    <!-- 最初一片黑暗，拉开绳子，房间景象显现-->
    <div class="first">
      <div class="ropebox">
        <div class="rope" @click="pull">
          <img src="static/images/room01/cord.png" alt />
        </div>
      </div>

      <div>
        <img src="static/images/room01/pull.png" alt />
      </div>
    </div>

    <div class="house">
      <!-- 门 -->
      <div class="door" @click="jumpEmail">
        <img src="static/images/room02/门.png" alt />
      </div>
      <!-- 窗户 背景 -->
      <div class="window">
        <div class="sunm">
          <img src="static/images/room02/日月交替.png" alt id="sunm" />
        </div>
        <img src="static/images/room02/窗户.png" alt />
      </div>
      <!-- 桌子 -->
      <div class="desk">
        <div class="desk2">
          <img src="static/images/room02/书桌2.png" alt />
        </div>
        <div class="book">
          <img src="static/images/room02/书.png" alt @click.prevent.self="comeBook" />
        </div>
        <div class="clock">
          <div class="min">
            <img src="static/images/room02/分针.png" alt />
          </div>
          <div class="hou">
            <img src="static/images/room02/分针.png" alt />
          </div>
        </div>
        <div class="hyC">
          <img src="static/images/room02/宏奕工作室.png" alt />
        </div>
      </div>
      <!-- 冰箱 -->
      <div class="frideg">
        <img src="static/images/room02/冰箱.png" alt />
      </div>
      <div @click="nextpage" class="next">
        <div class="cat">
          <img src="static/images/room02/猫.png" alt />
        </div>
      </div>

      <div class="icon">
        <svg
          version="1.1"
          id="图层_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 273.45 252"
          style="enable-background:new 0 0 273.45 252;"
          xml:space="preserve"
        >
          <path
            class="st0"
            d="M87.37,5.84c33.8-0.25,63.93,5.68,97,6c0,0.33,0,0.67,0,1c-0.67,0-1.33,0-2,0c-4.16,2.63-10.01,2.17-15,4
               c-14.44,5.29-29.86,9.83-44,16c-30.92,13.49-56.16,31.8-81,51c-10.68,8.25-25.72,31.45-31,45c-2.21,5.66-1.64,12.58-5,17
               c-0.7-49.74,30.29-102.18,58-123C71.8,17.26,80.83,12.39,87.37,5.84z"
          />
          <path
            class="st0"
            d="M195.37,81.84c-51.45-0.84-103.73,20.27-134,42c-3.64,2.61-6.47,7.33-10,10c-12.11,9.16-32.26,30.09-25,54
               c13.8,45.44,83.05,41.54,116,17c6.25-4.65,13.88-14.36,18-21c2.67-4.31,2.46-9.56,7-12c5.11-3.49,32.3-9.96,40-11
               c0,4.33,0,8.67,0,13c5.67,0,11.33,0,17,0c1.49-4.36,1.08-12.07,1-18c0.33,0,0.67,0,1,0c0-0.33,0-0.67,0-1c5.9-0.61,10.71-2.7,16-4
               c0,2,0,4,0,6c-3.27,4.34-3.36,11.09-6,16c-7.5,13.96-21.41,28.96-34,38c-20.83,14.96-44.75,24.23-74,31
               c-51.04,11.81-110.44-21.39-119-56c-7.66-30.98,21.69-61.19,36-72c2.33-2.67,4.67-5.33,7-8c12.03-9.07,24.24-18.95,37-27
               c33.33-21.01,69.88-34.19,110-49c20.02-7.39,44.19-17.33,69-18c0,0.33,0,0.67,0,1c-8.44,6.08-14.74,17.62-21,26
               c-11.42,15.3-26.57,28.7-38,44c-5.16,6.91-9.98,16.07-17,21c0-1.67,0-3.33,0-5C194.95,95.1,195.37,87.75,195.37,81.84z"
          />
          <path
            class="st0"
            d="M241.37,115.84c4.33,0,8.67,0,13,0c0,4.67,0,9.33,0,14c-4.33,0-8.67,0-13,0
               C241.37,125.17,241.37,120.51,241.37,115.84z"
          />
          <path
            class="st0"
            d="M220.37,129.84c6.33,0,12.67,0,19,0c0,6.33,0,12.67,0,19c-6.33,0-12.67,0-19,0
               C220.37,142.51,220.37,136.17,220.37,129.84z"
          />
        </svg>
      </div>
    </div>

    <div class="bookBox" @click.prevent.self="fadeBook">
      <div id="bookshelf" style="top: 50%;left:50%;">
        <div class="cha">
          <img src="static/images/人物/封面.png" alt style="width:100%;height: 100%;" />
        </div>

        <!-- <div  class="cha">
                    <img src="static/images/人物/李欣懋.png" alt="">
                </div>
                <div class="ever">
                   <div class="content">
                        <span>姓名：李欣懋<br></span>
                        <span>组别：前端组、UI组<br></span>
                        <span>爱好：听歌（尤其是许嵩的歌），看电影（太无聊或太恐怖的就算了ε=(´ο｀*)))）<br></span>
                        <span>个人介绍：</span>
                        <p>
                            一位来自计科的学姐，性格有点跳脱，不过大部分时间也还是蛮可靠的(*^▽^*)。欢迎漂亮小学妹加入宏奕大家庭━(*｀∀´*)ノ亻!至于学弟。。。也欢迎吧╮(╯▽╰)╭。

                        </p>
                    </div>
                </div>

                <div  class="cha">
                    <img src="static/images/人物/吴灿.png" alt="">
                </div>
                <div class="ever">
                     <div class="content">
                        <span>姓名：吴灿<br></span>
                        <span>组别：前端组<br></span>
                        <span>爱好：打游戏<br></span>
                        <span>个人介绍：</span>
                        <p>
                            标准的肥宅，喜欢二次元的妹子，喜欢吃辣片，炸鸡，烧烤.......，性情不定，随时可能发疯，暂时的目标就是搞钱

                        </p>
                    </div>
                </div>

                <div  class="cha">
                    <img src="static/images/人物/贺欣.png" alt="">
                </div>
                <div class="ever">
                     <div class="content">
                        <span>姓名：贺欣<br></span>
                        <span>组别：前端组、UI组<br></span>
                        <span>爱好：<br></span>
                        <span>个人介绍：</span>
                        <p>
                           来自湖南湘潭，就读专业为数据科学与大数据技术。空闲时喜欢听听歌，拍拍风景照，除此之外，还是一个佛系追星女孩，十分希望能有机会和朋友一起去听一次小毛的现场。Welcome to Homyit studio，我们在这里等你！

                        </p>
                    </div>
                </div>

                <div  class="cha">
                    <img src="static/images/人物/张龙.png" alt="">
                </div>
                <div class="ever">
                    <div class="content">
                        <span>姓名：张龙<br></span>
                        <span>组别：前端组<br></span>
                        <span>爱好：猫<br></span>
                        <span>个人介绍：</span>
                        <p>
                            一位神秘的学长，啥也没说
                        </p>
                    </div>
                   
                </div>

                <div  class="cha">
                    <img src="static/images/人物/朱梦迪.png" alt="">
                </div>
                <div class="ever">
                     <div class="content">
                        <span>姓名：朱梦迪<br></span>
                        <span>组别：前端组、UI组<br></span>
                        <span>爱好：<br></span>
                        <span>个人介绍：</span>
                        <p>
                           来自18级计算机科学与技术三班，一名处女座girl,平时喜欢听听音乐、看看电影，追追剧。欢迎学弟学妹们加入宏奕这个大家庭！

                        </p>
                    </div>
                </div>

                <div  class="cha">
                    <img src="static/images/人物/朱益荣.png" alt="">
                </div>
                <div class="ever">
                     <div class="content">
                        <span>姓名：朱益荣<br></span>
                        <span>组别：前端组<br></span>
                        <span>爱好：<br></span>
                        <span>个人介绍：</span>
                        <p>
                            一位神秘的学长，啥也没说
                        </p>
                    </div>
                </div>

                <div  class="cha">
                    <img src="static/images/人物/肖静.png" alt="">
                </div>
                <div class="ever">
                     <div class="content">
                        <span>姓名：肖静<br></span>
                        <span>组别：后端组<br></span>
                        <span>爱好：<br></span>
                        <span>个人介绍：</span>
                        <p>
                            一位神秘的学姐，啥也没说
                        </p>
                    </div>
                </div>

                <div  class="cha">
                    <img src="static/images/人物/林明皓.png" alt="">
                </div>
                <div class="ever">
                     <div class="content">
                        <span>姓名：林明皓<br></span>
                        <span>组别：后端组<br></span>

                        <span>爱好：<br></span>
                        <span>个人介绍：</span>
                        <p>
                            一位神秘的学长，啥也没说
                        </p>
                    </div>
                </div>

                <div  class="cha">
                    <img src="static/images/人物/黄璇 .png" alt="">
                </div>
                <div class="ever">
                     <div class="content">
                        <span>姓名：黄璇<br></span>
                        <span>组别：前端组<br></span>
                        <span>爱好：<br></span>
                        <span>个人介绍：</span>
                        <p>
                            一位神秘的学姐，啥也没说
                        </p>
                    </div>
                </div>

                <div  class="cha">
                    <img src="static/images/人物/罗明.png" alt="">
                </div>
                <div class="ever">
                     <div class="content">
                        <span>姓名：罗明<br></span>
                        <span>组别：后端组<br></span>

                        <span>爱好：<br></span>
                        <span>个人介绍：</span>
                        <p>
                            一位神秘的学长，啥也没说
                        </p>
                    </div>
        </div>-->

        <div class="cha">
          <!-- <img src="static/images/人物/李欣懋.png" alt /> -->
          <img :src="members[0].img" alt />
        </div>
        <div class="ever">
          <div class="content">
            <span>
              姓名：{{members[0].name}}
              <br />
            </span>
            <span>
              组别：{{members[0].group}}
              <br />
            </span>
            <span>
              爱好：{{members[0].hobby}}
              <br />
            </span>
            <span>个人介绍：</span>
            <p>{{members[0].info}}</p>
          </div>
        </div>

        <div class="cha">
          <img :src="members[1].img" alt />
        </div>
        <div class="ever">
          <div class="content">
            <span>
              姓名：{{members[1].name}}
              <br />
            </span>
            <span>
              组别：{{members[1].group}}
              <br />
            </span>
            <span>
              爱好：{{members[1].hobby}}
              <br />
            </span>
            <span>个人介绍：</span>
            <p>{{members[1].info}}</p>
          </div>
        </div>

        <div class="cha">
          <img :src="members[2].img" alt />
        </div>
        <div class="ever">
          <div class="content">
            <span>
              姓名：{{members[2].name}}
              <br />
            </span>
            <span>
              组别：{{members[2].group}}
              <br />
            </span>
            <span>
              爱好：{{members[2].hobby}}
              <br />
            </span>
            <span>个人介绍：</span>
            <p>{{members[2].info}}</p>
          </div>
        </div>

        <div class="cha">
          <img :src="members[3].img" alt />
        </div>
        <div class="ever">
          <div class="content">
            <span>
              姓名：{{members[3].name}}
              <br />
            </span>
            <span>
              组别：{{members[3].group}}
              <br />
            </span>
            <span>
              爱好：{{members[3].hobby}}
              <br />
            </span>
            <span>个人介绍：</span>
            <p>{{members[3].info}}</p>
          </div>
        </div>

        <div class="cha">
          <img :src="members[4].img" alt />
        </div>
        <div class="ever">
          <div class="content">
            <span>
              姓名：{{members[4].name}}
              <br />
            </span>
            <span>
              组别：{{members[4].group}}
              <br />
            </span>
            <span>
              爱好：{{members[4].hobby}}
              <br />
            </span>
            <span>个人介绍：</span>
            <p>{{members[4].info}}</p>
          </div>
        </div>

        <div class="cha">
          <img :src="members[5].img" alt />
        </div>
        <div class="ever">
          <div class="content">
            <span>
              姓名：{{members[5].name}}
              <br />
            </span>
            <span>
              组别：{{members[5].group}}
              <br />
            </span>
            <span>
              爱好：{{members[5].hobby}}
              <br />
            </span>
            <span>个人介绍：</span>
            <p>{{members[5].info}}</p>
          </div>
        </div>

        <div class="cha">
          <img :src="members[6].img" alt />
        </div>
        <div class="ever">
          <div class="content">
            <span>
              姓名：{{members[6].name}}
              <br />
            </span>
            <span>
              组别：{{members[6].group}}
              <br />
            </span>
            <span>
              爱好：{{members[6].hobby}}
              <br />
            </span>
            <span>个人介绍：</span>
            <p>{{members[6].info}}</p>
          </div>
        </div>

        <div class="cha">
          <img :src="members[7].img" alt />
        </div>
        <div class="ever">
          <div class="content">
            <span>
              姓名：{{members[7].name}}
              <br />
            </span>
            <span>
              组别：{{members[7].group}}
              <br />
            </span>

            <span>
              爱好：{{members[7].hobby}}
              <br />
            </span>
            <span>个人介绍：</span>
            <p>{{members[7].info}}</p>
          </div>
        </div>

        <div class="cha">
          <img :src="members[8].img" alt />
        </div>
        <div class="ever">
          <div class="content">
            <span>
              姓名：{{members[8].name}}
              <br />
            </span>
            <span>
              组别：{{members[8].group}}
              <br />
            </span>
            <span>
              爱好：{{members[8].hobby}}
              <br />
            </span>
            <span>个人介绍：</span>
            <p>{{members[8].info}}</p>
          </div>
        </div>

        <div class="cha">
          <img :src="members[9].img" alt />
        </div>
        <div class="ever">
          <div class="content">
            <span>
              姓名：{{members[9].name}}
              <br />
            </span>
            <span>
              组别：{{members[9].group}}
              <br />
            </span>

            <span>
              爱好：{{members[9].hobby}}
              <br />
            </span>
            <span>个人介绍：</span>
            <p>{{members[9].info}}</p>
          </div>
        </div>
      </div>

      <div id="pastBoss" style="top: 50%;left:50%;">
        <div>
          <img src="static/images/人物/封面2.png" alt />
        </div>
        <div>
          <img src="static/images/人物/你们/logo.png" alt />
        </div>
        <div>
          <img src="static/images/人物/你们/同行.png" alt />
        </div>
        <div>
          <img src="static/images/人物/你们/敬请期待.png" alt />
        </div>
      </div>

      <div class="wooden">
        <img src="static/images/room02/木板.png" alt />
      </div>
      <div class="thu">
        <img src="static/images/人物/封面.png" alt @click.self="indu1" />
        <img src="static/images/人物/封面2.png" alt @click.self="indu2" />
      </div>

      <div class="draw" @click="close" style="display: none;">
        <img src="static/images/room02/draw.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
import jquery from "../assets/js/turn.js/extras/jquery.min.1.7";
import turn from "../assets/js/turn.js/lib/turn.js";

import axios from "axios";
import Qs from "qs";
export default {
  name: "House",
  data() {
    return {
      msg: "this is house",
      members: [
        {
          name: "肖静",
          group: "后端",
          hobby: "ctrl",
          info: "dalao",
          img: "static/images/人物/肖静.png"
        },
        {
          name: "罗明",
          group: "后端",
          hobby: "ctrl",
          info: "dalao",
          img: "static/images/人物/罗明.png"
        },
        {
          name: "林明皓",
          group: "后端",
          hobby: "ctrl",
          info: "dalao",
          img: "static/images/人物/林明皓.png"
        },
        {
          name: "黄璇",
          group: "前端",
          hobby: "ctrl",
          info: "dalao",
          img: "static/images/人物/黄璇.png"
        },
        {
          name: "张龙",
          group: "前端",
          hobby: "ctrl",
          info: "dalao",
          img: "static/images/人物/张龙.png"
        },
        {
          name: "朱益荣",
          group: "前端",
          hobby: "ctrl",
          info: "dalao",
          img: "static/images/人物/朱益荣.png"
        },
        {
          name: "吴灿",
          group: "前端",
          hobby: "ctrl",
          info: "dalao",
          img: "static/images/人物/吴灿.png"
        },
        {
          name: "贺欣",
          group: "设计",
          hobby: "ctrl",
          info: "dalao",
          img: "static/images/人物/贺欣.png"
        },
        {
          name: "李欣懋",
          group: "设计",
          hobby: "ctrl",
          info: "dalao",
          img: "static/images/人物/李欣懋.png"
        },
        {
          name: "朱梦迪",
          group: "设计",
          hobby: "ctrl",
          info: "dalao",
          img: "static/images/人物/朱梦迪.png"
        }
      ]
    };
  },

  methods: {
    // 拉绳子
    pull: function() {
      $(".rope").css("animation-play-state", "paused");
      $(".house div").css("animation-play-state", "running");
      $(".house path").css("animation-play-state", "running");
      $(".ropebox").css("transform", "translateY(-100%)");
      $(".first").animate(
        {
          opacity: 0
        },
        4000,
        function() {
          $(".first").css("display", "none");
          $(".houseBox").css("z-index", "200");
        }
      );
    },
    // 书本消失
    fadeBook: function() {
      if (
        document.getElementsByClassName("wooden")[0].style.display != "none"
      ) {
        $(".bookBox").css("display", "none");
      }
    },
    // 书本出现
    comeBook: function() {
      $(".bookBox").css("display", "block");
    },
    // 点击成员,出现成员介绍
    indu1: function() {
      // alert('ssss');
      $(".wooden").css("display", "none");
      $(".thu").css("display", "none");
      $("#bookshelf").css("display", "block");
      $(".draw").css("display", "block");
    },
    // 点击boss,出现boss介绍
    indu2: function() {
      // alert('bb');
      $(".wooden").css("display", "none");
      $(".thu").css("display", "none");
      $("#pastBoss").css("display", "block");
      $(".draw").css("display", "block");
    },
    //关闭书籍
    close: function() {
      // alert('aa');
      $(".wooden").css("display", "block");
      $(".thu").css("display", "flex");
      $("#pastBoss").css("display", "none");
      $("#bookshelf").turn("page", 1);
      $("#pastBoss").turn("page", 1);
      $("#bookshelf").css("display", "none");
      $(".draw").css("display", "none");
    },
    // 下一页
    nextpage: function() {
      $(".next .cat").css("display", "none");
      $(".houseBox").css("transform", "translateX(-100%)");
      $("#wall2").css("transform", "translateX(0)");
    },
    scrollNext: function() {
      if ($(".first").css("display") == "none") {
        if (event.wheelDelta < 0 || event.detail > 0) {
          this.nextpage();
        }
      }
    },
    //点击门跳转到邮箱
    jumpEmail: function() {
      this.$router.push({
        path: "/email"
      });
    },
    getMsg() {
      axios
        .post("http://www.homyit.cn/PC/Findmember", {
          params: {}, //是发送请求的查询参数对象
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          },
          typedata: "json"
        })
        .then(res => {
          console.log("hhh");
          console.log(res);

          this.members = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  // beforecreated:function(){
  //     for(var i=0 ; i<10; i++){

  //         $('#bookshelf').innerHTML +=' <div  class="cha"><img src="static/images/人物/'+this.name[i]+'.png" alt=""></div>'
  //         $('#bookshelf').innerHTML +='<div class="ever">'+'</div>'

  //     }
  // },
  created: function() {
    this.getMsg();
  },
  mounted: function() {
    $(".house div").css("animation-play-state", "paused");
    $(".house path").css("animation-play-state", "paused");
    // chrome and ie
    window.addEventListener("mousewheel", this.scrollNext, false);
    //// firefox
    window.addEventListener("DOMMouseScroll", this.scrollNext, false);

    // 成员书籍设置
    $("#bookshelf").turn({
      gradients: true,
      acceleration: true,
      width: "36vw",
      height: "50vh",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%) translate3d(0px, 0px, 0px)",
      autoCenter: true
    });
    // 往届boss设置
    $("#pastBoss").turn({
      gradients: true,
      acceleration: true,
      width: "36vw",
      height: "50vh",
      autoCenter: true
    });
    $("#bookshelf").turn("zoom", 1.5);
    $("#pastBoss").turn("zoom", 1.5);
    $("#bookshelf").css(
      "transform",
      "translate(-50%,-50%) translate3d(0px, 0px, 0px)"
    );
    $("#pastBoss").css(
      "transform",
      "translate(-50%,-50%) translate3d(0px, 0px, 0px)"
    );
  },
  destroyed: function() {
    window.removeEventListener("mousewheel", this.scrollNext, false);
    window.removeEventListener("DOMMouseScroll", this.scrollNext, false);
  }
};
</script>
<style scoped>
/* @import url("../assets/css/house.css"); */
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
 
}
html,body{
    width: 100%;
    height: 100%;
    /* font-size: calc(100% - 10px); */
    overflow:hidden;
 
}
.houseBox img{
    width: 100%;height: 100%;
    position: relative;
}
.houseBox{
    width: 100%;height: 100vh;
    position: absolute;
    top: 0;left: 0;
    overflow: hidden;
    z-index: 2000;
    transform: translateX(0);
    transition: transform 2s;
    background-color: #111111;
}
/* 黑暗时刻 */
.first{
    position: absolute;
    z-index: 100;
    background-color: #111111;
    width: 100%;height: 100%;
   
}
.first>div>div{
   width: 100%;height: 100%;
    position: relative;
    top: 0;left: 0;
    animation: pull 2s ease-in-out  infinite;
    animation-direction: alternate;
    /* animation-play-state: paused; */
    cursor: pointer;
   
    
    
}
.first>div{
    width: 3vw;height: 70vh;
    top: 0vh;left:5vw;
    transition: all 1s ease-in;
    position: absolute;
}
@keyframes pull{
    0%{
        transform: translateY(-5vh);
    }
    100%{
        transform: translateY(0);
    }
}
.first>div:nth-of-type(2){
    width: 2vw;height: 18vh;
    top: 38vh;left:8vw;
    position: absolute;
}
/* 房子内部景象 */
.house{
    background-image: url('../../static/images/room02/房子.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 100%;height: 100%;
    position: relative;
}
/* 门 */
.door{
    position: absolute;
    width: 5vw;height: 65vh;
    top: 27vh;left: 0vw;
    transform-origin: 0 50%;
    transform: rotateY(90deg);
    animation: open 4s ease-in-out 1s forwards;
    cursor: pointer;
}

@keyframes open{
    0%{
        transform: rotateY(90deg);
    }
    100%{
        transform: rotateY(0deg);
    }
}
/* 窗户 */
.window{
    position: absolute;
    width: 26vw;height: 55vh;
    top: 0vh;left: 10vw;
}
.window>img{
    z-index: 20;
}
.sunm{
    position: absolute;
    width: 15vw;height: 46vh;
    top: 6vh;left: 7vw;
    overflow: hidden;
}
.sunm>img{
    width: 115vh;height: 115vh;
    min-height: 790px;min-width: 790px;
    position: absolute;
    top: 10%;left:50%;
    /* transform: rotate(60deg); */
    animation: rota 40s linear  infinite;
    transform-origin: 0% 40%;
}

@keyframes rota{
    0%{
        transform: rotate(60deg) translate(-50%,-10%);
    }
    100%{
        transform: rotate(-300deg) translate(-50%,-10%);
    }
}
/* @media all and (max-width:1200px){
    .sunm>img{
        top: -8vh;left:-20vw ;
    }
} */
/* 桌子 */
.desk{
    position: absolute;
    width: 32vw;height:58vh;
    top: 24vh;left: 40vw;
    opacity: 0;
    animation: come 1s ease-in 4s forwards;
}
@keyframes come{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
.desk2{
    position: absolute;
    width: 100%;
    height: 77%;
    bottom: 0;
    left: 0;
}
.book{
    position: absolute;
    top: 3vh;left:28vw;
    width: 6vw;height: 9vh;
    cursor: pointer;
}
.book:hover{
    transform: scale(1.2);

}

.hyC{
    position: absolute;
    width: 17vw;height: 9vh;
    left: 7vw;top: -1vh;
    color: #ffffff;
    z-index: 20;
    opacity: 0;
    animation: come 2s ease-in 8s forwards;


}
.hyC span{
    width: 100%;height: 100%;
    font-size: 3vw;
    font-weight: 1000;
}
/* 钟 */
.houseBox .clock{
    width: 22%;height: 20%;
    left: 0vw;top: 0vh;
    position: absolute;
    transform: scale(0.75);
    transform-origin: 0 0;
    background-image:url('../../static/images/room02/时钟.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.houseBox .clock::before{
    content: '';
    width: 22%;height: 20%;
    left: 39%;top: 38%;
    position: absolute;
    transform: scale(0.25);
    border-radius: 100%;
    background-color: #111111;
}
.houseBox .clock .min{
    width: 2%;height: 34%;
    left: 49%;top: 14%;
    position: absolute;
    transform-origin: 50% 100%;
    animation: clockrota 1.67s linear infinite;
}
.houseBox .clock .hou{
    width: 2%;height: 28%;
    left: 49%;top: 19%;
    position: absolute;
    transform-origin: 50% 100%;
    animation: clockrota 20s linear infinite;
}
@keyframes clockrota{
    100%{
        transform: rotate(360deg);
    }
}
/* 挂件 */
.frideg{
    position: absolute;
    width: 14vw;height:49vh;
    top: 25vh;left: 78vw;
    opacity: 0;
    animation: come 1s linear 5s forwards;
}
/* 下一部分 */
.next{
    width: 8vw;height: 100%;
    right: 0;top: 0;
    position: absolute;
  
}
/* 猫 */
.next .cat{
    position: absolute;
    width: 100%;height: 22%;
    top: 32vh;right: 0;
    transform: translateX(100%);
    animation: see 4s ease-in-out 5s infinite alternate; 
    cursor: pointer;
}
@keyframes see{
    0%{
        transform: translateX(100%);
    }
    65%{
        transform: translateX(100%);
    }
    80%{
        transform: translateX(0);
    }
    100%{
        transform: translateX(0);
    }
}


/* 图标 */
.icon{
    position: absolute;
    width: 10vw;height:16vh;
    top: 5vh;left: 52vw;
}
.icon svg{
    width: 100%;height: 100%;
}
.icon path{
    fill-rule:evenodd;
    clip-rule:evenodd;
    fill: none;
    stroke: #ffffff;
    opacity: 0;
    stroke-dasharray: 1500;
    stroke-width: 3px;
    animation: dec 5s cubic-bezier(0,0.23,1,.1) 5s forwards;
}

@keyframes dec{
    0%{
       
        opacity: 0;
        fill: none;
        stroke-dashoffset: 1500;
    }
    30%{
        opacity: 10;
        fill: none;
        stroke-dashoffset: 1500;
    }
    97%{
        
        fill: rgba(255, 255, 255, 0);
        
    }
  
    100%{
        opacity: 10;
        fill: rgba(255, 255, 255, 1);
        stroke-dasharray: 1500 ;
    }
}

/* 书架详情 */

/* 背景 */
.bookBox{
    background: #4390C3;
    z-index: 100;
    width: 100%;height: 100%;
    position: absolute;
    top: 0;left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    display: none;
    /* opacity: 0; */
}
/* 木板 */
.wooden{
    position: absolute;
    top: 57vh;left: 29vw;
    width: 44vw;height: 5vh;
    z-index: 10;
}
@media all and (max-width:900px){
    .wooden{
        left: 20vw;
       width: 65vw;
    }
}
.thu{
    display: flex;
    justify-content: space-around;
    position: absolute;
    top:39vh;left: 33vw;
    width: 36vw;height: 20vh;
    z-index: 50;
}

@media all and (max-width:900px){
    .thu{
        left: 26vw;
        width: 53vw;
    }
    
}

.thu img{
    width: 22%;height: 100%;
    transition: transform 200ms ease-in-out;
    cursor: none;
}
.thu img:hover{

    transform: scale(1.05);
    box-shadow: 0 0 5px #111111;

}
/* x图标 */
.houseBox .draw{
    /* color: #ffffff; */
    /* font-size: 2vw; */
    position: absolute;
    top: 7vh;right: 16vw;
    width: 3vw;height: 6vh;
    opacity: 0.5;
    display: none;
    z-index: 1000;
    transform: scale(1);
    transition: transform 1s;
    cursor: pointer;
}
.houseBox .draw:hover {
    opacity: 1;
    transform: scale(1.2);
  
}
/* 18级介绍 */
#bookshelf{
    /* top: 50%;left:50%;
    transform: translate(-50%,-50%); */
    width: 50vw;height: 50vh;
    position: absolute;
    /* margin: 1% auto; */
    background: #4390C3;
    z-index: 100;
    display: none;  
}

#bookshelf .turn-page{
    -webkit-background-size:100% 100%;
    background-size: 100% 100%;
}
#bookshelf div{
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
   

    width: 100%;height: 100%;
}
#bookshelf .ever{
    background-color: #ffffff;
}
#bookshelf .ever .content{
    width: 80%;height: 80%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    font-size: 0.08rem;
}
#bookshelf .ever .content span{
    margin-bottom: 1vh;
}
#bookshelf img{
    width: 100%;height: 100%;
}
/* 往届boss */
#pastBoss{
    display:none;
    z-index: 100;
}
/* 人物介绍 */
.bookBox .cha{
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
</style>

