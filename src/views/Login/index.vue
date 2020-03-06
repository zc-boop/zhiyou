<template>
    <div class="login">
        <div class="mineHeader">
            <div class="space"></div>
            <div class="personalCenter" style="position: relative">
                <van-icon name="arrow-left" class="registerBack" @click="goTo('/mine')"/>
                <div class="pageHeader">登录</div>
            </div>
        </div>
        <div class="loginImages">
            <img src="../../assets/Login/user@2x.png"/>
        </div>

        <div class="loginFrom">
            <div class="userText">
                <img src="../../assets/Login/mobileIcon@2x.png"></img>
                <input class="phoneInput" name="username" placeholder="请输入手机号/邮箱" v-model="userInfo.username"/>
            </div>
            <div class="Splitter"></div>
            <div class="passwordText">
                <img src="../../assets/Login/passwordIcon@2x.png"></img>
                <input class="passwordInput" name="password" placeholder="请输入密码" v-model="userInfo.password"/>
            </div>
            <div class="Splitter2"></div>
            <p>忘记密码?</p>
            <div style="margin: 16px;" class="loginButton">
                <van-button round block type="info" native-type="submit" @click="login">
                    立即登录
                </van-button>
            </div>
            <div class="registerUrl">没有账号
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
import Header from "../../components/Header"
import {mapMutations} from "vuex"

export default {
    name: "Login",
    data() {
        return {
            userInfo: {
                username: '',
                password: '',
            }
        };
    },
    components: {
        Header
    },
    methods: {
        ...mapMutations(['addUser']),
        login() {
            this.$api.post('/zhiyou/v1/users/signin', this.userInfo, res => {
                if (res.status >= 200 && res.status < 300) {
                    //token
                    var userToken = res.data.token;
                    //储存到localStore中
                    localStorage.setItem("eleToken", userToken);
                    // 解析token
                    this.addUser(userToken);
                    console.log(userToken);
                    this.goTo('/mine');
                } else {
                    console.log(res.message);//请求失败，response为失败信息
                }
            });
        }
    },
}
</script>

<style scoped>
    .registerBack {
        width: 20%;
        height: 100%;
        position: absolute !important;
        left: 0;
        line-height: 100px !important;
        z-index: 100;
    }

    .pageHeader {
        width: 100%;
        position: absolute;
        right: 0;
    }

    .loginImages {
        width: 140px;
        height: 140px;
        margin: auto;
        margin-top: 45px;
    }

    .loginImages img {
        width: 140px;
        height: 140px;

    }

    .loginFrom {
        width: 85%;
        height: 484px;
        margin: 0 auto;
        margin-top: 147px;
        display: flex;
        flex-direction: column;

    }

    .userText {
        width: 90%;
        margin-left: 48px;

    }

    .loginFrom img {
        width: 36px;
        height: 50px;
    }

    .phoneInput {
        border: none;
        position: relative;
        left: 21px;
        bottom: 10px;
        font-family: SourceHanSansCN-Regular;
        font-size: 30px;
        line-height: 38px;
        color: #999999;
    }

    .passwordText {
        width: 90%;
        margin-left: 48px;
        margin-top: 56px;
    }

    .passwordInput {
        border: none;
        position: relative;
        left: 21px;
        bottom: 10px;
        font-family: SourceHanSansCN-Regular;
        font-size: 30px;
        line-height: 38px;
        color: #999999;
    }

    .Splitter {
        width: 91%;
        height: 1px;
        margin: 0 auto;
        background-color: #dcdcdc;
    }

    .Splitter2 {
        width: 91%;
        height: 1px;
        margin: 1px auto;
        background-color: #dcdcdc;
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

    }

    .van-button::before {
        width: 85% !important;
        height: 99px !important;
    }

    .loginButton button {
        height: 99px !important;
        font-family: SourceHanSansCN-Regular;
        font-size: 36px;
        line-height: 38px;
        color: #ffffff;
        background-color: #52eba9;
    }

    .registerUrl {
        font-family: SourceHanSansCN-Regular;
        font-size: 26px;
        line-height: 38px;
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
