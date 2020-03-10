<template>
    <div class="mine">
        <div class="headerAlls">
            <div class="mineHeader">
                <div class="space"></div>
                <div class="personalCenter">
                    <div class="pageHeader">个人中心</div>
                    <van-icon name="setting-o" class="mineIcon"/>
                </div>
            </div>
            <div class="userCard">
                <div class="cardTop">
                    <div class="left">
                        <img src="../../../public/user6@2x.png" alt/>
                        <router-link :to="username ? '/mine': '/login'" tag="span">{{userInfo.username || "请登录..."}}
                        </router-link>
                    </div>
                    <router-link to="/einfo" tag="button">编辑资料</router-link>
                </div>
                <div class="cardLine"></div>
                <ul class="cardBottom">
                    <router-link to="/afans/fans" tag="li">
                        <p>10</p>
                        <p>粉丝</p>
                    </router-link>
                    <router-link to="/afans/attention" tag="li">
                        <p>12</p>
                        <p>关注</p>
                    </router-link>
                    <router-link to="/myfriend" tag="li">
                        <p>0</p>
                        <p>好友</p>
                    </router-link>
                    <router-link to="/collect" tag="li">
                        <p>2</p>
                        <p>收藏</p>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="mineBody">
            <ul class="OperatingList">
                <router-link to="/cpassword" tag="li">
                    <van-cell class="choiceList" title="修改密码" icon="edit" is-link/>
                </router-link>
                <router-link to="/oservice" tag="li">
                    <van-cell class="choiceList" title="在线客服" icon="service-o" is-link/>
                </router-link>
                <router-link to tag="li">
                    <van-cell class="choiceList" title="应用指南" icon="question-o" is-link/>
                </router-link>
                <router-link to="/feedback" tag="li">
                    <van-cell class="choiceList" title="意见反馈" icon="chat-o" is-link/>
                </router-link>
                <router-link to tag="li">
                    <van-cell class="choiceList" title="切换账号" icon="friends-o" is-link/>
                </router-link>
            </ul>
            <button class="signOut" v-if="isShow" @click="logout">退出账号</button>
        </div>
    </div>
</template>

<script>
/*import jwtDecode from "jwt-decode";
import {mapMutations} from "vuex"*/

export default {
    name: "mine",
    data() {
        return {
            username: "",
            userInfo: [],
            isShow: false
        };
    },
    created() {
        this.setUserInfo();
    },
    methods: {
        setUserInfo() {
            const userInfo = sessionStorage.getItem('userInfo');
            this.userInfo = window.JSON.parse(userInfo);
            this.isShow = true;
        },
        logout() {
            sessionStorage.clear();
            this.isShow = false;
            this.goTo("/login");
        }
    }
};
</script>

<style>
    .headerAlls {
        width: 100%;
        height: 476px;
        background-color: #51ca89;
        position: relative;
    }

    .mineHeader {
        width: 100%;
        height: 170px;
        background-color: #51ca89;
    }

    .personalCenter {
        height: 100px;
        position: relative;
        font-size: 36px;
        text-align: center;
        line-height: 100px;
        color: white;
    }

    .pageHeader {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .mineIcon {
        width: 20%;
        height: 100%;
        position: absolute !important;
        right: 0;
        line-height: 100px !important;
    }

    .userCard {
        width: 90%;
        height: 350px;
        background: white;
        border-radius: 15px;
        box-sizing: border-box;
        border: 1px solid white;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
    }

    .cardTop {
        height: 119px;
        margin-top: 42px;
        display: flex;
        align-items: center;
        padding-left: 51px;
        padding-right: 47px;
        justify-content: space-between;
    }

    .cardTop > .left {
        display: flex;
        align-items: center;
    }

    .cardTop > .left > img {
        width: 119px;
        height: 119px;
        border-radius: 50%;
    }

    .cardTop > .left > span {
        font-size: 34px;
        margin-left: 19px;
    }

    .cardTop > button {
        width: 148px;
        height: 56px;
        border: none;
        border-radius: 18px;
        background-color: #51ca89;
        color: white;
        font-size: 22px;
    }

    .cardLine {
        width: 70%;
        height: 2px;
        background-color: #dcdcdc;
        margin: 0 auto;
        margin-top: 32px;
        margin-bottom: 29px;
    }

    .cardBottom {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }

    .cardBottom > li > p:first-child {
        font-size: 36px;
    }

    .cardBottom > li > p:last-child {
        font-size: 26px;
        color: #808080;
    }

    .mineBody {
        height: 100%;
        background: #f2f2f2;
        box-sizing: border-box;
        border: 1px solid #f2f2f2;
    }

    .OperatingList {
        width: 90%;
        margin: 0 auto;
        margin-top: 50px;
    }

    .OperatingList > li {
        height: 118px;
        box-sizing: border-box;
        border-bottom: 1px solid #dcdcdc;
        position: relative;
    }

    .OperatingList > li > .choiceList {
        font-size: 30px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: none;
    }

    .OperatingList > li > .choiceList > i {
        font-size: 30px !important;
    }

    .signOut {
        display: block;
        width: 200px;
        height: 30px;
        background: none;
        border: none;
        margin: 41px auto;
        color: #ff0000;
        font-size: 30px;
    }
</style>
