<template>
    <div class="bannerContainer mb-9 mb-lg-0">
        <div class="background background-cover">
            <picture>
                <img class="w-100 h-100 img-cover" src="../assets/img/banner-product.webp">
            </picture>
        </div>
        <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
            <div class="row my-auto">
                <div class="col-lg-5" v-scroll-reveal>
                    <h1 class="mb-3">
                        全新OFAST-4000A
                    </h1>
                    <div class="fs-lg">
                        我们最新的眼科飞秒激光治疗系统，用于屈光手术治疗
                        <br>速度快，操作界面智能，性价比更高。
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="productInfo" v-scroll-reveal>
        <p>治疗速度快，治疗时间相较于主流产品缩短<span class="emphasize">50% </span></p>
        <p>操作界面更智能，<span class="emphasize">中文界面</span>人机交互方便友好</p>
        <p>性价比高，使用和维护成本相较于进口产品下降<span class="emphasize">30%</span></p>
    </div>

    <div class="advantageCotainer">
        <div class="advantageBox">
            <div class="productPic" v-scroll-reveal>
                <img src="../assets/img/product.webp">
            </div>
            <div class="advantageText" v-scroll-reveal>
                <p class="title">主要优势</p>
                <p><span class="iconCheck"></span>角膜地形图引导，眼球旋转补偿，精准测量角膜像差</p>
                <p><span class="iconCheck"></span>个性化精准切削模型，矫正球差</p>
                <p><span class="iconCheck"></span>激光切削时间小于10秒</p>
                <p><span class="iconCheck"></span>水平控制和中心定位</p>
            </div>
        </div>
    </div>

    <!-- <div class="warp">
        <div class="manualWarp">
            <div class="newsTitle">
                <div class="title">产品手册</div>
                <div class="markBar"></div>
            </div>

            <div class="manual">
                <img src="../assets/img/manualBg.webp" class="manualImage">
                <div class="mask">
                    <button class="view-details-btn">查看详情</button>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script setup>

</script>

<style scoped>
@import url("../assets/css/product.css");
@import url("../assets/css/product-flex.css");
</style>