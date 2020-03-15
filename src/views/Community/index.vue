<template>
    <div class="community">
        <div class="mineHeader">
            <div class="space"></div>
            <div class="personalCenter" style="position: relative">
                <van-icon name="arrow-left" class="registerBack" @click="goTo('/mine')"/>
                <div class="searchBox">
                    <img src="../../assets/Community/sousuo.png">
                    <input value="成都">
                </div>
                <div class="landmark">
                    <img src="../../assets/Community/dizhi.png">
                    <span>成都</span>
                </div>
            </div>
            <div class="commubityContent">
                <div class="navigation">
                    <router-link to="/community/attentiondynamic" tag="div"><span>关注</span></router-link>
                    <<router-link to="/community/nearby" tag="div"><span>附近</span></router-link>
                    <router-link to="/community/recommenddynamic" tag="div"><span>推荐</span></router-link>
                </div>
                <div class="principalExhibition">
                    <router-view>
                    </router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

    .registerBack {
        width: 15%;
        height: 100%;
        line-height: 100px !important;
        z-index: 100;
    }
    .personalCenter{
        display: flex;
        justify-content: space-between;
    }
    .searchBox{
        width: 70%;
        height: 62px;
        background-color: white;
        margin: auto auto;
        border-radius: 20px;

    }
    .searchBox > img{
        width: 28px;
        height: 28px;
        margin: 18px auto;
    }
    .searchBox > input{
        width: 80%;
        height: 30px;
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 16px;
        border: 0;
        color: #333333;
        position: relative;
        left: 23px;
        bottom: 20px;
    }
    .landmark {
        width: 15%;
        height: 100%;
        line-height: 100px !important;
        z-index: 100;
    }
    .landmark > img{
        width: 18px;
        height: 22px;
    }
    .landmark > span{
        margin-left: 7px;
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 16px;
        color: #ffffff;
    }
    .navigation{
        width: 100%;
        height: 88px;
        display: flex;
        justify-content: center;
        border-bottom: 1px #cccccc solid;
    }
    .navigation div{
        width: 10%;
        height: 92%;
        background-color: white;
        border-radius: 1px;
        font-family: SourceHanSansCN-Regular;
        font-size: 32px;
        text-align: center;
        line-height: 88px;
    }
    .navigation span{
        color: #333333;
    }
    .navigation :not(:first-child){
        margin-left: 13%;
    }
    .navigation div.active {
        border-bottom: 5px #51ca89 solid;
    }

    .navigation div.router-link-active {
        border-bottom: 5px #51ca89 solid;
    }
</style>
