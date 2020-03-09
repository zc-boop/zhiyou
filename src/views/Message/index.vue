<template>
    <div class="message">
        <p></p>
        <p></p>
        <p></p>
    </div>
</template>

<script>
import https from "../../https";

export default {
    name: "message",
    created() {
        this.getMesseges();
    },
    methods: {
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
    }
}
</script>

<style>

</style>
