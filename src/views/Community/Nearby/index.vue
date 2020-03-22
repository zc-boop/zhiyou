<template>
    <div class="attentionDynamic">
        <ul class="dynamicList" >
            <li v-for="item in dynamicList" :key="item.id">
                <div class="dynamHeader">
                    <img :src="item.headPortrait">
                    <div>
                        <p>{{item.username}}</p>
                        <p>{{(item.createTime>24)?Math.round(item.createTime/24)+"天之前":item.createTime+"小时之前"}}</p>
                    </div>
                    <button >+  关注</button>
                </div>
                <div class="dynamBody">
                    <span class="label">#{{item.title}}#</span><p class="contents"> {{item.content}}</p>
                    <img src="../../../assets/Community/img2.png">
                </div>
                <div class="dynamOperation">
                    <div>
                        <img src="../../../assets/Community/icon1.png" @click="getToken()">
                        <span>23</span>
                    </div>
                    <div @click="gotoComments(item.id)">
                        <img src="../../../assets/Community/icon2.png">
                        <span>78</span>
                    </div>
                    <div>
                        <img src="../../../assets/Community/icon3.png" @click="giveLike(item.id)">
                        <span>{{item.likeCount}}</span>
                    </div>
                </div>
            </li>
        </ul>
        <div style="height: 100px;"></div>
    </div>
</template>

<script>
    import {Dialog} from "vant";
    import https from "../../../https";

    export default {
        name: "index",
        data() {
            return {
                dynamicList:[],
                nowTime:"",
                timeList:[],
            };
        },
        created() {
            this.getDynamicList();

        },
        methods:{
            getDynamicList(){
                const myDate = new Date();
                this.nowTime=myDate.getTime()
                const token = sessionStorage.getItem("token");
                if(token){
                    https.fetchGet('/zhiyou/v1/bbs/dynamicState/manito/nearby',{addressName:this.$store.state.cityName,manitoCount:0})
                        .then(res=>{
                            if(res.data.success==true){
                                this.dynamicList=res.data.queryResult.list
                                for(var i in this.dynamicList){
                                    this.dynamicList[i].createTime=Math.round(parseInt(this.nowTime-new Date(this.dynamicList[i].createTime).getTime())/ 1000 / 60 / 60)
                                }
                            }else{
                                Dialog.alert({
                                    title: '提示',
                                    message: res.data.msg,
                                })
                            }
                        })
                        .catch(err=>{
                            Dialog.alert({
                                title: '提示',
                                message: '服务器错误，请稍后重试!'
                            })
                        })
                }else{
                    Dialog.alert({
                        title: '提示',
                        message: '请先登录!'
                    })
                }
            },
            giveLike(id){
                const token = sessionStorage.getItem("token");
                if(token){
                    https.fetchPut('/zhiyou/v1/bbs/like/state/' + id + '/' + 3,null,{token:token})
                        .then(res=>{
                            if(res.data.success==true){
                                console.log("成功")
                                this.getDynamicList();
                            }else{
                                Dialog.alert({
                                    title: '提示',
                                    message: res.data.msg,
                                })
                            }
                        })
                        .catch(err=>{
                            Dialog.alert({
                                title: '提示',
                                message: '服务器错误，请稍后重试!'
                            })
                        })
                }else{
                    Dialog.alert({
                        title: '提示',
                        message: '请先登录!'
                    })
                }

            },
            getToken(){
                console.log(window.sessionStorage.getItem('token'))
                this.Tmap()
            },
            gotoComments(id){
                this.$router.push("/dynamiccomments/"+id);
            }
        }
    }
</script>

<style scoped>
    .dynamicList{

    }
    .dynamicList li{
        border-bottom: 20px #ebebeb solid;
        padding-right: 22px;
        padding-left: 22px;
    }
    .dynamHeader{
        width: 100%;
        height: 90px;
        margin-top: 20px;
        display: flex;
        position: relative;
        border-bottom: 1px #ebebeb solid;
    }
    .dynamHeader > img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .dynamHeader>div{
        margin-left: 21px;
        margin-top: 13px;
    }
    .dynamHeader > button{
        width: 90px;
        height: 36px;
        position: absolute;
        right: 28px;
        background-color: white;
        border: 1px #51ca89 solid;
        border-radius: 6px;
        font-family: SourceHanSansCN-Regular;
        font-size: 22px;
        color: #51ca89;
        margin-top: 19px;
    }
    .dynamBody{
        margin-top: 19px;
    }
    .dynamBody > span{
        width: 81%;
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
    }
    .contents{
        color: #333333;
    }
    .label{
        color: #51ca89;
    }
    .dynamBody > img{
        width: 100%;
        height: 310px;
        margin-top: 18px;
    }
    .dynamOperation{
        height: 84px;
        display: flex;
        justify-content: space-around;
    }
    .dynamOperation div{
        display: flex;
        align-items: center;
    }
    .dynamOperation img{
        width: 23px;
        height: 23px;
    }
    .dynamOperation span{
        font-family: SourceHanSansCN-Regular;
        font-size: 22px;
        color: #999999;
        margin-left: 10px;
    }
</style>