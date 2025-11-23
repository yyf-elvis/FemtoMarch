import { createI18n } from 'vue-i18n'

// 直接传递完整的语言包对象
import zhCN from './zh-CN.js'
import en from './en.js'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('language') || 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {
    'zh-CN': zhCN,  // 传递完整对象，包含 nav 和 footer
    'en': en
  }
})

export default i18n