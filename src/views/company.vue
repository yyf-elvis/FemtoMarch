<template>
    <div class="bannerContainer mb-9 mb-lg-0">
        <div class="background background-cover">
            <picture>
                <img class="w-100 h-100 img-cover" src="../assets/img/banner-company.webp">
            </picture>
        </div>
        <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
            <div class="row my-auto">
                <div class="col-lg-5">
                    <h1 class="mb-3">
                        在飞眸工作
                    </h1>
                    <div class="fs-lg">
                        以突破性技术勾勒未来医疗图景，凭持续创新树立行业新标杆
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="briefWarp" v-scroll-reveal>
        <div class="briefTitle">
            <div class="title">
                飞眸医疗简介
            </div>
            <div class="titlePic">
                <img src="../assets/img/briefPic.webp" >
            </div>
        </div>
        <div class="briefText">
            深圳市飞眸医疗器械技术有限公司（简称“飞眸医疗”），专注于飞秒激光在眼科手术领域的临床转化，主要产品为眼科飞秒激光治疗系统。<br>
            基于近十年“光学—激光—眼科激光”的研究，2022年11月，中科院的飞秒激光科学家们联合资深医疗行业专家，在深圳创立了深圳飞眸医疗器械技术有限公司。<br>
            公司聚焦正向研发飞秒激光核心部件与整机系统，深耕屈光及角膜手术的全自主眼科飞秒激光治疗系统。公司已经攻克高精度大视场三维光学扫描系统、医疗级飞秒激光、实时闭环监测控制技术及定制化屈光矫正算法四大技术难题。2025年6月，飞眸医疗的眼科飞秒激光治疗系统量产样机已通过国家型式检验并顺利取得报告。<br>
            飞眸医疗的使命是“让飞秒激光成为眼科医生的第二把柳叶刀”，通过飞秒激光变革眼科术式，为患者带来安全、快捷、精准、高性价比的手术方案。<br>
            我们期待以“中国精度”重塑屈光手术范式，为国产高端医疗设备在眼科飞秒激光细分赛道建立可复制的技术—产业闭环范式。
        </div>
    </div>
    <CompanyHistory />
</template>

<script setup>
import CompanyHistory from '@/components/CompanyHistory.vue'
</script>

<style scoped>
@import url("../assets/css/company.css");
@import url("../assets/css/company-flex.css");
</style>