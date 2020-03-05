<template>
    <div class="feedback">
        <Header title="意见反馈"/>
        <div class="feedbackBody">
            <div class="feedbackHeader">
                <img src="../../../assets/Mine/feedback.png" alt="">
                <p>
                    遇到问题了？点击
                    <router-link to="/oservice" tag="span">
                        在线客服
                    </router-link>
                    立刻解答您的问题。
                </p>
            </div>
            <div class="ProblemDescription">
                <p>您的问题或建议：</p>
                <van-field
                        v-model="message"
                        rows="2"
                        autosize
                        type="textarea"
                        maxlength="50"
                        placeholder="请简要描述你在使用产品过程中的问题和意见"
                        show-word-limit
                        class="feedbackText"
                />
            </div>
            <div class="contactDetails">
                <p>您的联系方式：</p>
                <van-cell-group>
                    <van-field v-model="value" placeholder="邮箱（选填）" class="feedbackInput"/>
                    <van-field v-model="value2" placeholder="请输入手机号" class="feedbackInput"/>
                </van-cell-group>
                <p class="contactExplanation">
                    请留下您的联系方式，以便我们能够方便了解问
                    题以及您反馈问题结果。紧急问题可拨打
                    123-456-789，获得及时帮助
                    Einfo
                </p>
                <button>意见反馈</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../../../components/Header"

export default {
    name: "index",
    data() {
        return {
            message: "",
            value: "",
            value2: ""
        }
    },
    components: {
        Header
    }
}
</script>

<style>
    .feedbackBody {
        width: 100%;
        height: 100%;
        background: #f0f0f0;
        box-sizing: border-box;
        border: 1px solid #f0f0f0;
        border-bottom-color: white;
    }

    .feedbackHeader {
        width: 100%;
        height: 136px;
        background: white;
        margin: 11px 0;
        display: flex;
        align-items: center;
        padding-left: 26px;
    }

    .feedbackHeader > img {
        width: 52px;
        height: 52px;
    }

    .feedbackHeader > p {
        width: 66%;
        font-size: 30px;
        margin-left: 13px;
    }

    .feedbackHeader > p > span {
        color: #51ca89;
    }

    .ProblemDescription {
        padding: 27px 28px;
        background: white;
        margin-bottom: 12px;
    }

    .ProblemDescription > p {
        font-size: 30px;
        margin-bottom: 32px;
    }

    .feedbackText {
        width: 692px;
        height: 260px;
        border: 1px solid #d2d2d2;
        position: relative;
        border-radius: 10px;
    }

    .van-field__word-limit {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .contactDetails {
        background: white;
        padding: 22px 28px;
    }

    .contactDetails > p:first-child {
        margin-bottom: 32px;
        font-size: 30px;
    }

    .feedbackInput {
        width: 692px;
        height: 100px;
        border: 1px solid #d2d2d2;
        margin: 20px 0;
        border-radius: 10px;
        font-size: 30px !important;
        display: flex;
        align-items: center;
    }

    .contactDetails > .contactExplanation{
        margin: 34px 0;
        font-size: 32px;
        color: #d5d5d5;
    }
    .contactDetails>button{
        width: 640px;
        height: 98px;
        background: #51ca89;
        color: white;
        border: none;
        display: block;
        margin: 0 auto;
        font-size: 36px;
        border-radius: 44px;

    }
</style>
