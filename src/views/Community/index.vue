<template>
    <div class="community">
        <div class="peripheryHeader">
            <div class="space"></div>
            <div class="headerSearch">
                <van-icon name="arrow-left" class="l_back" @click="$router.back()"/>
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
        <div class="commubityContent">
            <div class="navigation">
                <router-link to="/community/attentiondynamic" tag="div"><span>关注</span></router-link>
                <router-link to="/community/nearby" tag="div"><span>附近</span></router-link>
                <router-link to="/community/recommenddynamic" tag="div"><span>推荐</span></router-link>
            </div>
            <div class="principalExhibition">
                <router-view>
                </router-view>
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
    .peripheryHeader {
        background: #51ca89;
    }

    .l_back {
        color: white;
        font-size: 30px !important;
        line-height: 62px !important;
    }

    .headerSearch {
        height: 90px;
        display: flex;
        padding: 0 30px;
        justify-content: space-between;
    }

    .headerSearch > .searchBox {
        width: 65%;
        height: 62px;
        background: white;
        padding: 0 30px;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
    }

    .headerSearch > .searchBox > img {
        width: 28px;
        height: 28px;
        margin-top: 17px;
    }

    .headerSearch > .searchBox > input {
        width: 90%;
        height: 100%;
        border: none;
        font-size: 24px;
        color: #333;
    }

    .l_locate {
        height: 60px;
        font-size: 24px;
        color: white;
    }
    .l_locate>img{
        width: 18px;
        height: 22px;
        vertical-align: middle;
        margin-right: 5px;
    }
    .l_locate>span{
        line-height: 60px;
    }

    .navigation {
        width: 100%;
        height: 88px;
        display: flex;
        justify-content: center;
        border-bottom: 1px #cccccc solid;
    }

    .navigation div {
        width: 10%;
        height: 94%;
        background-color: white;
        border-radius: 1px;
        font-family: SourceHanSansCN-Regular;
        font-size: 32px;
        text-align: center;
        line-height: 88px;
    }

    .navigation span {
        color: #333333;
    }

    .navigation :not(:first-child) {
        margin-left: 13%;
    }

    .navigation div.active {
        border-bottom: 5px #51ca89 solid;
    }

    .navigation div.router-link-active {
        border-bottom: 5px #51ca89 solid;
    }
</style>
