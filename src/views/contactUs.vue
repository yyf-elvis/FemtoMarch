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
    </div>

    <div class="contactWarp">
      <div class="emailPhone">
        <div>
          <p class="subTitle">{{ $t('contactUs.contact.emailLabel') }}</p>
          <p>sales@femtomarch.com</p>
        </div>
      </div>
      <!-- 深圳地图 -->
      <div class="addr">
        <p class="subTitle">{{ $t('contactUs.contact.addressLabel') }}</p>
        <p>{{ $t('contactUs.contact.shenzhenAddress') }}</p>
      </div>
      <div class="map">
        <!-- ✅ 使用通用组件，传入唯一ID和配置 -->
        <BaseMap containerId="shenzhen-map" :center="[113.922382, 22.577336]" :zoom="16" :marker="{
          position: [113.922382, 22.577336],
          name: '深圳市飞眸医疗器械技术有限公司',
          desc: '总部'
        }" />
      </div>

      <!-- 西安地图 -->
      <div class="emailPhone">
        <div class="addr xian">
          <p class="subTitle">{{ $t('contactUs.contact.addressLabel') }}</p>
          <p>{{ $t('contactUs.contact.xianAddress') }}</p>
        </div>
        <div class="phone">
          <p class="subTitle">{{ $t('contactUs.contact.phoneLabel') }}</p>
          <p>{{ $t('contactUs.contact.phoneNumber') }}</p>
        </div>
      </div>
      <div class="map">
        <!-- ✅ 使用通用组件，传入不同ID和配置 -->
        <BaseMap containerId="xian-map" :center="[108.810537, 34.17072]" :zoom="16" :marker="{
          position: [108.810537, 34.17072],
          name: '深圳市飞眸医疗器械技术有限公司西安子公司',
          desc: '（西安溯宇光电科技有限公司）'
        }" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseMap from '@/components/BaseMap.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n({ useScope: 'global' });
</script>

<style scoped>
@import url("../assets/css/contactUs.css");
@import url("../assets/css/contactUs-flex.css");

/* ✅ 确保地图容器有固定高度 */
.map {
  height: 500px;
  /* 或根据设计调整 */
  margin-bottom: 30px;
}
</style>