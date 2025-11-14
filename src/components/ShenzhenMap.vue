<template>
  <div class="map-wrapper">
    <div v-if="loading" class="loading-overlay">
      <div class="spinner"></div>
      <p>地图加载中...</p>
    </div>
    <div id="mapContainer" ref="mapContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mapContainer = ref(null);
const loading = ref(true);
const MAP_KEY = 'e07ffdf58c8e8672037bef0d6cae7d4a';

const mapData = {
  center: [113.922382,22.577336],
  zoom: 16,
  marker: {
    position: [113.922382,22.577336],
    name: "深圳市飞眸医疗器械技术有限公司",
    desc: ""
  }
};

const loadScript = () => {
  return new Promise((resolve, reject) => {
    if (window.AMap) return resolve();
    const script = document.createElement('script');
    script.src = `https://webapi.amap.com/maps?v=2.0&key=5630c29d5daee8b36d34cd20d12ba569`;
    script.async = true;
    script.onload = resolve;
    script.onerror = () => reject(new Error('脚本加载失败'));
    document.head.appendChild(script);
  });
};

const initMap = async () => {
  await loadScript();
  if (!window.AMap || !mapContainer.value) return;

  const map = new window.AMap.Map(mapContainer.value, {
    center: mapData.center,
    zoom: mapData.zoom,
    animateEnable: false
  });

  map.on('complete', () => {
    setTimeout(() => {
      addMarker(map);
    }, 100);
  });
};

const addMarker = (map) => {
  const marker = new window.AMap.Marker({
    position: mapData.marker.position,
    title: mapData.marker.name,
    anchor: 'bottom-center'
  });

  const infoWindow = new window.AMap.InfoWindow({
    content: `
      <div style="padding: 15px; min-width: 200px;">
        <h4 style="margin: 0 0 10px 0;">${mapData.marker.name}</h4>
        <p style="margin: 0; color: #666; font-size: 13px;">${mapData.marker.desc}</p>
      </div>
    `,
    offset: new window.AMap.Pixel(0, -35)
  });

  marker.on('click', () => {
    infoWindow.open(map, marker.getPosition());
  });

  map.add(marker);
  map.setFitView([marker], false, [30, 30, 30, 30]);
  
  setTimeout(() => {
    map.setCenter(mapData.marker.position);
    loading.value = false;
    
    // ✅ 自动展开信息窗体
    infoWindow.open(map, marker.getPosition());
  }, 200);
};

onMounted(() => {
  initMap();
});
</script>

<style scoped>
.map-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background: #f0f0f0;
}

#mapContainer {
  width: 100%;
  height: 100%;
}

.loading-overlay {
  position: absolute;
  inset: 0;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

.loading-overlay p {
  color: #666;
  font-size: 14px;
  margin: 0;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>