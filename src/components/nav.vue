<template>
	<div ref="navigation" class="navigation flexC">
		<div class="navCotainer whinherit">
			<div class="logoBox flexC">
				<div class="logoBox-inner whinherit">
					<img src="../assets/img/logo.png"></img>
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
		</div>
	</div>
</template>

<script setup>
console.log('flexible 已加载，当前 <html> font-size =',
	getComputedStyle(document.documentElement).fontSize)
</script>

<style scoped>
@import url("../assets/css/nav.css");
</style>