<template>
  <div class="history-container">
    <!-- 上方：Swiper轮播图 -->
    <div class="swiper-section">
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
    <div class="timeline-section">
      <div class="timeline-wrapper" ref="timelineRef">
        <!-- 用真实div替代伪元素 -->
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

// Swiper模块配置
const modules = [A11y]

// 企业历程数据
const getImageUrl = (index) => {
  return new URL(`../assets/img/timeline/slide${index}.png`, import.meta.url).href
}

// 企业历程数据
const historyList = ref([
  { year: '2018', title: '公司成立', description: '在科技创新之都深圳正式成立，开启创业征程', image: getImageUrl(1) },
  { year: '2019', title: '产品发布', description: '推出首款产品，获得市场认可和用户好评', image: getImageUrl(2) },
  { year: '2020', title: 'A轮融资', description: '完成数千万元A轮融资，加速产品迭代', image: getImageUrl(3) },
  { year: '2021', title: '团队扩张', description: '团队规模突破100人，建立完整研发体系', image: getImageUrl(4) },
  { year: '2022', title: '业务拓展', description: '业务覆盖全国20+城市，服务客户超5000家', image: getImageUrl(5) },
  { year: '2023', title: '行业领先', description: '成为行业头部企业，持续引领技术创新', image: getImageUrl(6) },
  { year: '2024', title: '未来展望', description: '向全球市场迈进，打造世界级产品', image: getImageUrl(7) }
])

// 引用声明
const currentIndex = ref(0)
const swiperRef = ref(null)
const timelineRef = ref(null)
const timelineItems = ref([])
const timelineLine = ref(null)

// Swiper滑动事件
const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex
  scrollToActiveTimeline()
}

// 轮播图控制-上一张
const swiperPrev = () => {
  if (swiperRef.value && currentIndex.value > 0) {
    swiperRef.value.$el.swiper.slidePrev()
  }
}

// 轮播图控制-下一张
const swiperNext = () => {
  if (swiperRef.value && currentIndex.value < historyList.value.length - 1) {
    swiperRef.value.$el.swiper.slideNext()
  }
}

// 时间轴点击跳转
const goToSlide = (index) => {
  if (swiperRef.value) {
    currentIndex.value = index
    swiperRef.value.$el.swiper.slideTo(index)
    scrollToActiveTimeline()
  }
}

// 滚动时间轴到当前选中项
const scrollToActiveTimeline = async () => {
  await nextTick()
  if (timelineItems.value[currentIndex.value]) {
    timelineItems.value[currentIndex.value].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
}

// 计算并设置时间轴线宽度为滚动内容总宽度
const updateTimelineLineWidth = async () => {
  await nextTick()
  if (timelineLine.value && timelineRef.value) {
    timelineLine.value.style.width = `${timelineRef.value.scrollWidth}px`
  }
}

// 窗口大小改变时重新计算
const handleResize = () => {
  updateTimelineLineWidth()
}

// 生命周期-挂载
onMounted(() => {
  nextTick(() => {
    // scrollToActiveTimeline()
    updateTimelineLineWidth() // 初始计算
    window.addEventListener('resize', handleResize)
  })
})

// 生命周期-卸载
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
@import url("../assets/css/CompanyHistory.css");
</style>