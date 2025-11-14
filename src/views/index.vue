<template>
    <div class="bannerContainer mb-9 mb-lg-0">
        <div class="background background-cover">
            <picture>
                <img class="w-100 h-100 img-cover" src="../assets/img/banner-index.webp">
            </picture>
        </div>
        <div class="pt-5 py-lg-10 textContainer min-vh-lg-50 order-lg-1">
            <div class="row my-auto" v-scroll-reveal>
                <div class="col-lg-5">
                    <h1 class="mb-3">
                        眼科飞秒激光治疗系统
                    </h1>
                    <div class="fs-lg">
                        FemtoMarch OFAST-4000A：极速激光，智能交互，卓越价值，革新屈光手术新时代。
                    </div>
                    <router-link to="/product">
                        <button>了解详情</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <!-- 企业简介 -->
    <div class="briefContainer">
        <div class="briefContent">
            <div class="briefBox">
                <div class="brief" v-scroll-reveal>
                    <div class="briefTextBox">
                        <div class="briefTitle">
                            创新驱动，视界重生
                        </div>
                        <div class="briefText">
                            飞眸医疗：十年“光学—激光—眼科激光”纵向深耕，自主攻克医疗级飞秒激光器、高精度大视场三维光学扫描、实时闭环监测控制与定制化屈光矫正算法四大核心技术，推出国产屈光及角膜手术飞秒激光治疗系统——2025年6月量产样机已通过国家型式检验。公司致力于将飞秒激光铸就为眼科医生的“第二把柳叶刀”，以“中国精度”重塑屈光手术范式，为医患赋能安全、快捷、精准、高性价比的术式升级，铸造可复制的技术—产业闭环，领跑国产高端眼科飞秒激光赛道，打破进口垄断，树立国产化新标杆。
                        </div>
                    </div>
                </div>
                <div class="learnMore">
                    <router-link to="/company" class="learnText">了解我们</router-link>
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
            <div v-for="(medal, index) in medalList" :key="index" class="medalItem">
                <div class="medalIcon icon1">
                    <div class="medalImg">
                        <img :src="medal.icon" alt="" />
                    </div>
                </div>
                <div class="medalText">{{ medal.text }}</div>
            </div>
        </div>
    </div>

    <div class="newsWarp">
        <div class="newsTitle">
            <div class="title">新闻及活动</div>
            <div class="markBar"></div>
        </div>
        <div class="newsContainer">
            <router-link v-for="news in newsList" :key="news.id" :to="{ path: `/news/${news.id}` }" class="newsItem">
                <div class="newsBox">
                    <div class="newsPic">
                        <figure :style="{ backgroundImage: `url(${news.imageUrl})` }"></figure>
                    </div>
                    <div class="cardBody">
                        <time>{{ news.date }}</time>
                        <h3 class="cardTitle">{{ news.title }}</h3>
                        <i class="cardIcon"></i>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
    <RouterLink to="/newsCenter" class="moreBtn">
        <button class="moreNews">
            查看更多
            <i class="moreIcon"></i>
        </button>
    </RouterLink>
</template>

<script setup>
import { ref } from 'vue'
import SwiperComponent from '../components/swiperComponent.vue'
// script setup 部分
// 引入奖章图片
import medal1 from '@/assets/img/medal1.png'
import medal2 from '@/assets/img/medal2.png'
import medal3 from '@/assets/img/medal3.png'
import medal4 from '@/assets/img/medal4.png'
// 引入新闻图片
import slide1 from '@/assets/img/slide1.png'

const medalList = [
    { icon: medal1, text: '全国知识产权领先' },
    { icon: medal2, text: '国家高新技术企业' },
    { icon: medal3, text: '全国知识产权领先' },
    { icon: medal4, text: '国家高新技术企业' }
]

const newsList = ref([
    {
        id: 1,  // 添加唯一ID
        date: '2025.12.23',
        title: '飞眸医疗，入驻丰泽科技园',
        imageUrl: slide1
    },
    {
        id: 2,
        date: '2025.12.22',
        title: '科技创新引领未来发展',
        imageUrl: slide1
    },
    {
        id: 3,
        date: '2025.12.21',
        title: '智慧医疗新里程碑',
        imageUrl: slide1
    }
])
</script>

<style scoped>
@import url("../assets/css/index.css");
@import url("../assets/css/index-flex.css");
</style>