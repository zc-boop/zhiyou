<template>
    <div class="periphery">
        <div class="peripheryHeader">
            <div class="space"></div>
            <div class="headerSearch">
                <van-icon name="arrow-left" class="l_back"/>
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
        <div class="twoRoutes">
            <ul>
                <router-link to="/periphery/hotels" tag="li">
                    酒店
                </router-link>
                <router-link to="/periphery/foods" tag="li">
                    美食
                </router-link>
            </ul>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Customization"
}
</script>

<style>

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
    .twoRoutes>ul{
        width: 400px;
        height: 88px;
        display: flex;
        justify-content: space-around;
        margin: 0 auto;
    }
    .twoRoutes>ul>li{
        width: 70px;
        font-size: 32px;
        color: #333;
        text-align: center;
        line-height: 88px;
        box-sizing: border-box;
    }
    .twoRoutes>ul>li.active{
        border-bottom: 4px solid #51ca89;
    }
    .twoRoutes>ul>li.router-link-active {
        border-bottom: 4px solid #51ca89;
    }
</style>
