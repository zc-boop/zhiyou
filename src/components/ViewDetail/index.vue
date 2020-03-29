<template>
    <div class="viewDetail">
        <div class="viewDetailHeader">
            <div class="headerImg" :style="{backgroundImage:'url('+pictures[0]+')'}">
                <div class="space"></div>
                <div class="header">
                    <van-icon name="arrow-left" @click="$router.go(-1)"/>
                    <div>
                        <img src="../../assets/Community/icon3.png" alt="">
                        <img src="../../assets/Community/icon1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="viewDetailBody">
            <div class="viewNameHeader">
                <div class="viewName">
                    {{scenicDetailList.name}}
                </div>
                <p class="viewNameIntro">
                    电话：{{scenicDetailList.phone}}
                </p>
                <div class="viewLocation">
                    <div>
                        <img src="../../assets/home/dizhi-g.png" alt="">
                        <span>{{scenicDetailList.addr}}</span>
                    </div>
                    <van-icon name="arrow"/>
                </div>
            </div>
            <div class="specificDescription viewTitle">
                <h3>具体介绍</h3>
                <div>
                    <p :style="{'-webkit-line-clamp': isReadMore1?'10000':'0'}">
                        {{scenicDetailList.description}}
                    </p>
                    <span @click="redMore1" :style="{display: isReadMore1?'none':'black'}">... 更多>></span>
                </div>
            </div>
            <div class="playGuide viewTitle">
                <h3>游玩指南</h3>
                <!--<ul class="playLocal">
                    <li>
                        <img src="../../assets/viewDetail/img6.png" alt="图片加载中...">
                        <p>丹巴</p>
                    </li>
                    <li>
                        <img src="../../assets/viewDetail/img7.png" alt="图片加载中...">
                        <p>新都桥</p>
                    </li>
                    <li>
                        <img src="../../assets/viewDetail/img8.png" alt="图片加载中...">
                        <p>稻城</p>
                    </li>
                    <li>
                        <img src="../../assets/viewDetail/img9.png" alt="图片加载中...">
                        <p>亚丁</p>
                    </li>
                </ul>-->
                <ul class="playLocal">
                    暂无
                </ul>
            </div>
            <div class="precautions viewTitle">
                <h3>注意事项</h3>
                <ul class="precautionsList">
                    <li>
                        <h4>高原反应</h4>
                        <div class="precautionsIntro">
                            <p>{{care1}}</p>
                            <van-popup v-model="show" class="my-popup">
                                {{care1}}
                            </van-popup>
                        </div>
                    </li>
                    <li>
                        <h4>宗教文化</h4>
                        <div class="precautionsIntro">
                            <p>{{care2}}</p>
                            <van-popup v-model="show2" class="my-popup">
                                {{care2}}
                            </van-popup>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="viewDetailFooter">
            <ul class="viewDetailFooterList">
                <li class="goAndShare">
                    <router-link :to="{path:'/routelist',query:{scenicid:scenicDetailList.id}}" tag="div">
                        <img src="../../assets/home/wannaGo.png" alt="">
                        <p style="color: #51ca89">想去</p>
                    </router-link>
                    <div>
                        <img src="../../assets/home/share.png" alt="">
                        <p style="color: #BFBFBF">分享</p>
                    </div>
                </li>
                <li class="hotelAndFood">
                    <button style="background: #51ca89;">酒店预订</button>
                    <button style="background: white;color: #51ca89">周边美食</button>
                </li>
            </ul>
        </div>
        <div style="height: 120px;"></div>
    </div>
</template>

<script>
import http from "../../https";

export default {
    name: "index",
    data() {
        return {
            care1: "暂无",
            isReadMore1: false,
            care2: "暂无",
            show: false,
            show2: false,
            TypeId: this.$route.query.id,
            scenicDetailList: [],
            pictures: []


        }
    },
    created() {
        this.getScenicDetail();
    },
    methods: {
        redMore1() {
            this.isReadMore1 = true
        },
        showPopup() {
            this.show = true;
        },
        showPopup2() {
            this.show2 = true;
        },
        getScenicDetail() {
            http.fetchGet('/zhiyou/v1/scenic/' + this.TypeId).then((res) => {
                if (res.data.code === 200) {
                    console.log("..............................res");
                    console.log(res);
                    this.scenicDetailList = res.data.data
                    this.pictures = res.data.data.pictures.split(',')
                } else {
                    console.log("有问题");
                }
            }).catch(reason => {
                console.log(reason);
            })
        }
    }
}
</script>

