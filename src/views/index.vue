<template>
  <div class="bannerContainer mb-9 mb-lg-0">
    <div class="background background-cover">
      <picture>
        <img class="w-100 h-100 img-cover" src="../assets/img/banner-index.webp" alt="banner">
      </picture>
    </div>
    <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
      <div class="row my-auto" v-scroll-reveal>
        <div class="col-lg-5">
          <h1 class="mb-3" :class="{ 'english-title': isEnglish }">{{ $t('index.banner.title') }}</h1>
          <div class="fs-lg" v-html="$t('index.banner.desc')"></div>
          <router-link to="/therapeutic">
            <button>{{ $t('index.banner.btn') }}</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <!-- 企业简介 -->
  <div class="briefContainer">
    <div class="briefContent">
      <div class="briefBox">
        <div class="brief" v-scroll-reveal>
          <div class="briefTextBox">
            <div class="briefTitle">{{ $t('index.brief.title') }}</div>
            <div class="briefText" v-html="$t('index.brief.content')"></div>
          </div>
        </div>
        <div class="learnMore">
          <router-link to="/company" class="learnText">
            {{ $t('index.brief.learn') }}
          </router-link>
          <div class="learnIcon"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 奖牌 -->
  <div class="medalWarp">
    <div class="swiperBox">
      <SwiperComponent />
    </div>
    <div class="medalBox">
      <div v-for="(medal, index) in medals" :key="index" class="medalItem">
        <div class="medalIcon">
          <div class="medalImg">
            <img :src="medal.icon" alt="" />
          </div>
        </div>
        <div class="medalText">{{ $t(`index.medals[${index}]`) }}</div>
      </div>
    </div>
  </div>

  <!-- 新闻 -->
  <div class="newsWarp">
    <div class="newsTitle">
      <div class="title">{{ $t('index.news.title') }}</div>
      <div class="markBar"></div>
    </div>
    <div class="newsContainer">
      <router-link
        v-for="item in newsList"
        :key="item.id"
        :to="{ path: `/news/${item.id}` }"
        class="newsItem"
      >
        <div class="newsBox">
          <div class="newsPic">
            <figure :style="{ backgroundImage: `url(${item.image})` }"></figure>
          </div>
          <div class="cardBody">
            <time>{{ $t(`index.newsItems.${item.id}.date`) }}</time>
            <h3 class="cardTitle">{{ $t(`index.newsItems.${item.id}.title`) }}</h3>
            <i class="cardIcon"></i>
          </div>
        </div>
      </router-link>
    </div>
  </div>

  <RouterLink to="/newsCenter" class="moreBtn">
    <button class="moreNews">
      {{ $t('index.news.more') }}
      <i class="moreIcon"></i>
    </button>
  </RouterLink>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SwiperComponent from '../components/swiperComponent.vue'

// 奖牌图片
import medal1 from '@/assets/img/medal1.png'
import medal2 from '@/assets/img/medal1.png'
import medal3 from '@/assets/img/medal1.png'

// 新闻封面
import newsCover1 from '@/assets/img/news/cover/20250801.webp'
import newsCover2 from '@/assets/img/news/cover/20250930.webp'

const { locale } = useI18n()

// 判断是否为英文
const isEnglish = computed(() => locale.value === 'en')

// 奖牌数据
const medals = ref([
  { icon: medal1 },
  { icon: medal2 },
  { icon: medal3 }
])

// 新闻数据（只留图片，文字走 i18n）
const newsList = ref([
  { id: 1, image: newsCover1 },
  { id: 2, image: newsCover2 }
])

// 语言切换自动保存到 localStorage
watch(locale, (newVal) => {
  localStorage.setItem('language', newVal)
})
</script>

<style scoped>
@import url("../assets/css/index.css");
@import url("../assets/css/index-flex.css");

</style>