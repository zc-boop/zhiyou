<template>
    <div class="register">
        <div class="Header">
            <div class="space"></div>
            <div class="headerNavigation">
                <img src="../../assets/Register/returnIcon@2x.png" @click="$router.back()">
                <span>注册</span>
            </div>
        </div>
        <div class="registerForm">
            <div class="usernameText">
                <img src="../../assets/Register/eamilIcon@2x.png"/>
                <input
                        class="usernameInput"
                        name="username"
                        placeholder="请输入用户名"
                        v-model="userInfo.username"
                />
            </div>
            <div class="Splitter"></div>
            <div class="phoneText">
                <img src="../../assets/Register/eamilIcon@2x.png"/>
                <input class="phoneInput" name="email" placeholder="请输入手机号/邮箱" v-model="userInfo.email"/>
            </div>
            <div class="Splitter"></div>
            <div class="codeText">
                <img src="../../assets/Register/verifyIcon@2x.png"/>
                <input class="codeInput" name="code" placeholder="验证码" v-model="userInfo.captcha"/>
                <button  @click="isEmail()" :disabled="attcode">{{code_ts}}</button>
<!--                <van-button plain type="default" @click="isEmail()" :disabled="attcode">{{code_ts}}</van-button>-->
            </div>
            <div class="Splitter"></div>
            <div class="passwordText">
                <img src="../../assets/Register/passwordIcon1@2x.png"/>
                <input
                        class="passwordInput"
                        name="password"
                        placeholder="请输入密码(6-20位数字字母组合)"
                        v-model="userInfo.password"
                />
            </div>
            <div class="Splitter"></div>
            <div style="margin: 16px;" class="registerButton">
                <van-button round block type="info" v-bind:disabled="!this.checked" @click="register()">注册</van-button>
            </div>
        </div>
            <div class="userAgreement">
                <van-checkbox v-model="checked" checked-color="#07c160" icon-size="14px">
                </van-checkbox>
                <span>我已阅读并同意</span>
                <router-link to="login" class="userAgreementText">《用户协议》</router-link>

            </div>

            <center>
                <router-link to="/registersuccee">注册成功页面</router-link>
            </center>

    </div>
</template>

