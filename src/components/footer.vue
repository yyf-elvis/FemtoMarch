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
                                    <router-link to="/company" class="footerList">{{ t('footer.company')
                                    }}</router-link>
                                    <router-link to="/career" class="footerList">{{ t('footer.career') }}</router-link>
                                    <router-link to="/newsCenter" class="footerList">{{ t('footer.news')
                                    }}</router-link>
                                </div>
                                <div class="footerListCotainer">
                                    <div class="footerList listTitle">{{ t('footer.productTitle') }}</div>
                                    <router-link to="/therapeutic" class="footerList">{{ t('footer.productName')
                                    }}</router-link>
                                </div>
                                <div class="footerListCotainer">
                                    <div class="footerList listTitle">{{ t('footer.serviceTitle') }}</div>
                                    <router-link to="/contactUs" class="footerList">{{ t('footer.support')
                                    }}</router-link>
                                </div>
                                <div class="footerListCotainer">
                                    <div class="footerList listTitle">{{ t('footer.followTitle') }}</div>
                                    <div class="followUsCotainer">
                                        <div class="followList qrcode">
                                            <img src="../assets/img/qrcode.png" alt="QR Code" />
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
                    {{ t('footer.icp') }}&nbsp;&nbsp;&nbsp;
                    {{ t('footer.police') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'  // ← 确保引入

const { t, locale } = useI18n()

// Logo 路径
const logoSrc = computed(() => {
  return t('footer.logo')  // 直接返回路径
})

// 二维码路径
const qrcodeSrc = computed(() => {
    const qrcodeName = locale.value === 'en' ? 'qrcode-en.png' : 'qrcode-zh.png'
    return `/img/${qrcodeName}`
})

import { onMounted } from 'vue'

onMounted(() => {
    console.log('Footer - 当前语言:', locale.value)
    console.log('Footer - sloganLine1:', t('footer.sloganLine1'))
})
</script>

<style scoped>
@import url("../assets/css/footer.css");
@import url("../assets/css/footer-flex.css");
</style>