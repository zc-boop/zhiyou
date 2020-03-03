<template>
    <div>
        <div class="space"></div>
        <header id="header">
            <div class="headerAll">
                <van-icon name="arrow-left" class="backTopPrevious" @click="back"/>
                <slot></slot>
                <h1>{{ title }}</h1>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: "index",
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    data() {
        return {};
    },
    methods:{
        back(){
            this.$router.go(-1);//返回上一层
        },
    }
}
</script>

<style>
    .headerAll {
        height: 15px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #dcdcdc;
        padding: 14px 13px;
    }
    .backTopPrevious{
        width: 7%;
        display: block;
        font-size: 18px !important;
    }
    .headerAll > h1{
        width: 93%;
        font-size: 18px;
        align-items: center;
        text-align: center;
    }
</style>
