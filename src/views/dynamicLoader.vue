<template>
  <component :is="currentComponent" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import news1 from './news/news1.vue'
import news2 from './news/news2.vue'
import news3 from './news/news3.vue'

const route = useRoute()

const componentMap = {
  '1': news1,
  '2': news2,
  '3': news3
}

const currentComponent = computed(() => {
  return componentMap[route.params.id] || null
})
</script>