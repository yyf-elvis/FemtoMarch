<template>
    <swiper 
        :modules="modules" 
        :slides-per-view="1" 
        :pagination="{
            clickable: true,
            type: 'bullets'  // 明确指定为传统圆点模式
        }" 
        :navigation="true" 
        :loop="true"
        :autoplay="autoplayOptions" 
        class="my-swiper"
    >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
            <img :src="slide.image" :alt="slide.alt" />
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';  // 引入 Autoplay 模块
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// 引入轮播图片
import slide1 from '@/assets/img/slide1.webp';
import slide2 from '@/assets/img/slide2.webp';
import slide3 from '@/assets/img/slide3.webp';

export default {
    name: 'swiperComponent',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        // 自动播放配置
        const autoplayOptions = {
            delay: 5000,        // 5秒切换一次
            disableOnInteraction: false,  // 用户点击/滑动后，继续自动播放
            pauseOnMouseEnter: true,      // 鼠标悬停时暂停自动播放
        };

        return {
            modules: [Pagination, Navigation, Autoplay],  // 在 modules 中添加 Autoplay
            autoplayOptions,  // 返回自动播放配置
        };
    },
    data() {
        return {
            slides: [
                { image: slide1, alt: 'Slide 1' },
                { image: slide2, alt: 'Slide 2' },
                { image: slide3, alt: 'Slide 3' },
            ],
        };
    },
};
</script>

<style scoped>
@import url("../assets/css/swiperComponent.css");
</style>