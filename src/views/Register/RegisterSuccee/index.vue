<template>
    <div class="registerSuccee">
        <div class="mineHeader">
            <div class="space"></div>
            <div class="personalCenter">
                <van-icon name="arrow-left" class="registerBack" @click="goTo('/login')"/>
                <div class="pageHeader">注册</div>
            </div>
        </div>
        <img src="../../../assets/Register/correctIcon@2x.png" alt="">
        <div class="registerSucceeText">
            <p>快来踏上您的旅途之路吧!</p>
        </div>
        <div class="registerSucceeButton">
            <router-link to="/login">
                <button @click="">返回登录页面</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import Header from "../../../components/Header"

export default {
    name: "index",
    components: {
        Header
    }
}
</script>

<style scoped>
     .registerBack{
         width: 20%;
         height: 100%;
         position: absolute !important;
         left: 0;
         line-height: 100px !important;
         z-index: 100;
     }
     .pageHeader{
         width: 100%;
         position: absolute;
         right: 0;
     }
    .registerSuccee > img {
        width: 144px;
        height: 144px;
        display: block;
        margin: 0 auto;
        margin-top: 196px;
    }

    .registerSucceeText {
        margin-top: 42px;
        text-align: center;
        font-size: 36px;
        color: #333333;
    }

    .registerSucceeButton button {
        width: 85%;
        height: 100px;
        display: block;
        margin: 0 auto;
        margin-top: 95px;
        border-radius: 25px;
        color: white;
        background-color: #51ca89;
        border: none;
        font-family: SourceHanSansCN-Regular;
        font-size: 36px;
        line-height: 38px;
    }
</style>
