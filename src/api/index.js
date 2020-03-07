import axios from "axios"

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//封装axios
let http = axios.create({
    baseURL: '/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    transformRequest: [function (data) {
        let newData = '';
        for (let k in data) {
            if (data.hasOwnProperty(k) === true) {
                newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
            }
        }
        return newData;
    }]
});

function apiAxios(method, url, params, response) {
    http({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
    }).then(function (res) {
        response(res);
    }).catch(function (err) {
        response(err);
    })
}

export default {
    get: function (url, params, response) {
        return apiAxios('GET', url, params, response)
    },
    post: function (url, params, response) {
        return apiAxios('POST', url, params, response)
    },
    put: function (url, params, response) {
        return apiAxios('PUT', url, params, response)
    },
    delete: function (url, params, response) {
        return apiAxios('DELETE', url, params, response)
    }
}
/* 请求拦截器 */
axios.interceptors.request.use(function (config) {
    // 每次请求时会从localStorage中获取token
    let token = Storage.localGet('userToken');
    console.log("请求拦截器");
    console.log(token);
    if (token) {
        token = 'bearer' + ' ' + token.replace(/'|"/g, '') // 把token加入到默认请求参数中
        config.headers.common['Authorization'] = token
    }
    return config
}, function (error) {
    return Promise.reject(error)
});
/* 响应拦截器 */
axios.interceptors.response.use(function (response) { // ①10010 token过期（30天） ②10011 token无效
    if (response.data.code === 99996) {
        Storage.localRemove('userToken') // 删除已经失效或过期的token（不删除也可以，因为登录后覆盖）
        alert("请重新登录！！！");
        router.replace({
            path: '/login' // 到登录页重新获取token
        })
    } else if (response.data.token) { // 判断token是否存在，如果存在说明需要更新token
        Storage.localSet('token', response.data.token) // 覆盖原来的token(默认一天刷新一次)
    }
    return response
}, function (error) {
    return Promise.reject(error)
});
