<template>
    <div class="mine">
        <div class="mineTop">
            <div class="space"></div>
            <header>
                <span class="leftIcon"></span>
                <span>个人中心</span>
                <van-icon name="setting-o" class="rightIcon"/>
            </header>
            <div class="userCard">
                <div class="top">
                    <div class="topLeft">
                        <img src="../../../public/user6@2x.png" alt="">
                        <router-link to="/login" tag="span">请登录...</router-link>
                    </div>
                    <div class="topRight">
                        <router-link to="/einfo" tag="button">
                            编辑资料
                        </router-link>
                    </div>
                </div>
                <div class="lineCenter"></div>
                <ul class="bottom">
                    <router-link to="/afans/fans" tag="li">
                        <p>10</p>
                        <p>粉丝</p>
                    </router-link>
                    <router-link to="/afans/attention" tag="li">
                        <p>0</p>
                        <p>关注</p>
                    </router-link>
                    <router-link to="/collect" tag="li">
                        <p>0</p>
                        <p>收藏</p>
                    </router-link>
                </ul>
            </div>
        </div>
        <div class="userModifyList">
            <!--            Cpassword-->
            <router-link to="/cpassword">
                <van-cell class="choiceList" title="修改密码" icon="edit" is-link/>
            </router-link>
            <router-link to="/oservice">
                <van-cell class="choiceList" title="在线客服" icon="service-o" is-link/>
            </router-link>
            <van-cell class="choiceList" title="应用指南" icon="question-o" is-link/>
            <router-link to="/feedback">
                <van-cell class="choiceList" title="意见反馈" icon="chat-o" is-link/>
            </router-link>
            <van-cell class="choiceList" title="切换账号" icon="friends-o" is-link/>
        </div>
        <button class="signOut">退出账号</button>

    </div>
</template>

<script>
export default {
    name: "mine"
}
</script>

<style>
    .mineTop {
        width: 100%;
        height: 238px;
        background: #51ca89;
    }

    .mine {
        width: 100%;
        height: 100vh;
        background: #f2f2f2;
    }

    .mine header {
        width: 100%;
        height: 43px;
        display: flex;
        justify-content: space-between;
        color: white;
        align-items: center;
        font-size: 18px;
    }

    .mine header > .leftIcon {
        margin-left: 20px;
    }

    .mine header > .rightIcon {
        margin-right: 20px;
    }

    .userCard {
        width: 80%;
        height: 135px;
        background: white;
        position: absolute;
        top: 89px;
        left: 50%;
        transform: translate(-50%);
        border-radius: 10px;
        padding: 20px 25px;
    }

    .userCard > .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .userCard .topLeft {
        display: flex;
        align-items: center;
    }

    .userCard .topLeft > img {
        width: 61px;
        height: 61px;
        margin-right: 10px;
    }

    .userCard .topLeft > span {
        font-size: 17px;
    }

    .userCard .topRight > button {
        width: 74px;
        height: 28px;
        background: #51ca89;
        border: none;
        font-size: 11px;
        border-radius: 10px;
        color: white;
    }

    .userCard > .lineCenter {
        width: 80%;
        height: 1px;
        background: #dcdcdc;
        margin: 16px auto;
    }

    .userCard > .bottom {
        display: flex;
        justify-content: space-around;
        text-align: center;
    }

    .userCard > .bottom > li > p:first-child {
        font-size: 18px;
    }

    .userCard > .bottom > li > p:last-child {
        font-size: 13px;
        color: #808080;
    }

    /*。。。。。。。。。。。。。。。。。。。。。。。。。。。*/
    .userModifyList {
        margin-top: 45px;
    }

    .choiceList {
        height: 60px;
        font-size: 15px !important;
    }

    .van-cell__left-icon, .van-cell__right-icon {
        font-size: 18px !important;
    }

    .signOut {
        display: block;
        width: 200px;
        height: 30px;
        background: none;
        border: none;
        margin: 20px auto;
        color: #ff0000;
    }
</style>
