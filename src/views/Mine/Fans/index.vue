<template>
    <div class="fans">
        <div class="searchUser">
            <div>
                <van-icon name="search"/>
            </div>
            <input type="text" placeholder="搜索用户名">
        </div>
        <div>
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
        height: 30px;
        background: #f5f5f5;
        margin: 18px auto;
        display: flex;
        justify-content: space-between;
        padding: 14px;
        border-radius: 25px;
    }

    .searchUser > div {
        width: 10%;
        text-align: center;
        font-size: 18px;
        line-height: 30px;
    }

    .searchUser > input {
        width: 90%;
        height: 30px;
        background: none;
        border: none;
    }

    .fansList > li {
        height: 70px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        position: relative;
    }

    .fansList > li img {
        width: 40px;
        height: 40px;
    }

    .fansList > li span {
        margin: 0 20px;
        color: #555555;
    }

    .fansList > li > .left {
        display: flex;
        align-items: center;
    }

    .fansList > li > button {
        width: 75px;
        height: 30px;
        background: #51ca89;
        border: none;
        color: white;
        border-radius: 20px;
        font-size: 12px;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

</style>
