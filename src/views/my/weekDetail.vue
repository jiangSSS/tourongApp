<template>
    <div>
        <Header></Header>
        <div class="detail">
            <div class="clearfix weekTitle">
                <div class="peojectTitle fll">项目精选</div>
                <span class="flr cancleBtn" @click="$router.push('/projectA')">更多
                    <i class="iconfont icon-xiangyou"></i>
                </span>
            </div>
            <div class="weekList" v-for="(item,index) in pageList.slice(0,2)" :key="index">
                <router-link :to="{name:'project',query:{id:item.id}}">
                    <div class="projectBox">
                        <div class="clearfix rows">
                            <div class="nums clearfix">
                                <div class="titleBox">
                                    <div class="messageTitle">{{item.title}}</div>
                                </div>
                                <div class="newsDesc">
                                    {{item.brief}}
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <!-- 资金 -->
            <div class="clearfix weekTitle">
                <div class="peojectTitle fll">资金对接</div>
                <span class="flr cancleBtn" @click="$router.push('/moneyDetail')">更多
                    <i class="iconfont icon-xiangyou"></i>
                </span>
            </div>
            <div class="weekList" v-for="item in moneyPageList.slice(0,2)" :key="item.index">
                <router-link :to="{name:'moneyDetail',query:{id:item.id}}">
                    <div class="projectBox">
                        <div class="clearfix rows">
                            <div class="nums clearfix">
                                <div class="titleBox">
                                    <div class="messageTitle">{{item.title}}</div>
                                </div>
                                <div class="newsDesc">
                                    {{item.brief}}
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
            <!-- 新闻 -->
            <div class="clearfix weekTitle">
                <div class="peojectTitle fll">新闻精选</div>
                <span class="flr cancleBtn" @click="$router.push('/news')">更多
                    <i class="iconfont icon-xiangyou"></i>
                </span>
            </div>
            <div class="weekList" v-for="item in newsList.slice(0,2)" :key="item.index">
                <router-link :to="{name:'newsDetail',query:{id:item.id}}">
                    <div class="projectBox">
                        <div class="clearfix rows">
                            <div class="fll">
                                <img :src="$url + item.imgPath" alt="" class="imgList">
                            </div>
                            <div class="nums fll">
                                <div class="titleBox">
                                    <div class="messageTitle">{{item.title}}</div>
                                </div>
                                <div class="newsDesc">
                                    {{item.brief}}
                                </div>
                            </div>

                        </div>
                    </div>
                </router-link>
            </div>
            <!-- 活动 -->
            <div class="clearfix weekTitle">
                <div class="peojectTitle fll">活动精选</div>
                <span class="flr cancleBtn" @click="$router.push('/activity')">更多
                    <i class="iconfont icon-xiangyou"></i>
                </span>
            </div>
            <div class="weekList" v-for="item in activityList.slice(0,2)" :key="item.index">
                <router-link :to="{name:'activityDetail',query:{id:item.id}}">
                    <div class="projectBox">
                        <div class="clearfix rows">
                            <div class="fll">
                                <img :src="$url + item.imgPath" alt="" class="imgList">
                            </div>
                            <div class="nums fll">
                                <div class="titleBox">
                                    <div class="messageTitle">{{item.title}}</div>
                                </div>
                                <div class="newsDesc">
                                    {{item.brief}}
                                </div>
                            </div>

                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    import { MessageBox } from 'mint-ui';
    import { Dialog } from "vant";
    import { Toast } from "mint-ui"
    export default {
        components: {
            Header,
            MessageBox,
            Toast
        },
        data() {
            return {
                active2: 0,
                pageList: [],
                moneyPageList: [],
                newsList: [],
                activityList: []
            };
        },
        methods: {

            // 获取我的项目列表
            getData() {
                this.$axios.get('/jsp/wap/trProject/ctrl/jsonProjectPage.jsp').then(res => {
                    if (res.success == 'true') {
                        this.pageList = res.data.pageList
                    }
                })
            },
            getMoney() {
                this.$axios.get('/jsp/wap/trCapital/ctrl/jsonCapitalPage.jsp').then(res => {
                    if (res.success == 'true') {
                        this.moneyPageList = res.data.pageList
                    }
                })
            },
            getNews() {
                this.$axios.get('/jsp/wap/trNews/ctrl/jsonNewsPage.jsp').then(res => {
                    if (res.success == 'true') {
                        this.newsList = res.data.pageList
                    }
                })
            },
            getActivity() {
                this.$axios.get('/jsp/wap/trActivity/ctrl/jsonActivityPage.jsp').then(res => {
                    if (res.success == 'true') {
                        this.activityList = res.data.pageList
                    }
                })
            },
            getaa(){
                this.$axios.get(`/jsp/wap/center/ctrl/jsonWeeklyDetail.jsp`).then(res=>{
                    console.log("周报详情",res)
                })
            }
        },
        created() {
            this.getData()
            this.getMoney()
            this.getNews()
            this.getActivity()
            this.getaa()
        }
    };
</script>
<style scoped lang="scss">
    .subTabs {
        padding: 0.8rem 0 0 0;
        width: 7.5rem !important;
        min-width: 7.5rem !important;
    }

    .detail {
        margin-top: .9rem
    }

    .textContent {
        padding: 0 .3rem
    }

    .peojectTitle {
        border-left: 3px solid #005982;
        margin: 0.3rem;
        padding-left: 0.2rem;
        font-size: 0.3rem;
        font-family: "PingFang";
        color: rgb(51, 51, 51);
        line-height: 1.533;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 5.3rem;

    }

    .cancleBtn {
        margin: 0.2rem 0.3rem 0 0;
        padding: 0 0.2rem;
        height: 0.7rem;
        border: none;
        background: none;

        font-size: .24rem;
        font-family: "Microsoft YaHei";
        color: rgb( 102, 102, 102);
        line-height: 3;
    }

    .messageTitle {
        font-size: .32rem;
        padding: 0 .3rem;
        color: #666;
        font-weight: 700;
    }

    .newsDesc {
        padding: 0 .3rem;
        color: #999
    }

    .weekList {
        border-bottom: .2rem solid #f3f5f7;
        padding: .2rem 0
    }

    .weekTitle {
        border-top: 1px solid #f3f5f7;
        border-bottom: 1px solid #f3f5f7;
    }

    .imgList {
        width: 2.25rem;
        height: 1.5rem;
        margin-left: .3rem
    }
</style>