<style>
    .viewDetailHeader {
        height: 396px;
        position: relative;
    }

    .viewDetailHeader > .headerImg {
        width: 100%;
        height: 396px;
        background-size: 100% 100%;
    }

    .viewDetailHeader .header {
        color: white !important;
        display: flex;
        justify-content: space-between;
        padding: 0 25px;
        font-size: 30px !important;
    }

    .viewDetailHeader .header img {
        margin: 0 20px;
    }

    .viewDetailBody {
        padding-left: 20px;
    }

    .viewNameHeader {
        padding-right: 20px;
        margin-bottom: 50px;
    }

    .viewNameHeader > .viewName {
        font-size: 38px;
        margin-top: 30px;
        margin-bottom: 20px;
    }

    .viewNameIntro {
        font-size: 24px;
        color: #666;
        margin-bottom: 20px;
    }

    .viewLocation {
        display: flex;
        justify-content: space-between;
        font-size: 24px !important;
        color: #666666;
    }

    .viewLocation img {
        width: 19px;
        height: 27px;
        vertical-align: middle;
        margin-right: 10px;
    }

    .specificDescription {
        margin-bottom: 50px;
    }

    .viewTitle > h3 {
        padding-left: 10px;
        border-left: 6px solid #51ca89;
        font-size: 34px;
        margin-bottom: 30px;
        margin-left: 12px;
    }

    .specificDescription > div {
        width: 86%;
        text-align: left;
        margin-left: 27px;
        font-size: 18px;
        line-height: 33px;
        position: relative;
    }

    .specificDescription p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }

    .specificDescription span {
        display: inline-block;
        width: 100px;
        height: 20px;
        background: white;
        font-size: 20px;
        color: #51ca89;
        text-align: center;
        position: absolute;
        bottom: 0;
        right: 0;
        line-height: 20px;
    }

    .playGuide {
        margin-bottom: 50px;
    }

    .playLocal {
        display: flex;
        justify-content: space-between;
        margin-left: 27px;
        overflow: auto;
    }

    .playLocal > li {
        margin-right: 10px;
    }

    .playLocal > li > img {
        width: 205px;
        height: 113px;
        margin-bottom: 20px;
        border-radius: 10px;
    }

    .playLocal > li > p {
        font-size: 24px;
        color: #333333;
    }

    .precautionsList {
        margin-top: 30px;
        font-size: 18px;
        margin-left: 28px;
    }

    .precautionsList > li {
        margin-bottom: 30px;
    }

    .precautionsIntro {
        width: 86%;
        text-align: left;
        line-height: 33px;
        position: relative;
    }

    .precautionsIntro > p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .precautionsIntro > span {
        width: 88%;
        height: 25px;
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 18%;
        font-size: 20px;
        color: #51ca89;
        text-align: left;
        line-height: 30px;
        background: white;
    }

    .my-popup {
        width: 80%;
        height: 50%;
        padding: 20px;
    }

    .viewDetailFooter {
        width: 100%;
        height: 70px;
        box-shadow: 1px 1px 10px #eeeeee;
        background: white;
        position: fixed;
        z-index: 1000;
        left: 0;
        bottom: 0;
        padding: 25px 0;
    }

    .viewDetailFooterList {
        display: flex;
    }

    .goAndShare {
        width: 40%;
        height: 70px;
        display: flex;
        justify-content: space-around;
        text-align: center;
    }

    .goAndShare img {
        width: 48px;
        height: 38px;
    }

    .goAndShare p {
        font-size: 22px;
    }

    .hotelAndFood {
        width: 60%;
        height: 120px;
        display: flex;
        justify-content: space-around;
        padding: 10px 0;
    }

    .hotelAndFood > button {
        display: block;
        width: 197px;
        height: 55px;
        box-sizing: border-box;
        border: 3px solid #51ca89;
        border-radius: 28px;
        color: white;
        font-size: 28px;
    }
</style>
