<template>
    <div class="bannerContainer mb-9 mb-lg-0">
        <div class="background background-cover">
            <picture>
                <img class="w-100 h-100 img-cover" src="../assets/img/banner-company.webp">
            </picture>
        </div>
        <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
            <div class="row my-auto">
                <div class="col-lg-5">
                    <h1 class="mb-3" :class="{ 'en-title': isEnglish }">
                        {{ $t('company.banner.title') }}
                    </h1>
                    <div class="fs-lg">
                        {{ $t('company.banner.desc') }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="briefWarp" v-scroll-reveal>
        <div class="briefTitle">
            <div class="title">
                {{ $t('company.brief.title') }}
            </div>
            <div class="titlePic">
                <img src="../assets/img/briefPic.webp" >
            </div>
        </div>
        <div class="briefText" v-html="$t('company.brief.text')"></div>
    </div>
    <CompanyHistory />
</template>

<script setup>
import CompanyHistory from '@/components/CompanyHistory.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale } = useI18n({ useScope: 'global' })
const isEnglish = computed(() => locale.value === 'en')
</script>

<style scoped>
@import url("../assets/css/company.css");
@import url("../assets/css/company-flex.css");
</style>