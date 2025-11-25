<template>
  <div class="history-container">
    <!-- 上方：Swiper轮播图 -->
    <div class="swiper-section" v-if="historyList.length > 0">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :navigation="false"
        :loop="true"
        @slideChange="onSlideChange"
        ref="swiperRef"
        class="history-swiper"
      >
        <SwiperSlide v-for="(item, index) in historyList" :key="index">
          <div class="slide-content">
            <img :src="item.image" :alt="item.title" class="slide-image" />
            <div class="slide-info">
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      
      <!-- 自定义前进后退按钮 -->
      <div class="custom-navigation">
        <button class="nav-btn prev" @click="swiperPrev" :disabled="currentIndex === 0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="nav-btn next" @click="swiperNext" :disabled="currentIndex === historyList.length - 1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>

    <!-- 下方：时间轴 -->
    <div class="timeline-section" v-if="historyList.length > 0">
      <div class="timeline-wrapper" ref="timelineRef">
        <div class="timeline-line" ref="timelineLine"></div>
        
        <div 
          v-for="(item, index) in historyList" 
          :key="index"
          class="timeline-item"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
          ref="timelineItems"
        >
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-title">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// ✅ 1. 显式导入所有图片（从 components 目录向上两级到 assets/img/timeline）
import slide1 from '../assets/img/timeline/slide1.webp'
import slide1Mobile from '../assets/img/timeline/slide1-mobile.webp'
import slide2 from '../assets/img/timeline/slide2.webp'
import slide2Mobile from '../assets/img/timeline/slide2-mobile.webp'
import slide3 from '../assets/img/timeline/slide3.webp'
import slide3Mobile from '../assets/img/timeline/slide3-mobile.webp'

// ✅ 2. 建立图片映射表
const imageMap = {
  1: { desktop: slide1, mobile: slide1Mobile },
  2: { desktop: slide2, mobile: slide2Mobile },
  3: { desktop: slide3, mobile: slide3Mobile }
}

// 引入 useI18n
const { locale } = useI18n({ useScope: 'global' })

// ==========================================
// 组件内硬编码翻译数据（绕过外部文件问题）
// ==========================================
const LOCAL_MESSAGES = {
  'zh-CN': {
    items: [
      { 
        year: '2022', 
        title: '公司成立', 
        description: '江苏飞尨激光科技有限公司成立，微光参股（早期孵化）' 
      },
      { 
        year: '2024', 
        title: '公司更名', 
        description: '"飞尨激光"更名为"飞眸医疗"' 
      },
      { 
        year: '2025', 
        title: '取得型检报告', 
        description: '取得型检报告' 
      }
    ]
  },
  'en': {
    items: [
      { 
        year: '2022', 
        title: 'Company Founded', 
        description: 'Jiangsu FeiMang Laser Technology Co., Ltd. established with VivoLight holding shares (early incubation)' 
      },
      { 
        year: '2024', 
        title: 'Company Renamed', 
        description: '"FeiMang Laser" renamed to "FemtoMarch Medical"' 
      },
      { 
        year: '2025', 
        title: 'Type Test Report Obtained', 
        description: 'Type test report obtained' 
      }
    ]
  }
}

// Swiper模块配置
const modules = [A11y]

// 屏幕宽度响应式状态
const isMobile = ref(window.innerWidth < 768)

// 监听窗口大小变化
const updateScreenWidth = () => {
  isMobile.value = window.innerWidth < 768
}

// ✅ 3. 重写图片获取函数
const getImageUrl = (index) => {
  const imageSet = imageMap[index]
  if (!imageSet) return '' // 防御性处理，避免越界
  
  return isMobile.value ? imageSet.mobile : imageSet.desktop
}

// 企业历程数据（使用硬编码翻译）
const historyList = computed(() => {
  const currentLocale = locale.value
  const items = LOCAL_MESSAGES[currentLocale]?.items || LOCAL_MESSAGES['zh-CN'].items
  
  return items.map((item, index) => ({
    year: String(item.year),
    title: item.title,
    description: item.description,
    image: getImageUrl(index + 1) // ✅ 使用重写后的函数
  }))
})

// ... 下面所有代码保持不变 ...
const currentIndex = ref(0)
const swiperRef = ref(null)
const timelineRef = ref(null)
const timelineLine = ref(null)

const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex
  scrollToActiveTimeline()
}

const swiperPrev = () => {
  if (swiperRef.value && swiperRef.value.$el && swiperRef.value.$el.swiper) {
    swiperRef.value.$el.swiper.slidePrev()
  }
}

const swiperNext = () => {
  if (swiperRef.value && swiperRef.value.$el && swiperRef.value.$el.swiper) {
    swiperRef.value.$el.swiper.slideNext()
  }
}

const goToSlide = (index) => {
  if (swiperRef.value && swiperRef.value.$el && swiperRef.value.$el.swiper) {
    currentIndex.value = index
    swiperRef.value.$el.swiper.slideTo(index)
    scrollToActiveTimeline()
  }
}

const scrollToActiveTimeline = async () => {
  await nextTick()
  const item = timelineItems.value[currentIndex.value]
  if (item) {
    item.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
}

const updateTimelineLineWidth = async () => {
  await nextTick()
  if (timelineLine.value && timelineRef.value) {
    timelineLine.value.style.width = `${timelineRef.value.scrollWidth}px`
  }
}

const handleResize = () => {
  updateTimelineLineWidth()
}

onMounted(() => {
  nextTick(() => {
    updateTimelineLineWidth()
    window.addEventListener('resize', handleResize)
    window.addEventListener('resize', updateScreenWidth)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('resize', updateScreenWidth)
})
</script>

<style scoped>
@import url("../assets/css/CompanyHistory.css");
</style>