<template>
    <div class="attention">
        <img src="../../../assets/Mine/attention.png" alt="">
        <p>这个家伙很懒什么也没留下</p>
        <button>立即关注</button>
    </div>
</template>

<script>

export default {
    name: "index",

}
</script>

<style>
    .attention > img {
        width: 80%;
        display: block;
        margin: 0 auto;
        margin-top: 138px;
    }

    .attention > p {
        font-size: 26px;
        color: #999;
        text-align: center;
        margin-top: 35px;
    }

    .attention > button {
        width: 261px;
        height: 80px;
        display: block;
        margin: 0 auto;
        margin-top: 136px;
        font-size: 28px;
        color: white;
        border: none;
        background: #51ca89;
        border-radius: 40px;
    }
</style>
