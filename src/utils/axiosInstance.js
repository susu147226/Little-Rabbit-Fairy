import axios from "axios";
import router from "@/router";


const axiosInstance = axios.create({
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 5000
});

axiosInstance.interceptors.response.use(resp => {
    if (resp.data.status === "success") {
        return Promise.resolve(resp.data);
    } else {
        console.log("请求成功，服务器响应错误", resp.data);
        return Promise.reject(resp.data);
    }
}, error => {
    console.log("服务器请求失败", error);
    if (error.response.status === 403) {
        router.replace({
            name: "Login",
        })
    }
    return Promise.reject(error);
})



export default axiosInstance;