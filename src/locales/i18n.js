// src/i18n.js
import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN.js'
import en from './en.js'

// ✅ 第一步：显式强制默认中文（无视浏览器）
const DEFAULT_LANG = 'zh-CN';

// ✅ 第二步：确保 localStorage 初始值为中文
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', DEFAULT_LANG);
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('language'), // 现在一定能取到 'zh-CN'
  fallbackLocale: DEFAULT_LANG,
  
  // ✅ 第三步：禁止自动检测浏览器语言（最重要！）
  // 如果用的是 vue-i18n v9.3+，需改为：
  // detectBrowserLanguage: false,
  
  messages: {
    'zh-CN': zhCN,
    'en': en
  }
})

export default i18n