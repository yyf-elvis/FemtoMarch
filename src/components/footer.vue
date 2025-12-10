<template>
  <div class="footerWarp flexC">
    <div class="footerCotainer">
      <div class="contentWarp flexC">
        <div class="contentBox flexC">
          <div class="content">
            <div class="footerLeft flexC">
              <div class="footerLeftCotainer">
                <div class="logo">
                  <img :src="logoSrc" alt="Logo">
                </div>
                <div class="slogan">
                  <p v-html="t('footer.slogan')"></p>
                </div>
              </div>
            </div>
            <div class="footerRight flexC">
              <div class="footerRightBox">
                <div class="footerListCotainer">
                  <div class="footerList listTitle">{{ t('footer.aboutTitle') }}</div>
                  <router-link to="/company" class="footerList">{{ t('footer.company') }}</router-link>
                  <router-link to="/career" class="footerList">{{ t('footer.career') }}</router-link>
                  <router-link to="/newsCenter" class="footerList">{{ t('footer.news') }}</router-link>
                </div>
                <div class="footerListCotainer">
                  <div class="footerList listTitle">{{ t('footer.productTitle') }}</div>
                  <router-link to="/therapeutic" class="footerList">{{ t('footer.productName') }}</router-link>
                </div>
                <div class="footerListCotainer">
                  <div class="footerList listTitle">{{ t('footer.serviceTitle') }}</div>
                  <router-link to="/contactUs" class="footerList">{{ t('footer.support') }}</router-link>
                </div>
                <div class="footerListCotainer">
                  <div class="footerList listTitle">{{ t('footer.followTitle') }}</div>
                  <div class="followUsCotainer">
                    <div class="followList qrcode">
                      <img :src="qrcodeSrc" alt="QR Code" /> <!-- 修改：绑定动态路径 -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divider">
          <div class="line"></div>
        </div>
        <div class="ICPInfo">
          {{ t('footer.copyright', { company: t('footer.companyName') }) }}&nbsp;&nbsp;&nbsp;
          <a href="https://beian.miit.gov.cn" target="_blank">{{ t('footer.icp') }}</a>&nbsp;&nbsp;&nbsp;
          {{ t('footer.police') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import footerLogoEn from '../assets/img/footerLogo-en.svg'
import footerLogoZh from '../assets/img/footerLogo-zh.svg'
import qrcodeSrc from '@/assets/img/qrcode.webp'

const { t, locale } = useI18n()

// ✅ Logo路径改为动态拼接（不再依赖i18n文件）
const logoSrc = computed(() => {
  return locale.value === 'en' ? footerLogoEn : footerLogoZh
})

onMounted(() => {
  console.log('Footer - 当前语言:', locale.value)
})
</script>

<style scoped>
@import url("../assets/css/footer.css");
@import url("../assets/css/footer-flex.css");
</style>