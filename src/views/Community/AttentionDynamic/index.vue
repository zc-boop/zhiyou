<template>
    <div class="attentionDynamic">
        <ul class="dynamicList" >
            <li>
            <div class="dynamHeader">
                <img src="../../../assets/Community/img1.png">
                <div>
                    <p>Miya</p>
                    <p>1小时前</p>
                </div>
                <button >+  关注</button>
            </div>
            <div class="dynamBody">
                <span class="label">#峨眉山#</span><p class="contents"> 攀登到半山，鸟瞰整个城市，瞬间感觉整个人都
                    不好了...</p>
                <img src="../../../assets/Community/img2.png">
            </div>
            <div class="dynamOperation">
                <div>
                    <img src="../../../assets/Community/icon1.png" @click="getToken()">
                    <span>23</span>
                </div>
                <router-link to="/dynamiccomments" tag="div">
                    <img src="../../../assets/Community/icon2.png">
                    <span>78</span>
                </router-link>
                <div>
                    <img src="../../../assets/Community/icon3.png" @click="giveLike('5e7489dc71467974dc145b19')">
                    <span>90</span>
                </div>
            </div>
            </li>
            <li>
                <div class="dynamHeader">
                    <img src="../../../assets/Community/img3.png">
                    <div>
                        <p>Echo</p>
                        <p>10分钟之前</p>
                    </div>
                    <button >已关注</button>
                </div>
                <div class="dynamBody">
                    <span class="label">#稻城亚丁#</span><p class="contents"> 在这漫天飞雪的日子里，这里有诗和远方.......</p>
                    <img src="../../../assets/Community/img4.png">
                </div>
                <div class="dynamOperation">
                    <div>
                        <img src="../../../assets/Community/icon1.png">
                        <span>23</span>
                    </div>
                    <router-link to="/dynamiccomments" tag="div">
                        <img src="../../../assets/Community/icon2.png">
                        <span>78</span>
                    </router-link>
                    <div>
                        <img src="../../../assets/Community/icon3.png">
                        <span>90</span>
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
        methods:{
            giveLike(id){
                const token = sessionStorage.getItem("token");
                console.log(token);
                if(token){
                    https.fetchPut('/zhiyou/v1/bbs/like/state/' + id + '/' + 3,null,{token:token})
                        .then(res=>{
                            if(res.data.success==true){
                                console.log("成功")
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
            }
        }
    }
</script>

<style scoped>
    .dynamicList{

    }
    .dynamicList li{
        height: 593px;
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
        border: 1px #666666 solid;
        border-radius: 6px;
        font-family: SourceHanSansCN-Regular;
        font-size: 22px;
        color: #666666;
        margin-top: 19px;
    }
    .dynamBody{
        margin-top: 19px;
    }
    .dynamBody > span{
        width: 81%;
        height: 52px;
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
        display: flex;
        justify-content: space-around;
        margin-top: 31px;
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