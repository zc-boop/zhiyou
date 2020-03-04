<template>
    <div class="register">
        <div class="head"></div>
        <van-nav-bar title="注册" left-arrow @click-left="$router.back()">
        </van-nav-bar>
        <van-form @submit="onSubmit">
            <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                    v-model="sms"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
            >
                <van-button color="#7232dd" plain>获取验证码</van-button>
            </van-field>
            <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                    注册
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                username: '',
                password: '',
                sms:'',
            };
        },
        methods: {
            onSubmit(values) {
                console.log('submit', values);
            },
        },


    }
</script>

<style scoped>
    .head{
        width: 100%;
        height: 35px;
    }
    .van-nav-bar
    {
        background: #51ca89;
    }
    .van-icon-arrow-left::before{
        color: white;
    }
    .van-nav-bar__text,
    .van-nav-bar__title{
        color: white;
        font-family: SourceHanSansCN-Regular;
        font-size: 18px;
    }
</style>
