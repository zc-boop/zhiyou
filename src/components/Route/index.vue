<template>
    <div class="route">
        <div class="peripheryHeader">
            <div class="space"></div>
            <div class="headerSearch">
                <van-icon name="arrow-left" class="l_back" @click="goTo('/recommend')"/>
                <div class="searchBox">
                    <img src="../../assets/Community/sousuo.png" alt="">
                    <input type="text" placeholder="成都">
                </div>
                <div class="l_locate">
                    <img src="../../assets/Community/dizhi.png" alt="">
                    <span>成都</span>
                </div>
            </div>
        </div>
        <div class="routerDetail">
            <div class="variability">
                <van-form @submit="">
                    <!--城市选择控件-->
                    <div class="routerCity">
                        <h3 class="routerDetailHeader">您的往返城市</h3>
                        <div class="routerCityChange">
                            <div class="departure">
                                <van-field
                                        readonly
                                        clickable
                                        name="area"
                                        :value="value"
                                        label="出发"
                                        placeholder="点击选择省市区"
                                        @click="showArea = true"
                                />
                                <van-popup v-model="showArea" position="bottom">
                                    <van-area
                                            :area-list="areaList"
                                            @confirm="onConfirm"
                                            @cancel="showArea = false"
                                    />
                                </van-popup>
                            </div>
                            <div class="destination">
                                <van-field
                                        readonly
                                        clickable
                                        name="area"
                                        :value="value2"
                                        label="返回"
                                        placeholder="点击选择省市区"
                                        @click="showArea2 = true"
                                />
                                <van-popup v-model="showArea2" position="bottom">
                                    <van-area
                                            :area-list="areaList2"
                                            @confirm="onConfirm2"
                                            @cancel="showArea2 = false"
                                    />
                                </van-popup>
                            </div>
                        </div>
                    </div>
                    <!--时间选择控件-->
                    <div class="routeDate">
                        <h3 class="routerDetailHeader">您的往返日期</h3>
                        <div class="routerCityTime">
                            <div class="departureTime">
                                <van-field
                                        readonly
                                        clickable
                                        name="calendar"
                                        :value="valueDate1"
                                        label="出发"
                                        placeholder="点击选择日期"
                                        @click="showCalendar = true"
                                />
                                <van-calendar v-model="showCalendar" @confirm="onConfirmTime"/>
                            </div>
                            <div class="returnTime">
                                <van-field
                                        readonly
                                        clickable
                                        name="calendar"
                                        :value="valueDate2"
                                        label="返回"
                                        placeholder="点击选择日期"
                                        @click="showCalendar2 = true"
                                />
                                <van-calendar v-model="showCalendar2" @confirm="onConfirmTime2"/>
                            </div>
                        </div>
                    </div>
                </van-form>
            </div>
            <div class="schedule">
                <h3 class="routerDetailHeader">行程安排</h3>
                <ul class="arrangementList">
                    <li>
                        <div class="period">
                            <span class="point"></span>
                            <p class="time">2020.03.11 <span>星期三</span></p>
                        </div>
                        <router-link to="/viewdetail" tag="div" class="attractionsCard">
                            <div class="left">
                                <div class="playSites">
                                    <img src="../../assets/viewDetail/icon2.png" alt="">
                                    <span>成都游玩</span>
                                </div>
                                <p class="specificLoc">宽窄巷子</p>
                                <p class="cost">免费</p>
                                <div class="playTime">
                                    建议游玩3-5小时
                                </div>
                            </div>
                            <div class="right">
                                <img src="../../assets/viewDetail/img10.png" alt="">
                            </div>
                        </router-link>
                        <router-link to="/viewdetail" tag="div" class="attractionsCard">
                            <div class="left">
                                <div class="playSites">
                                    <img src="../../assets/viewDetail/icon2.png" alt="">
                                    <span>成都游玩</span>
                                </div>
                                <p class="specificLoc">锦鲤</p>
                                <p class="cost">免费</p>
                                <div class="playTime">
                                    建议游玩2-3小时
                                </div>
                            </div>
                            <div class="right">
                                <img src="../../assets/viewDetail/img11.png" alt="">
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <div class="period">
                            <span class="point"></span>
                            <p class="time">2020.03.12 <span>星期四</span></p>
                        </div>
                        <router-link to="/viewdetail" tag="div" class="attractionsCard">
                            <div class="left">
                                <div class="playSites">
                                    <img src="../../assets/viewDetail/icon2.png" alt="">
                                    <span>成都游玩</span>
                                </div>
                                <p class="specificLoc">大型猫繁育基地</p>
                                <p class="cost">￥150/人</p>
                                <div class="playTime">
                                    建议游玩2-3小时
                                </div>
                            </div>
                            <div class="right">
                                <img src="../../assets/viewDetail/img12.png" alt="">
                            </div>
                        </router-link>
                        <router-link to="/viewdetail" tag="div" class="attractionsCard">
                            <div class="left">
                                <div class="playSites">
                                    <img src="../../assets/viewDetail/icon2.png" alt="">
                                    <span>成都游玩</span>
                                </div>
                                <p class="specificLoc">武侯祠</p>
                                <p class="cost">￥45/人</p>
                                <div class="playTime">
                                    建议游玩3-5小时
                                </div>
                            </div>
                            <div class="right">
                                <img src="../../assets/viewDetail/img13.png" alt="">
                            </div>
                        </router-link>
                    </li>
                </ul>
        </div>
    </div>
    </div>
