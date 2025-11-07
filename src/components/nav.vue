<template>
	<div ref="navigation" class="navigation flexC" :class="{ 'nav-hidden': isNavHidden }">
		<div class="navCotainer whinherit">
			<!-- PC端 -->
			<div class="logoBox flexC">
				<div class="logoBox-inner whinherit">
					<img src="../assets/img/logo.png">
				</div>
			</div>
			<div class="menuCotainer flexC">
				<div class="menuListCotainer flexC">
					<div class="menuList whinherit flexC">
						<div class="menu">
							首页
						</div>
					</div>
					<div class="menuList whinherit flexC">
						<div class="menu">
							关于飞眸
						</div>
						<!-- 新增下拉菜单 -->
						<ul class="dropdown-menu">
							<li>
								<a>公司简介</a>
							</li>
							<li>
								<a>企业文化</a>
							</li>
							<li>
								<a>在飞眸工作</a>
							</li>
						</ul>
					</div>
					<div class="menuList whinherit flexC">
						<div class="menu">
							产品中心
						</div>
					</div>
					<div class="menuList whinherit flexC">
						<div class="menu">
							新闻中心
						</div>
					</div>
					<div class="menuList whinherit flexC">
						<div class="menu">
							客户服务
						</div>
					</div>
					<div class="menuList whinherit flexC">
						<div class="menu">
							联系我们
						</div>
					</div>
				</div>
				<div class="language">
					<span>English</span>
				</div>
			</div>
			<!-- 移动端 -->
			<button class="navigation-trigger collapsed":class="{ show: isOpen }" @click="toggleModal">
				<span class="line line-1"></span>
				<span class="line line-2"></span>
			</button>
		</div>
	</div>

	<!-- 全屏弹窗 -->
	<transition name="dropdown">
		<div v-if="isOpen" class="modal-fullscreen" ref="modalRef">
			<div class="modal-scrollable scrollable-content">
				<ul class="mobile-navBar">
					<li class="nav-item mobile-dropdown dropdown-hover">
						<a class="nav-link">
							首页
						</a>
					</li>
					<li class="nav-item mobile-dropdown dropdown-hover">
						<a class="nav-link dropdown-toggle":class="{ show: isDropdownOpen }" @click="toggleDropdown($event)">
							关于飞眸
						</a>
						<ul class="mobile-dropdownMenu" :class="{ show: isDropdownOpen }">
							<li>
								<a class="dropdown-item">
									企业简介
								</a>
							</li>
							<li>
								<a class="dropdown-item">
									企业文化
								</a>
							</li>
							<li>
								<a class="dropdown-item">
									在飞眸工作
								</a>
							</li>
						</ul>
					</li>
					<li class="nav-item mobile-dropdown dropdown-hover">
						<a class="nav-link">
							产品中心
						</a>
					</li>
					<li class="nav-item mobile-dropdown dropdown-hover">
						<a class="nav-link">
							新闻中心
						</a>
					</li>
					<li class="nav-item mobile-dropdown dropdown-hover">
						<a class="nav-link">
							客户中心
						</a>
					</li>
					<li class="nav-item mobile-dropdown dropdown-hover">
						<a class="nav-link">
							联系我们
						</a>
					</li>
				</ul>
			</div>
		</div>
	</transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const isOpen = ref(false)
const modalRef = ref()
const isDropdownOpen = ref(false)
const navigation = ref() // 导航栏DOM引用
const isNavHidden = ref(false) // 导航栏隐藏状态

let lastScrollTop = 0 // 上次滚动位置
let ticking = false // 滚动节流标志

// 切换下拉菜单
const toggleDropdown = (event) => {
  event.preventDefault()
  isDropdownOpen.value = !isDropdownOpen.value
}

// 滚动事件处理
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  
  // 页面在顶部时强制显示导航栏
  if (scrollTop <= 0) {
    isNavHidden.value = false
  } else {
    // 向下滚动：隐藏，向上滚动：显示
    if (scrollTop > lastScrollTop) {
      isNavHidden.value = true
    } else {
      isNavHidden.value = false
    }
  }
  
  lastScrollTop = scrollTop
}

// 使用 requestAnimationFrame 优化滚动性能
const optimizedScrollHandler = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll()
      ticking = false
    })
    ticking = true
  }
}

// 窗口大小监听
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
    // 打开弹窗时强制显示导航栏
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
  }
})
</script>

<style scoped>
@import url("../assets/css/nav.css");
</style>