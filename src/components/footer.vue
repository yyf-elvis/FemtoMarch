<template>
    <div class="footerWarp flexC">
        <div class="footerCotainer">
            <div class="contentWarp flexC">
                <div class="contentBox flexC">
                    <div class="content">
                        <div class="footerLeft flexC">
                            <div class="footerLeftCotainer">
                                <div class="logo">
                                    <img src="../assets/img/logo-w.svg"/>
                                </div>
                                <div class="slogan">
                                    <p>
                                        飞眸医疗，中国精度<br>
                                        眼科医生的第二把柳叶刀
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="footerRight flexC">
                            <div class="footerRightBox">
                                <div class="footerListCotainer">
                                    <div class="footerList listTitle">
                                        关于飞眸
                                    </div>
                                    <router-link to="/company" class="footerList">
                                        公司介绍
                                    </router-link>
                                    <router-link to="/career" class="footerList">
                                        加入我们
                                    </router-link>
                                    <router-link to="/newsCenter" class="footerList">
                                        新闻及活动
                                    </router-link>
                                </div>
                                <div class="footerListCotainer">
                                    <div class="footerList listTitle">
                                        产品展示
                                    </div>
                                    <router-link to="/therapeutic" class="footerList">
                                        OFAST-4000A
                                    </router-link>
                                </div>
                                <div class="footerListCotainer">
                                    <div class="footerList listTitle">
                                        客户服务
                                    </div>
                                    <router-link to="/contactUs" class="footerList">
                                        技术支持
                                    </router-link>
                                </div>
                                <div class="footerListCotainer">
                                    <div class="footerList listTitle">
                                        关注我们
                                    </div>
                                    <div class="followUsCotainer">
                                        <!-- <div class="followList">
                                            <span class="iconfont">&#xe601;</span>
                                        </div>
                                        <div class="followList">
                                            <span class="iconfont">&#xe600;</span>
                                        </div> -->
                                        <div class="followList qrcode">
                                            <img src="../assets/img/qrcode.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div class="divider">
                <div class="line"></div>
            </div> 
            <div class="ICPInfo">
                Copyright © 2025 深圳市飞眸医疗器械技术有限公司&nbsp;&nbsp;&nbsp;
                陕ICP备xxxxxxxx号&nbsp;&nbsp;&nbsp;
                陕公网安备 xxxxxxxxxxxxxx号
            </div>   
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@import url("../assets/css/footer.css");
@import url("../assets/css/footer-flex.css");

</style>
