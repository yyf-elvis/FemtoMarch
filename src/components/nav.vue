<template>
  <div ref="navigation" class="navigation flexC" :class="{ 'nav-hidden': isNavHidden }">
    <div class="navCotainer whinherit" :class="{ 'nav-open': isOpen }">
      <!-- PC端 -->
      <div class="logoBox flexC">
        <router-link to="/" class="logoBox-inner whinherit" @click="setActiveMenu('home')">
          <img :src="logoSrc" alt="Logo">
        </router-link>
      </div>
      <div class="menuCotainer flexC">
        <div class="menuListCotainer flexC">
          <div class="menuList whinherit flexC" :class="{ navActive: activeMenu === 'home' }">
              <router-link to="/" class="menu" @click="setActiveMenu('home')">
                  {{ t('nav.home') }}
              </router-link>
          </div>
          <div class="menuList whinherit flexC"
               :class="{ navActive: ['about', 'company', 'culture'].includes(activeMenu) }">
              <div class="menu">
                  {{ t('nav.about') }}
              </div>
              <!-- 下拉菜单 -->
              <ul class="dropdown-menu">
                  <router-link to="/company" class="dropdown-item"
                      :class="{ active: activeMenu === 'company' }" @click="handleSubMenuClick('company')">
                      {{ t('nav.company') }}
                  </router-link>
                  <router-link to="/culture" class="dropdown-item"
                      :class="{ active: activeMenu === 'culture' }" @click="handleSubMenuClick('culture')">
                      {{ t('nav.culture') }}
                  </router-link>
              </ul>
          </div>
          <div class="menuList whinherit flexC"
               :class="{ navActive: ['product', 'therapeutic', 'diagnostic'].includes(activeMenu) }">
              <div class="menu">
                  {{ t('nav.products') }}
              </div>
              <!-- 下拉菜单 -->
              <ul class="dropdown-menu">
                  <router-link to="/therapeutic" class="dropdown-item"
                      :class="{ active: activeMenu === 'therapeutic' }"
                      @click="handleSubMenuClick('therapeutic')">
                      {{ t('nav.therapeutic') }}
                  </router-link>
                  <!-- <router-link to="/diagnostic" class="dropdown-item"
                      :class="{ active: activeMenu === 'diagnostic' }"
                      @click="handleSubMenuClick('diagnostic')">
                      {{ t('nav.diagnostic') }}
                  </router-link> -->
              </ul>
          </div>
          <div class="menuList whinherit flexC" :class="{ navActive: activeMenu === 'news' }">
              <router-link to="/newsCenter" class="menu" @click="setActiveMenu('news')">
                  {{ t('nav.news') }}
              </router-link>
          </div>
          <div class="menuList whinherit flexC" :class="{ navActive: activeMenu === 'contact' }">
              <router-link to="/contactUs" class="menu" @click="setActiveMenu('contact')">
                  {{ t('nav.contact') }}
              </router-link>
          </div>
          <div class="menuList whinherit flexC" :class="{ navActive: activeMenu === 'career' }">
              <router-link to="/career" class="menu" @click="setActiveMenu('career')">
                  {{ t('nav.career') }}
              </router-link>
          </div>
        </div>
        <div class="language" @click="toggleLanguage">
          <span class="en">{{ currentLangLabel }}</span>
        </div>
    </div>
    <!-- 移动端 -->
    <button class="navigation-trigger collapsed" :class="{ show: isOpen }" @click="toggleModal">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
    </button>
  </div>
  </div>
  <!-- 移动端全屏弹窗 -->
  <transition name="dropdown">
    <div v-if="isOpen" class="modal-fullscreen" ref="modalRef">
      <div class="modal-scrollable scrollable-content">
        <ul class="mobile-navBar">
          <li class="nav-item mobile-dropdown dropdown-hover">
              <router-link to="/" class="nav-link" :class="{ active: activeMenu === 'home' }"
                  @click="closeModal(); setActiveMenu('home')">
                  {{ t('nav.home') }}
              </router-link>
          </li>
          <li class="nav-item mobile-dropdown dropdown-hover">
              <a class="nav-link dropdown-toggle"
                  :class="{ show: dropdownOpenStates.about, active: ['about', 'company', 'culture'].includes(activeMenu) }"
                  @click="toggleDropdown('about', $event)">
                  {{ t('nav.about') }}
              </a>
              <ul class="mobile-dropdownMenu" :class="{ show: dropdownOpenStates.about }">
                  <router-link to="/company">
                      <li class="dropdown-item" :class="{ active: activeMenu === 'company' }"
                          @click="handleSubMenuClick('company')">{{ t('nav.company') }}</li>
                  </router-link>
                  <router-link to="/culture">
                      <li class="dropdown-item" :class="{ active: activeMenu === 'culture' }"
                          @click="handleSubMenuClick('culture')">{{ t('nav.culture') }}</li>
                  </router-link>
              </ul>
          </li>
          <li class="nav-item mobile-dropdown dropdown-hover">
              <a class="nav-link dropdown-toggle"
                  :class="{ show: dropdownOpenStates.product, active: ['product', 'therapeutic', 'diagnostic'].includes(activeMenu) }"
                  @click="toggleDropdown('product', $event)">
                  {{ t('nav.products') }}
              </a>
              <ul class="mobile-dropdownMenu" :class="{ show: dropdownOpenStates.product }">
                  <router-link to="/therapeutic">
                      <li class="dropdown-item" :class="{ active: activeMenu === 'therapeutic' }"
                          @click="handleSubMenuClick('therapeutic')">{{ t('nav.therapeutic') }}</li>
                  </router-link>
                  <!-- <router-link to="/diagnostic" class="dropdown-item"
                      :class="{ active: activeMenu === 'diagnostic' }"
                      @click="handleSubMenuClick('diagnostic')">
                      {{ t('nav.diagnostic') }}
                  </router-link> -->
              </ul>
          </li>
          <li class="nav-item mobile-dropdown dropdown-hover">
              <router-link to="/newsCenter" class="nav-link" :class="{ active: activeMenu === 'news' }"
                  @click="closeModal(); setActiveMenu('news')">
                  {{ t('nav.news') }}
              </router-link>
          </li>
          <li class="nav-item mobile-dropdown dropdown-hover">
              <router-link to="/contactUs" class="nav-link" :class="{ active: activeMenu === 'contact' }"
                  @click="closeModal(); setActiveMenu('contact')">
                  {{ t('nav.contact') }}
              </router-link>
          </li>
          <li class="nav-item mobile-dropdown dropdown-hover">
              <router-link to="/career" class="nav-link"
                  :class="{ active: activeMenu === 'career' }"
                  @click="closeModal(); setActiveMenu('career')">
                  {{ t('nav.career') }}
              </router-link>
          </li>
          <li class="nav-item mobile-lang-switch">
              <a class="nav-link" @click="toggleLanguage">{{ currentLangLabel }}</a>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
