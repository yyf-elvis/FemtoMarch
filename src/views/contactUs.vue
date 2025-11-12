<template>
    <div class="bannerContainer mb-9 mb-lg-0">
        <div class="background background-cover">
            <picture>
                <img class="w-100 h-100 img-cover" src="../assets/img/banner-contactUs.webp">
            </picture>
        </div>
        <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
            <div class="row my-auto">
                <div class="col-lg-5">
                    <h1 class="mb-3">
                        联系我们
                    </h1>
                    <div class="fs-lg">
                        我们很乐意听到你的消息。如对我们的产品和服务有任何疑问，请与我们联系。
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="warp">
        <div class="support">
            <div class="newsTitle">
                <div class="title">联系方式</div>
                <div class="markBar"></div>
            </div>
            <div class="contactWarp">
                <div class="emailPhone">
                    <div class="email">
                        <p class="subTitle">邮箱：</p>
                        <p>support@femtomarch.com</p>
                    </div>
                    <div class="phone">
                        <p class="subTitle">电话：</p>
                        <p>156****888，029-81088888</p>
                    </div>
                </div>
                <div class="addr">
                    <p class="subTitle">联系地址：</p>
                    <p>深圳市宝安区新安街道兴东社区67区留芳路6号庭威产业园3号楼5B</p>
                </div>
                <div class="map">
                    <GaoDeMap />
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import GaoDeMap from '@/components/GaoDeMap.vue';
</script>

<style scoped>
@import url("../assets/css/contactUs.css");
@import url("../assets/css/contactUs-flex.css");
</style>