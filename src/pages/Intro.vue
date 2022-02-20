<template>
  <div class="page" id="page02">
    <img class="wave" id="wave1" src="static\images/波纹.png" alt />
    <img class="wave" id="wave2" src="static\images/page02/波纹.png" alt />
    <div class="wrap" id="wrap">
      <h1></h1>
      <p></p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Intro",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      h1:'Homyit Studio',
      p:'宏奕工作室(Homyit Studio)成立于2019年9月是在计信学院各领导、老师的大力支持下迅速成长起来的学生自主研发工作室。以社团的模式传承，以模拟公司的方式运营。宏奕工作室致力于Web开发，在12级创始人王宏凯及十余名长老成员共同努力下，本着“有爱同行，踏实求新”的侠客情怀，通过开办技术培训、承接商业项目，致力于为我院学生提供一个专业的Web开发修炼圣地，为我院培养出更多就业型人才。以超强的团队凝聚力和深厚的技术实力得到学院师生的肯定。',
      times:0,
    };
  },
  methods: {
    introType:function () {
      // 页面滚动的距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 这部分到页面顶部的距离
      var offsetTop = document.querySelector("#page02").offsetTop;
      if(scrollTop >= offsetTop *0.8 ) {
        if(this.times == 0){
        this.autoType();
        this.times++;
         window.removeEventListener("scroll", this.introType);
        }
      // console.log('sss');
      }
    },
    autoType() {
      
      var speed = 60;
      var h1 = document.querySelector("h1");
      var p = document.getElementsByTagName("p")[0];
      var delay = h1.innerHTML.length * speed + speed;
     
      // 立即打印h1
      
      this.type(h1, speed);

      // 延迟打印p

      setTimeout(()=>{
        p.style.display = "inline-block";
        this.type(p, speed);
      }, delay);

      
    },
    // 打字效果函数：两个参数，元素和速度
     type: function (element, speed) {
      //  console.log(element);
        var text ;
        if(element == document.getElementsByTagName("p")[0]) text = this.p;
        else text = this.h1;
        // console.log(text);
        var i = 0;
        var timer = setInterval(function() {
          if (i < text.length) {
            element.append(text.charAt(i)); //charAt() 方法可返回指定位置的字符。
            i++;
          } else {
            clearInterval(timer);
          }
        }, speed);
      },
  },
  mounted: function() {
    window.addEventListener('scroll',this.introType)
    // window.addEventListener("scroll", this.autoType());
  },
   destroyed:function(){
     window.removeEventListener("scroll", this.introType);
        
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

#page02 {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: url("../../static/images/page02/背景.png");
  background-size: auto 100%;
  overflow: hidden;
}

#page02 > img {
  padding: 5vh 5vw;
  width: 100vw;
  height: 54.5vh;
  position: absolute;
  box-sizing: border-box;
}

#page02 #wave1 {
  left: 0vw;
  animation: wavemove1 25s infinite linear;
}

#page02 #wave2 {
  left: -100vw;
  animation: wavemove2 25s infinite 12.5s linear;
}

.wrap {
  width: 50vw;
  min-height: 70vh;
  margin: auto;
  padding: 15vh 0;
}

.wrap h1,
p {
  margin: 5vh 0;
  padding: 0;
}

.wrap h1 {
  font-size: 0.15rem;

  color: rgb(255, 208, 0);
  margin: 5vh 0;
  padding: 0;
}

.wrap p {
  width: 100%;
  font-size: 0.09rem;
  text-align: left;
  text-indent: 2em;
  line-height: 0.15rem;
  letter-spacing: 0.03rem;
}

@keyframes wavemove1 {
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

@keyframes wavemove2 {
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
</style>
