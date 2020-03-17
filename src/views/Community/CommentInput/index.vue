<template>
    <div class="commentInput">
        <textarea placeholder="写下你的评论" rows="3"></textarea>
        <button><img src="../../../assets/Community/icon5.png"></button>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .commentInput{
        width: 100%;
        height: 98px;
        display: flex;
        align-items: center;
        bottom: 0;
        position: fixed;
        left: 0;
        bottom: 0;
        padding: 10px 0;
        box-shadow:0px 0px  10px 5px rgba(127, 127, 127, 0.23);
        background-color: white;
    }
    .commentInput > textarea{
        width: 78%;
        height: 46px;
        margin-left: 32px;
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 36px;
        color: #bcbcbc;
        border: 0;
    }
    .commentInput > button{
        width: 14%;
        height: 63px;
        background-color: #51ca89;
        border-radius: 32px;
        border: 0;
    }
    .commentInput > button > img{
        width: 37px;
        height: 37px;
        margin: 0 auto;
    }
</style>