<template>
    <div class="login">
        <img id="loginimages" src="../../assets/user@2x.png"/>
        <div class="loginform">
        <van-form @submit="onSubmit">
            <van-field
                    v-model="username"
                    name="用户名"
                    left-icon="phone-o"
                    right-icon="close"
                    placeholder="请输入手机号/邮箱"
                    :rules="[{ required: true, message: '请输入手机号/邮箱' }]"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    left-icon="music-o"
                    placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div class="forget">
                <p><a>忘记密码？</a></p>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    立即登录
                </van-button>
            </div>
        </van-form>
            <div class="register">
                <p>没有账号？<a>立即注册</a></p>
            </div>
        </div>
        <div class="quicklogin">
            <p>快捷登录</p>
            <img class="wechatIcon" src="../../assets/wechatIcon@2x.png"/>
            <img class="microblogIcon" src="../../assets/microblogIcon@2x.png"/>
            <img class="qqIico" src="../../assets/qqIicon@2x.png"/>
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
    *{
        padding: 0px;
        margin: 0px;
    }
    .login{
        width: 100%;
        height: 100%;
    }
    #loginimages{
        position: relative;
        top: 57.5px;
        left: 149.5px;
        right: 150px;
        width: 70px;
        height: 70px;
    }
    .loginform{


        margin-top: 120px;
        margin-left: 27.5px;
        height: 242px;
        width: 320px;
    }
    .forget{
        width: 68px;
        height: 13px;
        margin-left: 15px;
        margin-top: 11px;
        margin-bottom: 13px;
        color: #999999;
        font-family: SourceHanSansCN-Regular;
        font-size: 13px;
        line-height: 19px;
    }
    .register p{
        width: 118px;
        height: 13px;
        margin-left: 100px;
        font-family: "SourceHanSansCN-Regular";
        font-size: 13px;
        line-height: 19px;
        color: #999999;
    }
    .quicklogin{
        width: 239px;
        height: 159px;
        margin-left: 71px;
        margin-top: -20px;
    }
    .quicklogin p{
        width: 52px;
        height: 13px;
        font-family: SourceHanSansCN-Regular;
        font-size: 13px;
        line-height: 19px;
        color: #999999;
        padding-left: 90px;
        padding-top: 54px;
    }
    .quicklogin img{
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
