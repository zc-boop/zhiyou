<template>
    <div class="login">
        <div class="Header">
            <div class="space"></div>
            <van-icon name="arrow-left" color="green" class="l_back" @click="$router.back()"/>
        </div>
        <div class="loginImages">
            <img src="../../assets/Login/user@2x.png"/>
        </div>
        <div class="loginFrom">
            <div class="userText">
                <img src="../../assets/Login/mobileIcon@2x.png"/>
                <input
                        class="phoneInput"
                        name="username"
                        placeholder="请输入手机号/邮箱"
                        v-model="userInfo.username"
                />
            </div>
            <div class="Splitter"></div>
            <div class="passwordText">
                <img src="../../assets/Login/passwordIcon@2x.png"/>
                <input
                        class="passwordInput"
                        name="password"
                        placeholder="请输入密码"
                        v-model="userInfo.password"
                />
            </div>
            <div class="Splitter"></div>
            <p>忘记密码?</p>
            <button @click="login" class="loginButton">立即登录</button>
            <div class="registerUrl">
                <span>没有账号? </span>
                <router-link to="/register">立即注册</router-link>
            </div>
        </div>
        <div class="quickLogin">
            <p>快捷登录</p>
            <img class="wechatIcon" src="../../assets/Login/wechatIcon@2x.png"/>
            <img class="microblogIcon" src="../../assets/Login/microblogIcon@2x.png"/>
            <img class="qqIico" src="../../assets/Login/qqIicon@2x.png"/>
        </div>
    </div>
</template>

<script>
import Header from "../../components/Header";
import https from "../../https.js";
import jwtDecode from "jwt-decode";
import {mapMutations} from "vuex";

export default {
    name: "Login",
    data() {
        return {
            userInfo: {
                username: "calmlyx",
                password: "123456",
            }
        };
    },
    components: {
        Header
    },
    created() {
    },
    methods: {
        ...mapMutations(['adduserInfox']),
        login() {
            https
                .fetchPost("/zhiyou/v1/users/signin", this.userInfo)
                .then(res => {
                    if (res.data.code === 200) {
                        window.localStorage.setItem("token", res.data.token);
                        //获取token进行解析
                        const token = localStorage.getItem("token");
                        console.log(token);
                        // 解析token获取用户信息
                        const user = jwtDecode(token);
                        const toJson = window.JSON.stringify(user);
                        localStorage.setItem('userInfo', toJson);
                        this.adduserInfox(toJson);
                        console.log(toJson);
                        this.goTo("/mine");
                    } else {
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },

    }
};
</script>

<style scoped>
    .space{
        width: 100%;
        height: 30px;
        background-color: white;
    }
    .Header {
        width: 100%;
        background-color: #51ca89;
    }
    .l_back{
        width: 15px;
        height: 30px;
        position: absolute;
        left: 50px;
        top: 50px;
    }
    .loginImages {
        width: 140px;
        height: 140px;
        margin: 0 auto;
        margin-top: 84px;
    }

    .loginImages img {
        width: 140px;
        height: 140px;

    }

    .loginFrom {
        width: 85%;
        height: 40%;
        margin: 0 auto;
        margin-top: 147px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .userText {
        margin-left: 48px;
        display: flex;
        align-items: center;
    }

    .loginFrom img {
        width: 36px;
        height: 50px;
    }

    .phoneInput {
        border: 0;
        margin-left: 21px;
        font-family: SourceHanSansCN-Regular;
        font-size: 30px;
        line-height: 19px;
        color: #999999;
    }

    .passwordText {
        margin-left: 48px;
        margin-top: 58px;
        display: flex;
        align-items: center;
    }

    .passwordInput {
        border: 0;
        margin-left: 21px;
        font-family: SourceHanSansCN-Regular;
        font-size: 30px;
        line-height: 19px;
        color: #999999;
    }

    .Splitter {
        height: 2px;
        margin-left: 27px;
        margin-right: 27px;
        margin-top: 17px;
        background-color: #dcdcdc;
        z-index: 10000;
    }
    .loginFrom > p {
        font-family: "SourceHanSansCN-Regular";
        font-size: 26px;
        line-height: 38px;
        color: #999999;
        margin-top: 46px;
        margin-left: 27px;
    }

    .loginButton {
        width: 100%;
        height: 99px;
        border-radius: 44px;
        margin-top: 52px;
        border: 0;
        font-family: SourceHanSansCN-Regular;
        font-size: 36px;
        line-height: 38px;
        color: #ffffff;
        background-color: #52eba9;
    }
    .registerUrl {
        font-family: SourceHanSansCN-Regular;
        font-size: 26px;
        margin-top: 50px;
        line-height: 19px;
        color: #999999;
        text-align: center;
    }

    .quickLogin {
        width: 64%;
        height: 24%;
        margin: 0 auto;
        margin-top: 16px;
    }

    .quickLogin p {
        font-family: SourceHanSansCN-Regular;
        font-size: 26px;
        line-height: 38px;
        color: #999999;
        text-align: center;
        padding-top: 108px;
    }

    .quickLogin img {
        width: 13%;
        height: 7%;
        margin-top: 75px;
    }

    .qqIico {
        margin-left: 30%;
    }

    .microblogIcon {
        margin-left: 30%;
    }
</style>
