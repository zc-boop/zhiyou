import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = 'http://120.79.222.144';   //配置接口地址

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    config.headers.Authorization = window.sessionStorage.getItem('token')
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    console.log('错误的传参')
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    //对响应数据做些事
    if (res.data.success) {
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
    console.log('------网络异常------')
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

////返回一个Promise(发送Put请求)
export function fetchPut(url, data,param) {
    return new Promise((resolve, reject) => {
        axios.put(url, data,{params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

////返回一个Promise(发送delete请求)
export function fetchDelete(url, param) {
    return new Promise((resolve, reject) => {
        axios.delete(url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

/**
 * 由于上面你设置json序列化、content-type ,
 * 所以必须重新创建一个新的axios对象，
 * 让浏览器自己设置content-type、并转化为二进制上传
 * @param url
 * @param formData
 * @returns {Promise<unknown>}
 */
export function fetchUploadFile(url, formData) {
   return new Promise((resolve, reject) => {
       axios.create({
           timeout:50000
       }).post(url, formData).then(value => resolve(value)).catch(reason => reject(reason));
   })

}
export default {
    fetchPost,
    fetchGet,
    fetchPut,
    fetchDelete,
    fetchUploadFile
}
