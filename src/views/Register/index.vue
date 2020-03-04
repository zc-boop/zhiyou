<template>
    <div class="register">
        <Header title="注册" style="background: #51ca89;color: white"/>
        <!--<div class="head"></div>
        <van-nav-bar title="注册" left-arrow @click-left="$router.back()">
        </van-nav-bar>-->
        <form class="registerForm">
            <div class="phoneText">
                <img src="../../assets/Register/eamilIcon@2x.png">
                <input class="phoneInput" name="username" placeholder="请输入手机号/邮箱">
            </div>
            <div class="Splitter"></div>
            <div class="codeText">
                <img src="../../assets/Register/verifyIcon@2x.png">
                <input class="codeInput" name="code" placeholder="验证码">
                <van-button plain type="primary">获取验证码</van-button>
            </div>
            <div class="Splitter"></div>
            <div class="passwordText">
                <img src="../../assets/Register/passwordIcon1@2x.png">
                <input class="passwordInput" name="password" placeholder="请输入密码(6-20位数字字母组合)">

            </div>
            <div class="Splitter"></div>
            <div style="margin: 16px;" class="registerButton">
                <van-button round block type="info" native-type="submit">
                    注册
                </van-button>
            </div>
            <van-field name="radio">
                <template #input>
                    <van-radio-group v-model="radio">
                        <van-radio name="1">
                            <p>我已阅读并同意
                                <router-link to="login">《用户协议》</router-link>
                            </p>
                        </van-radio>
                    </van-radio-group>
                </template>
            </van-field>
        </form>
    </div>
</template>

<script>
import Header from "../../components/Header"
export default {
    name: "index",
    data() {
        return {
            username: '',
            password: '',
            sms: '',
            radio: '0',
        };
    },
    components: {
        Header
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
    },


}
</script>

<style scoped>
    .head {
        width: 100%;
        height: 35px;
    }

    .van-nav-bar {
        background: #51ca89;
    }

    .van-icon-arrow-left::before {
        color: white;
    }

    .van-nav-bar__text,
    .van-nav-bar__title {
        color: white;
        font-family: SourceHanSansCN-Regular;
        font-size: 18px;
    }

    .registerForm {
        width: 85%;
        height: 315px;
        margin: 0 auto;
        margin-top: 57px;
    }

    .registerForm > div {
        display: flex;
        margin: 15px 10px;
    }

    .registerForm img {
        width: 19px;
        height: 22px;
    }

    .Splitter {
        width: 91%;
        height: 1px;
        margin: 0 auto;
        background-color: #dcdcdc;
    }

    .codeInput {
        width: 80%;
        border: none;
        position: relative;
        left: 10px;
        font-family: SourceHanSansCN-Regular;
        font-size: 15px;
        line-height: 19px;
        color: #999999;
    }

    .phoneInput, .passwordInput {
        width: 80%;
        border: none;
        position: relative;
        left: 10px;
        font-family: SourceHanSansCN-Regular;
        font-size: 15px;
        line-height: 19px;
        color: #999999;
    }

    .codeText button {
        background-color: white;
        border: 1px #51ca89 solid;
        border-radius: 11px;
        color: #51ca89;
        width: 108px;
        height: 30px;
        font-family: SourceHanSansCN-Regular;
        font-size: 12px;
        line-height: 14px;
    }

    .registerButton {
        margin-top: 50px !important;
    }

    .registerButton button {
        background-color: #51ca89 !important;
    }

    .van-radio__icon .van-icon {
        color: #51ca89;
        width: 14px !important;
        height: 14px !important;
    }

    van-icon van-icon-success {
        background-color: #51ca89 !important;
        border-color: #51ca89 !important;
    }

    .van-radio-group {
        margin: 0 auto !important;
    }

    .van-radio__label p {
        font-family: SourceHanSansCN-Regular !important;
        font-size: 12px !important;
        line-height: 14px !important;
    }
</style>
