# 			  		"至游"前端开发文档

***负责人：李云兴、叶涛***

`有什么补充或者修改的，请直接修改，最后随项目提交到远程仓库`

## 一. 规范

### 1.文件规范

- 文件名用英文单词且语义化 
-  一些浏览器会将含有这些词的作为广告拦截，文件命名、ID、CLASS等所有命名避免以上词汇。ad、ads、adv、banner、sponsor、gg、guangg、guanggao等。 

### 2.html规范：

- HTML属性应当按照以下给出的顺序依次排列，来确保代码的易读性class 、id 、 name、src、for、 type、 href、title、alt、 role

- 标签、属性、属性命名由小写英文、数字和\_组成，且所有标签必须闭合，属性值必须用双引号`""`CLASS --> n-head-title--> CLASS遵循名称+-，ID --> n-head-title --> ID遵循名称+-

- 语义化HTML，尽可能减少DIV嵌套

### 3.TypeScript书写规范：

- 类名（构造器）

​		-->小驼峰式但首字母大写

​		-->如：Current、DefaultConfig

- 函数名

​		-->小驼峰式

​		-->如：current()、defaultConfig()

- 变量名，常量名

​		-->小驼峰式

​		-->如：current、defaultConfig

### 4.图片规范

- 命名应用小写英文、数字、_组合，便于团队其他成员理解。

  footer_btn.png

  footer_btn2.png

### 5.注释规范：

- TYPESCRIPT、CSS文件注释需要标明作者、文件版本、创建/修改时间、重大版本修改记录、函数描述、文件版本、创建或者修改时间、功能、作者等信息。

## 二.项目结构

![img](https://upload-images.jianshu.io/upload_images/13387321-c187628306a9b74e.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp) 

## 三.技术

### 1.前端必须技术

- Vue全家桶
- UI组件：Vant、sweetalert(弹出框组件)

### 2.其他技术

XXXXXXX

## 四.遇到的问题以及解决方案

##### 	1.问题描述：vue中如何封装公共方法，全局使用

- 解决方案：

  -  首先建立一个src/util/api.js 

    ```javascript
    //  src>util>api.js
    export default {
        fun1: function () {
            alert("1");
        }
    }
    ```

  -  在main.js中引用 

    ```javascript
    //main.js
    import Vue from 'vue'
    import App from './App.vue'
    import router from './router'
    import store from './store'
    
    import util from './util'
    Vue.prototype.util = util
    
    Vue.config.productionTip = false
    
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
    
    ```

  -  直接在使用该方法的地方调用就可以了 

    ```vue
    <template>
      <div class="recommend">
          // 使用该方法即可
        <div class="demo" @click="this.util.fun1">Recommend</div>
      </div>
    </template>
    
    <script>
    export default {
      name: "recommend",
      components: {},
      props: {},
      data() {
        return {};
      },
      methods: {}
    };
    </script>
    <style>
    </style>
    ```