<script>
    import Header from "../../components/Header";
    import https from "../../https";
    import { Dialog } from 'vant';

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
        methods: {
            onSubmit(values) {
                console.log('submit', values);
            },
            getyzcode() {
                var timer = setInterval(() => {
                    this.attcode = true
                    this.sec = this.sec - 1
                    this.code_ts = this.sec + 'S后重试'
                    // this.showbtn = false
                    if (this.sec === 0) {
                        clearInterval(timer)
                        this.sec = 60
                        this.code_ts = '获取验证码'
                        this.attcode = false
                        // this.showbtn = true
                    }
                }, 1000)
            },
            isEmail() {
                var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                console.log(this.userInfo.email)
                if (this.email === '') {
                    Dialog.alert({
                        title: '提示',
                        message: "请输入邮箱地址！"
                    })
                } else if (!regEmail.test(this.userInfo.email)) {
                    Dialog.alert({
                        title: '提示',
                        message: "请输入正确的邮箱地址！"
                    })
                } else {
                    https.fetchGet('/zhiyou/v1/users/email/' + this.userInfo.email, null)
                        .then(res => {
                            console.log(res.data)
                            if (res.data === true) {
                                this.getyzcode()
                                https.fetchGet('/zhiyou/v1/users/captcha?email=' + this.userInfo.email, null)
                                    .then(res => {
                                        // this.isEmailUse = res
                                        console.log(res)
                                        if (res.data.code == 200) {
                                            Dialog.alert({
                                                title: '提示',
                                                message: res.data.msg
                                            })
                                        } else {
                                            Dialog.alert({
                                                title: '提示',
                                                message: res.data.msg
                                            })
                                        }
                                    })
                                    .catch(err => {
                                        Dialog.alert({
                                            title: '提示',
                                            message: res.message
                                        })
                                    })

                            } else {
                              Dialog.alert({
                                title: '提示',
                                message: '邮箱已被使用！'
                              })
                            }
                        })
                        .catch(err => {
                            Dialog.alert({
                                title: '提示',
                                message: '服务器错误，请稍后重试！'
                            })//请求失败，response为失败信息
                        })
                }

            },
            register() {
                var regEmail = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
                if (this.userInfo.username == '') {
                    Dialog.alert({
                        title: '提示',
                        message: '请输入用户名！'
                    })
                } else if (this.userInfo.email == '') {
                    Dialog.alert({
                        title: '提示',
                        message: '请输入邮箱地址！'
                    })
                } else if (!regEmail.test(this.userInfo.email)) {
                    Dialog.alert({
                        title: '提示',
                        message: '请输入正确的邮箱地址！'
                    })
                } else if (this.userInfo.captcha == '') {
                    Dialog.alert({
                        title: '提示',
                        message: '请输入验证码！'
                    })
                } else if (this.userInfo.password == '') {
                    Dialog.alert({
                        title: '提示',
                        message: '请输入密码！'
                    })
                } else {
                    https.fetchGet('/zhiyou/v1/users/username/' + this.userInfo.username, null)
                        .then(res => {
                            console.log(res)
                            if (res.data === true) {
                                https.fetchPost('/zhiyou/v1/users/signup', this.userInfo)
                                    .then(res => {
                                        if (res.data.success === true) {
                                            console.log("注册成功")
                                            console.log(res.data)
                                            this.goTo('/registersuccee');
                                        } else {
                                            console.log("验证码错误")
                                            Dialog.alert({
                                                title: '提示',
                                                message: res.data.msg
                                            })
                                        }
                                    })
                                    .catch(err => {
                                        Dialog.alert({
                                            title: '提示',
                                            message: '服务器错误，请稍后重试！2'
                                        })
                                    })
                            }else{
                                Dialog.alert({
                                    title: '提示',
                                    message: '用户名不可用！'
                                })
                            }

                        })
                        .catch(err => {
                            Dialog.alert({
                                title: '提示',
                                message: '服务器错误，请稍后重试！1'
                            })
                        })
                }
            }
        }
    }
</script>

<style scoped>
    .space{
        width: 100%;
        height: 30px;
        background-color: #51ca89;
    }
    .Header {
        width: 100%;
        background-color: #51ca89;
    }
    .headerNavigation{
        width: 100%;
        height: 98px;
        display: flex;
        align-items: center;
    }
    .headerNavigation img{
        width: 22px;
        height: 40px;
        position: absolute;
        left: 30px;
    }
    .headerNavigation span{
        font-family: SourceHanSansCN-Regular;
        font-size: 36px;
        line-height: 24px;
        color: #ffffff;
        margin: 0 auto;
    }
    .registerForm {
        width: 85%;
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
        height: 2px;
        position: relative;
        top: 1px;
        margin: 0 auto;
        background-color: #dcdcdc;
        z-index:5;
    }

    .Splitter1 {
        width: 91%;
        height: 3px;
        position: relative;
        top: 2px;
        margin: 0 auto;
        background-color: #dcdcdc;
    }
    .codeInput {
        width: 70%;
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
        margin-left: 30px;
        background-color: white;
        border: 1px #51ca89 solid;
        border-radius: 11px;
        color: #51ca89;
        width: 19%;
        height: 42px;
        font-family: SourceHanSansCN-Regular;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
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
    .userAgreement{
        margin-top: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: SourceHanSansCN-Regular !important;
        font-size: 24px !important;
        line-height: 28px !important;
        color: #999999;
    }
    .userAgreement span{
        margin-left: 5px;
    }
    .userAgreementText{
        font-family: SourceHanSansCN-Heavy !important;
        font-size: 24px !important;
        line-height: 28px !important;
        color: #51ca89;
    }
</style>
