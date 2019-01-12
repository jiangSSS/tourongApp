<template>

    <!-- <div class="all">
        <Header></Header>
        <div class="detail">
            <mu-container class="subTabs">
                <mu-tabs :value.sync="active1" class="subTab" inverse color="#005982" indicator-color="#005982" full-width>
                    <mu-tab>系统消息</mu-tab>
                    <mu-tab>在线客服</mu-tab>
                    <mu-tab>项目进展</mu-tab>
                    <mu-tab>资金动态</mu-tab>
                </mu-tabs>
                <div v-if="active1 === 0">
                    <div v-for="(item,index) in messageList" :key="index" class="messageBox">
                        <router-link to="">
                            <div class="messageTitle">{{item.title}}</div>
                            <div class="messageDetail">{{item.detail}}</div>
                            <div class="messageTime">{{item.time}}</div>
                        </router-link>
                    </div>
                </div>
            </mu-container>
            <van-tabs>
                <van-tab v-for="(item,index) in news" :title="item.title" :key="index">

                </van-tab>
            </van-tabs>
            <van-tabs v-model="active" swipeable line-color="#005982">
                <van-tab title="活动会议" class="title">
                    1
                </van-tab>
                <van-tab title="前端科技" class="title">
                    <div class="messageList">
                        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
                            <div class="" v-for="(item,index) in pageList" :key="index">
                                <router-link :to="{path:'/newsDetail',query:{id:item.id}}">
                                    <div class="clearfix rows">
                                        <div class="flr">
                                            <div class="nums clearfix">
                                                <img src="../../../static/app/img/my/dian.jpg" class="dian fll">
                                                <span class="fll messageTitle">{{item.title}}</span>
                                                <span class="flr messageTime">{{item.addTimeStr.slice(0,10)}}</span>
                                            </div>
                                        </div>
                                        <div class="newsImgBox fll">
                                            <img :src="$url + item.imgPath" class="newsImg">
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="政策动态">
                    3
                </van-tab>
                <van-tab title="行业">

                </van-tab>
                <van-tab title="项目">

                </van-tab>
                <van-tab title="机构">

                </van-tab>
                <van-tab title="活动推荐">

                </van-tab>
                <van-tab title="动态服务">

                </van-tab>
            </van-tabs>
        </div>
        <Footer class="footer"></Footer>
    </div> -->
    <div class="all">
        <Header></Header>
        <div class="detail">
            <div class="statusBox">
                <span class="type_item" v-for="(item , index) in typeDataList" :key="index" @click="checkItem(item.dataValue,index)" :class="{active:item.checked}">{{item.dataName}}</span>
            </div>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
                <div class="messageList">
                    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
                        <div class="" v-for="(item,index) in pageList" :key="index">
                            <router-link :to="{path:'/newsDetail',query:{id:item.id}}">
                                <div class="clearfix rows">
                                    <div class="flr">
                                        <div class="nums clearfix">
                                            <img src="../../../static/app/img/my/dian.jpg" class="dian fll">
                                            <span class="fll messageTitle">{{item.title}}</span>
                                            <span class="flr messageTime">{{item.addTimeStr.slice(0,10)}}</span>
                                        </div>
                                    </div>
                                    <div class="newsImgBox fll">
                                        <img :src="$url + item.imgPath" class="newsImg">
                                    </div>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="noData" v-if="this.totalCount > this.pageList.length">加载中...</div>
                    <div class="noData" v-else>--- 没有更多数据了 ---</div>
                </div>
            </div>
        </div>
        <Footer class="footer"></Footer>
    </div>
    <!-- <div class="all">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in typeDataList" :key="index">{{item.dataName}}</div>

            </div>
        </div>
    </div> -->
</template>

