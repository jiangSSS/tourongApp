<template>
    <div>
        <Header></Header>
        <div class="">
            <!-- <mu-container class="subTabs">
                <mu-tabs :value.sync="active2" inverse color="#005982" indicator-color="#005982" full-width>
                    <mu-tab>全部</mu-tab>
                    <mu-tab>已发布</mu-tab>
                    <mu-tab>草稿箱</mu-tab>
                </mu-tabs>
                <div class="demo-text" v-if="active2 === 0">
                    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
                        <div v-for="(item,index) in pageList" :key="index">
                            <div class="projectBox">
                                <div class="clearfix">
                                
                                    <div class="peojectTitle fll" @click="toMoneyDetailPage(item.id,item.status)">{{item.title}}</div>
                                    <span class="flr cancleBtn" v-if="item.status == '0'">未发布</span>
                                    <span class="flr cancleBtn" v-else :class="item.status  == '5' ? ' being':'' + item.status == '10' ? ' already':'' + item.status == '15'? ' fail':''">{{item.status == '5' ? '审核中':'' + item.status == '10' ? '已发布':'' + item.status == '15'?
                                        '':''}}
                                    </span>
                                </div>
                                <div class="textContent">
                                    <div>
                                        <span>投资资金：</span>
                                        <span class="lookNum">{{item.investAmountName}}</span>
                                    </div>
                                    <div class="clearfix">
                                        <div class="fll startTime">{{item.addTimeStr.slice(0,10)}}</div>
                                        <div class="flr">
                                            <mu-button icon color="Normal" class="delete" @click="amend(item.id)">
                                                <i class="iconfont icon-edit-1-copy"></i>
                                                <mu-icon value="修改" class="mu-icon"></mu-icon>
                                            </mu-button>
                                            <mu-button icon color="Normal" class="delete" @click="delete_item(item.id,index)">
                                                <i class="iconfont icon-shanchu"></i>
                                                <mu-icon value="删除" class="mu-icon"></mu-icon>
                                            </mu-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p v-show="pageList.length == 0" class="noAtt">你没有任何资金哦~</p>
                    <div class="apply" @click="$router.push('/issueMoney')">
                        <i class="iconfont icon-youxianzijin"></i>
                        <span>添加资金</span>
                    </div>
                </div>
                <div class="demo-text" v-if="active2 === 1">
                    111
                </div>
                <div class="demo-text" v-if="active2 === 2">
                    222
                </div>
            </mu-container> -->
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
                <div v-for="(item,index) in pageList" :key="index">
                    <div class="projectBox">
                        <div class="clearfix">

                            <div class="peojectTitle fll" @click="toMoneyDetailPage(item.id,item.status)">{{item.title}}</div>
                            <span class="flr cancleBtn" v-if="item.status == '0'">未发布</span>
                            <span class="flr cancleBtn" v-else :class="item.status  == '5' ? ' being':'' + item.status == '10' ? ' already':'' + item.status == '15'? ' fail':''">{{item.status == '5' ? '审核中':'' + item.status == '10' ? '已发布':'' + item.status == '15'? '':''}}
                            </span>
                        </div>
                        <div class="textContent">
                            <div>
                                <span>投资资金：</span>
                                <span class="lookNum">{{item.investAmountName}}</span>
                            </div>
                            <div class="clearfix">
                                <div class="fll startTime">{{item.addTimeStr.slice(0,10)}}</div>
                                <div class="flr">
                                    <mu-button icon color="Normal" class="delete" @click="amend(item.id)">
                                        <i class="iconfont icon-edit-1-copy"></i>
                                        <mu-icon value="修改" class="mu-icon"></mu-icon>
                                    </mu-button>
                                    <mu-button icon color="Normal" class="delete" @click="delete_item(item.id,index)">
                                        <i class="iconfont icon-shanchu"></i>
                                        <mu-icon value="删除" class="mu-icon"></mu-icon>
                                    </mu-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p v-show="pageList.length == 0" class="noAtt">你没有任何资金哦~</p>
            <div class="apply" @click="$router.push('/issueMoney')">
                <i class="iconfont icon-youxianzijin"></i>
                <span>添加资金</span>
            </div>
        </div>

    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    import { MessageBox } from 'mint-ui';
    export default {
        components: {
            Header,
            MessageBox
        },
        data() {
            return {
                active2: 0,
                pageList: [],
                count: 1,
                pn: 1,
                loading: false
            };
        },
        methods: {
            loadMore() {
                this.pn = this.pn + 1
                this.loading = true
                this.$axios.get(`/jsp/wap/center/ctrl/jsonMyCapitalList.jsp`, { params: { pageNumber: this.pn } }).then(res => {
                    if (res.success == "true") {
                        this.pageList = [...this.pageList, ...res.data.pageList]
                        this.count = res.data.pagination.totalCount
                        this.loading = false
                    }
                })
            },
            getMyProject(pageNumber) {
                this.loading = true
                this.$axios.get(`/jsp/wap/center/ctrl/jsonMyCapitalList.jsp`, { params: { pageNumber } }).then(res => {
                    console.log("我的资金", res)
                    this.pageList = res.data.pageList
                    this.count = Number(res.data.pagination.totalCount)
                    this.pn = 1
                    this.loading = false
                })
            },
            handleApply() {

            },
            // 修改一个资金
            amend(id) {
                let { href } = this.$router.resolve({
                    name: "issueMoney",
                    query: { id }
                });
                window.open(href, '_blank');
                // this.$router.push(" { name: 'issueMoney',query:{id:item.id}}")

            },
            // 删除一个项目
            delete_item(id, index) {
                MessageBox.confirm('', {
                    message: '即将删除该资金, 是否继续?',
                    title: '提示',
                    showCancelButton: true
                }).then(action => {
                    if (action == 'confirm') {     //确认的回调
                        this.$axios.get(`/jsp/wap/center/do/doDelCapital.jsp?id=${id}`).then(res => {
                            this.pageList.splice(index, 1)
                            this.count -= 1
                        })
                    }
                }).catch(err => {
                    if (err == 'cancel') {     //取消的回调
                    }
                });
            },
            toMoneyDetailPage(id, status) {
                if (status == '10') {
                    let { href } = this.$router.resolve({
                        name: "moneyDetail",
                        query: { id }
                    });
                    window.open(href, '_blank');
                } else {
                    let instance = Toast('资金尚未发布成功');
                    setTimeout(() => {
                        instance.close();
                    }, 2000);
                }
            },
        },
        created() {
            this.getMyProject()
        }
    };
