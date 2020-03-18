<template>
    <div class="foodInput">
        <div>
            <img src="../../../assets/Periphery/tuijian.png">
            <p>想去</p>
        </div>
        <div>
            <img src="../../../assets/Periphery/zhuanfa.png">
            <p>分享</p>
        </div>

        <button>立即购买</button>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    .foodInput{
        width: 100%;
        height: 120px;
        bottom: 0;
        position: fixed;
        background-color: white;
        box-shadow:0px 0px  10px 5px rgba(127, 127, 127, 0.23);
        display: flex;
        align-items: center;
    }
    .foodInput img{
        width: 42px;
        height: 38px;
    }
    .foodInput div:nth-child(1){
        font-family: SourceHanSansCN-Regular;
        font-size: 22px;
        line-height: 30px;
        color: #51ca89;
    }
    .foodInput div:nth-child(2){
        font-family: SourceHanSansCN-Regular;
        font-size: 22px;
        line-height: 30px;
        color: #BFBFBF;
    }
    .foodInput div:nth-child(1){
        margin-left: 45px;
    }
    .foodInput div:nth-child(2){
        margin-left: 92px;
    }
    .foodInput button{
        width: 26%;
        height: 55px;
        background-color: #51ca89;
        border-radius: 30px;
        border: 0;
        font-family: SourceHanSansCN-Regular;
        font-size: 28px;
        line-height: 30px;
        color: #fefffe;
        margin-left: auto;
        margin-right: 23px  ;
    }
</style>