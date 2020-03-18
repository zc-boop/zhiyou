<template>
    <div class="dynamicComments">
        <div class="mineHeader">
            <div class="space"></div>
            <div class="personalCenter" style="position: relative">
                <van-icon name="arrow-left" class="registerBack" @click="$router.back()"/>
                <div class="pageHeader">评论</div>
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
            <div class="dynamInformation">
                <div class="headPortrait">
                    <img src="../../../assets/Community/img5.png">
                    <img src="../../../assets/Community/img6.png">
                    <img src="../../../assets/Community/img7.png">
                    <img src="../../../assets/Community/img6.png">
                    <img src="../../../assets/Community/img7.png">
                </div>
                    <button>1.5k</button>
                    <span>喜欢</span>
                <div class="dynamInformation2">
                    <div>
                        <img src="../../../assets/Community/icon2.png">
                        <span>23</span>
                    </div>
                    <div>
                        <img src="../../../assets/Community/icon3.png">
                        <span>23</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="commentHead">
            <span>所有评论&nbsp;86</span>
        </div>
        <ul>
            <li>
                <img src="../../../assets/Community/img8.png">
                <div>
                    <div class="commentAllText">
                        <p class="usernameText">嘟嘟</p>
                        <div>
                            <img class="heartImg" src="../../../assets/Community/icon4.png">
                            <span>14</span>
                        </div>
                    </div>
                    <p class="commentText">感谢分享，又涨知识了,哈哈。</p>
                </div>
            </li>
            <li>
                <img src="../../../assets/Community/img9.png">
                <div>
                    <div class="commentAllText">
                        <p class="usernameText">大壮</p>
                        <div>
                            <img class="heartImg" src="../../../assets/Community/icon4.png">
                            <span>14</span>
                        </div>

                    </div>
                    <p class="commentText">感谢分享，又涨知识了，哈哈。鸟瞰整个城市，瞬间感觉
                        整个人都不好了...</p>
                </div>
            </li>
            <li>
                <img src="../../../assets/Community/img8.png">
                <div>
                    <div class="commentAllText">
                        <p class="usernameText">嘟嘟</p>
                        <div>
                            <img class="heartImg" src="../../../assets/Community/icon4.png">
                            <span>14</span>
                        </div>
                    </div>
                    <p class="commentText">感谢分享，又涨知识了,哈哈。</p>
                </div>
            </li>
            <li>
                <img src="../../../assets/Community/img9.png">
                <div>
                    <div class="commentAllText">
                        <p class="usernameText">大壮</p>
                        <div>
                            <img class="heartImg" src="../../../assets/Community/icon4.png">
                            <span>14</span>
                        </div>

                    </div>
                    <p class="commentText">感谢分享，又涨知识了，哈哈。鸟瞰整个城市，瞬间感觉
                        整个人都不好了...</p>
                </div>
            </li>
        </ul>
        <div style="height: 200px;"></div>
        <CommentInput></CommentInput>
    </div>
</template>

<script>
    import CommentInput from '../CommentInput'

    export default {
        name: "index",
        components: {
            CommentInput
        }
    }
</script>

<style scoped>
    .mineHeader{
        width: 100%;
        height: 126px;
    }
    .space{
        width: 100%;
        height: 30px;
    }
    .registerBack {
        width: 19px;
        height: 37px;
        margin-left: 32px;
        position: absolute !important;
        left: 0;
        line-height: 100px !important;
        z-index: 100;
    }
    .pageHeader{
        font-family: SourceHanSansCN-Regular;
        font-size: 28px;
        color: #ffffff;
    }
    .personalCenter{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 96px;
    }
    .dynamicList{
        height: 620px;
        padding-top: 20px;
        padding-right: 22px;
        padding-left: 22px;
    }
    .dynamHeader{
        width: 100%;
        height: 90px;
        border-bottom: 1px #ebebeb solid;
        display: flex;
        position: relative;
    }
    .dynamHeader > img{
        width: 80px;
        height: 80px;
    }
    .dynamHeader>div{
        margin-left: 21px;
        margin-top: 13px;
    }
    .dynamHeader>div p:nth-child(1){
        font-family: SourceHanSansCN-Regular;
        font-size: 28px;
        line-height: 35px;
        color: #333333;
    }
    .dynamHeader>div p:nth-child(2){
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        line-height: 35px;
        color: #333333;
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
        line-height: 36px;
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
    .dynamInformation{
        display: flex;
        align-items: center;
        width: 100%;
        height: 111px;
    }
    .headPortrait{
        width: 135px;
        height: 41px;
        position: relative;
    }
    .headPortrait img{
        width: 40px;
        height: 40px;
        position: absolute;
    }
    .headPortrait img:nth-child(1) {
        left: 11px;
    }
    .headPortrait img:nth-child(2) {
        left: 41px;
    }
    .headPortrait img:nth-child(3) {
        left: 71px;
    }
    .headPortrait img:nth-child(4) {
        left: 101px;
    }
    .headPortrait img:nth-child(5) {
        left: 131px;
    }
    .dynamInformation > button{
        border: 0;
        width: 82px;
        height: 29px;
        border-radius: 14px;
        background-color: #51ca89;
        font-family: SourceHanSansCN-Regular;
        font-size: 18px;
        color: #ffffff;
        margin: auto 0;
    }
    .dynamInformation > span{
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        color: #bcbcbc;
        margin-left: 5px;
    }
    .dynamInformation2{
        display: flex;
        margin-left: auto;
        justify-content: flex-end;
        align-items: center;
        top: 44px;
    }
    .dynamInformation2 div{
        display: flex;
        align-items: center;
    }
    .dynamInformation2 img{
        width: 24px;
        height: 23px;
        font-family: SourceHanSansCN-Regular;
        margin-left: 32px;
        font-size: 20px;
        line-height: 36px;
        color: #bcbcbc;
    }
    .dynamInformation2 span{
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        line-height: 36px;
        color: #bcbcbc;
        margin-left: 5px;
    }
    .commentHead{
        border-top: 10px #eeeeee solid;
        border-bottom: 1px #eeeeee solid;
        width: 100%;
        height: 70px;
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 70px;
        color: #bcbcbc;
    }
    .commentHead span{
        margin-left: 24px;
    }
    .dynamicComments > ul{
        width: 100%;
        height: 405px;
    }
    .dynamicComments > ul >li{
        display: flex;
        margin-top: 36px;
    }
    .commentAllText{
        margin-top: 11px;
        margin-left: 15px;
        margin-right: 76px;
        display: flex;
        justify-content: space-between;

    }
    .commentAllText > div{
        height: 29px;
        display: flex;
        align-items: center;
    }
    .commentAllText > div > span{
        margin-left: 5px;
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        line-height: 36px;
        color: #bcbcbc;
    }
    .usernameText{
        font-family: SourceHanSansCN-Regular;
        font-size: 28px;
        line-height: 36px;
        color: #608bbc;
    }
    .commentText{
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        margin-top: 25px;
        margin-left: 15px;
        margin-right: 97px;
        line-height: 36px;
        color: #6b6b6b;
    }
    .dynamicComments > ul >li>img{
        width: 11%;
        height: 6%;
        margin-left: 29px;
    }
    .dynamicComments > ul >li>div{
        width: 100%;
    }
    .heartImg{
        width: 29px;
        height: 29px;
    }
</style>