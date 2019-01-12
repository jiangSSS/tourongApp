<template>
    <div class="all">
        <div class="header">
            <div class="searchBox">
                <i class="iconfont icon-sousuo"></i>
            </div>
            <div class="logoBox">
                <img src="../../../static/app/img/home/logo.jpg" class="logo">
            </div>
            <div class="rightBox">
                <img src="../../../static/app/img/home/header_right.jpg" class="header_right">
            </div>
        </div>

        <div class="detail">
            <!-- <img src="../../../static/app/img/swiper.jpg" class="swiper" alt=""> -->
            <div class="swiper">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in banner" :key="index">
                        <!-- <router-link :to="{name:'newsDetail',params:{id:item.url}}"> -->
                        <div>
                            <img :src="$url + item.appImgPath">
                            <!-- <span class="swiper-title">{{item.title}}</span> -->
                        </div>
                        <!-- </router-link> -->
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <!-- <div class="swiper-button-prev" slot="button-prev">  </div>
                    <div class="swiper-button-next" slot="button-next">  </div> -->
                </swiper>
            </div>
            <div class="tab">
                <router-link to="/money">
                    <div>
                        <div>
                            <img src="../../../static/app/img/home/0a.jpg" alt="">
                        </div>
                        <div class="title">投资</div>
                    </div>
                </router-link>
                <router-link to="/login">
                    <div>
                        <div>
                            <img src="../../../static/app/img/home/0b.jpg" alt="">
                        </div>
                        <div class="title">项目</div>
                    </div>
                </router-link>
                <router-link to="/activity">
                    <div>
                        <div>
                            <img src="../../../static/app/img/home/0c.jpg" alt="">
                        </div>
                        <div class="title">活动会议</div>
                    </div>
                </router-link>
                <router-link to="/news">
                    <div>
                        <div>
                            <img src="../../../static/app/img/home/0d.jpg" alt="">
                        </div>
                        <div class="title">资讯</div>
                    </div>
                </router-link>
                <!-- <router-link to="/activity"></router-link> -->
            </div>
            <div class="clearfix">
                <img src="../../../static/app/img/home/homeContent1.jpg" class="homeContent1 fll">
                <div class="fll contentRight1">
                    <p class="row1">会员周报</p>
                    <div class="row2">
                        <span>2018年第二期 </span>
                        <span> 点击阅读</span>
                    </div>
                </div>
            </div>
            <div>
                <img src="../../../static/app/img/home/contentImg2.jpg" alt="">
            </div>
            <div class="subtitle">
                <span class="titleContent" @click="$router.push('/projectA')">优质项目
                    <i class="iconfont icon-xiangyou"></i>
                </span>
            </div>
            <div v-for="(item,index) in projectList.slice(0,2)" :key="index" class="wellProject">
                <router-link :to="{path:'/project',query:{id:item.id}}">
                    <img :src="$url + item.recommendImgPath" alt="" class="wellImg">
                    <div class="wellTitle">
                        {{item.title}}
                    </div>
                    <div class="wellCompany">{{item.companyName}}</div>
                    <div class="wellContent">{{item.brief}}</div>
                </router-link>

            </div>
            <div class="moneyBoxa">
                <div class="subtitle">
                    <span class="titleContent" @click="$router.push('/money')">优质资金
                        <i class="iconfont icon-xiangyou"></i>
                    </span>
                </div>
                <div class="clearfix moneyBox" v-for="item in capitalList.slice(0,2)" :key="item.index">
                    <router-link :to="{path:'/money/moneydetail',query:{id:item.id}}">
                        <img :src="$url + item.recommendImgPath" class="flr wellMoney">
                        <div class="fll rightContent">
                            <div class="rightTitle">{{item.title}}</div>
                            <div class="rightList">
                                <div>
                                    <span>投资资金:</span>
                                    <span class="moneyNum">{{item.investAmountName}}</span>
                                </div>
                                <div>
                                    <span>投资方式:</span>
                                    <span>{{item.investCase}}</span>
                                </div>
                                <div>
                                    <span>投资类型:</span>
                                    <span>{{item.investTypeName}}</span>
                                </div>
                                <div>
                                    <span>资金来源:</span>
                                    <span>{{item.capitalSourceName}}</span>
                                </div>
                                <div>
                                    <span>资金类型:</span>
                                    <span>{{item.capitalType}}</span>
                                </div>
                                <div>
                                    <span>投资行业:</span>
                                    <span>{{item.investWayName}}</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="subtitle">
                <span class="titleContent" @click="$router.push('/news')">投融资讯
                    <i class="iconfont icon-xiangyou"></i>
                </span>
            </div>
            <div class="messageList" v-for="item in messageList" :key="item.index">
                <div class="clearfix rows">
                    <img src="../../../static/app/img/my/dian.jpg" class="dian fll">
                    <div class="nums clearfix">
                        <span class="fll messageTitle">{{item.title}}</span>
                        <span class="flr messageTime">{{item.time}}</span>
                    </div>
                </div>
            </div>
            <!-- 死的 -->
            <div class="clearfix rows">
                <div class="flr">
                    <div class="nums">
                        <div class="fll">
                            <img src="../../../static/app/img/my/dian.jpg" class="dian fll">
                            <div class="aaaa titleImg">我国快递业务量连续4年稳居世界第一</div>
                        </div>
                        <div>
                            <span class=" titleImg timedata">2018-10-10</span>
                        </div>
                    </div>
                </div>
                <div class="newsImgBox fll">
                    <img src="../../../static/app/img/home/information1.jpg" class="newsImg">
                </div>
            </div>
            <!-- 死的 -->
            <div>
                <div class="clearfix rows">
                    <img src="../../../static/app/img/my/dian.jpg" class="dian fll">
                    <div class="nums clearfix">
                        <span class="fll messageTitle">我国快递业务量连续4年稳居世界第一</span>
                        <span class="flr messageTime">2018-10-10</span>
                    </div>
                </div>
                <div class="rows threes">
                        <img src="../../../static/app/img/home/information1.jpg" class="newsImg">
                        <img src="../../../static/app/img/home/information1.jpg" class="newsImg">
                        <img src="../../../static/app/img/home/information1.jpg" class="newsImg">
                </div>
            </div>
            <p class="noData">--- 没有数据了 ---</p>
        </div>
        <Footer class="footer"></Footer>
    </div>
