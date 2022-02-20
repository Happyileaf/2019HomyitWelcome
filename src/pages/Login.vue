<template>
  <div class="box">
    <div class="wrap">
      <a class="tologin" href="#login">登录</a>
      <a class="toregister" href="#register">注册</a>
      <div class="login" id="login">
        <form @submit.prevent="loginConfirm">
          <h5 class="s1">
            <!-- <label>用户名</label> -->
            <input placeholder="用户名" type="text" v-model="usernameL" />
            <span id="checktext1"></span>
            <p ref="usernameErr"></p>
          </h5>
          <h5 class="s1">
            <!-- <label for="">密码</label> -->
            <input placeholder="密码" type="password" v-model="passwordL" />
            <span id="checktext2"></span>
            <p ref="passwordErr"></p>
          </h5>
          <h5 class="s3">
            <!-- <label>验证码</label> -->
            <input type="text" disabled />
          </h5>
          <h5>
            <input type="checkbox" value="1" v-model="remember" />记住密码
          </h5>
          <input type="submit" value="登录" class="submit" />
        </form>
      </div>
      <div class="register" id="register" @submit.prevent="onSubmit()">
        <form>
          <h5 class="s1">
            <!-- <label>用户名</label> -->
            <input
              placeholder="用户名"
              type="text"
              id="user2"
              v-model="usernameR"
              @blur="usernameCheck();firstCheck()"
            />

            <span id="checktext1"></span>
            <p ref="usernameCheck">*4-10位，可以包含数字、英文字母、中文和下划线</p>
          </h5>
          <h5 class="s1">
            <!-- <label>密码</label> -->
            <input
              placeholder="密码"
              type="password"
              id="password2"
              v-model="passwordR"
              @blur="passwordFormatCheck();passwordConfirmCheck()"
            />
            <span id="checktext2"></span>
            <p ref="passwordCheck">*6-18位，可以包含字母、数字和下划线</p>
          </h5>
          <h5 class="s1">
            <!-- <label>确认密码</label> -->
            <input
              placeholder="确认密码"
              type="password"
              id="makesure"
              v-model="rpsw"
              @blur="passwordFormatCheck();passwordConfirmCheck()"
            />
            <span id="checktext3"></span>
            <p ref="repasswordCheck"></p>
          </h5>
          <h5 class="s1">
            <!-- <label>E-mail</label> -->
            <input
              placeholder="e-mail"
              type="email"
              id="email"
              v-model="email"
              @blur="emailCheck()"
            />
            <span id="checktext4"></span>
            <p ref="emailCheck"></p>
          </h5>
          <input type="submit" value="注册" class="submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import qs from "qs";
import { Decrypt, Encrypt } from "@/assets/js/aes.js";

