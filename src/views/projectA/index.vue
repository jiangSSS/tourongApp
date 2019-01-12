<template>
    <div>
        <vue-drawer-layout ref="drawerLayout" :reverse="true" @mask-click="handleMaskClick">
            <div class="drawer" slot="drawer">
                <div class="text">
                    <div class="chooseBox">
                        <div class="title">项目筛选</div>
                        <div class="choose">
                            <div class="sbuTitle clearfix">
                                <span class="fll">融资方式</span>
                                <i class="iconfont icon-xiangxia flr" v-if="!isShow" @click="handleShowList"></i>
                                <i class="iconfont icon-xiangshang flr" v-else @click="handleCloseList"></i>
                            </div>
                            <div class="type" v-show="isShow">
                                <span class="radioItem" v-for="(item,index) in financingWayList" :key="index" :class="{active:item.checked}" @click="wayCheckItem(item.dataValue,index)">{{item.dataName}}</span>
                            </div>
                            <div class="sbuTitle clearfix">
                                <span class="fll">所属行业（可多选）</span>
                                <i class="iconfont icon-xiangxia flr" v-if="!isShow1" @click="handleShowList1"></i>
                                <i class="iconfont icon-xiangshang flr" v-else @click="handleCloseList1"></i>
                            </div>
                            <div class="type" v-show="isShow1">
                                <van-checkbox-group v-model="result" @change="industryItem">
                                    <van-checkbox v-for="(item, index) in industryList" :key="index" :name="item" class="checkItem" checked-color="#005982">
                                        {{ item.dataName }}
                                    </van-checkbox>
                                </van-checkbox-group>
                                <!-- <span v-for="(item, index) in industryList" :key="index" class="checkBtn" :class="(item.like == 0 ? ' nolike' : ' like')" @click="checkItem1(index)">{{item.dataName}}</span> -->
                            </div>
                            <div class="sbuTitle clearfix">
                                <span class="fll">所在地区（可多选）</span>
                                <i class="iconfont icon-xiangxia flr" v-if="!isShow2" @click="handleShowList2"></i>
                                <i class="iconfont icon-xiangshang flr" v-else @click="handleCloseList2"></i>
                            </div>
                            <div class="type" v-show="isShow2">
                                <van-checkbox-group v-model="area" @change="areaItem">
                                    <van-checkbox v-for="(item, index) in regionList" :key="index" :name="item" class="checkItem" checked-color="#005982">
                                        {{ item.dataName }}
                                    </van-checkbox>
                                </van-checkbox-group>
                                <!-- <span v-for="(item, index) in regionList" :key="index" class="checkBtn" :class="(item.like == 0 ? ' nolike' : ' like')" @click="checkItem2(index)">{{item.dataName}}</span> -->
                                <!-- <label v-for="(item, index) in regionList" :key="index" class="checkBtn" :class="{active:isActive2 == true}" @click="checkItem2(index)"><input type="checkbox">{{item.dataName}}</label> -->
                            </div>
                            <div class="sbuTitle clearfix">
                                <span class="fll">融资金额</span>
                                <i class="iconfont icon-xiangxia flr" v-if="!isShow3" @click="handleShowList3"></i>
                                <i class="iconfont icon-xiangshang flr" v-else @click="handleCloseList3"></i>
                            </div>
                            <div class="type" v-show="isShow3">
                                <div v-for="(item, index) in financingMoneyList" :key="index" class="radioItem" :class="{active:item.checked}" @click="moneyCheckItem(item.dataValue,index)">{{item.dataName}}</div>
                            </div>
                        </div>
                        <div class="clearfix sureChoose">
                            <mu-button class="chooseBtn fll" @click="handleRemove">清空</mu-button>
                            <mu-button class="chooseBtn flr sure" @click="handleSure">确定</mu-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content" slot="content">
                <div class="text">
                    <div class="index">
                        <div class="header clearfix">
                            <div class="flr"  @click="$router.push('/issueProject')"><button class="sendMoney">发布项目</button></div>                            
                            <div class="search fll">
                                <input type="text" placeholder="请输入内容" class="input_search" />
                                <i class="iconfont icon-sousuo1"></i>
                            </div>                            
                        </div>
                        <div class="detail">
                            <div class="chooseTitle">
                                <div>综合排序</div>
                                <div>时间排序</div>
                                <div @click="handleToggleDrawer">筛选</div>
                            </div>
                            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
                                <div class="projectList" v-for="(item,index) in pageList" :key="index">
                                    <router-link :to="{path:'/project',query:{id:item.id}}">
                                        <div class="projectTitle">{{item.title}}</div>
                                        <div class="projectDetail">{{item.brief}}</div>
                                    </router-link>
                                    <div class="clearfix">
                                        <div class="fll projectTime">
                                            <i class="iconfont icon-shijian"></i>
                                            <span>{{item.addTimeStr}}</span>
                                        </div>
                                        <div class="sendBtn flr" @click="handleCustomer">
                                            <!-- {{item.sendBtn}} -->
                                            约见项目方
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
                </div>
            </div>
        </vue-drawer-layout>
    </div>

