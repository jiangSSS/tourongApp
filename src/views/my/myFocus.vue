<template>
    <div class="containerAll">
        <Header></Header>
        <div>
            <mu-container class="subTabs">
                <mu-tabs :value.sync="active" class="subTab" inverse color="#005982" indicator-color="#005982" full-width>
                    <mu-tab>项目</mu-tab>
                    <mu-tab>资金</mu-tab>
                    <mu-tab>标签设置</mu-tab>
                </mu-tabs>
                <div class="demo-text" v-if="active === 0">
                    <div class="step" v-for="item in progressList" :key="item.index">
                        <div class="itemBox">
                            <div class="clearfix">
                            <div class="peojectTitle fll">
                                {{item.name}}
                            </div>
                            <mt-button class="flr cancleBtn">
                                <i class="iconfont icon-icon-test"></i>
                                取消
                            </mt-button>
                        </div>
                        <div class="progress">
                            <van-steps direction="vertical" :active="0" active-color="#005982" icon="icon-shijian">
                                <van-step v-for="(item,index) in item.progress" :key="index">
                                    <h3>{{item.title}}</h3>
                                    <p>
                                        <span>{{item.time}}</span>
                                        <span class="nowTime" v-show="isShow">最新动态</span>
                                    </p>
                                </van-step>
                            </van-steps>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="demo-text" v-if="active === 1">
                    <div class="step" v-for="item in progressList" :key="item.index">
                        <div class="clearfix">
                            <div class="peojectTitle fll">
                                {{item.name}}
                            </div>
                            <mt-button class="flr cancleBtn">
                                <i class="iconfont icon-icon-test"></i>
                                取消
                            </mt-button>
                        </div>
                        <div class="progress">
                            <van-steps direction="vertical" :active="0" active-color="#005982" icon="icon-shijian">
                                <van-step v-for="(item,index) in item.progress" :key="index">
                                    <h3>{{item.title}}</h3>
                                    <p>
                                        <span>{{item.time}}</span>
                                        <span class="nowTime" v-show="isShow">最新动态</span>
                                    </p>
                                </van-step>
                            </van-steps>
                        </div>
                    </div>
                </div>
                <div class="demo-text" v-if="active === 2">
                   111
                </div>

            </mu-container>
        </div>

    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    export default {
        components: {
            Header
        },
        data() {
            return {
                isShow: false,
                active: 0,
                vactiveStep: 0,
                focusProject: [
                    {
                        title: "北京某互联网创新创业服务平台项目",
                        startTime: "2018-01-01 12:11:10",
                        endTime: "2018-01-01 12:11:10",
                    }
                ],

                progressList: [
                    {
                        name: "北京某互联网创新创业服务平台项目",
                        progress: [
                            {
                                title: "开发完成，已准备上线",
                                time: "2018-01-01 12:11:10"
                            },
                            {
                                title: "签好合同，已准备工作阶段",
                                time: "2018-01-01 12:11:10"
                            },

                        ],
                    },
                    {
                        name: "北京某互联网创新创业服务平台项目",
                        progress: [
                            {
                                title: "开发完成，已准备上线",
                                time: "2018-01-01 12:11:10"
                            },
                            {
                                title: "签好合同，已准备工作阶段",
                                time: "2018-01-01 12:11:10"
                            },

                        ],
                    },
                ],
            }
        },
    }
</script>
<style scoped lang="scss">
    .containerAll {
        background: #f3f5f7
    }
    .itemBox{
        padding-bottom: .1rem;
        border-bottom: .2rem solid #f3f5f7
    }

    .container {}

    .subTabs {
        /* padding-top: .8rem; */
        padding: .8rem 0 0 0;
        width: 7.5rem !important;
        min-width: 7.5rem !important
        /* background: #fff; */
    }

    .subTab {
        background: #fff;
        margin-bottom: .3rem
    }

    .peojectTitle {
        border-left: 3px solid #005982;
        margin: .3rem;
        padding-left: .2rem;
        font-size: .3rem;
        font-family: "PingFang";
        color: rgb( 51, 51, 51);
        line-height: 1.533;

    }

    .cancleBtn {
        margin: .2rem .3rem 0 0;
        padding: 0 .1rem;
        height: .6rem;
    }

    .nowTime {
        display: inline-block;
        padding-left: .6rem;
        color: #005982;
        font-weight: 700;
    }

    .step {
        background: #fff
    } // /deep/.mu-step-label{
    //     padding-left: .2rem;
    //     padding-right: .2rem
    // }
</style>