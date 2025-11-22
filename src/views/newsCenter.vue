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
                    <h1 class="mb-3">
                        飞眸动态
                    </h1>
                    <div class="fs-lg">
                        飞眸官方发布的最新动态或消息为您提供关于飞眸的第一手资讯
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="newsWarp">
        <div class="newsContainer">
            <router-link v-for="news in sortedNewsList" :key="news.id" :to="{ path: `/news/${news.id}` }" class="newsItem">
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
// 引入新闻图片
import newsCover1 from '@/assets/img/news/cover/20250801.webp'
import newsCover2 from '@/assets/img/news/cover/20250930.webp'

const newsList = ref([
    {
        id: 1,  // 添加唯一ID
        date: '2025.8.1',
        title: '【飞眸医疗】飞秒激光变革眼科术式',
        imageUrl: newsCover1
    },
    {
        id: 2,
        date: '2025.9.30',
        title: '热烈祝贺！飞眸医疗喜获粤港澳大湾区创业大赛全国总决赛铜奖！',
        imageUrl: newsCover2
    }
])

const sortedNewsList = computed(() => {
    return [...newsList.value].sort((a, b) => b.id - a.id) // ID降序排列
})
</script>

<style scoped>
@import url("../assets/css/newsCenter.css");
@import url("../assets/css/newsCenter-flex.css");
</style>