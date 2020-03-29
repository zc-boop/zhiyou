<template>
    <div class="einfo">
        <Header title="编辑资料"/>
        <div class="editInformation">
            <form ref="form" enctype="multipart/form-data" id="userInfoForm" name="userInfoForm">
                <div class="header">
                    <label  @click="showPopup">
                        <img :src="headerImg || this.$store.state.noHeadPortrait" alt="" width="100" height="100">
                    </label>
                    <van-popup v-model="show" position="bottom" :style="{ height: '20%' }">
                        <div class="headPortraitUpSelect">
                            <div class="van-popupPhoto" @click="uploadPictures">
                                照相
                            </div>
                            <div class="van-popupInputFile">
                                <label for="inputFile">
                                    从相册中选取
                                </label>
                            </div>
                            <div class="van-popupCancel" @click="hidePopup">
                                取消
                            </div>
                        </div>
                    </van-popup>
                    <input type="file"
                           id="inputFile"
                           name="file"
                           style="display: none"
                           multiple
                           accept="image/jpg,image/jpeg,image/png"
                           @change="modifyAvatar()"
                    />
                    <p>
                        {{nickname}}
                    </p>
                </div>
                <!--其他信息修改-->
                <ul class="otherModify">
                    <li>
                        <span>用户名</span>
                        <div  @click="prompt">
                            <input type="text" id="username" :value="username" disabled />
                            <van-icon name="arrow" class="rightIcon" style="opacity: 0"/>
                        </div>
                    </li>
                    <li>
                        <span>昵称</span>
                        <div>
                            <input type="text" id="nickname" :value="nickname" @input="formIsDirty()">
                            <van-icon name="arrow" class="rightIcon"/>
                        </div>
                    </li>
                    <li>
                        <span>性别</span>
                        <div @click="prompt">
                            <input type="text" id="sexCheck" :value="sex" disabled />
                            <van-icon name="arrow" class="rightIcon" style="opacity: 0"/>
                        </div>
                    </li>
                    <li>
                        <span>邮箱</span>
                        <div @click="prompt">
                            <input type="text" :value="email" id="email" disabled />
                            <van-icon name="arrow" class="rightIcon" style="opacity: 0"/>
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
                        <button class="confirmChanges"
                                @click.prevent.stop="modifyInfo"
                                :disabled="isDisabled">确认修改
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
            nickname: "",
            email: "",
            phoneNumber: "",
            sex: "男",
            isDisabled: true,
            show: false
        }
    },
    components: {
        Header
    },
    created() {
        this.obtainUserInfo();
    },
    methods: {
        //弹出上传头像
        showPopup() {
            this.show = true;
        },
        //隐藏上传头像
        hidePopup() {
            this.show = false;
        },
        //拍照上传
        uploadPictures(){
            Dialog.alert({
                title: '提示',
                message: '还未开采出来哟！！'
            })
        },
        //提示不能修改
        prompt(){
            this.$notify({
                message: '不能修改哟！！',
                type: 'warning'
            });
        },
        //检查表单是否改变
        formIsDirty() {
            let nickname = document.getElementById("nickname").value;
            const userInfoObj = window.JSON.parse(localStorage.getItem('userInfo'));
            if (nickname !== userInfoObj.username) {
                this.isDisabled = false;
            } else {
                this.isDisabled = true;
            }
        },
        //修改头像，并上传修改后的信息
        modifyAvatar() {
            const token = localStorage.getItem("token");
            let formData = new FormData(this.$refs.form);
            http.fetchUploadFile('/zhiyou/v1/users/upload/head?token=' + token, formData).then(value => {
                console.log(value);
                this.show = false;
                Dialog.alert({
                    title: '提示',
                    message: '修改成功，请重新登录！！！'
                }).then(() => {
                    localStorage.clear();
                    this.goTo('/login')
                });
            }).catch(reason => {
                Dialog.alert({
                    title: '提示',
                    message: '修改失败！！！'
                })
            })
        },
        //修改其他信息
        modifyInfo(){
            // /zhiyou/v1/users/userinfo/{id}
            const token = localStorage.getItem("token");
            let formData = new FormData(this.$refs.form);
            http.fetchPut('/zhiyou/v1/users/userinfo/id'+this.$store.state.id,{token,nickname}).then(value => {
                console.log(value);
                Dialog.alert({
                    title: '提示',
                    message: '修改成功，请重新登录！！！'
                }).then(() => {
                    localStorage.clear();
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
            if (localStorage.getItem("token")) {
                const userInfo = localStorage.getItem('userInfo');
                const userInfoObj = window.JSON.parse(userInfo);
                console.log(userInfoObj);
                this.username = userInfoObj.username;
                this.email = userInfoObj.email;
                this.headerImg = userInfoObj.headPortrait;
                this.nickname = userInfoObj.nickname;
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

    .editInformation   .header {
        width: 100%;
        height: 300px;
        background: white;
        margin-bottom: 22px;
        text-align: center;
        padding-top: 30px;
    }

    .editInformation   .header > p {
        font-size: 34px;
    }

    .editInformation  .header   img {
        width: 153px;
        height: 153px;
        display: block;
        margin: 0 auto;
        margin-bottom: 25px;
        border-radius: 50%;
        border: 2px solid #eee;
        padding: 10px;
    }
    .headPortraitUpSelect{
        width: 100%;
        font-size: 32px;
        position: absolute;
        bottom: 0;
    }
    .headPortraitUpSelect>div:first-of-type{
        border-top: 1px solid #eee;
    }
    .headPortraitUpSelect>div{
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #eee;
        line-height: 80px;
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

    .otherModify > li input:disabled {
        background: white;
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
        background: white;
    }

    .otherModify > li select > option {
        direction: ltr;
        background: white;
    }

    .confirmChanges {
        display: block;
        width: 85%;
        height: 100px;
        margin: 0px auto;
        margin-top: 100px;
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
