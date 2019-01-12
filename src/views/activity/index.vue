<template>
    <div>
        <vue-drawer-layout ref="drawerLayout" :reverse="true" @mask-click="handleMaskClick">
            <div class="drawer" slot="drawer">
                <div class="text">
                    <div class="chooseBox">
                        <div class="title">活动类型</div>
                        <div class="choose">
                            <div class="sbuTitle clearfix">
                                <span class="fll">请选择活动标签</span>
                                <i class="iconfont icon-xiangxia flr" v-if="!isShow" @click="handleShowList"></i>
                                <i class="iconfont icon-xiangshang flr" v-else @click="handleCloseList"></i>
                            </div>
                            <div class="type" v-show="isShow">
                                <span v-for="(item,index) in categoryList" :key="index" @click="getCategory(item.dataValue,index)" :class="{activeBox:item.checked}">{{item.dataName}}</span>
                            </div>
                        </div>
                        <div class="clearfix sureChoose">
                            <mu-button class="chooseBtn fll">清空</mu-button>
                            <mu-button class="chooseBtn flr sure" @click="handleSure">确定</mu-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content" slot="content">
                <div class="text">
                    <div class="all">
                        <Header></Header>
                        <div class="detail">
                            <div class="statusBox">
                                <span class="type_item" v-for="(item , index) in statusList" :key="index" @click="getStatus(item.statusValue,index)" :class="{active:item.checked}">{{item.statusName}}</span>
                                <span class="type_item" @click="handleToggleDrawer">活动类型</span>
                            </div>
                            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
                                <div class="applyBox" v-for="(item,index) in pageList" :key="index">
                                    <router-link :to="{path:'/activityDetail',query:{id:item.id}}">
                                        <div class="imgWarp">
                                            <div class="imgBox">
                                                <img :src="$url + item.imgPath" alt="" class="imgPath">
                                                <span class="flr rightTop">{{item.statusStr}}</span>
                                                <div class="applyNum">
                                                    <i class="iconfont icon-gongzuohuibao"></i>
                                                    <span>报名数量：</span>
                                                    <span>{{item.applyNum}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="applyDesc">
                                            <div class="applyTitle">{{item.title}}</div>
                                            <div class="company">
                                                <span>主讲：</span>
                                                <span>{{item.speaker}}</span>
                                            </div>
                                        </div>
                                    </router-link>
                                    <div class="applyDesc">
                                        <div class="clearfix">
                                            <div class="fll timeAddress">
                                                <div>
                                                    <span>活动地点</span>
                                                    <i class="iconfont icon-dizhi"></i>
                                                    <span>{{item.address}}</span>
                                                </div>
                                                <div>
                                                    <span>活动时间</span>
                                                    <i class="iconfont icon-shijian"></i>
                                                    <span>{{ item.regStartTimeStr.slice(0,10)}} 至 {{item.regEndTimeStr.slice(0,10)}}</span>
                                                </div>
                                            </div>
                                            <mt-button type="default" class="applyBtn flr" @click="submit">提交</mt-button>
                                        </div>
                                    </div>
                                </div>
                                <div class="scrollTop" @click="toTop">
                                    <img src="../../../static/app/img/backTop.png" alt="">
                                </div>
                                <div>
                                    <div class="noData" v-if="this.totalCount > this.pageList.length">加载中...</div>
                                    <div class="noData" v-else>--- 没有更多数据了 ---</div>
                                </div>
                            </div>
                        </div>
                        <Footer class="footer"></Footer>
                    </div>
                </div>
            </div>
        </vue-drawer-layout>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import Footer from "@/components/Bottom.vue"
    // import Choose from "@/views/activity/choose.vue"

    export default {
        components: {
            Header,
            Footer,
            // Choose
        },
        data() {
            return {
                showTop: false,
                isShow: false,
                isShow1: false,
                isShow2: false,
                active1: 0,
                pn: 1,
                pageNumber: 1,
                pageList: [],
                isShowData: false,
                loading: false,
                isLoading: false,

                categorys: '',
                statuss: '',

                totalCount: [],
                categoryList: [],
                statusList: [],

                scrollTop: 0,
                time: 0,
                dParams: 20,
                scrollState: 0

            }
        },
        methods: {
            // 打开筛选
            handleToggleDrawer() {
                this.$refs.drawerLayout.toggle();
            },
            // 关闭筛选
            handleMaskClick() {
                this.$refs.drawerLayout.toggle(false);
            },
            // 下拉/收起
            handleShowList() { this.isShow = true },
            handleCloseList() { this.isShow = false },
            handleShowList1() { this.isShow1 = true },
            handleCloseList1() { this.isShow1 = false },
            handleShowList2() { this.isShow2 = true },
            handleCloseList2() { this.isShow2 = false },
            handleShowList3() { this.isShow3 = true },
            handleCloseList3() { this.isShow3 = false },
            // 上拉加载
            loadMore() {
                this.pn += 1
                this.loading = true
                this.$axios.get('/jsp/wap/trActivity/ctrl/jsonActivityPage.jsp', { params: { statuss: this.statuss, categorys: this.categorys, pageNumber: this.pn } }).then(res => {
                    if (res.success == "true") {
                        this.pageList = [...this.pageList, ...res.data.pageList]
                        this.totalCount = res.data.pagination.totalCount
                        this.loading = false
                    }
                })
            },
            // 活动列表
            getActivityList(statuss, categorys) {
                this.loading = true
                this.$axios.get(`/jsp/wap/trActivity/ctrl/jsonActivityPage.jsp?`, { params: { statuss: statuss, categorys: this.categorys } }).then(res => {
                    console.log("活动列表", res)
                    if (res.success == "true") {
                        this.pageList = res.data.pageList
                        this.totalCount = res.data.pagination.totalCount
                        // this.pn = 1
                        this.loading = false
                    }
                })
            },

            // 分类列表
            getTypeData() {
                this.$axios.get('/jsp/wap/trActivity/ctrl/jsonCategoryList.jsp').then(res => {
                    console.log("活动分类", res)
                    if (res.success == "true") {
                        let statusList = res.data.statusList
                        statusList.forEach(item => {
                            this.$set(item, 'checked', false)
                        });
                        this.statusList = statusList

                        let categoryList = res.data.categoryList
                        categoryList.forEach(item => {
                            this.$set(item, 'checked', false)
                        });
                        this.categoryList = categoryList
                    }
                })
            },
            // 状态分类
            getStatus(e, index) {
                this.statuss = e
                if (this.statusList[index].checked) {
                    this.statusList[index].checked = !this.statusList[index].checked
                    this.statuss = ''
                } else {
                    this.statusList.forEach(item => {
                        item.checked = false
                    });
                    this.statusList[index].checked = true
                }
                this.getActivityList(this.statuss, this.categorys)
            },
            // 筛选分类
            getCategory(e, index) {
                this.categorys = e
                if (this.categoryList[index].checked) {
                    this.categoryList[index].checked = !this.categoryList[index].checked
                    this.categorys = ''
                } else {
                    this.categoryList.forEach(item => {
                        item.checked = false
                    });
                    this.categoryList[index].checked = true
                }

            },
            // 确定筛选
            handleSure() {
                this.getActivityList(this.statuss, this.categorys)
                this.$refs.drawerLayout.toggle(false);

            },
            submit() {
                alert("提交")
            },
            toTop() {
                console.log("11111")
                document.body.scrollTop = 0
                document.documentElement.scrollTop = 0
            }
            // toTop(e) {
            //     if (!!this.scrollState) {
            //         return;
            //     }
            //     this.scrollState = 1;
            //     e.preventDefault();
            //     let distance = document.documentElement.scrollTop || document.body.scrollTop;
            //     let _this = this;
            //     this.time = setInterval(function () { _this.gotoTop(_this.scrollTop - _this.dParams) }, 10);
            // },
            // gotoTop(distance) {
            //     this.dParams += 20;
            //     distance = distance > 0 ? distance : 0;
            //     document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
            //     if (this.scrollTop < 10) {
            //         clearInterval(this.time);
            //         this.dParams = 20;
            //         this.scrollState = 0;
            //     }
            // },
            // getScrollTop() {
            //     this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // }
        },
        // computed: {
        //     showTop: function() {
        //         let value = this.scrollTop > 200 ? true : false;
        //         return value;
        //     },
        // },
        // mounted() {
        //     window.addEventListener('scroll', this.getScrollTop);
        // },
        created() {
            this.getActivityList(this.statuss, this.categorys)
            this.getTypeData()
        }
    }
</script>
<style scoped lang="scss">
    .detail {
        padding-top: .8rem;
        padding-bottom: 1.3rem;
    }

    .all {
        height: 100vh;
    }

    .content {
        overflow: scroll;
    }

    img {
        width: 100%
    }

    .subTabs {
        background: #fff;
        padding: 0;
    }

    .container {
        padding: 0
    }

    .applyBox {
        border-bottom: 1px solid #fafafa;
        padding: .2rem 0;
    }

    .subTab {
        font-size: .5rem !important;
        font-family: "PingFang";
        color: rgb( 51, 51, 51);
        line-height: 2.727;
        text-align: center;
        background: #fff
    }

    .messageBox {
        background: #fff;
        padding: .2rem;
        margin-top: .2rem;
        .messageTitle {
            font-size: .32rem;
            font-family: "PingFang";
            color: rgb( 51, 51, 51);
        }
        .messageDetail,
        .messageTime {
            font-size: .28rem;
            font-family: "PingFang";
            color: rgb( 102, 102, 102);

        }
    }

    .imgWarp {
        background: #fff;
        padding: .2rem;
        border-top: .2rem solid #fafafa;
    }

    .imgBox {
        height: 3.5rem;
        margin: 0 auto;
        color: #fff;
        background-size: 100% 100%;
        position: relative;
    }

    .imgPath {
        width: 100%;
        height: 100%;
    }

    /deep/ .mu-tabs-inverse {
        background: #fff;

    }

    .rightTop {
        margin: .2rem .2rem 0 0;
        background: rgba(0, 0, 0, .5);
        border-radius: 4px;
        padding: .06rem .15rem;
        position: absolute;
        top: 0;
        right: 0;

    }

    .applyNum {
        position: absolute;
        bottom: 0;
        padding: 0 0 .1rem .2rem;
        width: 100%;
        background: linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
        background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
        background: -moz-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
        background: -ms-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
        background: -o-linear-gradient(bottom, rgba(0, 0, 0, .5), transparent);
    }

    .applyDesc {
        padding: 0 .2rem
    }

    .applyBtn {
        background: #005982;
        color: #fff;
        width: 1.8rem;
        height: .7rem;
        margin-right: .2rem;
        margin-top: .13rem
    }

    .applyTitle {
        font-size: .32rem;
        color: rgb( 51, 51, 51);
        font-weight: bold;
        line-height: 2;


    }

    .company span {
        font-size: .28rem;
        color: rgb( 102, 102, 102);
        line-height: 1.6
    }

    .timeAddress span {
        color: rgb( 179, 179, 179);
        font-size: .24rem
    }

    .iconfont,
    a {
        color: rgb( 179, 179, 179);
    }

    .active {
        color: #005982 !important;
        border-bottom: 3px solid #005982
    }

    .statusBox {
        padding-left: .3rem
    }

    .type_item {
        color: #666;
        cursor: pointer;
        padding: .2rem 0;
        margin: 0 .35rem;
        display: inline-block;
        display: fixed;
        justify-content: space-around
    }

    /* 筛选 */

    .chooseBox {
        background: #fff;
        z-index: 1000;
    }

    .choose {
        overflow: scroll;
        height: 100vh;
        padding-bottom: 2rem
    }

    .title {
        text-align: center;
        line-height: 3;
        border-bottom: 1px solid #fafafa
    }

    .sbuTitle {
        font-size: .28rem;
        font-family: "PingFang";
        color: rgb( 51, 51, 51);
        font-weight: bold;
        line-height: 4;
        padding: 0 .2rem;
        border-bottom: 1px solid #fafafa;
    }

    .type {
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px solid #fafafa;
        padding: .2rem .2rem .3rem;
    }

    .type span {
        background: #eee;
        width: 1.6rem;
        text-align: center;
        padding: .1rem .15rem;
        border-radius: 10%;
        margin-right: .2rem;
        margin-top: .2rem;
        font-size: .24rem;
        font-family: "PingFang";
        color: rgb( 102, 102, 102);
    }

    .type span.activeBox {
        background: #005982;
        color: #fff;
    }

    .sureChoose {
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    .chooseBtn {
        width: 50%;
        padding: .6rem 0;
        font-size: .3rem;
    }

    .sure {
        background: #005982;
        color: #fff
    }

    /* 多选框 */

    #moneyType {
        width: 2rem
    }

    .checkItem {
        width: 100%;
        padding: 0 .2rem;
        line-height: 2;
        border-bottom: 1px dashed #fafafa;
    }

    .scrollTop {
        position: fixed;
        right: .8rem;
        bottom: 1.5rem;
        cursor: pointer;
    }
</style>