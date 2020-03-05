<template>
    <div class="register">
        <Header title="注册"/>
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
            <center><router-link to="/registersuccee">注册成功页面</router-link></center>
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
        margin: auto;
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

    .phoneInput, .passwordInput {
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
        height: 42px;
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

    .van-radio__icon .van-icon {
        color: #51ca89;
        width: 28px !important;
        height: 28px !important;
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
        font-size: 24px !important;
        line-height: 28px !important;
    }
</style>
