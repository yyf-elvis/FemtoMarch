<template>
    <div class="bannerContainer mb-9 mb-lg-0">
        <div class="background background-cover">
            <picture>
                <img class="w-100 h-100 img-cover" src="../assets/img/banner.png">
            </picture>
        </div>
        <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
            <div class="row my-auto">
                <div class="col-lg-5">
                    <h1 class="mb-3">
                        全新OFAST-4000A
                    </h1>
                    <div class="fs-lg">
                        我们最新的眼科飞秒激光治疗系统，用于屈光手术治疗速度快，操作界面智能，性价比更高。
                    </div>
                    <button>了解详情</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 企业简介 -->
    <div class="briefContainer">
        <div class="briefContent">
            <div class="briefBox">
                <div class="brief">
                    <div class="briefTextBox">
                        <div class="briefTitle">
                            我们是谁
                        </div>
                        <div class="briefText">
                            飞眸医疗2022年创立于深圳，十年“光学—激光—眼科激光”纵向积淀，自主攻克医疗级飞秒激光器、高精度大视场三维光学扫描、实时闭环监测控制与定制化屈光矫正算法四大核心技术，推出国产屈光及角膜手术飞秒激光治疗系统，2025年6月量产样机通过国家型式检验。公司致力让飞秒激光成为眼科医生的“第二把柳叶刀”，以“中国精度”重塑屈光手术范式，为医患提供安全、快捷、精准、高性价比的术式升级，打造可复制的技术—产业闭环，领跑国产高端眼科飞秒激光赛道，打破进口垄断，树立国产化新标杆。
                        </div>
                    </div>
                </div>
                <div class="learnMore">
                    <div class="learnText">了解我们</div>
                    <div class="learnIcon"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="medalWarp">
        <div class="swiperBox">
        <SwiperComponent />
        </div>
        <div class="medalBox">
            
        </div>
    </div>
    
    <div>
        新闻活动
    </div>
</template>

<script setup>
import SwiperComponent from '../components/swiperComponent.vue';
</script>

<style scoped>
@import url("../assets/css/index.css");
@import url("../assets/css/index-flex.css");

.swiperBox {
    width: 500px;
}
</style>