</template>

<script>
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Bottom.vue";
    // import Choose from "@/views/projectA/choose.vue";
    import { Dialog } from "vant";
    export default {
        components: {
            Footer,
            Header,
            // Choose
        },
        data() {
            return {
                pageList: [],
                loading: false,
                pn: 1,
                pageNumber: 1,
                totalCount: [],
                // 
                isShow: false,
                isShow1: false,
                isShow2: false,
                isShow3: false,
                isActive3: 0,
                isActive2: 0,
                isActive: 0,

                result: [],
                area: [],

                financingMoneyList: [],
                financingWayList: [],
                industryList: [],
                regionList: [],

                industrys: "",
                regions: "",
                financingWays: "",
                financingMoneys: "",

            };
        },
        methods: {
            handleCustomer() {
                Dialog.alert({
                    message: "提交成功，平台会尽快为你安排。"
                }).then(() => {
                    // on close
                });
            },
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
                this.pn = this.pn + 1
                this.loading = true
                this.$axios.get('/jsp/wap/trProject/ctrl/jsonProjectPage.jsp', {
                    params: {
                        financingWays: this.financingWays,
                        financingMoneys: this.financingMoneys, 
                        industrys: this.industrys, 
                        regions: this.regions,
                        pageNumber: this.pn
                    }
                }).then(res => {
                    if (res.success == "true") {
                        this.pageList = [...this.pageList, ...res.data.pageList]
                        this.totalCount = res.data.pagination.totalCount
                        this.loading = false
                    }
                })
            },
            // 获取项目列表
            getProjectList(financingMoneys, financingWays, industrys, regions) {
                this.loading = true
                this.$axios.get(`/jsp/wap/trProject/ctrl/jsonProjectPage.jsp`, {
                    params: {
                        financingMoneys, financingWays, industrys, regions
                    }
                }).then(res => {
                    console.log("项目列表", res)
                    if (res.success == "true") {

                        this.pageList = res.data.pageList
                        this.totalCount = res.data.pagination.totalCount
                        this.pn = 1
                        this.loading = false
                    }
                });
            },
            // --- 筛选 ---

            // 投资方式筛选
            wayCheckItem(e, index) {
                this.financingWays = e
                if (this.financingWayList[index].checked) {
                    this.financingWayList[index].checked = !this.financingWayList[index].checked
                    this.financingWays = ''
                } else {
                    this.financingWayList.forEach(item => {
                        item.checked = false
                    });
                    this.financingWayList[index].checked = true
                }

            },
            // 投资金额筛选
            moneyCheckItem(e, index) {
                this.financingMoneys = e
                if (this.financingMoneyList[index].checked) {
                    this.financingMoneyList[index].checked = !this.financingMoneyList[index].checked
                    this.financingMoneys = ''
                } else {
                    this.financingMoneyList.forEach(item => {
                        item.checked = false
                    });
                    this.financingMoneyList[index].checked = true
                }
            },
            industryItem(val) {
                let industryList = []
                val.forEach(item => {
                    industryList.push(item.dataValue)
                })
                this.industrys = industryList.join(',')
            },
            areaItem(val) {
                let regionList = []
                val.forEach(item => {
                    regionList.push(item.dataValue)
                })
                this.regions = regionList.join(',')
            },
            // likeAll() {
            //     this.label.forEach(item => {
            //     item.like = 1;
            // });}

            // --- 全部分类 ---
            getTypeData() {
                this.$axios.get(`/jsp/wap/trProject/ctrl/jsonCategoryList.jsp`).then(res => {
                    console.log("项目分类", res)
                    if (res.success == "true") {
                        let financingMoneyList = res.data.financingMoneyList
                        financingMoneyList.forEach(item => {
                            this.$set(item, 'checked', false)
                        });
                        this.financingMoneyList = financingMoneyList

                        let financingWayList = res.data.financingWayList
                        financingWayList.forEach(item => {
                            this.$set(item, 'checked', false)
                        });
                        this.financingWayList = financingWayList

                        let industryList = res.data.industryList
                        industryList.forEach(item => {
                            this.$set(item, 'checked', false)
                        });
                        this.industryList = industryList

                        let regionList = res.data.regionList
                        regionList.forEach(item => {
                            this.$set(item, 'checked', false)
                        });
                        this.regionList = regionList
                    }
                })
            },
            // 清空
            handleRemove() {
                // this.item.checked = false
                // this.financingMoneyList.forEach(item => {
                //     item.checked = false
                // });
            },
            // 确定筛选
            handleSure() {
                this.getProjectList(this.financingMoneys, this.financingWays, this.industrys, this.regions)
                // 关闭筛选
                this.$refs.drawerLayout.toggle(false);
            }
        },
        created() {
            this.getProjectList(this.financingMoneys, this.financingWays, this.industrys, this.regions)
            this.getTypeData()
        }
    };
