<template>
    <div class="footer">
        <van-tabbar route v-model="active">
            <van-tabbar-item replace to="/recommend">
                <span>行程</span>
                <template #icon="props">
                    <img :src="props.active ? icon1.active : icon1.inactive"/>
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/periphery">
                <span>周边</span>
                <template #icon="props">
                    <img :src="props.active1 ? icon2.active : icon2.inactive"/>
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/community">
                <span>社区</span>
                <template #icon="props">
                    <img :src="props.active ? icon.active : icon.inactive"/>
                </template>
            </van-tabbar-item>
            <van-tabbar-item replace to="/mine">
                <span>我的</span>
                <template #icon="props">
                    <img :src="props.active ? icon4.active : icon4.inactive"/>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import {mapState} from "vuex"

export default {
    name: "Footer",
    data(){
        return{
            active: 0,
            icon1: {
                active: 'http://pic.liyunxing.top/zhiyou/xingcheng1.png',
                inactive: 'http://pic.liyunxing.top/zhiyou/xingcheng.png'
            },
            icon2: {
                active: 'http://pic.liyunxing.top/zhiyou/zhoubain1.png',
                inactive: 'http://pic.liyunxing.top/zhiyou/zhoubain.png'
            },
            icon: {
                active: 'http://pic.liyunxing.top/zhiyou/shequ1.png',
                inactive: 'http://pic.liyunxing.top/zhiyou/shequ.png'
            },
            icon4: {
                active: 'http://pic.liyunxing.top/zhiyou/wode1.png',
                inactive: 'http://pic.liyunxing.top/zhiyou/wode.png'
            }
        }
    },
    computed: {
        ...mapState(['messageCount'])
    }
}
</script>

<style>
    /*@import "../tool.css";*/

</style>
