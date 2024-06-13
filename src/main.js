import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/global.css'

import { ElButton } from 'element-plus'
import {ElForm,ElFormItem} from 'element-plus'
import {ElInput} from 'element-plus'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App);

app.use(router)
    .use(ElementPlus).use(ElButton).use(ElForm).use(ElFormItem).use(ElInput);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app');
