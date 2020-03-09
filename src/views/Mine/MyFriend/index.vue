<template>
    <div class="myFriend">
        <Header title="我的好友" style="background: #51ca89;color: white"/>
        <div class="searchUser">
            <div>
                <van-icon name="search"/>
            </div>
            <input type="text" placeholder="搜索用户名" v-model="searchFriend" @change="searchFriendFun"/>
        </div>
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
        <ul class="friendList">
            <li>
                <img src="../../../../public/user6@2x.png" alt="">
                <span>Username</span>
            </li>
            <li>
                <img src="../../../../public/user6@2x.png" alt="">
                <span>Username</span>
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
            searchUserList: []
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
                            var friendList = res.data;
                            console.log(friendList);
                        } else {
                            console.log(res.data.msg);
                        }
                    });
            } else {
                console.log("请先登录。。");
            }
        },
        addFriend(){
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
        }
    }
}
</script>

<style>
    .friendList > li {
        height: 98px;
        padding: 10px 20px;
        margin: 10px 0;
        border-bottom: 1px solid #eee;
    }
    .friendList > li > img {
        width: 98px;
        height: 98px;
        vertical-align: middle;
    }

    .friendList > li > span {
        font-size: 32px;
        margin-left: 20px;
    }
</style>
