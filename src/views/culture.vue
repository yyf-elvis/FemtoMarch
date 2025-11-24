<template>
    <div class="bannerContainer mb-9 mb-lg-0">
        <div class="background background-cover">
            <picture>
                <img class="w-100 h-100 img-cover" src="../assets/img/banner-culture.webp">
            </picture>
        </div>
        <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
            <div class="row my-auto">
                <div class="col-lg-5">
                    <h1 class="mb-3">
                        {{ $t('culture.banner.title') }}
                    </h1>
                    <div class="fs-lg">
                        {{ $t('culture.banner.desc') }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="warp">
        <div class="goal">
            <div class="goalText" v-scroll-reveal>
                <div class="txtTitle">
                    {{ $t('culture.mission.title') }}
                </div>
                <div class="subTitle">
                    <div class="title">{{ $t('culture.mission.subtitle') }}</div>
                    <div class="markBar"></div>
                </div>
                <div class="text">
                    {{ $t('culture.mission.text') }}
                </div>
            </div>
            <div class="goalPic">
                <img src="../assets/img/goal.webp">
            </div>
        </div>
        <div class="wish">
            <div class="wishPic">
                <img src="../assets/img/wish.webp">
            </div>
            <div class="wishText" v-scroll-reveal>
                <div class="txtTitle">
                    {{ $t('culture.vision.title') }}
                </div>
                <div class="subTitle">
                    <div class="title">{{ $t('culture.vision.subtitle') }}</div>
                    <div class="markBar"></div>
                </div>
                <div class="text">
                    {{ $t('culture.vision.text') }}
                </div>
            </div>
            <div class="wishPicMobile">
                <img src="../assets/img/wish.webp">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
</script>

<style scoped>
@import url("../assets/css/culture.css");
@import url("../assets/css/culture-flex.css");
</style>