// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import './assets/css/global.css'
import './assets/css/iconfont.css'

const app = createApp(App)
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