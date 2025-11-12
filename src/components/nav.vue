<template>
	<div ref="navigation" class="navigation flexC" :class="{ 'nav-hidden': isNavHidden }">
		<div class="navCotainer whinherit" :class="{ 'nav-open': isOpen }">
			<!-- PC端 -->
			<div class="logoBox flexC">
				<router-link to="/" class="logoBox-inner whinherit" @click="setActiveMenu('home')">
					<img src="../assets/img/logo.webp">
				</router-link>
			</div>
			<div class="menuCotainer flexC">
				<div class="menuListCotainer flexC">
					<div class="menuList whinherit flexC" :class="{ navActive: activeMenu === 'home' }">
						<router-link to="/" class="menu" @click="setActiveMenu('home')">
							首页
						</router-link>
					</div>
					<div class="menuList whinherit flexC"
						:class="{ navActive: ['about', 'company', 'culture', 'career'].includes(activeMenu) }">
						<div class="menu" @click="setActiveMenu('about')">
							关于飞眸
						</div>
						<!-- 下拉菜单 -->
						<ul class="dropdown-menu">
							<router-link to="/company" class="dropdown-item"
								:class="{ active: activeMenu === 'company' }"
								@click="handleSubMenuClick('company')">
							公司简介
							</router-link>
							<router-link to="/culture" class="dropdown-item"
								:class="{ active: activeMenu === 'culture' }"
								@click="handleSubMenuClick('culture')">
							企业文化
							</router-link>
							<router-link to="/career" class="dropdown-item"
								:class="{ active: activeMenu === 'career' }"
								@click="handleSubMenuClick('career')">
							在飞眸工作
							</router-link>
						</ul>
					</div>
					<div class="menuList whinherit flexC" :class="{ navActive: activeMenu === 'products' }">
						<router-link to="/product" class="menu" @click="setActiveMenu('products')">
							产品中心
						</router-link>
					</div>
					<div class="menuList whinherit flexC" :class="{ navActive: activeMenu === 'news' }">
						<router-link to="/newsCenter" class="menu" @click="setActiveMenu('news')">
							飞眸动态
						</router-link>
					</div>
					<div class="menuList whinherit flexC" :class="{ navActive: activeMenu === 'service' }">
						<router-link to="/customerService" class="menu" @click="setActiveMenu('service')">
							客户服务
						</router-link>
					</div>
					<div class="menuList whinherit flexC" :class="{ navActive: activeMenu === 'contact' }">
						<router-link to="/contactUs" class="menu" @click="setActiveMenu('contact')">
							联系我们
						</router-link>
					</div>
				</div>
				<div class="language">
					<span class="en">English</span>
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
							首页
						</router-link>
					</li>
					<li class="nav-item mobile-dropdown dropdown-hover">
						<a class="nav-link dropdown-toggle"
							:class="{ show: isDropdownOpen, active: ['about', 'company', 'culture', 'career'].includes(activeMenu) }"
							@click="toggleDropdown($event)">
							关于飞眸
						</a>
						<ul class="mobile-dropdownMenu" :class="{ show: isDropdownOpen }">
							<router-link to="/">
								<li class="dropdown-item" :class="{ active: activeMenu === 'company' }"
									@click="handleSubMenuClick('company')">企业简介</li>
							</router-link>
							<router-link to="/culture">
								<li class="dropdown-item" :class="{ active: activeMenu === 'culture' }"
									@click="handleSubMenuClick('culture')">企业文化</li>
							</router-link>
							<router-link to="/career">
								<li class="dropdown-item" :class="{ active: activeMenu === 'career' }"
									@click="handleSubMenuClick('career')">在飞眸工作</li>
							</router-link>
						</ul>
					</li>
					<li class="nav-item mobile-dropdown dropdown-hover">
						<router-link to="/product" class="nav-link" :class="{ active: activeMenu === 'products' }"
							@click="closeModal(); setActiveMenu('products')">
							产品中心
						</router-link>
					</li>
					<li class="nav-item mobile-dropdown dropdown-hover">
						<router-link to="/newsCenter" class="nav-link" :class="{ active: activeMenu === 'news' }"
							@click="closeModal(); setActiveMenu('news')">
							飞眸动态
						</router-link>
					</li>
					<li class="nav-item mobile-dropdown dropdown-hover">
						<router-link to="/customerService" class="nav-link"
							:class="{ active: activeMenu === 'service' }"
							@click="closeModal(); setActiveMenu('service')">
							客户服务
						</router-link>
					</li>
					<li class="nav-item mobile-dropdown dropdown-hover">
						<router-link to="/contactUs" class="nav-link" :class="{ active: activeMenu === 'contact' }"
							@click="closeModal(); setActiveMenu('contact')">
							联系我们
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const isOpen = ref(false)
const modalRef = ref()
const isDropdownOpen = ref(false)
const navigation = ref()
const isNavHidden = ref(false)
const route = useRoute()
const router = useRouter()

const activeMenu = ref('home')

// 定义路径与菜单的映射关系
const pathToMenuMap = {
  '/': 'home',
  '/company': 'about',
  '/culture': 'about',
  '/career': 'about',
  '/product': 'products',
  '/newsCenter': 'news',
  '/customerService': 'service',
  '/contactUs': 'contact',
}

watch(() => route.path, (newPath) => {
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
	isDropdownOpen.value = false
}

// 下拉菜单切换
const toggleDropdown = (event) => {
	event.preventDefault()
	isDropdownOpen.value = !isDropdownOpen.value
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
	if (!isOpen.value) {
		isDropdownOpen.value = false
	}
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
		isDropdownOpen.value = false
		setTimeout(() => {
      enableBodyScroll(document.body)
    }, 300)
	}
})
</script>

<style scoped>
@import url("../assets/css/nav.css");
@import url("../assets/css/nav-flex.css");
</style>