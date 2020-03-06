<template>
    <div class="change-password">
        <Header title="修改密码"/>
        <p>验证码发送到您的电子邮件。请输入验证码并创建新密码。</p>
        <van-field
                v-model="username"
                name="验证码"
                placeholder="验证码"
                :rules="[{ required: true, message: '验证码' }]"
                class="cPasswordInput"
        />
        <van-field
                v-model="password"
                type="password"
                name="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '新的密码' }]"
                class="cPasswordInput"
        />
        <van-field
                v-model="password2"
                type="password"
                name="确认密码"
                placeholder="确认密码"
                :rules="[{ required: true, message: '确认密码' }]"
                class="cPasswordInput"
        />
        <button class="confirmModify">更改密码</button>
    </div>
</template>

<script>
import Header from "../../../components/Header"

export default {
    name: "index",
    data(){
        return{
            username:"",
            password:"",
            password2:""
        }
    },
    components: {
        Header
    }
}
</script>

<style>
    .change-password > p {
        width: 83%;
        margin: 100px auto;
        font-size: 32px;
        color: #404b69;
    }

    .cPasswordInput {
        width: 87% !important;
        height: 108px;
        border: 2px solid #f0f0f0;
        margin: 32px auto;
        border-radius: 5px;
        font-size: 30px !important;
        padding: 32px 40px !important;
    }

    .confirmModify {
        width: 85%;
        height: 100px;
        display: block;
        border: none;
        margin: 62px auto;
        background: #51ca89;
        color: white;
        border-radius: 44px;
        box-shadow: 1px 2px 13px rgba(81, 202, 137, 0.5);
        font-size: 36px;
    }
</style>
