<template>
    <div class="onlineService">
        <Header title="在线客服"/>
        <img src="../../../assets/Mine/onlineService.png" alt="">
        <div class="onlineServiceText">
            <p>暂无客服在线</p>
            <p>正常工作时间：早上8:00至晚上20:00</p>
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

<style>
    .onlineService > img {
        width: 80%;
        display: block;
        margin: 0 auto;
        margin-top: 265px;
    }

    .onlineServiceText {
        text-align: center;
        margin-top: 24px;
    }

    .onlineServiceText > p:first-child {
        font-size: 36px;
        color: #51ca89;
    }
    .onlineServiceText > p:last-child {
        font-size: 30px;
        margin-top: 30px;
        color: #999;
    }
</style>
