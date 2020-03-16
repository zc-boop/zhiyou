<template>
    <div class="foods">
        <ul class="foodMenu">
            <li>推荐</li>
            <li>凉菜</li>
            <li>炒菜</li>
            <li>糕点</li>
            <li>主食</li>
            <li>酒水</li>
        </ul>
        <ul class="foodList">
            <li>
                <img src="../../../assets/Periphery/food1.png" alt="">
                <div class="foodDetail">
                    <h3>招牌麻辣鱼</h3>
                    <p>
                        采用鲜嫩鲢鱼作为主要食材，云南大红袍花椒和红椒以及几样小菜向辅佐，辣味适中且不油腻
                    </p>
                    <div class="price">
                        <p>￥118 <small>月销：271</small></p>
                        <button>立即购买</button>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../../assets/Periphery/food2.png" alt="">
                <div class="foodDetail">
                    <h3>巧克力爆浆冰淇淋</h3>
                    <p>
                        澳洲牛肉可以提供高质量、易吸收的蛋白质，可以补充人体所需的所有必须的氨基酸。
                    </p>
                    <div class="price">
                        <p>￥98<small>月销：271</small></p>
                        <button>立即购买</button>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../../assets/Periphery/food3.png" alt="">
                <div class="foodDetail">
                    <h3>抹茶菠菜冰沙</h3>
                    <p>
                        澳洲牛肉可以提供高质量、易吸收的蛋白质，可以补充人体所需的所有必须的氨基酸。
                    </p>
                    <div class="price">
                        <p>￥10 <small>月销：271</small></p>
                        <button>立即购买</button>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../../assets/Periphery/food1.png" alt="">
                <div class="foodDetail">
                    <h3>招牌麻辣鱼</h3>
                    <p>
                        采用鲜嫩鲢鱼作为主要食材，云南大红袍花椒和红椒以及几样小菜向辅佐，辣味适中且不油腻
                    </p>
                    <div class="price">
                        <p>￥118 <small>月销：271</small></p>
                        <button>立即购买</button>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../../assets/Periphery/food2.png" alt="">
                <div class="foodDetail">
                    <h3>巧克力爆浆冰淇淋</h3>
                    <p>
                        澳洲牛肉可以提供高质量、易吸收的蛋白质，可以补充人体所需的所有必须的氨基酸。
                    </p>
                    <div class="price">
                        <p>￥98<small>月销：271</small></p>
                        <button>立即购买</button>
                    </div>
                </div>
            </li>
            <li>
                <img src="../../../assets/Periphery/food3.png" alt="">
                <div class="foodDetail">
                    <h3>抹茶菠菜冰沙</h3>
                    <p>
                        澳洲牛肉可以提供高质量、易吸收的蛋白质，可以补充人体所需的所有必须的氨基酸。
                    </p>
                    <div class="price">
                        <p>￥10 <small>月销：271</small></p>
                        <button>立即购买</button>
                    </div>
                </div>
            </li>
        </ul>
        <div style="height: 94px;"></div>
    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style>
    .foods {
        background: #f6f6f6;
    }

    .foodMenu {
        display: flex;
    }

    .foodMenu > li {
        width: 155px;
        height: 90px;
        font-size: 30px;
        color: #999;
        text-align: center;
        line-height: 90px;
    }

    .foodMenu > li:first-of-type {
        font-size: 36px;
        color: #51ca89;
    }

    .foodMenu > li:hover {
        font-size: 36px;
        color: #51ca89;
    }

    .foodList {
    }

    .foodList > li:first-of-type {
        margin-top: 0;
    }

    .foodList > li {
        width: 95%;
        height: 220px;
        background: white;
        margin: 0 auto;
        margin-top: 24px;
        border-radius: 16px;
        padding: 26px 0;
        display: flex;
    }

    .foodList > li img {
        width: 205px;
        height: 220px;
        margin-left: 26px;
        margin-right: 30px;
        border-radius: 12px;
    }

    .foodDetail {
        width: 54%;
        color: #666;
    }

    .foodDetail > h3 {
        font-size: 30px;
        margin-top: 16px;
        margin-bottom: 14px;
    }

    .foodDetail > p {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .foodDetail > .price {
        display: flex;
        justify-content: space-between;
    }

    .foodDetail > .price > p {
        font-size: 30px;
        color: #ff0000;
    }

    .foodDetail > .price > p > small {
        font-size: 20px;
        color: #999;
        margin-left: 13px;
    }

    .foodDetail > .price > button {
        width: 168px;
        height: 52px;
        background: #51ca89;
        color: white;
        border: none;
        border-bottom-left-radius: 16px;
        border-top-right-radius: 16px;
    }
</style>
