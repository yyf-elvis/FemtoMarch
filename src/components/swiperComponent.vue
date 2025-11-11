<template>
    <swiper :modules="modules" :slides-per-view="1" :pagination="{
        clickable: true,
        type: 'bullets'  // 明确指定为传统圆点模式
    }" :navigation="true" loop class="my-swiper">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
            <img :src="slide.image" :alt="slide.alt" />
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// 引入轮播图片
import slide1 from '@/assets/img/slide1.png';
import reddot from '@/assets/img/reddot.png';
import slide2 from '@/assets/img/slide2.png';

export default {
    name: 'swiperComponent',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
    data() {
        return {
            slides: [
                { image: slide1, alt: 'Slide 1' },
                { image: reddot, alt: 'Slide 2' },
                { image: slide2, alt: 'Slide 3' },
            ],
        };
    },
};
</script>

<style scoped>
@import url("../assets/css/swiperComponent.css");
</style>