</script>
<style scoped lang="scss">
    .detail {
        padding-bottom: 1.2rem;
        // background: #fafafa;
    }

    .header {
        background: #fff !important;
    }

    img {
        width: 100%;
    }

    .index {
        height: 100vh;
    }

    /* 筛选 */

    .chooseTitle {
        background: #fff;
        border-top: 1px solid #fafafa;
        display: flex;
        justify-content: space-around;
        padding: 0.3rem 0;
        margin-bottom: 0.2rem;
    }

    /* End */

    .content {
        overflow: scroll;
    }

    .tab {
        display: flex;
        justify-content: space-between;
        padding: 0.3rem 0;
    }

    .tab img {
        width: 90%;
        height: 2rem;
    }

    .projectList {
        padding: 0.3rem;
        background: #fff;
        border-bottom: .2rem solid #fafafa
    }

    .projectTitle {
        font-size: 0.27rem;
        font-family: "PingFang";
        color: rgb(62, 58, 57);
        font-weight: bold;
        line-height: 1;
        text-align: left;
    }

    .projectDetail {
        font-size: 0.24rem;
        margin: 0.2rem 0;
        font-family: "PingFang";
        color: rgb(137, 137, 137);
        line-height: 1.5;
        text-align: justifyLeft;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .projectTime {
        span {
            font-size: .22rem;
        }
        .iconfont {
            font-size: .2rem !important
        }
        font-family: "PingFang";
        color: #ccc;
        line-height: 1.385;
        text-align: left;
    }

    .sendBtn {
        border: 1px solid #005982;
        border-radius: 2px;
        display: inline-block;
        color: #005982;
        padding: 0.1rem 0.2rem;
        line-height: 1.25;
        font-family: "PingFang";
        font-size: 0.23rem;
        font-weight: bold;
        opacity: 0.7;
    }

    .search {
        margin: 0.2rem;
        background: #fafafa
    }

    .icon-sousuo {
        line-height: 2;
    }

    .sendMoney {
        border: 0;
        background: none;
        color: #005982;
        padding-right: 0.3rem;
        line-height: 3;
    }

    .sendMoney:focus {
        outline: none;
    }

    .input_search {
        border: 0;
        color: rgb(153, 153, 153);
        background: #fafafa;
        width: 4.8rem;
        border-radius: 4px;
        font-family: "PingFang";
        line-height: 2.103;
        padding: 0 0.2rem;
    }

    .input_search:focus {
        outline: none;
    }

    .input_search::-webkit-input-placeholder {
        padding-left: 0.3rem;
    } // -------筛选--------
    .chooseBox {
        background: #fff;
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

    .type .checkBtn {
        width: 1.6rem;
        text-align: center;
        padding: .1rem .15rem;
        border-radius: 10%;
        margin-right: .2rem;
        margin-top: .2rem;
        font-size: .24rem;
        font-family: "PingFang";
        cursor: pointer;

    }

    .type input {
        display: none
    }

    .radioItem {
        background: #eee;
        color: rgb( 102, 102, 102);
        width: 1.66rem;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        border-radius: 10%;
        margin-right: .2rem;
        margin-top: .2rem;
        font-size: .24rem;
        font-family: "PingFang";
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

    }

    .active {
        background: #005982;
        color: #fff
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
</style>