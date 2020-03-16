<template>
    <div class="foodDetails">
        <div class="foodPictures">
            <img src="../../../assets/Periphery/foodbanner.png">
            <img src="../../../assets/Periphery/returnIcon@2x.png" @click="$router.back()"><span>招牌麻辣鱼</span>
            <img src="../../../assets/Periphery/icon3.png">
            <img src="../../../assets/Periphery/icon1.png">
        </div>
        <div class="foodInformation">
            <p class="foodName">招牌麻辣鱼</p>
            <div class="interactionInformation">
                <img src="../../../assets/Periphery/foodicon1.png"><span>9.9评分</span>
                <img src="../../../assets/Periphery/foodicon2.png"><span>550人点过</span>
                <img src="../../../assets/Periphery/foodicon3.png"><span>15次评价</span>
            </div>
            <p class="foodPrice">￥118/份</p>
        </div>
        <div class="Splitter"></div>
        <div class="foodIntroduce">
            <p class="foodIntroduceText">采用鲜嫩鲢鱼作为主要食材，云南大红袍花椒和红椒以及几样小菜向
                辅佐，辣味适中且不油腻。</p>
            <p>菜品备注</p>
            <textarea placeholder="我们会尽量满足您的要求..." rows="10"/>
            <div class="foodIntroduceButton">
                <button :class="{ 'active': activeIndex ===1 }" @click="change(1)">微辣</button>
                <button :class="{ 'active': activeIndex ===2 }" @click="change(2)">中辣</button>
                <button :class="{ 'active': activeIndex ===3 }" @click="change(3)">麻辣</button>
                <button :class="{ 'active': activeIndex ===4 }" @click="change(4)">重辣</button>
            </div>
        </div>
        <div class="appraiseTitle">
            <span>评价 （12）</span><span>好评率<span class="appraisePercent">95%</span><img src="../../../assets/Periphery/icon@2x.png"></span>
        </div>
        <div class="Splitter"></div>
        <ul class="appraiseList">
            <li class="appraiseBody">
                <div class="appraiseHead" >
                    <img src="../../../assets/Periphery/img6.png">
                    <div>
                        <p class="username">我是***小月</p>
                        <p class="appraiseTime">2020-02-14</p>
                    </div>
                    <van-rate
                            v-model="value"
                            :size="15"
                            color="#ee0a24"
                            void-icon="star"
                            void-color="#ffcccc"
                    />
                </div>
                <p class="appraiseBodyText">采用鲜嫩鲢鱼作为主要食材，辣味适中且不油腻。</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                activeIndex: 3,
                value: 3,
            };
        },
        methods: {
            change(activeIndex) {
                this.activeIndex = activeIndex
            }
        }
    }
</script>

<style scoped>

    .foodPictures{
        width: 100%;
        height: 489px;
        position: relative;
    }
    .foodPictures img:nth-child(1){
        width: 100%;
        height: 489px;
        position: absolute;
        z-index: -1;
    }
    .foodPictures img:nth-child(2){
        width: 11px ;
        height: 20px;
        margin-left: 25px;
        margin-top: 61px;
    }
    .foodPictures span{
        font-family: MicrosoftYaHei;
        font-size: 28px;
        color: #ffffff;
        margin-left: 32px;
    }
    .foodPictures img:nth-child(4){
        width: 30px;
        height: 26px;
        position: absolute;
        top: 58px;
        right: 67px;
    }
    .foodPictures img:nth-child(5){
        width: 23px;
        height: 23px;
        position: absolute;
        top: 60px;
        right: 26px;
    }
    .foodInformation{
        width: 95%;
        margin-left: 39px;
        margin-top: 24px;
    }
    .foodName{
        font-family: MicrosoftYaHei;
        font-size: 28px;
        line-height: 32px;
        color: #414141;
    }
    .interactionInformation{
        margin-top: 30px;
        display: flex;
        align-items: center;
    }
    .interactionInformation img{
        width: 22px;
        height: 22px;
    }
    .interactionInformation img:not(:first-child){
        margin-left: 20px;
    }
    .interactionInformation span{
        font-family: MicrosoftYaHei;
        font-size: 18px;
        line-height: 28px;
        color: #bcbcbc;
        margin-left: 10px;
    }
    .foodPrice{
        font-family: MicrosoftYaHei;
        font-size: 30px;
        line-height: 28px;
        color: #ff0000;
        margin-top: 30px;
    }
    .Splitter{
        width: 100%;
        height: 2px;
        background-color: #eeeeee;
        margin-top: 23px;
    }
    .foodIntroduce{
        margin-top: 18px;
        width: 86%;
        margin-left: 39px;
    }
    .foodIntroduceText{
        font-family: MicrosoftYaHei;
        font-size: 20px;
        line-height: 40px;
        color: #999999;
    }
    .foodIntroduce p:nth-child(2){
        font-family: MicrosoftYaHei;
        font-size: 24px;
        line-height: 36px;
        color: #414141;
        margin-top: 31px;
    }
    .foodIntroduce > textarea{
        width: 92%;
        height: 111px;
        background-color: #eeeeee;
        margin-top: 25px;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        line-height: 40px;
        color: #999999;
        border: 0;
        border-radius: 10px;
        padding: 14px 24px;
    }
    .foodIntroduceButton{
        margin-top: 26px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .foodIntroduceButton button{
        width: 106px;
        height: 43px;
        border-radius: 20px;
        opacity: 0.5;
        background-color: #51ca89;
        border: 0;
        font-family: MicrosoftYaHei;
        font-size: 22px;
        line-height: 36px;
        color: #ffffff;
    }
    .active{
        opacity: 100 !important;
    }
    .appraiseTitle{
        width: 88%;
        height: 25px;
        margin-top: 34px;
        margin-left: 42px;
        display: flex;
        justify-content: space-between;
    }
    .appraiseTitle span{
        font-family: MicrosoftYaHei;
        font-size: 24px;
        line-height: 35px;
        color: #414141;
    }
    .appraisePercent{
        color: #f7c223 !important;
    }
    .appraiseTitle img{
        width: 16px;
        height: 25px;
    }
    .appraiseList{
        margin-top: 10px;
        margin-left: 42px;
        margin-right: 36px;
    }
    .appraiseHead{
        display: flex;
    }
    .appraiseHead > img{
        width: 80px;
        height: 80px;
    }
    .appraiseHead > div{
        margin-left: 22px;
    }
    .username{
        font-family: MicrosoftYaHei;
        font-size: 22px;
        line-height: 35px;
        color: #414141;
    }
    .appraiseTime{
        font-family: MicrosoftYaHei;
        font-size: 18px;
        line-height: 35px;
        color: #8e8e8e;
    }
    .appraiseHead div:nth-child(3){
        margin-left: auto;
    }
    .appraiseBodyText{
        font-family: MicrosoftYaHei;
        font-size: 22px;
        line-height: 40px;
        color: #999999;
        margin-top: 10px;
        margin-left: 18px;
    }
</style>