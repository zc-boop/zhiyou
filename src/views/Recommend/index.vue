<template>
    <div class="recommend">
        <div class="banner">
            <p class="windowText">
                至游，贴心为您定制出行计划，助你发现世界的美。
            </p>
            <div class="searchInput">
                <input type="text" placeholder="不妨搜索城市、目的地或景点" ref="searchInfo" :value="searchContent">
                <img style="display: block" src="../../assets/home/sousuo.png" alt="" @click="searchInfo">
            </div>
        </div>
        <div class="bottomAll">
            <div class="popularDestination">
                <div class="listHeader">
                    <p>热门景点</p>
                </div>
                <div class="touristArea">
                    <router-link to="/route" tag="button">稻城亚丁</router-link>
                    <router-link to="/route" tag="button">青城山</router-link>
                    <router-link to="/route" tag="button">阆中古城</router-link>
                    <router-link to="/route" tag="button">乐山大佛</router-link>
                </div>
            </div>
            <div class="recommendedToYou">
                <div class="listHeader">
                    <p>为你推荐</p>
                </div>
                <div class="recommendedType">
                    <router-link to="/community/attentiondynamic" tag="div" class="reTypeLeft">
                        <div class="mask">
                            <p>旅游攻略</p>
                            <p>TRAVEL STRATEGY</p>
                        </div>
                    </router-link>
                    <div class="reTypeRight">
                        <router-link to="/periphery/hotels" tag="div" class="up">
                            <div class="mask">
                                <p>酒店住宿</p>
                                <p>HOTEL ACCOMMODATION</p>
                            </div>
                        </router-link>
                        <router-link to="/periphery/foods" tag="div" class="down">
                            <div class="mask">
                                <p>地方美食</p>
                                <p>LOCAL CUISINE</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="popularRoutes">
                <div class="listHeader">
                    <p>热门路线</p>
                    <p class="listHeaderMore">更多></p>
                </div>
                <ul class="routeLists">
                    <router-link to="/route" tag="li">
                        <img src="../../assets/home/img4.png" alt="">
                        <h3>成都三日游</h3>
                        <p>宽窄巷子/锦里/大熊猫繁育研究基地</p>
                    </router-link>
                    <router-link to="/route" tag="li">
                        <img src="../../assets/home/img5.png" alt="">
                        <h3>稻城亚丁七日游</h3>
                        <p>李白故里/北川羌城/富乐山</p>
                    </router-link>
                    <router-link to="/route" tag="li">
                        <img src="../../assets/home/img4.png" alt="">
                        <h3>成都三日游</h3>
                        <p>宽窄巷子/锦里/大熊猫繁育研究基地</p>
                    </router-link>
                </ul>
            </div>
            <div class="featuredDestination">
                <div class="listHeader">
                    <p>精选目的地</p>
                    <p class="listHeaderMore">更多></p>
                </div>
                <ul class="featuredLists">
                    <li>
                        <img src="../../assets/home/img7.png" alt="">
                        <h3>成都</h3>
                        <p>45210人去过</p>
                    </li>
                    <li>
                        <img src="../../assets/home/img6.png" alt="">
                        <h3>甘孜</h3>
                        <p>3200人去过</p>
                    </li>
                    <li>
                        <img src="../../assets/home/img7.png" alt="">
                        <h3>色达</h3>
                        <p>2600人去过</p>
                    </li>
                </ul>
            </div>
        </div>
        <div style="height: 100px;"></div>
    </div>
</template>

<script>
export default {
    name: "index",
    data(){
        return{
            searchContent:""
        }
    },
    methods: {
        searchInfo() {
            let searchInfo = this.$refs.searchInfo.value.trim()
            if (searchInfo !== "") {
                alert(`您将要搜索的内容是：${searchInfo}`)
                this.goTo('/route')
            } else {
                alert("您好像没有输入什么呢！")
            }

        }
    }
}
</script>

