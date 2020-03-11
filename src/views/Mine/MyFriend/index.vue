<template>
    <div class="myFriend">
        <Header title="我的好友" style="background: #51ca89;color: white"/>
        <div class="searchUser">
            <div>
                <van-icon name="search"/>
            </div>
            <input type="text" placeholder="搜索用户名" v-model="searchFriend" @change="searchFriendFun"/>
        </div>
        <!--搜索用户列表-->
        <ul class="fansList" v-for="item in searchUserList" :key="item.user.username">
            <li>
                <div class="left">
                    <img src="../../../../public/user6@2x.png" alt/>
                    <span id="addUsername">{{item.user.username}}</span>
                </div>
                <button @click="addFriend">添加为好友</button>
            </li>
        </ul>
        <hr>
        <!-- <ul class="friendList" >
             <li>
                 <div class="fridenLeft">
                     <img src="../../../../public/user6@2x.png" alt="">
                     <span>username</span>
                     <button class="deleteFriendButton">删除好友</button>
                     <button class="isisAttentionFriendButton">关注好友</button>
                     <button class="isisAttentionFriendButton">取消关注</button>
                 </div>
             </li>
         </ul>-->
        <ul class="friendList">
            <li>
                <div class="fridenLeft" v-for="item in friendList" :key="item.username">
                    <img src="../../../../public/user6@2x.png" alt="">
                    <span>{{item.username}}{{item.level}}</span>
                    <button class="deleteFriendButton" @click="deleteFriend(item.username)">删除好友</button>
                    <button v-show="(item.level==='101'||item.level==='100')" class="isisAttentionFriendButton"
                            @click="attentionFriend(item.username)">关注好友
                    </button>
                    <button v-show="(item.level==='110'||item.level==='111')" class="isisAttentionFriendButton"
                            @click="deleteAttentionFriend(item.username)">取消关注
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Header from "../../../components/Header"
import https from "../../../https";

export default {
    name: "index",
    data() {
        return {
            searchFriend: "",
            iConcerned: "100",
            searchUserList: [],
            friendList: [],
            isAttentionFriend: "取消关注好友",
            level: '',
        };
    },
    components: {
        Header
    },
    created() {
        this.getFriendList();
    },
    methods: {
        searchFriendFun() {
            const token = sessionStorage.getItem("token");
            console.log(token);
            if (token) {
                https
                    .fetchGet("/zhiyou/v1/users/friend/users/" + this.searchFriend, {token: token})
                    .then(res => {
                        if (res.data.code === 200) {
                            this.searchUserList = res.data.queryResult.list;
                            console.log(res.data.queryResult.list);
                        } else {
                            console.log(res.data.msg);
                        }
                    })
            } else {
                console.log("请先登录。。");
            }
        },
        getFriendList() {
            const token = sessionStorage.getItem("token");
            console.log(token);
            if (token) {
                https
                    .fetchGet("/zhiyou/v1/users/friend/list/" + this.iConcerned,
                        {token: token},)
                    .then(res => {
                        if (res.data.code === 200) {
                            //token
                            this.friendList = res.data.queryResult.list;
                            console.log(this.friendList);
                        } else {
                            console.log(res.data.msg);
                        }
                    });
            } else {
                console.log("请先登录。。");
            }
        },
        addFriend() {
            const token = sessionStorage.getItem("token");
            const addUsername = document.getElementById("addUsername").innerText;
            if (token) {
                https
                    .fetchPost("/zhiyou/v1/users/friend/apply/" + addUsername, {token: token})
                    .then(res => {
                        if (res.data.code === 200) {
                            // this.searchUserList = res.data.queryResult.list
                            console.log(res.data);
                        } else {
                            console.log(res.data.msg);
                        }
                    })
            } else {
                console.log("请先登录。。");
            }
        },
        deleteFriend(username) {
            const token = sessionStorage.getItem("token");
            console.log(token);
            if (token) {
                https.fetchDelete('/zhiyou/v1/users/friend/delete/' + username, {token: token})
                    .then(res => {
                        if (res.data.code === 200) {
                            console.log(res.data.msg)
                            this.getFriendList()
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
        changeAattention(level) {
            if (level == 1) {

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
                            this.getFriendList()
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
                            this.getFriendList()
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
        }
    }
}
</script>

<style>
    .friendList > li {
        height: 98px;
        padding: 10px 20px;
        margin: 10px 0;
        position: relative;
        border-bottom: 1px solid #eee;
    }

    .friendList > li > div > img {
        width: 98px;
        height: 98px;
        vertical-align: middle;
    }

    .friendList > li > div > span {
        font-size: 32px;
        margin-left: 20px;
    }

    .friendList > li > .fridenLeft {
        display: flex;
        align-items: center;
    }

    .deleteFriendButton {
        width: 150px;
        height: 60px;
        background: red;
        border: none;
        color: white;
        position: absolute;
        right: 20px;
        border-radius: 30px;
        font-size: 26px;
    }

    .isisAttentionFriendButton {
        width: 150px;
        height: 60px;
        background: #51ca89;
        border: none;
        color: white;
        position: absolute;
        right: 200px;
        border-radius: 30px;
        font-size: 26px;

    }
</style>
