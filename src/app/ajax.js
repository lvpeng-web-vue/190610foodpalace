// ajax请求函数模块  返回值是一个promise对象
import axios from 'axios'
export default function ajax(url, data = {}, type = "GET") {
    return new Promise(function (resolve, reject) {
        // 执行异步ajax请求
        let promise
        // 准备url query数据
        if (type == "get") {
            let dataStr = "" //数据拼接字符串
            Object.keys(data).forEach(function (e, i, a) {
                dataStr += e + "=" + data[e] + "&"
            })
            if (dataStr !== "") {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"))
                url = url + "?" + dataStr
                // 发送get请求
                promise = axios.get(url)
            }
        }
        else {
            promise = axios.post(url, data)
        }
        promise.then(function (response) {
            // 成功调用resolve()
            resolve(response.data)
        }).catch(function (error) {
            // 失败调用reject()
            reject(error)
        })
    })
}