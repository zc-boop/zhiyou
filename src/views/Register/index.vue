<template>
    <div class="register">
        <Header title="注册"/>
        <div class="registerForm">
            <div class="usernameText">
                <img src="../../assets/Register/eamilIcon@2x.png">
                <input class="usernameInput" name="username" placeholder="请输入用户名" v-model="userInfo.username">
            </div>
            <div class="Splitter"></div>
            <div class="phoneText">
                <img src="../../assets/Register/eamilIcon@2x.png">
                <input class="phoneInput" name="email" placeholder="请输入手机号/邮箱" v-model="userInfo.email">
            </div>
            <div class="Splitter"></div>
            <div class="codeText">
                <img src="../../assets/Register/verifyIcon@2x.png">
                <input class="codeInput" name="code" placeholder="验证码" v-model="userInfo.captcha">
                <van-button plain type="default" @click="isEmail()">获取验证码</van-button>
            </div>
            <div class="Splitter"></div>
            <div class="passwordText">
                <img src="../../assets/Register/passwordIcon1@2x.png">
                <input class="passwordInput" name="password" placeholder="请输入密码(6-20位数字字母组合)" v-model="userInfo.password">

            </div>
            <div class="Splitter1"></div>
            <div style="margin: 16px;" class="registerButton">
                <van-button round block type="info" @click="register()">
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

        </div>
    </div>
</template>

<script>
import Header from "../../components/Header"
// import {mapState,mapMutations} from 'vuex'

export default {
    name: "index",
    data() {
        return {
            userInfo:{
                username:'',
                email: '',
                password:'',
                captcha:'',
            },
            isEmailUse:false,
            isCaptcha:'',
            radio: '0',
        };
    },
    components: {
        Header,
    },
    computed:{
        // ...mapState(['email','password','verificationCode'])
    },
    methods: {
        onSubmit(values) {
            console.log('submit', values);
        },
        isEmail(){
            var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            console.log(this.userInfo.email)
            if(this.email == ''){
                alert("请输入邮箱地址！")
            }else if(!regEmail.test(this.userInfo.email)){
                alert("请输入正确的邮箱地址！")
            }else{
                this.isEmailUse=false
                this.$api.get('/zhiyou/v1/users/email/'+this.userInfo.email,null, res => {
                    if (res.status >= 200 && res.status < 300) {
                        // this.isEmailUse = res
                        this.isEmailUse=res.data
                        console.log(res)
                        console.log(this.isEmailUse)
                        if(this.isEmailUse === true) {
                            this.$api.get('/zhiyou/v1/users/captcha/', this.userInfo.email, res => {
                                if (res.status >= 200 && res.status < 300) {
                                    // this.isEmailUse = res
                                    console.log(res)
                                    if(res.data.success === true){
                                        alert(res.data.msg)
                                    }else {
                                        alert(res.data.msg)
                                    }

                                }else{
                                    alert("邮箱不可用!")
                                }
                            });
                        }
                    } else {
                        alert("服务器错误,请稍后重试!")//请求失败，response为失败信息
                    }
                });

            }

        },
        register(){
            var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            if(this.userInfo.email == ''){
                alert("请输入邮箱地址！")
            }else if(!regEmail.test(this.userInfo.email)) {
                alert("请输入正确的邮箱地址！")
            }else if(this.userInfo.captcha == ''){
                alert("请输入验证码！")
            }else if(this.userInfo.password == ''){
                alert("请输入密码！")
            }else if(this.userInfo.username == ''){
                alert("请输入用户名！")
            }else{
                this.$api.get('/zhiyou/v1/users/username/'+this.userInfo.username,null,res =>{
                    if(res.status >= 200 && res.status < 300){
                        if(res.data.success === true) {
                            this.$api.post('/zhiyou/v1/users/signup', this.userInfo, res => {
                                if (res.status >= 200 && res.status < 300 && res.data.success === true) {
                                    alert(res.data.msg)
                                } else {
                                    alert(res.data.msg)
                                }
                            })
                        }else{
                            alert(res.data.msg)
                        }
                    }else{
                        alert("登录失败！")
                    }
                })
            }
        }
        // ...mapMutations(['changeEmail']),
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
    .usernameInput{
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
