<template>
    <div class="dynamicComments">
        <div class="mineHeader">
            <div class="space"></div>
            <div class="personalCenter" style="position: relative">
                <van-icon name="arrow-left" class="registerBack" @click="$router.back()"/>
                <div class="pageHeader">评论</div>
            </div>
        </div>
        <div class="dynamicList">
            <div class="dynamHeader">
                <img :src="dynamicComment.headPortrait">
                <div>
                    <p>{{dynamicComment.username}}</p>
                    <p>{{(dynamicComment.createTime>24)?Math.round(dynamicComment.createTime/24)+"天之前":dynamicComment.createTime+"小时之前"}}</p>
                </div>
                <button >+  关注</button>
            </div>
            <div class="dynamBody">
                <span class="label" v-for="(tag,index) in dynamicComment.tags">{{dynamicComment.tags[index]}}</span><p class="contents"> {{dynamicComment.content}}</p>
                <img :src="dynamicComment.imageList" v-if="!dynamicComment.imageList==''">
            </div>
            <div class="dynamInformation">
                <div class="headPortrait">
                    <img src="../../../assets/Community/img5.png">
                    <img src="../../../assets/Community/img6.png">
                    <img src="../../../assets/Community/img7.png">
                    <img src="../../../assets/Community/img6.png">
                    <img src="../../../assets/Community/img7.png">
                </div>
                    <button>{{dynamicComment.likeCount}}</button>
                    <span>喜欢</span>
                <div class="dynamInformation2">
                    <div>
                        <img src="../../../assets/Community/icon2.png">
                        <span>{{commentTotle}}</span>
                    </div>
                    <div>
                        <img src="../../../assets/Community/icon3.png">
                        <span>{{dynamicComment.likeCount}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="commentHead">
            <span>所有评论&nbsp;{{commentTotle}}</span>
        </div>
        <ul>
            <li v-for="item in comentList" :key="item.id">
                <img :src="item.headPortrait">
                <div>
                    <div class="commentAllText">
                        <p class="usernameText">{{item.username}}</p>
                        <div>
                            <img class="heartImg" src="../../../assets/Community/icon4.png" @click="giveLikeComment(item.id)">
                            <span>{{item.likeCount}}</span>
                        </div>
                    </div>
                    <p class="commentText">{{item.content}}</p>
                </div>
            </li>
            <div style="height: 100px;"></div>
        </ul>
        <div class="commentInput">
            <textarea placeholder="写下你的评论" rows="3" v-model="commentDTO.content"></textarea>
            <button><img src="../../../assets/Community/icon5.png" @click="sendComment()"></button>
        </div>
    </div>
</template>

<script>
    import CommentInput from '../CommentInput'
    import https from "../../../https";
    import {Dialog,Toast } from "vant";

    export default {
        name: "index",
        data() {
            return {
                dynamicId:'',
                dynamicComment:[],
                nowTime:'',
                commentDTO:{
                    content:'',
                    objectId:'',
                    type:0
                },
                comentList:[],
                commentTotle:0,
            };
        },
        components: {
            CommentInput
        },
        methods:{
            getDynamic(){
                const myDate = new Date();
                this.nowTime=myDate.getTime()
                https.fetchGet('/zhiyou/v1/bbs/admin/dynamicState/'+this.dynamicId,null)
                    .then(res=>{
                        if(res.data.success==true){
                            this.dynamicComment=res.data.data
                            this.dynamicComment.createTime=Math.round(parseInt(this.nowTime-new Date(this.dynamicComment.createTime).getTime())/ 1000 / 60 / 60)
                        }else{
                            Dialog.alert({
                                title: '提示',
                                message: res.data.msg
                            })
                        }

                    })
                    .catch(err=>{
                        Dialog.alert({
                            title: '提示',
                            message: '服务器错误，请稍后重试!'
                        })
                    })
            },
            getCommentList(){
                https.fetchGet('/zhiyou/v1/bbs/comment',{objectId:this.dynamicId,size:10,type:0})
                    .then(res=>{
                        if(res.data.success==true){
                            this.comentList=res.data.queryResult.list
                            this.commentTotle=res.data.queryResult.total
                        }else{
                            Dialog.alert({
                                title: '提示',
                                message: res.data.msg
                            })
                        }

                    })
                    .catch(err=>{
                        Dialog.alert({
                            title: '提示',
                            message: '服务器错误，请稍后重试!'
                        })
                    })
            },
            giveLikeComment(id){
                const token = sessionStorage.getItem("token");
                if(token){
                    https.fetchPut('/zhiyou/v1/bbs/like/state/' + id + '/' + 1,null,{token:token})
                        .then(res=>{
                            if(res.data.success==true){
                                this.getCommentList();
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
                        message: '请先登录!1'
                    })
                }

            },
            sendComment(){
                this.commentDTO.objectId=this.dynamicId
                const token = sessionStorage.getItem("token");
                if(token){
                https.fetchPostJson('/zhiyou/v1/bbs/comment/publish?token=' + token,{content:this.commentDTO.content,objectId:this.commentDTO.objectId,type:this.commentDTO.type})
                    .then(res=>{
                        if(res.data.success==true){
                            Toast('评论成功');
                            this.getCommentList()
                        }else{
                            Dialog.alert({
                                title: '提示',
                                message: res.data.msg
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
                        message: '请先登录!2'
                    })
                }
            },
        },
        created() {
            this.dynamicId=this.$route.params.id
            this.getDynamic()
            this.getCommentList()
        }
    }
</script>

<style scoped>
    .mineHeader{
        width: 100%;
        height: 126px;
    }
    .space{
        width: 100%;
        height: 30px;
    }
    .registerBack {
        width: 19px;
        height: 37px;
        margin-left: 32px;
        position: absolute !important;
        left: 0;
        line-height: 100px !important;
        z-index: 100;
    }
    .pageHeader{
        font-family: SourceHanSansCN-Regular;
        font-size: 28px;
        color: #ffffff;
    }
    .personalCenter{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 96px;
    }
    .dynamicList{
        padding-top: 20px;
        padding-right: 22px;
        padding-left: 22px;
    }
    .dynamHeader{
        width: 100%;
        height: 90px;
        border-bottom: 1px #ebebeb solid;
        display: flex;
        position: relative;
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
    .dynamHeader>div p:nth-child(1){
        font-family: SourceHanSansCN-Regular;
        font-size: 28px;
        line-height: 35px;
        color: #333333;
    }
    .dynamHeader>div p:nth-child(2){
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        line-height: 35px;
        color: #333333;
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
        height: 52px;
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 36px;
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
    .dynamInformation{
        display: flex;
        align-items: center;
        width: 100%;
        height: 111px;
    }
    .headPortrait{
        width: 135px;
        height: 41px;
        position: relative;
    }
    .headPortrait img{
        width: 40px;
        height: 40px;
        position: absolute;
    }
    .headPortrait img:nth-child(1) {
        left: 11px;
    }
    .headPortrait img:nth-child(2) {
        left: 41px;
    }
    .headPortrait img:nth-child(3) {
        left: 71px;
    }
    .headPortrait img:nth-child(4) {
        left: 101px;
    }
    .headPortrait img:nth-child(5) {
        left: 131px;
    }
    .dynamInformation > button{
        border: 0;
        width: 82px;
        height: 29px;
        border-radius: 14px;
        background-color: #51ca89;
        font-family: SourceHanSansCN-Regular;
        font-size: 18px;
        color: #ffffff;
        margin: auto 0;
    }
    .dynamInformation > span{
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        color: #bcbcbc;
        margin-left: 5px;
    }
    .dynamInformation2{
        display: flex;
        margin-left: auto;
        justify-content: flex-end;
        align-items: center;
        top: 44px;
    }
    .dynamInformation2 div{
        display: flex;
        align-items: center;
    }
    .dynamInformation2 img{
        width: 24px;
        height: 23px;
        font-family: SourceHanSansCN-Regular;
        margin-left: 32px;
        font-size: 20px;
        line-height: 36px;
        color: #bcbcbc;
    }
    .dynamInformation2 span{
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        line-height: 36px;
        color: #bcbcbc;
        margin-left: 5px;
    }
    .commentHead{
        border-top: 10px #eeeeee solid;
        border-bottom: 1px #eeeeee solid;
        width: 100%;
        height: 70px;
        font-family: SourceHanSansCN-Regular;
        font-size: 24px;
        line-height: 70px;
        color: #bcbcbc;
    }
    .commentHead span{
        margin-left: 24px;
    }
    .dynamicComments > ul{
        width: 100%;
        height: 405px;
    }
    .dynamicComments > ul >li{
        display: flex;
        margin-top: 51px;
    }
    .commentAllText{
        margin-top: 11px;
        margin-left: 15px;
        margin-right: 76px;
        display: flex;
        justify-content: space-between;

    }
    .commentAllText > div{
        height: 29px;
        display: flex;
        align-items: center;
    }
    .commentAllText > div > span{
        margin-left: 5px;
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        line-height: 36px;
        color: #bcbcbc;
    }
    .usernameText{
        font-family: SourceHanSansCN-Regular;
        font-size: 28px;
        line-height: 36px;
        color: #608bbc;
    }
    .commentText{
        font-family: SourceHanSansCN-Regular;
        font-size: 20px;
        margin-top: 20px;
        margin-left: 15px;
        margin-right: 97px;
        line-height: 36px;
        color: #6b6b6b;
    }
    .dynamicComments > ul >li>img{
        width: 81px;
        height: 81px;
        border-radius: 50%;
        margin-left: 29px;
    }
    .dynamicComments > ul >li>div{
        width: 100%;
    }
    .heartImg{
        width: 29px;
        height: 29px;
    }
    .commentInput{
        width: 100%;
        height: 98px;
        display: flex;
        align-items: center;
        bottom: 0px;
        position: fixed;
        left: 0;
        padding: 10px 0;
        border-top: 5px rgba(127, 127, 127, 0.23) solid;
        background-clip: padding-box;
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