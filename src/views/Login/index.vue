<template>
    <div class="login">
        <div class="username">
            <img src="../../../public/user6@2x.png" alt="">
            <input type="text" placeholder="账号">
        </div>
        <div class="password">
            <img src="../../../public/user6@2x.png" alt="">
            <input type="password" placeholder="密码">
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
}
</script>

<style scoped>
    .login>div{
        display: flex;
        margin: 10px;
    }
    .login img{
        width: 25px;
    }
</style>
