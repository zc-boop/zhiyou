<template>
    <div class="einfo">
        <Header title="编辑资料"/>
        <div class="editInformation">
            <div class="header">
                <img src="../../../../public/user6@2x.png" alt="">
                <p>
                    静静吖
                    <span class="gender">♀</span>
                </p>
                <ul class="menu">
                    <router-link to="/afans/fans" tag="li">
                        <span>粉丝</span>
                        <span>5696</span>
                    </router-link>
                    <router-link to="/afans/attention" tag="li">
                        <span>关注</span>
                        <span>2534</span>
                    </router-link>
                    <router-link to="/collect" tag="li">
                        <span>收藏</span>
                        <span>2514</span>
                    </router-link>
                </ul>
            </div>
            <div class="headPortrait">
                <span>头像</span>
                <div class="headPortraitInputDiv">
                    <label for="inputFile">
                        <img src="../../../../public/user6@2x.png" class="mask" style="">
                    </label>
                    <input type="file" id="inputFile"
                           style="display: none"
                           multiple
                           accept="image/jpg,image/jpeg,image/png"
                    >
                </div>
            </div>
            <ul class="otherModify">
                <li>
                    <span>用户名</span>
                    <div>
                        <span>静静吖</span>
                        <van-icon name="arrow" class="rightIcon"/>
                    </div>
                </li>
                <li>
                    <span>性别</span>
                    <div>
                        <span>女</span>
                        <van-icon name="arrow" class="rightIcon"/>
                    </div>
                </li>
                <li>
                    <span>邮箱</span>
                    <div>
                        <span>XXXXXX@163.com</span>
                        <van-icon name="arrow" class="rightIcon"/>
                    </div>
                </li>
                <li>
                    <span>手机号码</span>
                    <div>
                        <span>150670XXXXX</span>
                        <van-icon name="arrow" class="rightIcon"/>
                    </div>
                </li>
                <li>
                    <button class="confirmChanges">确认修改</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Header from "../../../components/Header"

export default {
    name: "index",
    data() {
        return {
            fileList: [],
            headerImg: "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1898582417,1582081952&fm=26&gp=0.jpg  ",
            base64: ""
        }
    },
    components: {
        Header
    },
    methods: {}
}
</script>

<style>
    .editInformation {
        width: 100%;
        height: 100%;
        background: #fafafa;
    }

    .editInformation > .header {
        width: 100%;
        height: 385px;
        background: white;
        margin-bottom: 22px;
        text-align: center;
        padding-top: 30px;
    }
    .editInformation > .header>p{
        font-size: 34px;
    }
    .editInformation > .header > img {
        width: 150px;
        height: 150px;
        display: block;
        margin: 0 auto;
        margin-bottom: 25px;
    }

    .editInformation > .header .gender {
        color: #fa3a70;
        font-weight: bold;
    }

    .editInformation > .header > .menu {
        display: flex;
        justify-content: space-around;
        margin: 42px 0;
        font-size: 26px;
    }
    .menu>li>span:last-child{
        margin: 0 10px;
        color: #333;
    }
    .headPortrait {
        height: 140px;
        margin: 20px 0;
        background: white;
        padding: 0 28px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 30px;
    }

    .headPortraitInputDiv .mask {
        width: 90px;
        height: 90px;
        display: block;
        border-radius: 50%;
    }

    .otherModify > li {
        height: 91px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 28px;
        background: white;
        margin: 2px 0;
        font-size: 30px;
    }

    .otherModify > li:nth-child(3) {
        margin-top: 20px;
    }

    .otherModify > li:nth-child(5) {
        margin-bottom: 0;
        padding-top: 27px;
    }

    .otherModify > li > div {
        display: flex;
        align-items: center;
        color: #999;
    }

    .confirmChanges {
        display: block;
        width: 85%;
        height: 100px;
        margin: 0 auto;
        border: none;
        background: #51ca89;
        color: white;
        border-radius: 50px;
        box-shadow: 0px 5px 10px rgba(81, 202, 137, 0.5);
        font-size: 36px;
    }
</style>
