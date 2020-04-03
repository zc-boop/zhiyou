<template>
    <div class="fans">
        <div class="searchUser">
            <div>
                <van-icon name="search"/>
            </div>
            <input type="text" placeholder="搜索用户名" >
        </div>
        <div>
            <div class="fansTitle">
                粉丝6
            </div>
            <ul class="fansList">
                <li v-for="item in fansList" :key="item.username">
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt="">
                        <span>{{item.username}}</span>
                    </div>
                    <button v-show="(item.level==='001'||item.level==='101')" class="isisAttentionFriendButton"
                            @click="attentionFriend(item.username)">关注
                    </button>
                    <button v-show="(item.level==='011'||item.level==='111')" class="isisAttentionFriendButton"
                            @click="deleteAttentionFriend(item.username)">取消关注
                    </button>
                </li>
<!--                <li>-->
<!--                    <div class="left">-->
<!--                        <img src="../../../../public/user6@2x.png" alt="">-->
<!--                        <span>李灰灰</span>-->
<!--                    </div>-->
<!--                    <button style="opacity: 0.3;">已关注</button>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <div class="left">-->
<!--                        <img src="../../../../public/user6@2x.png" alt="">-->
<!--                        <span>李灰灰</span>-->
<!--                    </div>-->
<!--                    <button>关注</button>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <div class="left">-->
<!--                        <img src="../../../../public/user6@2x.png" alt="">-->
<!--                        <span>李灰灰</span>-->
<!--                    </div>-->
<!--                    <button>关注</button>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <div class="left">-->
<!--                        <img src="../../../../public/user6@2x.png" alt="">-->
<!--                        <span>李灰灰</span>-->
<!--                    </div>-->
<!--                    <button>关注</button>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <div class="left">-->
<!--                        <img src="../../../../public/user6@2x.png" alt="">-->
<!--                        <span>李灰灰</span>-->
<!--                    </div>-->
<!--                    <button>关注</button>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <div class="left">-->
<!--                        <img src="../../../../public/user6@2x.png" alt="">-->
<!--                        <span>李灰灰</span>-->
<!--                    </div>-->
<!--                    <button>关注</button>-->
<!--                </li>-->
<!--                <li>-->
<!--                    <div class="left">-->
<!--                        <img src="../../../../public/user6@2x.png" alt="">-->
<!--                        <span>李灰灰</span>-->
<!--                    </div>-->
<!--                    <button>关注</button>-->
<!--                </li>-->
            </ul>
        </div>
    </div>
</template>

<script>
import https from "../../../https";

export default {
    name: "index",
    data(){
        return{
            searchFriend: "",
            iConcerned: "001",
            searchUserList: [],
            fansList:[],
        }
    },
    methods:{
        searchFriendFun() {
            const token = sessionStorage.getItem("token");
            console.log(token);
            if (token) {
                https
                    .fetchGet("/zhiyou/v1/users/friend/users/" + this.searchFriend, {token: token})
                    .then(res => {
                        if (res.data.code === 200) {
                            this.searchUserList = res.data.queryResult.list
                            console.log(res.data.queryResult.list);
                        } else {
                            console.log(res.data.msg);
                        }
                    })
            } else {
                console.log("请先登录。。");
            }
        },
        getFansList() {
            const token = sessionStorage.getItem("token");
            console.log(token);
            if (token) {
                https
                    .fetchGet("/zhiyou/v1/users/friend/list/" + this.iConcerned,
                        {token: token},)
                    .then(res => {
                        if (res.data.code === 200) {
                            //token
                            this.fansList = res.data.queryResult.list
                        } else {
                            console.log(res.data.msg);
                        }
                    });
            } else {
                console.log("请先登录。。");
            }
        },
        attentionFriend(username) {
            const token = sessionStorage.getItem("token");
            console.log(token);
            if (token) {
                https.fetchPost('/zhiyou/v1/users/friend/pursue/' + username, {token: token})
                    .then(res => {
                        if (res.data.code === 200) {
                            console.log(res.data.msg)
                            this.getFansList()
                        } else {
                            console.log(res.data.msg)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else {
                console.log("请先登录。。");
            }
        },
        deleteAttentionFriend(username) {
            const token = sessionStorage.getItem("token");
            console.log(token);
            if (token) {
                https.fetchDelete('/zhiyou/v1/users/friend/pursue/' + username, {token: token})
                    .then(res => {
                        if (res.data.code === 200) {
                            console.log(res.data.msg)
                            this.getFansList()
                        } else {
                            consle.log(res.data.msg)
                        }
                    })
                    .catch(err => {
                        console.log()
                    })
            } else {
                console.log("请先登录。。");
            }
        },
    },
    created() {
        this.getFansList()
    }

}
</script>

<style>
    /*@import "../../../components/tool.css";*/

    .searchUser {
        width: 90%;
        height: 24px;
        background: #f5f5f5;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        padding: 28px 25px;
        border-radius: 30px;
        color: #bdbebe;
    }

    .searchUser > div {
        width: 10%;
        text-align: center;
        font-size: 30px;
        line-height: 30px;
    }

    .searchUser > input {
        width: 90%;
        height: 30px;
        background: none;
        border: none;
        font-size: 26px;
    }

    .fansTitle {
        padding-left: 19px;
        font-size: 28px;
        color: #555;
        margin-top: 29px;
        margin-bottom: 33px;
    }

    .fansList {
        width: 95%;
        height: auto;
        box-shadow: 0px -6px 8px #eee;
        margin: 0 auto;
        border-radius: 10px;
    }

    .fansList > li {
        height: 120px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        position: relative;
    }

    .fansList > li img {
        width: 80px;
        height: 80px;
    }

    .fansList > li span {
        margin: 0 40px;
        color: #555555;
        font-size: 30px;
    }

    .fansList > li > .left {
        display: flex;
        align-items: center;
    }

    .fansList > li > button {
        width: 150px;
        height: 60px;
        background: #51ca89;
        border: none;
        color: white;
        border-radius: 30px;
        font-size: 26px;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
