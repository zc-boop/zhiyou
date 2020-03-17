<template>
    <div class="recommend">
        <div class="dynamicList">
            <div class="dynamHeader">
                <img src="../../../assets/Community/img1.png">
                <div>
                    <p>Miya</p>
                    <p>1小时前</p>
                </div>
                <button >+  关注</button>
            </div>
            <div class="dynamBody">
                <span class="label">#峨眉山#</span><p class="contents"> 攀登到半山，鸟瞰整个城市，瞬间感觉整个人都
                不好了...</p>
                <img src="../../../assets/Community/img2.png">
            </div>
            <div class="dynamOperation">
                <div>
                    <img src="../../../assets/Community/icon1.png">
                    <span>23</span>
                </div>
                <router-link to="/dynamiccomments" tag="div">
                    <img src="../../../assets/Community/icon2.png">
                    <span>78</span>
                </router-link>
                <div>
                    <img src="../../../assets/Community/icon3.png">
                    <span>90</span>
                </div>
            </div>
        </div>
        <div class="dynamicList">
            <div class="dynamHeader">
                <img src="../../../assets/Community/img3.png">
                <div>
                    <p>Echo</p>
                    <p>10分钟之前</p>
                </div>
                <button >已关注</button>
            </div>
            <div class="dynamBody">
                <span class="label">#稻城亚丁#</span><p class="contents"> 在这漫天飞雪的日子里，这里有诗和远方.......</p>
                <img src="../../../assets/Community/img4.png">
            </div>
            <div class="dynamOperation">
                <div>
                    <img src="../../../assets/Community/icon1.png">
                    <span>23</span>
                </div>
                <router-link to="/dynamiccomments" tag="div">
                    <img src="../../../assets/Community/icon2.png">
                    <span>78</span>
                </router-link>
                <div>
                    <img src="../../../assets/Community/icon3.png">
                    <span>90</span>
                </div>
            </div>
        </div>
        <div class="dynamicList">
            <div class="dynamHeader">
                <img src="../../../assets/Community/img1.png">
                <div>
                    <p>Miya</p>
                    <p>1小时前</p>
                </div>
                <button >+  关注</button>
            </div>
            <div class="dynamBody">
                <span class="label">#峨眉山#</span><p class="contents"> 攀登到半山，鸟瞰整个城市，瞬间感觉整个人都
                不好了...</p>
                <img src="../../../assets/Community/img2.png">
            </div>
            <div class="dynamOperation">
                <div>
                    <img src="../../../assets/Community/icon1.png">
                    <span>23</span>
                </div>
                <router-link to="/dynamiccomments" tag="div">
                    <img src="../../../assets/Community/icon2.png">
                    <span>78</span>
                </router-link>
                <div>
                    <img src="../../../assets/Community/icon3.png">
                    <span>90</span>
                </div>
            </div>
        </div>
        <div class="dynamicList">
            <div class="dynamHeader">
                <img src="../../../assets/Community/img3.png">
                <div>
                    <p>Echo</p>
                    <p>10分钟之前</p>
                </div>
                <button >已关注</button>
            </div>
            <div class="dynamBody">
                <span class="label">#稻城亚丁#</span><p class="contents"> 在这漫天飞雪的日子里，这里有诗和远方.......</p>
                <img src="../../../assets/Community/img4.png">
            </div>
            <div class="dynamOperation">
                <div>
                    <img src="../../../assets/Community/icon1.png">
                    <span>23</span>
                </div>
                <router-link to="/dynamiccomments" tag="div">
                    <img src="../../../assets/Community/icon2.png">
                    <span>78</span>
                </router-link>
                <div>
                    <img src="../../../assets/Community/icon3.png">
                    <span>90</span>
                </div>
            </div>
        </div>
        <div style="height: 100px;"></div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .dynamicList{
        height: 593px;
        padding-right: 22px;
        padding-left: 22px;
        border-bottom: 20px #ebebeb solid;
    }
    .dynamHeader{
        width: 100%;
        height: 90px;
        margin-top: 20px;
        display: flex;
        position: relative;
        border-bottom: 1px #ebebeb solid;
    }
    .dynamHeader > img{
        width: 80px;
        height: 80px;
    }
    .dynamHeader>div{
        margin-left: 21px;
        margin-top: 13px;
    }
    .dynamHeader > button{
        width: 90px;
        height: 36px;
        position: absolute;
        right: 28px;
        background-color: white;
        border: 1px #51ca89 solid;
        border-radius: 6px;
        font-family: SourceHanSansCN-Regular;
        font-size: 22px;
        color: #51ca89;
        margin-top: 19px;
    }
    .dynamBody{
        margin-top: 19px;
    }
    .dynamBody > span{
        width: 81%;
        height: 52px;
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
    }
    .contents{
        color: #333333;
    }
    .label{
        color: #51ca89;
    }
    .dynamBody > img{
        width: 100%;
        height: 310px;
        margin-top: 18px;
    }
    .dynamOperation{
        display: flex;
        justify-content: space-around;
        margin-top: 31px;
    }
    .dynamOperation div{
        display: flex;
        align-items: center;
    }
    .dynamOperation img{
        width: 23px;
        height: 23px;
    }
    .dynamOperation span{
        font-family: SourceHanSansCN-Regular;
        font-size: 22px;
        color: #999999;
        margin-left: 10px;
    }
</style>