// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locales/i18n.js'  // 新增：导入 i18n 实例
import './assets/css/reset.css'
import './assets/css/global.css'
import './assets/css/iconfont.css'
import './assets/css/vScrollReveal.css'
import vScrollReveal from './assets/js/vScrollReveal'

const app = createApp(App)

app.directive('scroll-reveal', vScrollReveal)
app.use(i18n)  // 新增：注册 i18n
app.use(router)
app.mount('#app')

// main.js
// function setRem() {
//   const vw = Math.max(375, window.innerWidth)
//   const base = 100 * (vw / 1920)               // 线性比例
//   const clamped = Math.max(16, base)           // 最小 16 px
//   document.documentElement.style.fontSize = clamped + 'px'
// }
// setRem()
// window.addEventListener('resize', setRem)