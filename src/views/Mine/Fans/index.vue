<template>
    <div class="fans">
        <div class="searchUser">
            <div>
                <van-icon name="search"/>
            </div>
            <input type="text" placeholder="搜索用户名">
        </div>
        <div>
            <div class="fansTitle">
                粉丝6
            </div>
            <ul class="fansList">
                <li>
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt="">
                        <span>李灰灰</span>
                    </div>
                    <button>关注</button>
                </li>
                <li>
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt="">
                        <span>李灰灰</span>
                    </div>
                    <button style="opacity: 0.3;">已关注</button>
                </li>
                <li>
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt="">
                        <span>李灰灰</span>
                    </div>
                    <button>关注</button>
                </li>
                <li>
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt="">
                        <span>李灰灰</span>
                    </div>
                    <button>关注</button>
                </li>
                <li>
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt="">
                        <span>李灰灰</span>
                    </div>
                    <button>关注</button>
                </li>
                <li>
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt="">
                        <span>李灰灰</span>
                    </div>
                    <button>关注</button>
                </li>
                <li>
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt="">
                        <span>李灰灰</span>
                    </div>
                    <button>关注</button>
                </li>
                <li>
                    <div class="left">
                        <img src="../../../../public/user6@2x.png" alt="">
                        <span>李灰灰</span>
                    </div>
                    <button>关注</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "index"
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
