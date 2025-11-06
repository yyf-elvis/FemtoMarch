
<template>
    <div>
		<Navigation />
		<router-view />
		<Footer />
	</div>
</template>

<style>
 
</style>

<script setup>
    import Navigation from './components/nav.vue'; // 确保文件名和导入名匹配  
    import Footer from './components/footer.vue';
    import {
        ref
      } from 'vue';
      const name = 'App';
      const navigationHeight = ref(0);

      const childHeight = ref(0);

      function handleHeightUpdate(height) {
        childHeight.value = height;
      }
</script>
