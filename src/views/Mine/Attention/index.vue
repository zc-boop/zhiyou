<template>
    <div class="attention">
        <Header title="我的关注"/>
        <img src="../../../assets/Mine/attention.png" alt="">
        <p>这个家伙很懒什么也没留下</p>
        <button>立即关注</button>
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

<style>
    .attention>img{
        width: 80%;
        display: block;
        margin: 0 auto;
        margin-top: 92px;
    }
    .attention>p{
        font-size: 13px;
        color: #999;
        text-align: center;
        margin-top: 25px;
    }
    .attention>button{
        width: 131px;
        height: 40px;
        display: block;
        margin: 0 auto;
        margin-top: 68px;
        font-size: 14px;
        color: white;
        border: none;
        background: #51ca89;
        border-radius: 50px;
    }
</style>
