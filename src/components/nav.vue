<template>
	<div ref="navigation" class="navigation w-nav">
		<div class="navigation-items">
			<router-link to="/" class="logo-link w-nav-brand" ></router-link>
			<div class="navigation-wrap">
				<nav class="navigation-items w--current">
					<router-link to="">work</router-link>
					<router-link to="">info</router-link>
					<router-link to="">grapic</router-link>
					<router-link to="">AIGC</router-link>
				</nav>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref,
		onMounted,
		watchEffect,
		defineEmits
	} from 'vue';

	// 使用模板中的 ref  
	const navigation = ref(null);

	// 定义事件发射器  
	const emit = defineEmits(['update:height']);

	// 定义一个方法来计算高度并通知父组件  
	function notifyParentOfHeight() {
		if (navigation.value) {
			const style = window.getComputedStyle(navigation.value);
			const height = navigation.value.offsetHeight;
			const totalHeight = height; // 计算总高度，包括两倍的padding
			// 使用 emit 来发射事件  
			emit('update:height', totalHeight);
		}
	}

	// 组件挂载后通知一次  
	onMounted(notifyParentOfHeight);

	// 监听窗口大小变化  
	watchEffect(() => {
		const handler = () => {
			notifyParentOfHeight();
		};
		window.addEventListener('resize', handler);
		// 返回的函数会在组件卸载时调用，以移除事件监听器  
		return () => {
			window.removeEventListener('resize', handler);
		};
	});
	
	// 暴露 navigation 的高度  
	defineExpose({  
	  getNavigationHeight() {  
	    return navigation.value ? navigation.value.offsetHeight : null;  
	  }  
	}); 
</script>

<style scoped>
	@import url("../assets/css/nav.css");
</style>