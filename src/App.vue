<template>
    <div id="app">
        <router-view></router-view>
        <Footer v-show="$route.meta.showFooter"/>
    </div>
</template>
<script>
import Footer from "./components/Footer"

export default {
    name: "app",
    components: {
        Footer
    },
    methods:{
        getAddresss(){
            if(this.$store.state.cityName == ''&&this.$store.state.provinceName == ''){
                const KEY ="5BWBZ-NX3YW-VTERV-RR7WG-3CMYJ-77FTT"; //key 秘钥自己申请
                let url = 'https://apis.map.qq.com/ws/location/v1/ip?';
                this.$jsonp(url,{
                    key:KEY,
                    output:'jsonp',
                })
                    .then(json => {
                        let sheng = json.result.ad_info.province;
                        let city = json.result.ad_info.city;
                        this.$store.commit("addProvinceName",sheng)
                        this.$store.commit("addCityName",city)
                        console.log(city) //附近街道地址信息
                        console.log(json)
                        console.log(sheng) //附近街道地址信息
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

        }
    },
    beforeMount() {
        this.getAddresss()
    }
}
</script>
<style>
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    ul,li{
        list-style: none;
    }
    .space {
        width: 100%;
        height: 70px;
    }
</style>
