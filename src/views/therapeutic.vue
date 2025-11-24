<template>
    <div class="bannerContainer mb-9 mb-lg-0">
        <div class="background background-cover">
            <picture>
                <img class="w-100 h-100 img-cover" src="../assets/img/banner-product.webp">
            </picture>
        </div>
        <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
            <div class="row my-auto">
                <div class="col-lg-5" v-scroll-reveal>
                    <h1 class="mb-3" :class="{ 'english-title': isEnglish }">
                        {{ $t('therapeutic.banner.title') }}
                    </h1>
                    <div class="fs-lg">
                        {{ $t('therapeutic.banner.desc') }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ✅ 修复：必须使用 v-html 渲染包含 HTML 标签的字符串 -->
    <div class="productInfo" v-scroll-reveal>
        <p v-html="$t('therapeutic.features[0]')"></p>
        <p v-html="$t('therapeutic.features[1]')"></p>
        <p v-html="$t('therapeutic.features[2]')"></p>
    </div>

    <div class="advantageCotainer">
        <div class="advantageBox">
            <div class="productPic" v-scroll-reveal>
                <img src="../assets/img/product.webp">
            </div>
            <div class="advantageText" v-scroll-reveal>
                <p class="title">{{ $t('therapeutic.advantages.title') }}</p>
                <p><span class="iconCheck"></span>{{ $t('therapeutic.advantages.items[0]') }}</p>
                <p><span class="iconCheck"></span>{{ $t('therapeutic.advantages.items[1]') }}</p>
                <p><span class="iconCheck"></span>{{ $t('therapeutic.advantages.items[2]') }}</p>
                <p><span class="iconCheck"></span>{{ $t('therapeutic.advantages.items[3]') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { locale } = useI18n({ useScope: 'global' });
const isEnglish = computed(() => locale.value === 'en');
</script>

<style scoped>
@import url("../assets/css/product.css");
@import url("../assets/css/product-flex.css");


</style>