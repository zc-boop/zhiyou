<template>
    <div class="login">
        <div class="head"></div>
        <div class="loginImages">
        <img src="../../assets/Login/user@2x.png"/>
        </div>

        <form class="loginFrom">
            <div class="userText">
            <img src="../../assets/Login/mobileIcon@2x.png"></img>
            <input class="phoneInput" name="username" placeholder="请输入手机号/邮箱"/>
            </div>
            <div class="Splitter"></div>
            <div class="passwordText">
                <img src="../../assets/Login/passwordIcon@2x.png"></img>
                <input class="passwordInput" name="password" placeholder="请输入密码"/>
            </div>
            <div class="Splitter"></div>
            <p>忘记密码?</p>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    立即登录
                </van-button>
            </div>
            <div class="registerUrl">没有账号<router-link to="/register">立即注册</router-link></div>
        </form>


        <div class="quickLogin">
            <p>快捷登录</p>
            <img class="wechatIcon" src="../../assets/Login/wechatIcon@2x.png"/>
            <img class="microblogIcon" src="../../assets/Login/microblogIcon@2x.png"/>
            <img class="qqIico" src="../../assets/Login/qqIicon@2x.png"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
                text:''

            };
        },
        methods: {
            onSubmit(values) {
                console.log('submit', values);
            },
        },
    }
</script>

<style scoped>
    .head{
        width: 100%;
        height: 35px;
    }
    .loginImages{
        width: 70px;
        height: 70px;
        margin: auto;
        margin-top: 27px;
    }
    .loginImages img{
        width: 70px;
        height: 70px;

    }
    .loginFrom{
        width: 85%;
        height: 242px;
        margin:0 auto;
        margin-top: 74px;
        display: flex;
        flex-direction:column;

    }
    .userText{
        width: 90%;
        margin-left: 24px;

      }
    .loginFrom img{
        width: 18px;
        height: 25px;
    }
    .phoneInput{
        border: none;
        position: relative;
        left:10px;
        bottom: 6px;
        font-family: SourceHanSansCN-Regular;
        font-size: 15px;
        line-height: 19px;
        color: #999999;
    }
    .passwordText{
        width: 90%;
        margin-left: 24px;
        margin-top: 28px;
    }
    .passwordInput{
        border: none;
        position: relative;
        left:10px;
        bottom: 6px;
        font-family: SourceHanSansCN-Regular;
        font-size: 15px;
        line-height: 19px;
        color: #999999;
    }
    .Splitter{
        width: 91%;
        height: 1px;
        margin: 0 auto;
        background-color: #dcdcdc;
    }
    .loginFrom > p{
        font-family: "SourceHanSansCN-Regular";
        font-size: 13px;
        line-height: 19px;
        color: #999999;
        margin-top: 22px;
        margin-left: 13px;
    }
    .register p{
        width: 118px;
        height: 13px;
        margin: auto;
        font-family: "SourceHanSansCN-Regular";
        font-size: 13px;
        line-height: 19px;
        color: #999999;
    }
    .registerUrl{
        font-family: SourceHanSansCN-Regular;
        font-size: 13px;
        line-height: 19px;
        color: #999999;
        text-align: center;
    }
    .quickLogin{
        width: 239px;
        height: 159px;
        margin: 0 auto;
        margin-top: -20px;
    }
    .quickLogin p{
        width: 52px;
        height: 13px;
        font-family: SourceHanSansCN-Regular;
        font-size: 13px;
        line-height: 19px;
        color: #999999;
        margin: 0 auto;
        padding-top: 54px;
    }
    .quickLogin img{
        width: 50px;
        height: 50px;
        margin-top: 41px;
    }
    .qqIico{
        margin-left: 44px;
    }
    .microblogIcon{
        margin-left: 45px;
    }
</style>
