<template>
    <div class="bannerContainer mb-9 mb-lg-0">
        <div class="background background-cover">
            <picture>
                <img class="w-100 h-100 img-cover" src="../assets/img/banner-newsCenter.webp">
            </picture>
        </div>
        <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
            <div class="row my-auto">
                <div class="col-lg-5">
                    <!-- ✅ 英文状态下字体变小 -->
                    <h1 class="mb-3" :class="{ 'english-title': isEnglish }">
                        {{ $t('newsCenter.banner.title') }}
                    </h1>
                    <div class="fs-lg">
                        {{ $t('newsCenter.banner.desc') }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="newsWarp">
        <div class="newsContainer">
            <!-- ✅ 添加 v-if 防止空数组渲染 -->
            <router-link v-for="news in sortedNewsList" :key="news.id" :to="{ path: `/news/${news.id}` }" class="newsItem" v-if="sortedNewsList.length > 0">
                <div class="newsBox">
                    <div class="newsPic">
                        <figure :style="{ backgroundImage: `url(${news.imageUrl})` }"></figure>
                    </div>
                    <div class="cardBody">
                        <time>{{ news.date }}</time>
                        <h3 class="cardTitle">{{ news.title }}</h3>
                        <i class="cardIcon"></i>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
// 引入新闻图片
import newsCover1 from '@/assets/img/news/cover/20250801.webp'
import newsCover2 from '@/assets/img/news/cover/20250930.webp'

const { t, locale, messages } = useI18n({ useScope: 'global' })

// ✅ 计算属性：判断是否为英文
const isEnglish = computed(() => locale.value === 'en')

// 图片映射表
const newsImages = {
  1: newsCover1,
  2: newsCover2
}

// ✅ 安全获取翻译数据
const newsList = computed(() => {
  // 直接读取原始消息对象，不使用 t() 函数
  const currentMessages = messages.value[locale.value] || messages.value['zh-CN']
  
  console.log('当前语言:', locale.value)
  console.log('消息对象:', currentMessages)
  
  // 安全获取 items，确保是数组
  const items = currentMessages?.newsCenter?.items || []
  
  if (!Array.isArray(items)) {
    return []
  }
  
  return items.map(item => ({
    id: item.id,
    date: item.date,
    title: item.title,
    imageUrl: newsImages[item.id]
  }))
})

const sortedNewsList = computed(() => {
  return [...newsList.value].sort((a, b) => b.id - a.id)
})
</script>

<style scoped>
@import url("../assets/css/newsCenter.css");
@import url("../assets/css/newsCenter-flex.css");
</style>