<template>
    <div class="hotelDetails">
        <div class="hotelPictures">
            <img src="../../../assets/Periphery/hotelPicture.png">
            <img src="../../../assets/Periphery/returnIcon@2x.png">
            <img src="../../../assets/Periphery/icon1.png">
            <img src="../../../assets/Periphery/icon3.png">
        </div>
        <div class="hotelInformation">
            <div class="hotelTitle">
                <span class="hotelNameText">**五星级酒店</span><span class="hotelStarText">4.3分</span>
            </div>
            <p class="hotelOpeningHoursText">2018年装修，2019年开业</p>
            <div class="hotelLocation">
                <img src="../../../assets/Periphery/hotelLocation.png">
                <span class="hotelLocationText">山西省太原市迎泽路口</span>
                <img src="../../../assets/Periphery/icon@2x.png">
            </div>
            <div class="hotelPhone">
                <img src="../../../assets/Periphery/hotelPhone.png">
                <span class="hotelPhoneText">023145-86520</span>
                <img src="../../../assets/Periphery/icon@2x.png">
            </div>
        </div>
        <div class="hotelService">
            <div>
                <img src="../../../assets/Periphery/hotelservic1.png">
                <p>贴心服务</p>
            </div>
            <div>
                <img src="../../../assets/Periphery/hotelservic2.png">
                <p>免费WiFi</p>
            </div>
            <div>
                <img src="../../../assets/Periphery/hotelservic3.png">
                <p>热水服务</p>
            </div>
            <div>
                <img src="../../../assets/Periphery/hotelservic4.png">
                <p>24小时服务</p>
            </div>
        </div>
        <div class="hotelHouseTypeTitle">
            <span>房型选择</span>
        </div>
        <ul class="hotelHouseTypeList">
            <li class="hotelHouseTypeText">
                <img src="../../../assets/Periphery/hoteltype1.png">
                <div>
                    <p class="hotelHouseTypeName">豪华大床房</p>
                    <p class="hotelHouseTypeIntroduce">舒适双人床</p>
                    <p class="hotelHouseTypePrice">￥45210/人</p>
                </div>
                <button class="hotelReserveButton">立即预定</button>
            </li>
            <li class="hotelHouseTypeText">
                <img src="../../../assets/Periphery/hoteltype2.png">
                <div>
                    <p class="hotelHouseTypeName">豪华大床房</p>
                    <p class="hotelHouseTypeIntroduce">舒适双人床</p>
                    <p class="hotelHouseTypePrice">￥45210/人</p>
                </div>
                <button class="hotelReserveButton">立即预定</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .hotelPictures{
        width: 100%;
        height: 397px;
        position: relative;
    }
    .hotelPictures img:nth-child(1){
        width: 100%;
        height: 397px;
        position: absolute;
        z-index: -1;
    }
    .hotelPictures img:nth-child(2){
        width: 11px ;
        height: 20px;
        margin-left: 25px;
        margin-top: 61px;
    }
    .hotelPictures img:nth-child(4){
        width: 30px;
        height: 26px;
        position: absolute;
        top: 58px;
        right: 67px;
    }
    .hotelPictures img:nth-child(3){
        width: 23px;
        height: 23px;
        position: absolute;
        top: 60px;
        right: 26px;
    }
    .hotelInformation{
        width: 94%;
        margin: 33px 22px;
    }
    .hotelTitle{
        display: flex;
        justify-content: space-between;
    }
    .hotelNameText{
        font-family: SourceHanSansCN-Regular;
        font-size: 36px;
        line-height: 60px;
        color: #333333;
    }
    .hotelStarText{
        font-family: SourceHanSansCN-Regular;
        font-size: 30px;
        line-height: 32px;
        color: #ff0000;
    }
    .hotelOpeningHoursText{
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 32px;
        color: #666666;
        margin-top: 26px;
    }
    .hotelLocation{
        margin-top: 36px;
        position: relative;
    }
    .hotelLocation img:nth-child(1){
        width: 19px;
        height: 27px;
    }
    .hotelLocation img:nth-child(3){
        position: absolute;
        width: 14px;
        height: 24px;
        right: 1px;
    }
    .hotelLocationText{
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 32px;
        color: #666666;
        margin-left: 3px;
    }
    .hotelPhone{
        margin-top: 41px;
        position: relative;
    }
    .hotelPhone img:nth-child(1){
        width: 19px;
        height: 27px;
    }
    .hotelPhone img:nth-child(3){
        position: absolute;
        width: 14px;
        height: 24px;
        right: 1px;
    }
    .hotelPhoneText{
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 32px;
        color: #666666;
        margin-left: 3px;
    }
    .hotelService{
        width: 87%;
        margin: 62px 47px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .hotelService div img{
        width: 40px;
        height: 46px;
        margin: 0 auto;

    }
    .hotelService div{
        display: flex;
        flex-direction:column;
    }
    .hotelHouseTypeTitle{
        margin-left: 24px;
        height: 34px;
        border-left: 6px #46b8ff solid;
    }
    .hotelHouseTypeTitle span{
        margin-left: 16px;
        font-family: SourceHanSansCN-Regular;
        font-size: 34px;
        line-height: 32px;
        font-weight: bold;
        color: #333333;
    }
    .hotelHouseTypeList{
        width: 96%;
        height: 331px;
        margin-top: 30px;
        margin-left: 9px;
    }
    .hotelHouseTypeText{
        margin-left: 40px;
        margin-top: 7px;
        display: flex;
    }
    .hotelHouseTypeText img{
        width: 147px;
        height: 147px;
    }
    .hotelHouseTypeText > div{
        margin-left: 30px;
    }
    .hotelHouseTypeName{
        font-family: SourceHanSansCN-Regular;
        font-size: 28px;
        line-height: 32px;
        color: #333333;
    }
    .hotelHouseTypeIntroduce{
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 32px;
        color: #333333;
        margin-top: 14px;
    }
    .hotelHouseTypePrice{
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 32px;
        color: #ff0000;
        margin-top: 43px;
    }
    .hotelReserveButton{
        width: 160px;
        height: 45px;
        border: 0;
        border-radius: 25px;
        font-family: SourceHanSansCN-Regular;
        font-size: 22px;
        line-height: 30px;
        color: #ffffff;
        background-color: #51ca89;
        margin-left: auto;
        align-self: center;
    }
</style>