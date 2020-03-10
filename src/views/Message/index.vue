<template>
    <div class="message">
        <h3>好友请求</h3>
        <ul style="width: 90%; margin: 0 auto;" v-for="item in producerList">
            <li>
                <img src="../../../public/user6@2x.png" alt="">
                <span>{{item.userInfo.username}}</span>
                <button @click="agreeAddFriend(true,item.msg.customer,item.msg.define,item.msg.level,item.msg.producer)">同意并添加</button>
            </li>
        </ul>
    </div>
</template>

<script>
import https from "../../https";
import {mapState, mapMutations} from "vuex"

export default {
    name: "message",
    data() {
        return {
            producerList: []
        }
    },
    computed: {
        ...mapState(['queryResultList'])
    },
    created() {
        this.getMesseges();
    },
    methods: {
        ...mapMutations(['addMessageCount', 'addQueryResultList', 'addAgree']),
        //获取通知，通知包括好友申请以及申请好友情况、被关注
        getMesseges() {
            const token = sessionStorage.getItem("token");
            console.log(token);
            if (token) {
                https
                    .fetchGet("/zhiyou/v1/users/friend/notice",
                        {token: token},)
                    .then(res => {
                        if (res.data.code === 200) {
                            //token
                            var messageList = res.data;
                            console.log(messageList);
                            //将用户消息条数储存到vuex中
                            if (res.data.queryResult.total !== 0) {
                                this.addMessageCount(res.data.queryResult.total);
                            }
                            this.producerList = res.data.queryResult.list
                        } else {
                            console.log(res.data.msg);
                            if (res.data.msg === "Token不合法,请检查") {
                                alert("请登录");
                                this.goTo('/login')
                            }
                        }
                    });
            } else {
                console.log("请先登录。。");
            }
        },
        //响应好友申请消息
        agreeAddFriend(agree, customer,define,level,producer) {
            const token = sessionStorage.getItem("token");
            console.log(token);
            if (token) {
                https
                    .fetchPut("/zhiyou/v1/users/friend/apply/response/" + agree, {customer, define,level,producer,token: token})
                    .then(res => {
                        if (res.data.code === 200) {
                            console.log(res);
                        } else {
                            console.log(res.data.msg);
                            if (res.data.msg === "Token不合法,请检查") {
                                alert("请登录");
                                this.goTo('/login')
                            }
                        }
                    });
            } else {
                console.log("请先登录。。");
            }
        }
    }
}
</script>

<style>
    .message li {
        height: 96px;
        margin: 20px 0;
        padding: 10px;
        border-bottom: 1px solid #eee;
    }

    .message li > img {
        width: 96px;
        height: 96px;
        vertical-align: middle;
    }

    .message li > span {
        margin: 0 20px;
        font-size: 32px;
    }

    .message li > button {
        width: 150px;
        height: 50px;
        background: #51ca89;
        color: white;
        border: none;
        border-radius: 48px;
    }
</style>
