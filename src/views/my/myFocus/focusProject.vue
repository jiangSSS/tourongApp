<template>
    <div class="">
        <div class="step" v-for="item in projectData" :key="item.index">
            <div class="itemBox">
                <div class="clearfix">
                    <div class="peojectTitle fll">
                        {{item.name}}
                    </div>
                    <mt-button class="flr cancleBtn" @click="cancelBtn(index)">
                        取消关注
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
        <p v-show="projectData.length == 0" class="noAtt">
            你没有关注任何项目哦~
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false,
                projectData: [
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
        methods: {
            cancelBtn(index) {
                this.projectData.splice(index, 1)
            },
            getData(){
                this.$axios.get(`/jsp/wap/center/ctrl/jsonIndustry.jsp`).then(res=>{
                    console.log("行业列表",res)
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>
<style scoped>
    .container {}

    .noAtt {
        text-align: center;
        color: #ccc;
        margin-top: 3rem;
    }

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

    .itemBox {
        padding-bottom: .1rem;
        border-bottom: .2rem solid #f3f5f7
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
    }
</style>