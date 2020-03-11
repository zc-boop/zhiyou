<template>
    <div class="einfo">
        <Header title="编辑资料"/>
        <div class="editInformation">
            <div class="header">
                <img :src="headerImg || this.$store.state.noHeadPortrait" alt="">
                <p>
                    {{username}}
                    <span class="gender">♀</span>
                </p>
                <ul class="menu">
                    <router-link to="/afans/fans" tag="li">
                        <span>粉丝</span>
                        <span>0</span>
                    </router-link>
                    <router-link to="/afans/attention" tag="li">
                        <span>关注</span>
                        <span>0</span>
                    </router-link>
                    <router-link to="/collect" tag="li">
                        <span>收藏</span>
                        <span>0</span>
                    </router-link>
                </ul>
            </div>
            <form ref="form" enctype="multipart/form-data" id="userInfoForm" name="userInfoForm">
                <!--头像修改-->
                <div class="headPortrait">
                    <span>头像</span>
                    <div class="headPortraitInputDiv">
                        <label for="inputFile">
                            <van-icon name="plus"/>
                        </label>
                        <input type="file"
                               id="inputFile"
                               name="file"
                               style="display: none"
                               multiple
                               accept="image/jpg,image/jpeg,image/png"
                               @change="formIsDirty()"
                        />
                    </div>
                </div>
                <!--其他信息修改-->
                <ul class="otherModify">
                    <li>
                        <span>用户名</span>
                        <div>
                            <input type="text" id="username" :value="username" @input="formIsDirty()">
                            <van-icon name="arrow" class="rightIcon"/>
                        </div>
                    </li>
                    <li>
                        <span>性别</span>
                        <div>
                            <select name="sex" id="sexCheck" @input="formIsDirty()">
                                <option value="default" disabled="disabled">{{sex}}</option>
                                <option value="secrecy">保密</option>
                                <option value="male">男</option>
                                <option value="female">女</option>
                            </select>
                            <van-icon name="arrow" class="rightIcon"/>
                        </div>
                    </li>
                    <li>
                        <span>邮箱</span>
                        <div>
                            <input type="text" :value="email" id="email" @input="formIsDirty()">
                            <van-icon name="arrow" class="rightIcon"/>
                        </div>
                    </li>
                    <li>
                        <span>手机号码</span>
                        <div>
                            <input type="tel" :value="phoneNumber || '无'" id="phoneNumber"
                                   @input="formIsDirty()">
                            <van-icon name="arrow" class="rightIcon"/>
                        </div>
                    </li>
                    <li>
                        <button class="confirmChanges" @click.prevent.stop="changeInfo" :disabled="isDisabled">确认修改
                        </button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>

<script>
import Header from "../../../components/Header"
import http from "../../../https"
import {Dialog} from "vant";

export default {
    name: "index",
    data() {
        return {
            fileList: [],
            headerImg: "",
            username: "",
            email: "",
            phoneNumber: "",
            sex: "男",
            isDisabled: true
        }
    },
    components: {
        Header
    },
    created() {
        this.obtainUserInfo();
    },
    methods: {
        //检查表单是否改变
        formIsDirty() {
            let inputFile = document.getElementById("inputFile").value;
            let username = document.getElementById("username").value;
            let sexCheck = document.getElementById("sexCheck").value;
            let email = document.getElementById("email").value;
            let phoneNumber = document.getElementById("phoneNumber").value;
            const userInfoObj = window.JSON.parse(sessionStorage.getItem('userInfo'));
            if (inputFile !== "" || username !== userInfoObj.username || email !== userInfoObj.email) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
        },
        //修改信息，并上传修改后的信息
        changeInfo() {
            const token = sessionStorage.getItem("token");
            let formData = new FormData(this.$refs.form);
            http.fetchUploadFile('/zhiyou/v1/users/upload/head?token=' + token, formData).then(value => {
                console.log(value);
                Dialog.alert({
                    title: '提示',
                    message: '修改成功，请重新登录！！！'
                }).then(() => {
                    sessionStorage.clear();
                    this.goTo('/login')
                });
            }).catch(reason => {
                Dialog.alert({
                    title: '提示',
                    message: '修改失败！！！'
                })
            })
        },
        //获得用户信息
        obtainUserInfo() {
            if (sessionStorage.getItem("token")) {
                const userInfo = sessionStorage.getItem('userInfo');
                const userInfoObj = window.JSON.parse(userInfo);
                console.log(userInfoObj);
                this.username = userInfoObj.username;
                this.email = userInfoObj.email;
                this.headerImg = userInfoObj.headPortrait;
                // this.phoneNumber = userInfoObj.headPortrait;
            } else {
                this.$dialog.alert({
                    message: '请先登录！！'
                });
                this.goTo('/login')
            }
        }
    }
}
</script>

<style>
    .editInformation {
        width: 100%;
        height: 100%;
        background: #fafafa;
    }

    .editInformation > .header {
        width: 100%;
        height: 385px;
        background: white;
        margin-bottom: 22px;
        text-align: center;
        padding-top: 30px;
    }

    .editInformation > .header > p {
        font-size: 34px;
    }

    .editInformation > .header > img {
        width: 153px;
        height: 153px;
        display: block;
        margin: 0 auto;
        margin-bottom: 25px;
        border-radius: 50%;
    }

    .editInformation > .header .gender {
        color: #fa3a70;
        font-weight: bold;
    }

    .editInformation > .header > .menu {
        display: flex;
        justify-content: space-around;
        margin: 42px 0;
        font-size: 26px;
    }

    .menu > li > span:last-child {
        margin: 0 10px;
        color: #333;
    }

    .headPortrait {
        height: 140px;
        margin: 20px 0;
        background: white;
        padding: 0 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 30px;
    }

    .headPortraitInputDiv label {
        width: 90px;
        height: 90px;
        display: block;
        border-radius: 50%;
        text-align: center;
        line-height: 90px;
        border: 1px solid #cfcfcf;
        color: #cfcfcf;
    }

    .otherModify > li {
        height: 91px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 28px;
        background: white;
        margin: 2px 0;
        font-size: 30px;
    }

    .otherModify > li:nth-child(3) {
        margin-top: 20px;
    }

    .otherModify > li:nth-child(5) {
        margin-bottom: 0;
        padding-top: 27px;
    }

    .otherModify > li > div {
        display: flex;
        align-items: center;
        color: #999;
    }

    .otherModify > li input {
        width: auto;
        border: none;
        text-align: right;
        margin-right: 10px;
    }

    .otherModify > li select {
        width: 200px;
        border: none;
        outline: none;
        color: #999;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        direction: rtl;
        margin-right: 10px;
    }

    .otherModify > li select > option {
        direction: ltr;
    }

    .confirmChanges {
        display: block;
        width: 85%;
        height: 100px;
        margin: 0 auto;
        border: none;
        background: #51ca89;
        color: white;
        border-radius: 50px;
        box-shadow: 0px 5px 10px rgba(81, 202, 137, 0.5);
        font-size: 36px;
    }

    .confirmChanges:disabled {
        background: #eee;
        box-shadow: none;
        color: #b8b8b8;
    }
</style>
