<template>
  <div id="bigbox">
    <h1>
      Contact Us
      <span></span>
    </h1>
    <div class="content" id="content">
      <div class="content-1" id="content-1" ref="left">
        <div>
          <i></i>
          <p>先骕楼北门xxxxxx</p>
          <p>———</p>
        </div>
        <div>
          <span id="right" @click="right"></span>
          <i></i>
          <p>XXXXXXXXXX</p>
          <p>———</p>
        </div>
        <div>
          <i></i>
          <p>XXXXXXXXXXX</p>
        </div>
      </div>
      <div class="content-2" id="content-2" ref="right">
        <h1>Welcome</h1>
        <form action method class="login-form-1" @submit.prevent="submit">
          <input
            class="txtb"
            type="text"
            name
            placeholder="Username"
            @blur="username"
            v-model="name"
          />
          <p ref="name"></p>
          <input
            class="txtb"
            type="password"
            name
            placeholder="Password"
            @blur="password"
            v-model="pwd"
          />
          <p ref="password"></p>
          <input class="login-btn" type="submit" name value="login" />
        </form>
        <span id="left" @click="left"></span>
        <span id="right_2" @click="right_2"></span>
      </div>
      <div class="content-3" id="content-3" ref="register">
        <h1>Register</h1>
        <form action method class="login-form-2" @submit.prevent="submit2">
          <input
            class="txtb"
            type="text"
            name
            placeholder="Username"
            @blur="username2"
            v-model="name2"
          />
          <p ref="name2"></p>

          <input class="txtb" type="text" name placeholder="E-mail" @blur="email" v-model="Email" />
          <p ref="email"></p>

          <input
            class="txtb"
            type="text"
            name
            placeholder="Phone Number"
            @blur="phone"
            v-model="Phone"
          />
          <p ref="phone"></p>

          <input
            class="txtb"
            type="password"
            name
            placeholder="Password"
            @blur="password2"
            v-model="pwd2"
          />
          <p ref="password2"></p>

          <input class="login-btn" type="submit" name value="Register" />
        </form>
        <span id="left_2" @click="left_2"></span>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* @import url(../../assets/fonts/BOOMBOX.css);
@import url(../../assets/css/home/connect.css); */
</style>
<script>
import { constants } from "fs";
import axios from "axios";
import Qs from "qs";
export default {
  name: "App",
  components: {},
  data() {
    return {
      name: "",
      pwd: "",
      Email: "",
      Phone: "",
      name2: "",
      pwd2: ""
    };
  },
  methods: {
    right() {
      this.$refs.left.style.display = "none";
      this.$refs.right.style.display = "block";
    },
    left() {
      this.$refs.left.style.display = "grid";
      this.$refs.right.style.display = "none";
    },
    right_2() {
      this.$refs.right.style.display = "none";
      this.$refs.register.style.display = "grid";
    },

    left_2() {
      this.$refs.register.style.display = "none";
      this.$refs.right.style.display = "block";
    },
    username() {
      //验证姓名
      var name = this.name; //获取你所填写的信息
      var nameReg = /^[a-zA-Z0-9_-]{4,16}$/; //4到16位（字母，数字，下划线，减号）
      if (!nameReg.test(name)) {
        //判断
        this.$refs.name.innerHTML = "请输入4到16位（字母，数字，下划线，减号）"; //输入不合法，则显示提示信息
      } else {
        this.$refs.name.innerHTML = "格式正确！"; //验证通过后提示
      }
    },
    password() {
      var password = this.pwd;
      var passwordReg = /^[\d\w]{6,12}$/;
      if (!passwordReg.test(password)) {
        this.$refs.password.innerHTML = "请输入6~12以内数字、字母或组合密码";
      } else {
        this.$refs.password.innerHTML = "格式正确！";
      }
    },
    email() {
      var email = this.Email;
      var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!emailReg.test(email)) {
        this.$refs.email.innerHTML = "请注意邮箱格式是否正确";
      } else {
        this.$refs.email.innerHTML = "格式正确！";
      }
    },
    phone() {
      var phone = this.Phone;
      var phoneReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (!phoneReg.test(phone)) {
        this.$refs.phone.innerHTML = "请注意手机号格式是否正确";
      } else {
        this.$refs.phone.innerHTML = "格式正确！";
      }
    },
    password2() {
      var password2 = this.pwd2;
      var passwordReg = /^[\d\w]{6,12}$/;
      if (!passwordReg.test(password2)) {
        this.$refs.password2.innerHTML = "请输入6~12以内数字、字母或组合密码";
      } else {
        this.$refs.password2.innerHTML = "格式正确！";
      }
    },
    username2() {
      var name2 = this.name2;
      var nameReg = /^[a-zA-Z0-9_]{4,16}$/;
      if (!nameReg.test(name2)) {
        //判断
        this.$refs.name2.innerHTML = "请输入4到16位（字母，数字，下划线)!";
      } else {
        this.$refs.name2.innerHTML = "格式正确！";
      }
    },
    submit() {
      axios({
        url: "/api/Harry/LoginServlet",
        method: "post",
        data: {
          username: this.name,
          password: this.pwd
        },
        transformRequest: [
          function(data) {
            data = Qs.stringify(data);
            return data;
          }
        ],
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        dataType: "json"
      })
        .then(res => {
          // console.log(res)
          if (res.data.username.length > 0) {
            var ses = window.sessionStorage;
            var d = JSON.stringify(res.data.username); //存入sessionStorage中，因为session接收的是字符串所以要用json转换；
            //JSON.stringify()：将要序列化成 一个JSON 字符串的值。
            // console.log(ses)
            ses.setItem("data", d);
            this.$router.push("/"); //跳转到首页，并且关闭浏览器session自动清除
          } else {
            alert("请输入正确的信息");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    submit2() {
      axios({
        url: "/api/Harry/RegisterServlet",
        method: "post",
        data: {
          username: this.name2,
          password: this.pwd2,
          email: this.Email,
          telphone: this.Phone
        },
        transformRequest: [
          function(data) {
            data = Qs.stringify(data);
            return data;
          }
        ],
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        dataType: "json"
      });
    }
  }
};
</script>


