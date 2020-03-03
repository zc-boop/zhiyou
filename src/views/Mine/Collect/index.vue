<template>
    <div class="collect">
        <Header title="我的收藏"/>
        <img src="../../../assets/Mine/Collect.png" alt="">
        <p>亲，你还没有收藏哦～</p>
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
    .collect > img {
        width: 80%;
        display: block;
        margin: 0 auto;
        margin-top: 115px;
    }

    .collect > p {
        margin-top: 35px;
        text-align: center;
        font-size: 15px;
        color: #888888;
    }
</style>
