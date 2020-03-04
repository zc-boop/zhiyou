<template>
    <div class="Afans">
        <div style="background: #51ca89;color: white">
            <div class="space"></div>
            <header id="header">
                <div class="headerAll">
                    <van-icon name="arrow-left" class="backTopPrevious" @click="goTo('/mine')"/>
                    <h1>静静吖</h1>
                </div>
            </header>
        </div>
        <ul>
            <router-link to="/afans/attention" tag="li">
                <span>关注</span>
            </router-link>
            <router-link to="/afans/fans" tag="li">
                <span>粉丝</span>
            </router-link>
        </ul>
        <router-view/>
    </div>
</template>

<script>

export default {
    name: "index",
}
</script>

<style>
    .Afans > ul {
        width: 100%;
        height: 65px;
        display: flex;
        justify-content: space-around;
    }

    .Afans > ul > li {
        width: 50%;
        height: 65px;
        font-size: 16px;
        position: relative;
    }
    .Afans > ul > li>span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .Afans>ul>li.router-link-active {
        color: #51ca89;
        box-sizing: border-box;
        border-bottom: 3px solid #52eba9;
        box-shadow: 1px 1px 10px #eee;
    }
</style>
