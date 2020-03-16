<template>
    <div class="hotels">
        <van-dropdown-menu active-color="#51ca89">
            <van-dropdown-item v-model="value" :options="option1" />
            <van-dropdown-item v-model="value" :options="option2" />
            <van-dropdown-item v-model="value" :options="option3" />
            <van-dropdown-item title="筛选" ref="item">
                <van-switch-cell v-model="switch1" title="包邮" />
                <van-switch-cell v-model="switch2" title="团购" />
                <van-button block type="info" @click="onConfirm">确认</van-button>
            </van-dropdown-item>
        </van-dropdown-menu>
        <ul>
            <router-link  to="/hoteldetails">
            <li class="hotelList">
                <img src="../../../assets/Periphery/hotel1.png">
                <div class="hotelInformation">
                    <p class="hotelName">包子南路Bao酒店</p>
                    <p class="hotelDistance">距离 200米 广州市</p>
                    <p class="hotelPrice">￥420 <span>起</span></p>
                    <div class="hotelLabels">
                        <span>景区排名第一</span>
                        <span>温泉酒店</span>
                    </div>
                </div>
            </li>
            </router-link>
            <li class="hotelList">
                <img src="../../../assets/Periphery/hotel2.png">
                <div class="hotelInformation">
                    <p class="hotelName">包包特惠风情酒店</p>
                    <p class="hotelDistance">距离 500米 广州市</p>
                    <p class="hotelPrice">￥680 <span>起</span></p>
                    <div class="hotelLabels">
                        <span>市区唯一连锁</span>
                        <span>风情酒店</span>
                    </div>
                </div>
            </li>
            <li class="hotelList">
                <img src="../../../assets/Periphery/hotel3.png">
                <div class="hotelInformation">
                    <p class="hotelName">包子连锁酒店</p>
                    <p class="hotelDistance">距离 800米 广州市</p>
                    <p class="hotelPrice">￥280 <span>起</span></p>
                    <div class="hotelLabels">
                        <span>景区排名第一</span>
                        <span>连锁酒店</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            value: 0,
            switch1: false,
            switch2: false,
            option1: [
                {text: '推荐排序', value: 0},
            ],
            option2:[
                {text: '价格/星级', value: 0},
            ],
            option3:[
                {text: '智能排序', value: 0},
            ]
        }
    },
    methods: {
        onConfirm() {
            this.$refs.item.toggle();
        }
    }
}
</script>

<style>
    .hotels{
        background-color: #f5f5f5;
    }
    .hotelList{
        width: 95%;
        height: 272px;
        display: flex;
        margin: 19px 3%;
        background-color: white;
    }
    .hotelList > img{
        width: 35%;
        height: 204px;
        margin: 32px 10px;
    }
    .hotelInformation{
        margin-top: 31px;
        margin-left: 22px;
    }
    .hotelName{
        font-family: SourceHanSansCN-Regular;
        font-size: 30px;
        line-height: 42px;
        color: #333333;
    }
    .hotelDistance{
        margin-top: 13px;
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 42px;
        color: #7b889b;
    }
    .hotelPrice{
        margin-top: 13px;
        font-family: SourceHanSansCN-Regular;
        font-size: 30px;
        line-height: 42px;
        color: #ff0000;
    }
    .hotelPrice > span{
        font-size: 28px;
        color: #7b889b;
    }
    .hotelLabels{
        margin-top: 10px;
    }
    .hotelLabels span{
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 42px;
        color: #51ca89;
        background-color: #d7f1e3;
        border-radius: 2px;
        padding: 5px 23px;
    }
    .hotelLabels span:nth-child(2){
        margin-left: 10px;
    }
</style>
