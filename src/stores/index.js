/**
 * pinia的存储区域
 */

import {
    defineStore
} from "pinia";
import WebStorageCache from "web-storage-cache";

const cache = new WebStorageCache({
    storage: window.localStorage
})

export const mainStore = defineStore("main", {
    state() {
        return {
            token: null,
        }
    },
    actions: {
        setToken(token) {
            this.token = token
        },
    },
    // 配置状态的持久化
    persist: {
        key: "chenhui_store",
        storage: {
            getItem: key => cache.get(key),
            // 到期时间默认以秒为单位
            setItem: (key, value) => cache.set(key, value, {
                exp: 60 * 60 * 24
            }),
            removeItem: key => cache.delete(key),
            clear: () => cache.clear()
        },
        //指定需要持久化的字段
        paths: ["token", "loginClientInfo"]
    }
});