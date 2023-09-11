import {
    createApp
} from 'vue'
import App from './App.vue'
import PiniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {
    createPinia
} from 'pinia'
import router from './router';
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import "dayjs/locale/zh-cn"



const app = createApp(App)
const pinia = createPinia();

pinia.use(PiniaPluginPersistedstate);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.use(ElementPlus, {
    locale: zhCn
})
app.use(pinia).use(router).mount('#app')