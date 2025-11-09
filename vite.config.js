import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtorem from 'postcss-pxtorem'

export default defineConfig({
  plugins: [vue()],
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