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
</style>
