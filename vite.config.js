import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtorem from 'postcss-pxtorem'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      // 只扫描语言包子目录，排除 i18n.js 配置文件
      include: [
        path.resolve(__dirname, './src/locales/zh-CN/*.js'),
        path.resolve(__dirname, './src/locales/en/*.js')
      ],
      runtimeOnly: false,
      compositionOnly: true,
      strictMessage: false
    })
  ],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // css: {
  //   postcss: {
  //     plugins: [
  //       pxtorem({
  //         rootValue: 100,
  //         propList: ['*', '!font-size', '!line-height'], // 英文半角
  //         selectorBlackList: ['.norem']
  //       })
  //     ]
  //   }
  // }
})