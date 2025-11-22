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
                <img class="image" src="@/assets/img/qrcode.png">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iX+WbvuWxgl8yIiBkYXRhLW5hbWU9IuWbvuWxgiAyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNDkuMjcgMTQ5LjI2Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjMDFiYmFlOwogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGcgaWQ9Il/lm77lsYJfMi0yIiBkYXRhLW5hbWU9IiDlm77lsYIgMiI+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik03NC43NSwxNDMuNjNsLTUuMDMtMi45LDQuMjEtNy4yOSw1LjAzLDIuOWMxLjc1LDEuMDEsMi4zNiwzLjI3LDEuMzUsNS4wMmwtLjUzLC45MmMtMS4wMSwxLjc1LTMuMjcsMi4zNi01LjAyLDEuMzVoLS4wMVptMzQuNDktOS4zMWgtNS44MXYtOC40Mmg1LjgxYzIuMDMsMCwzLjY4LDEuNjUsMy42OCwzLjY4djEuMDZjMCwyLjAyLTEuNjUsMy42OC0zLjY4LDMuNjhoMFptLTkuMTgsOS42OXYtMjUuNzhjMC0yLjEyLC43Ni0zLjk0LDIuMjktNS40NiwuNzItLjcyLDEuNTQtMS4xOSwyLjM2LTEuNjUsMS42Ny0uOTQsMi40OS0xLjE5LDQuMDItMS44Ni0xLjQtMi43My0yLjI4LTQuNDQtMy42LTYuOTktMy4zMiwuNTMtNi4yMywyLjAzLTguNzMsNC41My0zLjE3LDMuMTUtNC43Niw2Ljk3LTQuNzYsMTEuNDZ2MjUuNzZjMCwyLjAzLDEuNjUsMy42OCwzLjY4LDMuNjhoMS4wNmMyLjAzLDAsMy42OC0xLjY1LDMuNjgtMy42OGgwWm0zNC4zOC0zNWwtNS4wMywyLjktNC4yMS03LjI5LDUuMDMtMi45YzEuNzUtMS4wMSw0LjAxLS40MSw1LjAyLDEuMzVsLjUzLC45MmMxLjAxLDEuNzUsLjQxLDQuMDEtMS4zNSw1LjAyaDBabS0zLjEsMTIuOThsLTEyLjg5LTIyLjMzYy0xLjA2LTEuODMtMS4zMS0zLjc5LS43NS01Ljg4LC4yNi0uOTgsLjc0LTEuOCwxLjIyLTIuNjEsLjk4LTEuNjUsMS41Ni0yLjI3LDIuNTUtMy42Mi0yLjU4LTEuNjYtNC4yLTIuNy02LjYxLTQuMjUtMi42MSwyLjExLTQuMzcsNC44Ny01LjMsOC4yOS0xLjE3LDQuMzItLjY0LDguNDEsMS42LDEyLjNsMTIuODgsMjIuMzFjMS4wMSwxLjc1LDMuMjcsMi4zNiw1LjAyLDEuMzUsLjMxLS4xOCwuNjEtLjM1LC45Mi0uNTMsMS43NS0xLjAxLDIuMzYtMy4yNywxLjM1LTUuMDJoMFptMTIuMjktNDcuNWwtMi45LDUuMDMtNy4yOS00LjIxLDIuOS01LjAzYzEuMDEtMS43NSwzLjI3LTIuMzYsNS4wMi0xLjM1bC45MiwuNTNjMS43NSwxLjAxLDIuMzYsMy4yNywxLjM1LDUuMDJoMFptMy44LDEyLjhjMS43NSwxLjAxLDIuMzYsMy4yNywxLjM1LDUuMDItLjE4LC4zMS0uMzUsLjYxLS41MywuOTItMS4wMSwxLjc1LTMuMjcsMi4zNi01LjAyLDEuMzVsLTIyLjMxLTEyLjg4Yy0zLjg5LTIuMjUtNi40LTUuNTMtNy41NC05Ljg1LS45LTMuNDItLjc2LTYuNjksLjQ1LTkuODMsMi44NywuMTQsNC43OSwuMjMsNy44NSwuMzgtLjE4LDEuNjYtLjM4LDIuNS0uNCw0LjQxLS4wMSwuOTQtLjAyLDEuODksLjI0LDIuODcsLjU2LDIuMDgsMS43NSwzLjY2LDMuNTksNC43MWwyMi4zMywxMi44OWgwWm0tMTMuMTEtNDcuMjZ2NS44MWgtOC40MnYtNS44MWMwLTIuMDIsMS42NS0zLjY4LDMuNjgtMy42OGgxLjA2YzIuMDMsMCwzLjY4LDEuNjUsMy42OCwzLjY4aDBabTkuNjksOS4xOGgtMjUuNzhjLTIuMTIsMC0zLjk0LS43Ni01LjQ2LTIuMjktLjcyLS43Mi0xLjE5LTEuNTUtMS42NS0yLjM3LS45NC0xLjY3LTEuMTktMi40OS0xLjg2LTQuMDItMi43MywxLjQtNC40NCwyLjI4LTYuOTksMy42LC41MywzLjMyLDIuMDMsNi4yMyw0LjUzLDguNzMsMy4xNSwzLjE3LDYuOTcsNC43NiwxMS40Niw0Ljc2aDI1Ljc2YzIuMDMsMCwzLjY4LTEuNjUsMy42OC0zLjY4di0xLjA2YzAtMi4wMy0xLjY1LTMuNjgtMy42OC0zLjY4aDBaTTEwOS4wMiwxNC44MmwyLjksNS4wMy03LjI5LDQuMjEtMi45LTUuMDNjLTEuMDEtMS43NS0uNDEtNC4wMSwxLjM1LTUuMDJsLjkyLS41M2MxLjc1LTEuMDEsNC4wMS0uNDEsNS4wMiwxLjM1aDBabTEyLjk4LDMuMDlsLTIyLjMzLDEyLjg5Yy0xLjgzLDEuMDYtMy43OSwxLjMxLTUuODgsLjc1LS45OC0uMjYtMS44LS43NC0yLjYxLTEuMjItMS42NS0uOTgtMi4yNy0xLjU3LTMuNjItMi41NS0xLjY2LDIuNTgtMi43LDQuMi00LjI1LDYuNjEsMi4xMSwyLjYxLDQuODcsNC4zNyw4LjI5LDUuMyw0LjMyLDEuMTcsOC40MSwuNjQsMTIuMy0xLjZsMjIuMzEtMTIuODhjMS43NS0xLjAxLDIuMzYtMy4yNywxLjM1LTUuMDItLjE4LS4zMS0uMzUtLjYxLS41My0uOTItMS4wMS0xLjc1LTMuMjctMi4zNi01LjAyLTEuMzVoLS4wMVpNNzQuNTEsNS42NGw1LjAzLDIuOS00LjIxLDcuMjktNS4wMy0yLjljLTEuNzUtMS4wMS0yLjM2LTMuMjctMS4zNS01LjAybC41My0uOTJjMS4wMS0xLjc1LDMuMjctMi4zNiw1LjAyLTEuMzVoLjAxWm0xMi43OS0zLjhjMS4wMS0xLjc1LDMuMjctMi4zNiw1LjAyLTEuMzUsLjMxLC4xOCwuNjEsLjM1LC45MiwuNTMsMS43NSwxLjAxLDIuMzYsMy4yNywxLjM1LDUuMDJsLTEyLjg4LDIyLjMxYy0yLjI1LDMuODktNS41Myw2LjQtOS44NSw3LjU0LTMuNDIsLjktNi42OSwuNzYtOS44My0uNDUsLjE0LTIuODcsLjIzLTQuNzksLjM4LTcuODUsMS42NiwuMTgsMi41LC4zOCw0LjQxLC40LC45NCwuMDEsMS44OSwuMDIsMi44Ny0uMjQsMi4wOC0uNTYsMy42Ni0xLjc1LDQuNzEtMy41OUw4Ny4zLDEuODRoMFpNNDAuMDMsMTQuOTRoNS44MXY4LjQyaC01LjgxYy0yLjAzLDAtMy42OC0xLjY1LTMuNjgtMy42OHYtMS4wNmMwLTIuMDMsMS42NS0zLjY4LDMuNjgtMy42OGgwWm05LjE4LTkuNjlWMzEuMDNjMCwyLjEyLS43NiwzLjk0LTIuMjksNS40NiwiLz4KICA8L2c+Cjwvc3ZnPg=="
                                    class="qr-code-logo">
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