<style>
    /*banner*/
    .banner {
        width: 100%;
        height: 368px;
        background: url("../../assets/home/bannner.png");
        background-size: 100% 100%;
        position: relative;
    }

    .windowText {
        width: 453px;
        height: 67px;
        color: white;
        font-size: 36px;
        position: absolute;
        top: 112px;
        left: 50%;
        transform: translateX(-50%);
    }

    .searchInput {
        width: 491px;
        height: 70px;
        position: absolute;
        bottom: -35px;
        background: white;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 35px;
        display: flex;
        padding-left: 32px;
        padding-right: 38px;
        justify-content: space-between;
        box-shadow: 0px 5px 10px rgba(81, 202, 137, 0.3);
    }

    .searchInput > input {
        width: 90%;
        height: 100%;
        border: none;
        font-size: 24px;
        color: #92928a;
    }

    .searchInput > img {
        width: 28px;
        height: 28px;
        margin-top: 21px;
    }

    /*    bottomAll  */
    .bottomAll {
        width: 100%;
        margin-top: 90px;
    }

    /*热门景点*/
    .popularDestination, .recommendedToYou {
        padding-left: 33px;
        padding-right: 49px;
    }

    .listHeader {
        height: 33px;
        border-left: 6px solid #51ca89;
        padding-left: 9px;
        font-size: 30px;
        color: #333;
        line-height: 33px;
        display: flex;
        justify-content: space-between;
        padding-right: 20px;
    }

    .listHeaderMore {
        font-size: 24px;
        color: #333;
    }

    .touristArea {
        margin: 50px 0;
    }

    .touristArea > button {
        width: 120px;
        height: 70px;
        margin: 0 20px;
        font-size: 24px;
        border: 1px solid #ccc;
        background: white;
        border-radius: 8px;
        box-shadow: 1px 1px 10px rgba(204, 204, 204, 0.1);
        color: #484848;
    }

    .touristArea > button:hover {
        border: none;
        background: #51ca89;
        border-radius: 8px;
        box-shadow: 0px 5px 10px rgba(81, 202, 137, 0.3);
        color: white;
    }

    /*为你推荐*/
    .recommendedType {
        display: flex;
        justify-content: space-between;
        margin: 50px 0;
    }

    .reTypeLeft {
        width: 310px;
        height: 362px;
        background: url("../../assets/home/img1.png");
        background-size: 100% 100%;
    }

    .recommendedType .mask {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.25);
    }

    .reTypeLeft .mask > p {
        margin-left: 20px;
        margin-top: 20px;
        color: white;
    }

    .recommendedType .mask > p:first-of-type {
        font-size: 30px;
    }

    .recommendedType .mask > p:last-of-type {
        font-size: 18px;
    }

    .reTypeRight > div {
        width: 326px;
        height: 171px;
    }

    .reTypeRight > div:first-of-type {
        background: url("../../assets/home/img2.png");
        background-size: 100% 100%;
        margin-bottom: 20px;
    }

    .reTypeRight > div:last-of-type {
        background: url("../../assets/home/img3.png");
        background-size: 100% 100%;
    }

    .reTypeRight p {
        color: white;
        margin-left: 20px;
    }

    .reTypeRight p:first-of-type {
        margin-top: 20px;
    }

    .reTypeRight p:last-of-type {
        margin-top: 11px;
    }

    /*热门路线*/
    .popularRoutes {
        padding-left: 33px;
    }

    .routeLists {
        margin: 50px 0;
        display: flex;
        overflow: auto;
    }

    .routeLists > li {
        margin: 0 20px;
    }

    .routeLists > li:first-of-type {
        margin-left: 0;
    }

    .routeLists > li > img {
        width: 367px;
        height: 226px;
    }

    .routeLists > li > h3 {
        font-size: 30px;
        font-weight: normal;
        color: #333;
        margin: 20px 0;
    }

    .routeLists > li > p {
        font-size: 24px;
        color: #666;
    }

    /*精选目的地*/
    .featuredDestination {
        padding-left: 33px;
    }

    .featuredLists {
        display: flex;
        justify-content: space-between;
        margin: 42px 0;
        padding-right: 49px;
    }

    .featuredLists > li {
        text-align: center;
    }

    .featuredLists > li:nth-child(2) {
        margin: 0 20px;
    }

    .featuredLists > li > img {
        width: 206px;
        height: 182px;
        margin-bottom: 20px;
    }

    .featuredLists > li > h3 {
        font-size: 30px;
        color: #333333;
        font-weight: normal;
        margin-bottom: 15px;
    }

    .featuredLists > li > p {
        font-size: 24px;
        color: #666666;
    }
</style>
