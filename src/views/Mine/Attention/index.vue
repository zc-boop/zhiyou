<template>
    <div class="attention">
        <!--<img src="../../../assets/Mine/attention.png" alt="">
            <p>这个家伙很懒什么也没留下</p>
        <button>立即关注</button>-->
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
                    <span>{{item.user.username}}</span>
                </div>
                <button>添加为好友</button>
            </li>
        </ul>

        <div class="weChatFriends">
            <div class="left">
                <img src="../../../assets/Mine/wechatImg.png" alt/>
                <span>微信朋友</span>
            </div>
            <van-icon name="arrow" class="weChatIcon"/>
        </div>

        <div class="alreadyAtt">
            <p class="alreadyTitle">已关注6人</p>
            <ul class="fansList">
                <li>
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt/>
                        <span>李灰灰</span>
                    </div>
                    <button style="opacity: 0.3;">已关注</button>
                </li>
                <li>
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt/>
                        <span>李灰灰</span>
                    </div>
                    <button style="opacity: 0.3;">已关注</button>
                </li>
                <li>
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt/>
                        <span>李灰灰</span>
                    </div>
                    <button style="opacity: 0.3;">已关注</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import https from "../../../https";

export default {
    name: "index",
    data() {
        return {
            searchFriend: "",
            iConcerned: "010",
            searchUserList: []
        };
    },
    //
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
        }
    }
};
</script>

<style>
    /*无关注*/
    .attention > img {
        width: 80%;
        display: block;
        margin: 0 auto;
        margin-top: 138px;
    }

    .attention > p {
        font-size: 26px;
        color: #999;
        text-align: center;
        margin-top: 35px;
    }

    .attention > button {
        width: 261px;
        height: 80px;
        display: block;
        margin: 0 auto;
        margin-top: 136px;
        font-size: 28px;
        color: white;
        border: none;
        background: #51ca89;
        border-radius: 40px;
    }

    /*  有关注后  */
    .weChatFriends {
        width: 95%;
        height: 120px;
        box-shadow: 0px 0px 8px #eee;
        margin: 0 auto;
        border-radius: 10px;
        position: relative;
    }

    .weChatFriends > .left {
        display: flex;
        align-items: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    .weChatFriends > .left > img {
        width: 80px;
        height: 80px;
        margin: 0 40px;
    }

    .weChatFriends > .left > span {
        font-size: 30px;
    }

    .weChatFriends > .weChatIcon {
        right: 20px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px !important;
    }

    .alreadyTitle {
        margin: 30px 0;
        margin-left: 20px;
        font-size: 28px;
    }
</style>
