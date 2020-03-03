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
    components: {
        Header
    }
}
</script>

<style>
    .change-password > p {
        width: 80%;
        margin: 50px auto;
        font-size: 16px;
        color: #404b69;
    }

    .cPasswordInput {
        width: 80% !important;
        height: 54px;
        border: 2px solid #f0f0f0;
        margin: 16px auto;
        border-radius: 5px;
    }

    .confirmModify {
        width: 80%;
        height: 50px;
        display: block;
        border: none;
        margin: 31px auto;
        background: #51ca89;
        color: white;
        border-radius: 50px;
        box-shadow: 0px 5px 10px rgba(81, 202, 137, 0.5);
    }
</style>