</script>
<style scoped lang="scss">
    .subTabs {
        padding: 0.8rem 0 0 0;
        width: 7.5rem !important;
        min-width: 7.5rem !important;
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
        /*超出部分隐藏*/
        white-space: nowrap;
        /*不换行*/
        text-overflow: ellipsis;
        /*超出部分文字以...显示*/
        width: 5rem
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

    .delete {
        width: 1.5rem
    }

    .startTime {
        line-height: 3;
        font-family: "PingFang";
        color: rgb( 153, 153, 153);
    }

    .lookNum {
        color: #005982;
        font-size: .32rem;

    }

    .mu-icon {
        font-size: .26rem;
        font-family: "MicrosoftYaHeiLight";
        font-style: normal;
        color: rgb( 102, 102, 102);
    }

    .projectBox {
        padding-bottom: .2rem;
        border-bottom: .1rem solid #f3f5f7
    }

    .apply {
        width: 1.5rem;
        height: 1.5rem;
        position: fixed;
        bottom: 1.2rem;
        right: .4rem;
        background: #005982;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        .iconfont {
            display: block;
            font-size: .5rem;
            margin-top: .15rem;
        }
        span {
            font-size: .2rem;
            display: block
        }
    }

    .noAtt {
        text-align: center;
        margin-top: 4rem
    } // 状态样式
    .being {
        color: #FFA500
    }

    .already {
        color: #005982
    }

    .fail {
        color: pink
    }
</style>