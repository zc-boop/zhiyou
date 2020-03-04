<template>
    <div class="registerSuccee">
        <div class="head"></div>
        <van-nav-bar title="注册" left-arrow @click-left="$router.back()">
        </van-nav-bar>
        <img src="../../../assets/Register/correctIcon@2x.png" alt="">
        <div class="registerSucceeText">
            <p>快来踏上您的旅途之路吧!</p>
        </div>
        <div class="registerSucceeButton">
            <router-link to="/login"><button @click="">返回登录页面</button></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .head{
        width: 100%;
        height: 35px;
    }
    .van-nav-bar
    {
        background: #51ca89;
    }
    .van-icon-arrow-left::before{
        color: white;
    }
    .van-nav-bar__text,
    .van-nav-bar__title{
        color: white;
        font-family: SourceHanSansCN-Regular;
        font-size: 18px;
    }
    .registerSuccee > img{
        width: 72px;
        height: 72px;
        display: block;
        margin: 0 auto;
        margin-top: 98px;
    }
    .registerSucceeText{
        margin-top: 21px;
        text-align: center;
        font-size: 18px;
        color: #333333;
    }
    .registerSucceeButton button{
        width: 85%;
        height: 49px;
        display: block;
        margin: 0 auto;
        margin-top: 47px;
        border-radius:25px;
        color: white;
        background-color: #51ca89;
        border: none;
    }
</style>
