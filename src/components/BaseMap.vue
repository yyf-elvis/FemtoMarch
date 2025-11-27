<template>
  <div class="map-wrapper">
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
      <p>地图加载中...</p>
    </div>
    <!-- ✅ 动态 ID 避免冲突 -->
    <div :id="containerId" ref="mapContainerRef" class="map-container"></div>
  </div>
</template>

<script setup>
import { ref, shallowRef, onMounted, onUnmounted } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';

const props = defineProps({
  containerId: { type: String, required: true }, // ✅ 父级必须传入唯一ID
  center: { type: Array, required: true },
  zoom: { type: Number, default: 16 },
  marker: { type: Object, required: true }
});

const mapContainerRef = ref(null);
const loading = ref(true);
const mapInstance = shallowRef(null); // ✅ 核心：避免响应式污染

const initMap = async () => {
  try {
    const AMap = await AMapLoader.load({
      key: '5630c29d5daee8b36d34cd20d12ba569',
      version: '2.0',
      plugins: ['AMap.InfoWindow']
    });

    if (!mapContainerRef.value) return;

    mapInstance.value = new AMap.Map(props.containerId, {
      center: props.center,
      zoom: props.zoom,
      animateEnable: false
    });

    mapInstance.value.on('complete', () => {
      addMarkers();
    });
  } catch (error) {
    console.error('地图加载失败:', error);
    loading.value = false;
  }
};

const addMarkers = () => {
  const marker = new window.AMap.Marker({
    position: props.marker.position,
    title: props.marker.name,
    anchor: 'bottom-center'
  });

  const infoWindow = new window.AMap.InfoWindow({
    content: `
      <div style="padding: 15px; min-width: 200px;">
        <h4 style="margin: 0 0 10px 0;">${props.marker.name}</h4>
        <p style="margin: 0; color: #666; font-size: 13px;">${props.marker.desc || ''}</p>
      </div>
    `,
    offset: new window.AMap.Pixel(0, -35)
  });

  marker.on('click', () => {
    infoWindow.open(mapInstance.value, marker.getPosition());
  });

  mapInstance.value.add(marker);
  mapInstance.value.setFitView([marker], false, [30, 30, 30, 30]);

  setTimeout(() => {
    mapInstance.value.setCenter(props.marker.position);
    loading.value = false;
    infoWindow.open(mapInstance.value, marker.getPosition());
  }, 200);
};

onUnmounted(() => {
  if (mapInstance.value) {
    mapInstance.value.destroy();
    mapInstance.value = null;
  }
});

onMounted(() => {
  setTimeout(initMap, 150);
});
</script>

<style scoped>
.map-wrapper { width: 100%; height: 100%; position: relative; background: #f0f0f0; }
.map-container { width: 100%; height: 100%; }
.loading-overlay { position: absolute; inset: 0; background: #f8f9fa; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 1000; }
.spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 10px; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
</style>