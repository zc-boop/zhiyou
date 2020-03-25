<template>
    <div class="addDynamic">
        <div class="header">
            <span @click="$router.back()">取消</span>
            <img src="../../../assets/Community/icon6.png">
        </div>
        <div enctype="multipart/form-data" name="dynamicInfoForm" class="addDynamicBody">
            <div>
            <div class="qianmian"></div>
            <textarea placeholder="快点写下你的心得体会吧!" rows="3" v-model="content">
            </textarea>
            </div>
            <van-uploader class="fileUnload" v-model="fileList" multiple :after-read="afterRead" :max-count="1" accept="image/png, image/jpeg"/>
        </div>
        <div class="theSelection">
            <span>添加主题</span>
            <div class="label">
                <button @click="addLobel('#景点#')" :style="scenicColor" >#景点#</button><button @click="addLobel('#酒店#')" :style="hotelColor">#酒店#</button><button @click="addLobel('#美食#')" :style="foodColor">#美食#</button>
            </div>
            <div class="where">
                <img src="../../../assets/Community/dignwie.png">
                <span>你在哪里？</span>
                <img src="../../../assets/Community/icon@2x.png">
            </div>
            <div class="open">
                <img src="../../../assets/Community/yanjing.png">
                <span>公开吗？</span>
                <img src="../../../assets/Community/icon@2x.png">
            </div>
            <div class="remind">
                <img src="../../../assets/Community/youxiang.png">
                <span>提醒谁看？</span>
                <img src="../../../assets/Community/icon@2x.png">
            </div>
        </div>
        <button class="addDynamicButton" @click="addDynamic()">发布</button>
    </div>
</template>

<script>
    import {Dialog, Toast} from 'vant';
    import https from "../../../https";
    export default {

        name: "index",
        data() {
            return {
                fileList: [
                ],
                imageList:'',
                addressName:this.$store.state.provinceName+':'+this.$store.state.cityName,
                content:'',
                type:"1",
                title:'',
                tags:['','',''],
                scenicColor:'',
                hotelColor:'',
                foodColor:'',
                yescolor:'background-color: #51ca89;',
                nocolor:'background-color: #eaecf0;',
            }
        },
        methods: {
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
            },
            addDynamic(){
                const token = sessionStorage.getItem("token");
                for (let i=0;i<this.fileList.length;i++){
                    this.imageList=this.imageList+this.fileList[i].content
                    console.log(this.imageList)
                }
                if(token){
                    console.log(111)
                    https.fetchPostJson('/zhiyou/v1/bbs/dynamicState/publish?token='+token,{addressName:this.addressName,content:this.content,imageList:this.imageList,tags:this.tags,title:this.title,type:this.type})
                        .then(res=>{
                            if(res.data.success==true){
                                Toast('发布成功!');
                                this.$router.back()
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
                                message: err
                            })
                        })
                }else{
                    Dialog.alert({
                        title: '提示',
                        message: '请先登录!'
                    })
                }
            },
            addLobel(lobel) {
                console.log(this.tags)
                if (this.tags.indexOf(lobel) == -1) {
                    if (lobel == '#景点#') {
                        this.tags[0] = lobel
                        this.scenicColor = 'background-color: #51ca89;'
                    } else if (lobel == '#酒店#') {
                        this.tags[1] = lobel
                        this.hotelColor = 'background-color: #51ca89;'
                    } else if (lobel == '#美食#') {
                        this.tags[2] = lobel
                        this.foodColor = 'background-color: #51ca89;'
                    }
                }else if (this.tags.indexOf(lobel) == 0) {
                    this.tags[0] = ''
                    this.scenicColor = 'background-color: #eaecf0;'
                }else if (this.tags.indexOf(lobel) == 1) {
                    console.log('1114')
                    this.tags[1] = ''
                    this.hotelColor = 'background-color: #eaecf0;'
                }else if (this.tags.indexOf(lobel) == 2) {
                    console.log('1115')
                    this.tags[2] = ''
                    this.foodColor = 'background-color: #eaecf0;'
                }

            }
        }
    }
</script>

<style scoped>

    .header{
        width: 100%;
        height: 135px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header > img{
        width: 37px;
        height: 37px;
        margin-right: 55px;
    }
    .header > span{
        font-family: SourceHanSansCN-Regular;
        font-size: 36px;
        line-height: 50px;
        color: #2d2d2d;
        margin-left: 46px;
    }
    .addDynamicBody{
        width: 100%;
        padding-top: 49px;
        padding-bottom: 20px;
        background-color: #f7f7f7;
    }
    .qianmian{
        width: 5px;
        height: 30px;
        margin-top: 10px;
        border-radius: 2px;
        background-color: #51ca89;
    }
    .addDynamicBody > div{
        display: flex;
        margin-left: 79px;

    }
    .addDynamicBody > div > textarea{
        width: 80%;
        margin-left: 20px;
        border: 0;
        font-family: SourceHanSansCN-Regular;
        font-size: 30px;
        line-height: 50px;
        color: #b9b9b9;
        background-color: #f7f7f7;
    }
    textarea::-webkit-input-placeholder {
        color: #b9b9b9;
    }
    .fileUnload{
        margin-left: 100px !important;
    }
    .theSelection{
        margin-left: 43px;
        margin-top: 42px;
    }
    .theSelection > span{
        font-family: SourceHanSansCN-Regular;
        font-size: 36px;
        line-height: 50px;
        color: #2b2b2b;
    }
    .label{
        margin-left: 5px;
        margin-top: 31px;
    }
    .label > button{
        width: 98px;
        height: 37px;
        border: 0;
        border-radius: 16px;
        font-family: SourceHanSansCN-Regular;
        font-size: 26px;
        font-weight: bold;
        color: #2b2b2b;
        background-color: #eaecf0;
    }
    .label button:not(:first-child) {
        margin-left: 28px;
    }
    .where,.open,.remind{
        margin-left: 5px;
        margin-top: 45px;
        font-family: SourceHanSansCN-Regular;
        font-size: 30px;
        line-height: 50px;
        color: #2b2b2b;
        display: flex;
        align-items: center;
    }
    .theSelection > div img:nth-child(3){
        width: 14px;
        height: 24px;
        position: absolute;
        right: 48px;
    }
    .theSelection > div > span{
        margin-left: 26px;
    }
    .where > img{
        width: 26px;
        height: 33px;
    }
    .open > img{
        width: 34px;
        height: 22px;
    }
    .remind > img{
        width: 27px;
        height: 27px;
    }
    .addDynamicButton{
        width: 87%;
        height: 78px;
        font-family: SourceHanSansCN-Regular;
        font-size: 36px;
        line-height: 50px;
        color: #ffffff;
        background-color: #51ca89;
        border-radius: 38px;
        border: 0;
        position: absolute;
        bottom: 43px;
        left: 6%;
    }
</style>