<script>
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Bottom.vue";
    import Swiper from "swiper"


    export default {
        components: {
            Header,
            Footer
        },
        data() {
            return {
                active: 1,
                pageList: [],
                pn: 1,
                pageNumber: 1,
                totalCount: [],
                loading: false,
                typeDataList: [],
                categorys: ""
            };
        },
        methods: {
            loadMore() {
                this.pn = this.pn + 1;
                this.loading = true;
                this.$axios
                    .get("/jsp/wap/trNews/ctrl/jsonNewsPage.jsp", {
                        params: { dataValues: this.categorys, pageNumber: this.pn }
                    })
                    .then(res => {
                        if (res.success == "true") {
                            this.pageList = [...this.pageList, ...res.data.pageList];
                            this.totalCount = res.data.pagination.totalCount;
                            this.loading = false;
                        }
                    });
            },
            // 新闻列表
            getNewsList(categorys) {
                this.loading = true;
                this.$axios
                    .get(`/jsp/wap/trNews/ctrl/jsonNewsPage.jsp`, {
                        params: { dataValues: this.categorys }
                    })
                    .then(res => {
                        console.log("新闻列表", res);
                        if (res.success == "true") {
                            this.pageList = res.data.pageList;
                            this.totalCount = res.data.pagination.totalCount;
                            this.pn = 1;
                            this.loading = false;
                        }
                    });
            },
            // 分类筛选
            checkItem(e, index) {
                this.categorys = e;
                if (this.typeDataList[index].checked) {
                    this.typeDataList[index].checked = !this.typeDataList[index].checked;
                    this.categorys = "";
                } else {
                    this.typeDataList.forEach(item => {
                        item.checked = false;
                    });
                    this.typeDataList[index].checked = true;
                }
                this.getNewsList(this.categorys);
                // this.typeDataList.forEach(item => {
                //     item.checked = false
                // });
                // this.typeDataList[index].checked = true
                // this.getData(this.categorys)
            },
            // 新闻分类
            getTypeData() {
                this.$axios.get("/jsp/wap/trNews/ctrl/jsonCategoryList.jsp").then(res => {
                    console.log("新闻分类", res);
                    // if (res.success == "true") {
                    //     this.typeData = res.data
                    // }
                    if (res.success == "true") {
                        let typeDataList = res.data;
                        typeDataList.forEach(item => {
                            this.$set(item, "checked", false);
                        });
                        typeDataList.forEach(item => {
                            if (item.dataValue == this.category) {
                                item.checked = true
                            }
                        })
                        this.typeDataList = typeDataList;
                    }
                });
            },
            getSwiper() {
                var swiper = new Swiper('.swiper-container', {
                    slidesPerView: 'auto',
                    freeMode: true,
                    observer: true,
                    slidesOffsetAfter: 15,
                    roundLengths: true
                })
            }
        },
        created() {
            this.getNewsList(this.categorys);
            this.getTypeData();
            this.getSwiper()
        }
    };
</script>

<style scoped lang="scss">
    @import "../../../node_modules/swiper/dist/css/swiper.css";
    .detail {
        padding-top: 0.8rem;
        padding-bottom: 1.2rem;
        /* background: #fafafa; */
    }

    img {
        width: 100%;
    }

    .subTabs {
        // background: #fff
        padding: 0;
    }

    .subTab {
        font-size: 0.5rem !important;
        font-family: "PingFang";
        color: rgb(51, 51, 51);
        line-height: 2.727;
        text-align: center;
        background: #fff;
    } 
    // /deep/.van-tabs__line {
    //     background: #005982 !important;
    //     bottom: .2rem !important;
    // }
    .title {
        margin-top: 0.2rem;
    }

    .messageList {
        padding-top: 0.2rem;
        background: #fff;
    }

    .rows {
        padding: 0.1rem 0.3rem;
        border-bottom: .2rem solid #fafafa;
        .messageTitle {
            font-size: 0.24rem;
            font-family: "Microsoft YaHei";
            color: rgb(51, 51, 51);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 2.8rem;
        }
        .messageTime {
            font-size: 0.2rem;
            font-family: "Microsoft YaHei";
            color: rgb(137, 137, 137);
        }
    }

    .dian {
        margin: 0.15rem;
    }

    .newsImgBox {
        // display: flex;
        // justify-content: space-between;
        padding-top: 0.15rem;
        .newsImg {
            width: 2.2rem;
            height: 2rem;
        }
    }

    .type_item {
        color: #666;
        cursor: pointer;
        padding: 0.2rem 0 .1rem;
        margin: 0 .2rem;
        line-height: 2;
        font-size: .24rem;
        display: inline-block;
        /* display: fixed;
        justify-content: space-around; */
    }

    .active {
        color: #005982;
        border-bottom: 3px solid #005982;
    }
</style>