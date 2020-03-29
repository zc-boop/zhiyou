<template>
    <div class="route-list">
        <div class="peripheryHeader">
            <div class="space"></div>
            <div class="headerSearch">
                <van-icon name="arrow-left" class="l_back" @click="$router.back()"/>
                <div class="searchBox">
                    <img src="../../../assets/Community/sousuo.png" alt="">
                    <input type="text" placeholder="成都">
                </div>
                <div class="l_locate">
                    <img src="../../../assets/Community/dizhi.png" alt="">
                    <span>成都</span>
                </div>
            </div>
        </div>
        <div class="routeList-main">
            <div class="routerList-item" v-for="item in routeList" :key="item.id">
                <div class="itemTop">
                    <div class="left">
                        <div class="header">
                            {{item.originName}}-----{{item.destinationName}}
                        </div>
                        <div class="consumption">
                            <p>预算费用：￥{{item.price}}/人</p>
                            <p>建议游玩天数：{{item.days}}天</p>
                        </div>
                    </div>
                    <div class="right">
                        <img src="../../../assets/home/img6.png" alt="">
                    </div>
                </div>
                <div class="itemBottom">
                    <router-link :to="{path:'/route',query:{id:item.id}}" tag="div" class="viewRoute">
                        <p>查看详情路线</p>
                        <img src="../../../assets/home/itemBottom.png" alt="">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import http from "../../../https"
export default {
    name: "index",
    data(){
        return{
            TypeId:this.$route.query.scenicid,
            routeList:[]
        }
    },
    created() {
        this.getRouteList()
    },
    methods:{
        getRouteList(){
            // /zhiyou/v1/route/query
            http.fetchGet('/zhiyou/v1/route/query',{origin:"104.390031,31.165715",scenicid:this.TypeId}).then((res)=>{
                if(res.data.code === 200){
                    console.log(res);
                    this.routeList = res.data.queryResult.list
                }else {
                    console.log("有问题");
                }
            }).catch(reason => {
                console.log(reason);
            })
        }
    }
}
</script>

<style>
    .routeList-main {
        background: #f6f6f6;
        margin-top: 30px;
        overflow: hidden;
    }

    .routerList-item {
        width: 93%;
        height: 240px;
        background: white;
        margin: 21px auto;
        border-radius: 8px;
        padding: 30px 0;
    }
    .itemTop{
        display: flex;
        justify-content: space-between;
    }
    .itemTop .left{
        margin-left: 20px;
    }
    .itemTop .left > .header{
        width: 317px;
        font-size: 28px;
        margin-bottom: 14px;
    }
    .right img{
        width: 294px;
        height: 165px;
        margin-right: 20px;
    }
    .consumption>p{
        width: 248px;
        font-size: 24px;
        color: #51ca89;
        margin-bottom: 20px;
    }
    .viewRoute{
        display: flex;
        float: right;
        margin-right: 20px;
    }
    .viewRoute>img{
        width: 37px;
        height: 37px;
        vertical-align: middle;
        margin-left: 20px;
    }
    .viewRoute>p{
        font-size: 28px;
        font-weight: bold;
    }
</style>
