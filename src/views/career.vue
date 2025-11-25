<template>
  <div class="bannerContainer mb-9 mb-lg-0">
    <div class="background background-cover">
      <picture>
        <img class="w-100 h-100 img-cover" src="../assets/img/banner-career.webp" alt="career banner">
      </picture>
    </div>

    <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
      <div class="row my-auto">
        <div class="col-lg-5">
          <h1 class="mb-3">{{ t('career.banner.title') }}</h1>
          <div class="fs-lg" v-html="t('career.banner.desc')"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="warp">
    <!-- 一段文字 + <br/> 换行，直接用 v-html 输出 -->
    <div class="slogan" v-scroll-reveal v-html="t('career.slogan')"></div>

    <div class="hireContainer">
      <div class="newsTitle">
        <div class="title">{{ t('career.hire.title') }}</div>
        <div class="markBar"></div>
      </div>
      <div class="hireText">
        <span v-html="t('career.hire.text')"></span>
        <span class="email">hr@femtomarch.com</span>
      </div>

      <div class="platform">
        <div class="platformBox">
          <a href="https://www.zhipin.com/gongsi/job/0b8c17c346b1b9a71XN-3t69GVI~.html?ka=company-jobs"
             target="_blank" rel="noopener">
            <img class="boss" src="../assets/img/boss.webp" alt="BOSS直聘">
          </a>
          <a href="https://www.liepin.com/company/9183448/" target="_blank" rel="noopener">
            <img class="liepin" src="../assets/img/liepin.webp" alt="猎聘">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' });  
</script>

<style scoped>
@import url("../assets/css/career.css");
@import url("../assets/css/career-flex.css");
</style>