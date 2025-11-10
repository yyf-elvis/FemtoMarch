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
                { image: '/slide/logo.webp', alt: 'Slide 1' },
                { image: '/slide/reddot.png', alt: 'Slide 2' },
                { image: '/slide/banner.png', alt: 'Slide 3' },
            ],
        };
    },
};
</script>

<style scoped>
@import url("../assets/css/swiperComponent.css");
</style>