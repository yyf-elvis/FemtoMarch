<template>
    <div class="bannerContainer mb-9 mb-lg-0">
        <div class="background background-cover">
            <picture>
                <img class="w-100 h-100 img-cover" src="../assets/img/banner-contactUs.webp">
            </picture>
        </div>
        <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
            <div class="row my-auto">
                <div class="col-lg-5">
                    <h1 class="mb-3">
                        {{ $t('contactUs.banner.title') }}
                    </h1>
                    <div class="fs-lg">
                        {{ $t('contactUs.banner.desc') }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="warp">
        <div class="support">
            <div class="newsTitle">
                <div class="title">{{ $t('contactUs.contact.title') }}</div>
                <div class="markBar"></div>
            </div>
            <div class="contactWarp">
                <div class="emailPhone">
                    <div class="email">
                        <p class="subTitle">{{ $t('contactUs.contact.emailLabel') }}</p>
                        <p>sales@femtomarch.com</p>
                    </div>
                    <div class="phone">
                        <p class="subTitle">{{ $t('contactUs.contact.phoneLabel') }}</p>
                        <!-- ✅ 动态显示电话号码 -->
                        <p>{{ $t('contactUs.contact.phoneNumber') }}</p>
                    </div>
                </div>
                <!-- 深圳地址 -->
                <div class="addr">
                    <p class="subTitle">{{ $t('contactUs.contact.addressLabel') }}</p>
                    <p>{{ $t('contactUs.contact.shenzhenAddress') }}</p>
                </div>
                <div class="map">
                    <ShenzhenMap />
                </div>
                <!-- 西安地址 -->
                <div class="addr xian">
                    <p class="subTitle">{{ $t('contactUs.contact.addressLabel') }}</p>
                    <p>{{ $t('contactUs.contact.xianAddress') }}</p>
                </div>
                <div class="map">
                    <XianMap />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import XianMap from '@/components/XianMap.vue';
import ShenzhenMap from '@/components/ShenzhenMap.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
</script>

<style scoped>
@import url("../assets/css/contactUs.css");
@import url("../assets/css/contactUs-flex.css");
</style>