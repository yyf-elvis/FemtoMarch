import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtorem from 'postcss-pxtorem'

export default defineConfig({
  plugins: [vue()],
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