export default {
  name: "Login",
  data() {
    return {
      loginErr: {
        usernameErr: "",
        passwordErr: "",
        idcoedErr: ""
      },
      usernameL: "",
      passwordL: "",
      usernameR: "",
      passwordR: "",
      rpsw: "",
      email: "",
      remember: "",
      shouldSend: [0, 0, 0, 0]
    };
  },
  methods: {
    loginConfirm() {
      // console.log("加密前");
      // console.log(this.usernameL);
      // console.log(this.passwordL);

      axios({
        url: "http://www.homyit.cn/PC/LoginServlet",
        method: "post",
        data: {
          username: Encrypt(this.usernameL),
          password: Encrypt(this.passwordL)
          // remember: this.remember,
        },
        transformRequest: [
          function(data) {
            // console.log("加密后");
            // console.log(data.username);
            // console.log(data.password);
            // console.log("解密后");
            // console.log(Decrypt(data.username));
            // console.log(Decrypt(data.password));

            data = qs.stringify(data);
            console.log(data);
            return data;
          }
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        dataType: "json"
      })
        .then(res => {
          console.log("连接成功");
          console.log(res);
          if (res.data.message == "用户不存在") {
            this.$refs.usernameErr.innerHTML = "用户不存在！";
            this.$refs.usernameErr.style.color = "red";
          }
          // 如果登录成功
          if (res.data.message == "* 登录成功") {
            this.$refs.passwordErr.innerHTML = "";
            this.$refs.passwordErr.style.color = "green";
            // this.setCookie("username", this.usernameL, 2);
            this.$cookieStore.addCookie("username", this.usernameL, 2);
            // this.$router.push({
            //   path: "/home"
            // });
            // location.reload();
          }

          if (res.data.message == "密码错误") {
            this.$refs.passwordErr.innerHTML = "密码错误！";
            this.$refs.passwordErr.style.color = "red";
          }
        })
        .catch(function(error) {
          console.log(error);
        });
      // axios.post("/api/PC/LoginServlet", {
      //   params: {}, //是发送请求的查询参数对象
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      //   }
      //   // dataType: "json"
      // });
    },
    //设置cookie
    // setCookie: function(cname, cvalue, exdays) {
    //   var d = new Date();
    //   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    //   var expires = "expires=" + d.toUTCString();
    //   // console.info(cname + "=" + cvalue + "; " + expires);
    //   document.cookie = cname + "=" + cvalue + "; " + expires;
    //   // console.info(document.cookie);
    // },
    registerConfirm() {
      // console.log("加密前");
      // console.log(this.usernameR);
      // console.log(this.passwordR);
      // console.log(this.rpsw);
      // console.log(this.email);

      axios({
        url: "http://www.homyit.cn/PC/RegisterServlet",
        method: "post",
        data: {
          username: Encrypt(this.usernameR),
          password: Encrypt(this.passwordR),
          rpsw: Encrypt(this.rpsw),
          email: Encrypt(this.email)
        },
        transformRequest: [
          function(data) {
            console.log("加密后");
            console.log(data.username);
            console.log(data.password);
            console.log(data.rpsw);
            console.log(data.email);
            console.log("解密后");
            console.log(Decrypt(data.username));
            console.log(Decrypt(data.password));
            console.log(Decrypt(data.rpsw));
            console.log(Decrypt(data.email));

            data = qs.stringify(data);
            console.log(data);
            return data;
          }
        ],
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        dataType: "json"
      })
        .then(res => {
          console.log("连接成功");
          console.log(res);
          if (res.data.message == "注册失败，该用户名已存在！") {
            this.$refs.usernameCheck.innerHTML = "注册失败，该用户名已存在！";
            this.$refs.usernameCheck.style.color = "red";
          }
          if (res.data.message == "注册成功") {
            this.$refs.usernameCheck.innerHTML = "注册成功！";
            this.$refs.usernameCheck.style.color = "green";
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    firstCheck() {
      axios({
        url: "http://www.homyit.cn/PC/RegisterServlet",
        method: "post",
        data: {
          username: Encrypt(this.usernameR)
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
          console.log("连接成功");
          console.log(res);
          if (res.data.message == "注册失败，该用户名已存在") {
            console.log("aaa");
            this.$refs.usernameCheck.innerHTML = "注册失败，该用户名已存在";
            this.shouldSend[0] = 0;
            // this.$refs.usernameCheck.style.color = "red";
          }
          if (res.data.message == "注册成功") {
            this.$refs.usernameCheck.innerHTML = "注册成功！";
            // this.$refs.usernameCheck.style.color = "green";
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    usernameCheck() {
      //验证姓名
      var username = this.usernameR; //获取你所填写的信息
      var nameReg = /^[a-zA-Z0-9_-]{4,16}$/; //4到16位（字母，数字，下划线，减号）
      if (!nameReg.test(username)) {
        //判断
        this.$refs.usernameCheck.innerHTML = "用户名不合法"; //输入不合法，则显示提示信息
        this.shouldSend[0] = 0;
      } else {
        this.$refs.usernameCheck.innerHTML = "正确！"; //验证通过后提示
        this.shouldSend[0] = 1;
      }
    },
    passwordFormatCheck() {
      var password = this.passwordR;
      var passwordReg = /^[\d\w]{6,12}$/;
      if (!passwordReg.test(password)) {
        this.$refs.passwordCheck.innerHTML = "密码不合法";
        this.shouldSend[1] = 0;
      } else {
        this.$refs.passwordCheck.innerHTML = "正确！";
        this.shouldSend[1] = 1;
      }
    },
    passwordConfirmCheck() {
      var password = this.passwordR;
      var rpsw = this.rpsw;
      if (password != "" && rpsw != "") {
        if (password == rpsw) {
          this.$refs.repasswordCheck.innerHTML = "正确！";
          this.shouldSend[2] = 1;
        } else {
          this.$refs.repasswordCheck.innerHTML = "两次输入的密码不相同";
          this.shouldSend[2] = 0;
        }
      }
    },
    emailCheck() {
      var email = this.email;
      var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!emailReg.test(email)) {
        this.$refs.emailCheck.innerHTML = "邮箱地址不合法";
        this.shouldSend[3] = 0;
      } else {
        this.$refs.emailCheck.innerHTML = "正确！";
        this.shouldSend[3] = 1;
      }
    },
    // send() {
    //   if (
    //     this.shouldSend[0] &&
    //     this.shouldSend[1] &&
    //     this.shouldSend[2] &&
    //     this.shouldSend[3] == 1
    //   ) {
    //     this.registerConfirm();
    //   }
    // },
    onSubmit() {
      if (
        this.shouldSend[0] &&
        this.shouldSend[1] &&
        this.shouldSend[2] &&
        this.shouldSend[3] == 1
      ) {
        this.registerConfirm();
      }
      return false;
    }
  },
  mounted: function() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  /* font-size: 16px; */
}

html {
  font-size: calc(0.5rem + 10vw + 10vh);
}

.box {
  /*  */

  /* background-color: #edc6ee; */
  /* 隐藏 */
  background: url("../../static/images/login/loginbg.jpg") no-repeat;
  background-size: cover;
  width: 50%;
  height: 70vh;
  padding: 15vh 25%;
  /* font-size: 16px */
}

.wrap {
  /* background-color: rgb(223, 132, 192); */
  /* background: url(img/loginbg.jpg); */
  /* background-clip: "rect(10% 35% 20% 35%)"; */
  /* background-size: 100%; */
  width: 60%;
  height: 1.8rem;
  margin: 0.2rem auto 0 auto;
  position: relative;
  /* border-radius: 10px; */
  border: 2px dotted #f7f7b6;
  /* font-size: 6rem; */
}

.wrap a {
  font-size: 0.2rem;
  color: #f7f7b6;
  height: 0.25rem;
  width: 50%;
  margin: 0.03rem 0;
  /* margin: 0 auto; */
  text-align: center;
  float: left;
  position: relative;
}

/* 定义登录界面 */
.login {
  position: absolute;
  /* top: 50px; */
  margin: 21% 10%;
  width: 80%;

  /* left: 50px; */
  /* background: radial-gradient(200% 100% at bottom center,  #e96f92, #75517d);
	  background: radial-gradient(220% 105% at top center, #75517d 95%, #e96f92 5%); */
  /* background-color: rgb(211, 211, 182); */
  /* 隐藏 */

  background: url("../../static/images/login/loginbg.jpg") no-repeat 37% 33%;
  /* background-color: rgb(40, 55, 122); */
  background-size: 200% 500%;
  z-index: 23;
}

.login h5,
.register h5 {
  height: 0.3rem;
  font-size: 0.1rem;
  color: #f7f7b6;
  width: 100%;
  /* margin: 0 15%; */
}

.login form h5 label,
.register label {
  width: 1rem;
  overflow: hidden;
}

.login h5 > p,
.login h5 > span,
.register h5 > p,
.register h5 > span {
  height: 0.13rem;
  /* line-height: 0.13rem; */
  font-size: 0.05rem;
  color: #f7f7b6;
  width: 100%;
  margin: 0 auto;
  padding: auto;
  overflow: hidden;
  vertical-align: middle;
  /* opacity: 0; */
}

/* 定义注册页面 */
.register {
  position: absolute;
  /* top: 50px; */
  margin: 21% 10%;
  width: 80%;
  /* left: 50px; */
  /* background: radial-gradient(200% 100% at bottom center, #f7f7b6, #e96f92, #75517d, #1b2947);
	  background: radial-gradient(220% 105% at top center, #1b2947 10%, #75517d 40%, #e96f92 65%, #f7f7b6); */
  /* background-color: rgb(116, 73, 139); */
  /* 隐藏 */

  background: url("../../static/images/login/loginbg.jpg") no-repeat 37% 33%;
  /* background-color: rgb(40, 55, 122); */
  background-size: 200% 500%;
  opacity: 1;
  z-index: 21;
  /* overflow: hidden; */
}

form .s1 input {
  background: none;
  border: 0px;
  border-bottom: 1px #f7f7b6 solid;
  /* border-radius: 10px; */
  outline: none;
  font-size: 0.12rem;
  color: #f7f7b6;
  width: 70%;
  /* margin: 0 auto; */
}

form .s2 input {
  background: none;
  border: 0px;
  border-bottom: 1px #f7f7b6 solid;
  /* border-radius: 10px; */
  /* border-radius: 7px; */
  outline: none;
  height: 25px;
  font-size: 0.12rem;
  color: #f7f7b6;
  width: 30%;
}

form .s3 input {
  background: none;
  border: 0px;
  /* border-bottom: 1px #f7f7b6 solid; */
  /* border-radius: 10px; */
  /* border-radius: 7px; */
  outline: none;
  height: 25px;
  font-size: 0.12rem;
  color: #f7f7b6;
  width: 30%;
}

form .s1 input:-ms-input-placeholder,
form .s1 input:-ms-input-placeholder {
  color: rgba(199, 199, 176, 0.87);
  font-size: 0.07rem;
}

form .s1 input::-webkit-input-placeholder,
form .s2 input::-webkit-input-placeholder {
  color: rgba(199, 199, 176, 0.87);
  font-size: 0.07rem;
}

form .s1 input:-moz--placeholder,
form .s2 input:-moz-placeholder {
  color: rgba(199, 199, 176, 0.87);
  font-size: 0.07rem;
}

form .submit {
  width: 100px;
  left: 35%;
  top: 100%;
  height: 30px;
  background-color: #eaeec6;
  border: none;
  border-radius: 10px;
  position: absolute;
}

/* 设置动画 */
#login:target,
#register:target {
  z-index: 23;
  opacity: 1;
  animation: slideIn 1.5s;
}

/* #register:target~.login{
        opacity: 0;
        z-index: -1;
    } */
/* 定义动画 */
@keyframes slideIn {
  from {
    transform: translateX(-15px);
    opacity: 0;
  }

  to {
    transform: rotateX(0px);
    opacity: 1;
  }
}
</style>