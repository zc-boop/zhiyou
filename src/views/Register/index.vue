<template>
  <div class="register">
    <Header title="注册" />
    <div class="registerForm">
      <div class="usernameText">
        <img src="../../assets/Register/eamilIcon@2x.png" />
        <input
          class="usernameInput"
          name="username"
          placeholder="请输入用户名"
          v-model="userInfo.username"
        />
      </div>
      <div class="Splitter"></div>
      <div class="phoneText">
        <img src="../../assets/Register/eamilIcon@2x.png" />
        <input class="phoneInput" name="email" placeholder="请输入手机号/邮箱" v-model="userInfo.email" />
      </div>
      <div class="Splitter"></div>
      <div class="codeText">
        <img src="../../assets/Register/verifyIcon@2x.png" />
        <input class="codeInput" name="code" placeholder="验证码" v-model="userInfo.captcha" />
        <van-button plain type="default" @click="isEmail()" :disabled="attcode">{{code_ts}}</van-button>
        <!--                v-if="showbtn"-->
      </div>
      <div class="Splitter"></div>
      <div class="passwordText">
        <img src="../../assets/Register/passwordIcon1@2x.png" />
        <input
          class="passwordInput"
          name="password"
          placeholder="请输入密码(6-20位数字字母组合)"
          v-model="userInfo.password"
        />
      </div>
      <div class="Splitter1"></div>
      <div style="margin: 16px;" class="registerButton">
        <van-button round block type="info" v-bind:disabled="!this.checked">注册</van-button>
      </div>
      <div class="userAgreement">
        <van-checkbox v-model="checked" checked-color="#07c160">
          <p>
            我已阅读并同意
            <router-link to="login">《用户协议》</router-link>
          </p>
        </van-checkbox>
      </div>

      <center>
        <router-link to="/registersuccee">注册成功页面</router-link>
      </center>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";

export default {
  name: "index",
  data() {
    return {
      userInfo: {
        username: "",
        email: "",
        password: "",
        captcha: ""
      },
      isEmailUse: false,
      checked: false,
      confirm: true, //提交验证按钮判断
      attcode: false, //点击获取验证码按钮判断
      // showbtn: true, // 展示获取验证码或倒计时按钮判断
      yzcode: "",
      code_ts: "获取验证码", //倒计时提示文字
      sec: 60 // 倒计时秒数
    };
  },
  components: {
    Header
  },
  computed: {
    // ...mapState(['email','password','verificationCode'])
  },
  methods: {}
};
</script>

<style scoped>
.head {
  width: 100%;
  height: 50px;
}
.registerForm {
  width: 85%;
  height: 630px;
  margin: 0 auto;
  margin-top: 115px;
}

.registerForm > div {
  display: flex;
  margin: 30px 20px;
}

.registerForm img {
  width: 32px;
  height: 44px;
}

.Splitter {
  width: 91%;
  height: 1px;
  position: relative;
  top: 1px;
  margin: 0 auto;
  background-color: #dcdcdc;
}
.Splitter1 {
  width: 91%;
  height: 2px;
  position: relative;
  top: 2px;
  margin: 0 auto;
  background-color: #dcdcdc;
}
.codeInput {
  width: 80%;
  border: none;
  position: relative;
  left: 21px;
  font-family: SourceHanSansCN-Regular;
  font-size: 30px;
  line-height: 38px;
  color: #999999;
}
.usernameInput {
  width: 80%;
  border: none;
  position: relative;
  left: 21px;
  font-family: SourceHanSansCN-Regular;
  font-size: 30px;
  line-height: 38px;
  color: #999999;
}
.phoneInput,
.passwordInput {
  width: 80%;
  border: none;
  position: relative;
  left: 21px;
  font-family: SourceHanSansCN-Regular;
  font-size: 30px;
  line-height: 38px;
  color: #999999;
}

.codeText button {
  background-color: white;
  border: 1px #51ca89 solid;
  border-radius: 11px;
  color: #51ca89;
  width: 143px;
  height: 40px;
  font-family: SourceHanSansCN-Regular;
  font-size: 20px;
  line-height: 28px;
}

.registerButton {
  margin-top: 100px !important;
}

.registerButton button {
  background-color: #51ca89 !important;
  height: 99px !important;
  font-family: SourceHanSansCN-Regular;
  font-size: 36px;
  line-height: 38px;
  color: #ffffff;
  background-color: #52eba9;
}
.van-checkbox {
  margin: 58px auto;
}

.userAgreement p {
  font-family: SourceHanSansCN-Regular !important;
  font-size: 24px !important;
  line-height: 28px !important;
}
</style>
