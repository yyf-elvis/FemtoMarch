<template>
  <div class="news-detail">
    <!-- 公共头部 -->
    <div class="news-header">
      <header>
        <h1>{{ title }}</h1>
        <div class="tag-box tag-date-box">
          <div class="tag">{{ tag }}</div>
          <div class="date">{{ date }}</div>
        </div>
      </header>
      
      <!-- 固定的二维码 -->
      <ul class="follow-us list-unstyled news-header-follow-us">
        <li class="wechat-container">
          <div class="qr-code-container qr-code">
            <div class="qr-code-block">
              <div class="qrcode qr-code-image">
                <img class="image" src="@/assets/img/qrcode.webp">
              </div>
              <div class="tips-info">使用微信"扫一扫"</div>
              <div class="arrow"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- 文章正文插槽 -->
    <article class="main-box article-content center">
      <slot name="article"></slot>
    </article>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  date: String,
  tag: String
})
</script>

<style scoped>
@import url("@/assets/css/news.css");
@import url("@/assets/css/news-flex.css");
</style>