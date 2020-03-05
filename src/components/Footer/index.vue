<template>
    <div class="footer">
        <ul>
            <router-link to="/recommend" tag="li">
                <van-icon name="home-o" />
                <p>推荐</p>
            </router-link>
            <router-link to="/customization" tag="li">
                <van-icon name="vip-card-o" />
                <p>定制</p>
            </router-link>
            <router-link to="/message" tag="li">
                <van-icon name="comment-o" />
                <p>消息</p>
            </router-link>
            <router-link to="/mine" tag="li">
                <van-icon name="user-o" />
                <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    /*@import "../tool.css";*/
    .footer {
        width: 100%;
        height: 94px;
        background: white;
        border-top: 2px #ebe8e3 solid;
        position: fixed;
        left: 0;
        bottom: 0;
        padding: 10px 0;
    }

    .footer ul {
        display: flex;
        text-align: center;
        height: 50px;
        align-items: center;
    }

    .footer ul li {
        flex: 1;
        height: 40px;
    }

    .footer ul li.active {
        color: #51ca89;
    }

    .footer ul li.router-link-active {
        color: #51ca89;
    }

    .footer ul i {
        font-size: 40px;
    }

    .footer ul p {
        font-size: 22px;
        line-height: 22px;
    }
</style>