</template>

<script>
    import Footer from "@/components/Bottom.vue";
    import "swiper/dist/css/swiper.css";
    import { swiper, swiperSlide } from "vue-awesome-swiper";
    export default {
        components: {
            Footer,
            swiper,
            swiperSlide
        },
        data() {
            return {
                banner: [],
                projectList: [],
                capitalList: [],
                swiperOption: {
                    // 显示分页
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    waitForTransition: true,
                    // 设置自动播放速度
                    autoplay: {
                        disableOnInteraction: false,
                        delay: 2000
                    },
                    // 开启无限循环
                    loop: false,
                    //设置点击箭头
                    paginationClickable: true,
                    prevButton: ".swiper-button-prev",
                    nextButton: ".swiper-button-next",
                    //设置同屏显示的数量，默认为1，使用auto是随意的意思。
                    slidesPerView: 1,
                    //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
                    mousewheel: false
                    //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
                    // freeMode:true
                },
                messageList: [
                    {
                        title: "中央环保督察'回头看'将严查'一刀切'中央环保督察'回头看'将严查'一刀切'中央环保督察'回头看'将严查'一刀切'中央环保督察'回头看'将严查'一刀切'中央环保督察'回头看'将严查'一刀切'",
                        time: "2019-11-11"
                    },
                    {
                        title: "中央环保督察'回头看'将严查'一刀切'",
                        time: "2018-11-11"
                    },
                    {
                        title: "中央环保督察'回头看'将严查'一刀切'",
                        time: "2017-11-11"
                    },
                ]
            };
        },
        methods: {
            getSwiper() {
                this.$axios.get(`/jsp/wap/index/ctrl/jsonIndex.jsp`).then(res => {
                    console.log("轮播图", res)
                    this.banner = res.data.banner
                    this.capitalList = res.data.capitalList
                    this.projectList = res.data.projectList
                })
            }
        },
        created() {
            this.getSwiper()
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    // 头部
    .all {
        position: relative;
        width: 100%;
    }

    .newsImg {
        width: 2rem
    }

    .aaaa {
        width: 4.5rem;
        color: #333 !important
    }

    .titleImg {
        font-size: .24rem;
        color: #ccc
    }

    .timedata {
        margin-left: .4rem
    }
    .threes{
        display: flex;
        justify-content: space-between
    }
    .threes img{
        width: 2rem;
        height: 1.6rem;
    }


    .header {
        display: flex;
        justify-content: space-between;
        padding: 0.15rem;
        height: 1rem; // position: fixed;
        background: #fff;
        top: 0;
        .logo {
            width: 2.2rem;
        }
        .logoBox {
            line-height: 2.5;
            margin-top: .1rem
        }
        .rightBox {
            line-height: 2;
        }
        .header_right {
            width: 0.45rem;
            text-align: center;
            margin-top: 0.1rem;
            margin-right: .2rem
        }
        .search {
            font-size: 0.3rem;
            display: block;
            padding-top: -0.1rem;
        }
        .searchBox {
            margin-left: .1rem;
            text-align: center;
            .iconfont {
                font-size: .5rem;
            }
        }
    }

    .detail {
        padding-bottom: 1.4rem;
    }

    .noData {
        text-align: center;
        color: #999
    } //  轮播图
    .swiper {
        img {
            height: 3.75rem;
            width: 7.5rem;
            display: block;
        }
    }

    img {
        width: 100%;
    } // tab卡
    .tab {
        display: flex;
        justify-content: space-around;
        padding: .3rem .4rem;
        text-align: center;

        img {
            width: .7rem;
        }
        a {
            color: rgba(0, 0, 0, 0.8);
        }
        .title {
            font-size: .25rem; // display: inline-block;
            margin-top: -.05rem
        }
    } // content
    .homeContent1 {
        width: 50%;
        vertical-align: text-top;
    }

    .contentRight1 {
        padding-left: 0.3rem;
        padding-top: 0.8rem;
    }

    .row1 {
        font-weight: 700;
        font-size: 0.4rem;
        padding: 0;
        margin: 0;
    }

    .row2 {
        margin-bottom: .2rem;
        padding: 0 !important;
        span:nth-child(1) {
            padding-right: 0.1rem;
            font-size: .28rem
        }
        span:nth-child(2) {
            color: #005982;
            font-weight: 700;
            font-size: .28rem
        }
    }

    .subtitle {
        padding: 0.3rem;
        text-align: center;
    }

    .titleContent {
        font-size: 0.4rem;
        line-height: 2;
        font-family: "MicrosoftYaHeiLight";
        color: rgb(137, 137, 137);
        line-height: 1.333;
        display: inline-block;
    }

    .icon-xiangyou {
        background: rgb(230, 230, 230);
        padding: 0.04rem;
        margin-left: 0.1rem;
        margin-top: 1rem;
    }

    .wellProject {
        padding: 0.2rem 0.3rem;
        .wellTitle {
            font-size: .3rem;
            font-family: "Microsoft YaHei";
            color: rgb(62, 58, 57);
            font-weight: bold;
            line-height: 1.5;
        }
        .wellCompany {
            font-size: 0.18rem;
            font-family: "Microsoft YaHei";
            color: rgb(62, 58, 57);
            line-height: 1.5;
            padding-bottom: 0.2rem;
        }
        .wellImg {
            width: 100%;
        }
        .wellContent {
            font-size: .24rem;
            font-family: "Microsoft YaHei";
            color: rgb(137, 137, 137);
            line-height: 1.429;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical !important;
        }
    }

    .wellMoney {
        width: 50%;
    }

    .moneyBox:nth-child(even) {
        .rightContent {
            float: right;
        }
        .wellMoney {
            float: left;
        }
    }

    .rightContent {
        width: 50%;
        padding: 0.2rem;
        img {
            vertical-align: middle;
        }
        .rightTitle {
            font-size: .3rem;
            font-family: "Microsoft YaHei";
            color: rgb(62, 58, 57);
            font-weight: bold;
            padding-top: .2rem;
            margin-bottom: .15rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical !important;
        }
        .moneyNum {
            color: #005982;
            font-size: .26rem !important;
            font-weight: bold
        }
    }

    .rightList div {
        clear: both;
        line-height: 2
    }

    .rightList span:nth-child(1) {
        font-family: "PingFang";
        color: #999; // display: inline-block;
        font-size: .24rem;
        float: left;
    }

    .rightList span:nth-child(2) {
        float: left;
        font-size: .24rem;
        color: #333; // display: inline-block;    
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 2.2rem;
    }

    .rows {
        padding: 0 .3rem;
        .messageTitle {

            font-size: .24rem;
            font-family: "Microsoft YaHei";
            color: rgb( 51, 51, 51);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 5rem
        }
        .messageTime {
            font-size: .2rem;
            font-family: "Microsoft YaHei";
            color: rgb( 137, 137, 137);
        }
    }

    .dian {
        margin: .15rem
    }

    .moneyBoxa {
        background: #fafafa
    }
</style>