// nav.vue
import logoEn from '/src/assets/img/logo-en.webp'
import logoZh from '/src/assets/img/logo-zh.webp'

const { t, locale } = useI18n()

const logoSrc = computed(() => {
  return locale.value === 'en' ? logoEn : logoZh
})

const isOpen = ref(false)
const modalRef = ref()
const dropdownOpenStates = ref({
  about: false,
  product: false
})
const navigation = ref()
const isNavHidden = ref(false)
const router = useRouter()

const activeMenu = ref('home')

// 计算当前语言标签
const currentLangLabel = computed(() => {
  return locale.value === 'en' ? '中文' : 'English'
})

// 切换语言
const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'zh-CN' : 'en'
  locale.value = newLocale
  localStorage.setItem('language', newLocale)
  // 刷新页面确保所有文本更新
  window.location.reload()
}

// 定义路径与菜单的映射关系
const pathToMenuMap = {
  '/': 'home',
  '/company': 'about',
  '/culture': 'about',
  '/product': 'product',
  '/therapeutic': 'product',
  '/diagnostic': 'product',
  '/newsCenter': 'news',
  '/customerService': 'service',
  '/contactUs': 'contact',
  '/career': 'career'
}

watch(() => router.currentRoute.value.path, (newPath) => {
  // 先精确匹配
  if (pathToMenuMap[newPath]) {
    activeMenu.value = pathToMenuMap[newPath]
  }
  // 再处理动态路径（如新闻详情）
  else if (newPath.startsWith('/news/')) {
    activeMenu.value = 'news'
  }
  // 兜底处理
  else {
    activeMenu.value = 'home'
  }
}, { immediate: true })

const setActiveMenu = (menu) => {
  activeMenu.value = menu
  // 关闭移动端弹窗
  if (isOpen.value) {
    isOpen.value = false
  }
}

const handleSubMenuClick = (menu) => {
  setActiveMenu(menu)
  // 这里可以添加路由跳转逻辑
  // router.push(`/about/${menu}`)
}

// 移动端关闭弹窗
const closeModal = () => {
  isOpen.value = false
  dropdownOpenStates.value = {
    about: false,
    product: false
  }
}

// 下拉菜单切换
const toggleDropdown = (menuKey, event) => {
  if (event) event.preventDefault()
  dropdownOpenStates.value[menuKey] = !dropdownOpenStates.value[menuKey]
}

// 滚动相关
let lastScrollTop = 0
let ticking = false
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  if (scrollTop <= 0) {
    isNavHidden.value = false
  } else {
    if (scrollTop > lastScrollTop) {
      isNavHidden.value = true
    } else {
      isNavHidden.value = false
    }
  }
  lastScrollTop = scrollTop
}

const optimizedScrollHandler = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll()
      ticking = false
    })
    ticking = true
  }
}

const handleResize = () => {
  if (window.innerWidth > 990 && isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', optimizedScrollHandler, { passive: true })
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', optimizedScrollHandler)
  window.removeEventListener('resize', handleResize)
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
  enableBodyScroll(document.body)
})

const toggleModal = () => {
  isOpen.value = !isOpen.value
}

watch(isOpen, (val) => {
  if (val) {
    isNavHidden.value = false
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    disableBodyScroll(document.body, {
      allowTouchMove: (el) => {
        return el.classList.contains('scrollable-content') ||
                el.closest('.scrollable-content') !== null
      }
    })
  } else {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    enableBodyScroll(document.body)
    // 关闭时重置所有下拉状态
    dropdownOpenStates.value = {
      about: false,
      product: false
    }
    setTimeout(() => {
      enableBodyScroll(document.body)
    }, 300)
  }
})
</script>

<style scoped>
@import url("../assets/css/nav.css");
@import url("../assets/css/nav-flex.css");

.mobile-lang-switch {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 10px;
  margin-top: 10px;
  cursor: pointer;
}
</style>