</template>

<script>
let provinceList = require('../ViewDetail/city')
export default {
    name: "index",
    data() {
        return {
            value: '',
            value2: '',
            valueDate1: '',
            valueDate2: '',
            showCalendar: false,
            showCalendar2: false,
            showArea: false,
            showArea2: false,
            areaList: {}, // 数据格式见 Area 组件文档
            areaList2: {}, // 数据格式见 Area 组件文档
        };
    },
    created() {
        this.areaList = provinceList.default;
        this.areaList2 = provinceList.default;
        console.log(provinceList);
    },
    methods: {
        //地区选择函数
        onConfirm(values) {
            this.value = values.map(item => item.name).join('-');
            this.showArea = false;
        },
        onConfirm2(values) {
            this.value2 = values.map(item => item.name).join('-');
            this.showArea2 = false;
        },
        //时间选择函数
        onConfirmTime(date) {
            this.valueDate1 = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
            this.showCalendar = false;
        },
        onConfirmTime2(date) {
            this.valueDate2 = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
            this.showCalendar2 = false;
        },
    },
}
</script>

<style>
    .routerDetailHeader {
        padding-left: 10px;
        border-left: 6px solid #51ca89;
        font-size: 30px;
    }

    .routerDetail {
        margin-top: 50px;
        padding: 0 20px;
    }

    .routerCityChange, .routerCityTime {
        margin-top: 30px;
        margin-bottom: 50px;
        border: 2px solid #f5f5f5;
        padding: 19px 0;
        display: flex;
        justify-content: space-between;
        border-radius: 10px;
    }

    .variability .van-field__label {
        width: auto !important;
        margin-right: 24px !important;
    }

    .variability .van-field__label > span {
        font-size: 24px !important;
        color: #b1b1b1 !important;
    }

    .variability .van-field__control {
        color: #51ca89 !important;
        font-size: 24px !important;
    }

    /*    ...................*/
    .arrangementList {
        padding-left: 24px;
        margin: 40px 0;
    }

    .point {
        width: 11px;
        height: 11px;
        display: block;
        background: #51ca89;
        border-radius: 50%;
        margin-top: 4px;
    }

    .period {
        height: 20px;
        display: flex;
    }

    .period > .time {
        font-size: 26px;
        line-height: 20px;
        margin-left: 20px;
    }

    .attractionsCard {
        width: 87%;
        height: auto;
        box-shadow: 0px 0px 7px rgba(81, 202, 137, 0.54);
        margin-top: 45px;
        margin-bottom: 50px;
        padding-bottom: 30px;
        display: flex;
        justify-content: space-between;
        position: relative;
    }

    .attractionsCard:before {
        content: "";
        position: absolute;
        width: 15px;
        height: 110px;
        background: url("../../assets/viewDetail/bk2.png");
        background-size: 100% 100%;
        left: 10px;
        bottom: -80px;
    }

    .attractionsCard:after {
        content: "";
        position: absolute;
        width: 15px;
        height: 110px;
        background: url("../../assets/viewDetail/bk2.png");
        background-size: 100% 100%;
        right: 10px;
        bottom: -80px;
    }

    .attractionsCard:last-of-type:before {
        content: "";
        position: absolute;
        background: none;
    }

    .attractionsCard:last-of-type:after {
        content: "";
        position: absolute;
        background: none;
    }

    .attractionsCard > .left {
        margin-left: 38px;
    }

    .playSites {
        margin-top: 53px;
    }

    .playSites > img {
        width: 35px;
        height: 26px;
    }

    .playSites > span {
        font-size: 26px;
        margin-left: 15px;
        color: #333;
    }

    .attractionsCard > .left > .specificLoc {
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 30px;
        color: #333;
    }

    .attractionsCard > .left > .cost {
        font-size: 24px;
        color: #ff0000;
        margin-bottom: 22px;
    }

    .playTime {
        font-size: 26px;
        color: #333;
    }

    .attractionsCard > .right {
        margin-right: 40px;
    }

    .attractionsCard > .right > img {
        width: 316px;
        height: 252px;
        border-radius: 10px;
        margin-top: 30px;
    }
</style>
