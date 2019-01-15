<template>
    <div>
        <Header></Header>
        <div class="">
            <mu-container class="subTabs">
                <mu-tabs :value.sync="active2" inverse color="#005982" indicator-color="#005982" full-width>
                    <mu-tab>全部</mu-tab>
                    <mu-tab>已发布</mu-tab>
                    <mu-tab>草稿箱</mu-tab>
                </mu-tabs>
                <div class="demo-text" v-if="active2 === 0">
                    <div v-for="(item,index) in projectList" :key="index">
                        <!--  -->
                        <div class="projectBox">
                            <div class="clearfix">
                                <div class="peojectTitle fll">{{item.title}}</div>
                                <span class="flr cancleBtn" v-show="item.style ==1">{{item.status}}</span>
                                <span class="flr cancleBtn" style="color:rgb( 255, 132, 158 )" v-show="item.style ==2">{{item.status}}</span>
                                <span class="flr cancleBtn" style="color:rgb( 255, 132, 158 )" v-show="item.style ==3">{{item.status}}</span>
                                <span class="flr cancleBtn" style="color:#409eff" v-show="item.style ==4">{{item.status}}</span>
                            </div>

                            <div class="textContent">
                                <div>
                                    <span>约谈：</span>
                                    <span class="lookNum">{{item.num}}</span>
                                </div>
                                <div class="clearfix">
                                    <div class="fll startTime">{{item.startTime}}</div>
                                    <div class="flr">
                                        <mu-button icon color="Normal" class="delete">
                                            <i class="iconfont icon-edit-1-copy"></i>
                                            <mu-icon value="修改" class="mu-icon"></mu-icon>
                                        </mu-button>
                                        <mu-button icon color="Normal" class="delete">
                                            <i class="iconfont icon-shanchu"></i>
                                            <mu-icon value="删除" class="mu-icon"></mu-icon>
                                        </mu-button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="apply" @click="$router.push('/issueProject')">
                        <i class="iconfont icon-xiangmu"></i>
                        <span>添加项目</span>
                    </div>
                </div>
                <div class="demo-text" v-if="active2 === 1">
                    <div v-for="(item,index) in projectList" :key="index">
                        <!--  -->
                        <div class="projectBox">
                            <div class="clearfix">
                                <div class="peojectTitle fll">{{item.title}}</div>
                                <span class="flr cancleBtn" v-show="item.style ==1">{{item.status}}</span>
                                <span class="flr cancleBtn" style="color:rgb( 255, 132, 158 )" v-show="item.style ==2">{{item.status}}</span>
                                <span class="flr cancleBtn" style="color:rgb( 255, 132, 158 )" v-show="item.style ==3">{{item.status}}</span>
                                <span class="flr cancleBtn" style="color:#409eff" v-show="item.style ==4">{{item.status}}</span>
                            </div>
                            <div class="textContent">
                                <div>
                                    <span>约谈：</span>
                                    <span class="lookNum">{{item.num}}</span>
                                </div>
                                <div class="clearfix">
                                    <div class="fll startTime">{{item.startTime}}</div>
                                    <div class="flr">
                                        <mu-button icon color="Normal" class="delete">
                                            <i class="iconfont icon-edit-1-copy"></i>
                                            <mu-icon value="修改" class="mu-icon"></mu-icon>
                                        </mu-button>
                                        <mu-button icon color="Normal" class="delete">
                                            <i class="iconfont icon-shanchu"></i>
                                            <mu-icon value="删除" class="mu-icon"></mu-icon>
                                        </mu-button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="apply" @click="$router.push('/issueProject')">
                        <i class="iconfont icon-xiangmu"></i>
                        <span>添加项目</span>
                    </div>
                </div>
                <div class="demo-text" v-if="active2 === 2">
                    <div v-for="(item,index) in projectList" :key="index">
                        <!--  -->
                        <div class="projectBox">
                            <div class="clearfix">
                                <div class="peojectTitle fll">{{item.title}}</div>
                                <span class="flr cancleBtn" v-show="item.style ==1">{{item.status}}</span>
                                <span class="flr cancleBtn" style="color:rgb( 255, 132, 158 )" v-show="item.style ==2">{{item.status}}</span>
                                <span class="flr cancleBtn" style="color:rgb( 255, 132, 158 )" v-show="item.style ==3">{{item.status}}</span>
                                <span class="flr cancleBtn" style="color:#409eff" v-show="item.style ==4">{{item.status}}</span>
                            </div>
                            <div class="textContent">
                                <div>
                                    <span>约谈：</span>
                                    <span class="lookNum">{{item.num}}</span>
                                </div>
                                <div class="clearfix">
                                    <div class="fll startTime">{{item.startTime}}</div>
                                    <div class="flr">
                                        <mu-button icon color="Normal" class="delete">
                                            <i class="iconfont icon-edit-1-copy"></i>
                                            <mu-icon value="修改" class="mu-icon"></mu-icon>
                                        </mu-button>
                                        <mu-button icon color="Normal" class="delete">
                                            <i class="iconfont icon-shanchu"></i>
                                            <mu-icon value="删除" class="mu-icon"></mu-icon>
                                        </mu-button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="apply" @click="$router.push('/issueProject')">
                        <i class="iconfont icon-xiangmu"></i>
                        <span>添加项目</span>
                    </div>
                </div>
            </mu-container>
        </div>

    </div>
</template>

<script>
    import Header from "@/components/Header.vue";
    export default {
        components: {
            Header
        },
        data() {
            return {
                active2: 0,
                projectList: [
                    {
                        status: "已发布",
                        style: 1,
                        title: "北京某互联网创新创业服务平台项目",
                        startTime: "2018-01-01 12:11:10",
                        num: "255"
                    },
                    {
                        status: "审核中",
                        style: 2,
                        title: "北京某互联网创新创业服务平台项目",
                        startTime: "2018-01-01 12:11:10",
                        num: "255"
                    },
                    {
                        status: "审核失败",
                        style: 3,
                        title: "北京某互联网创新创业服务平台项目",
                        startTime: "2018-01-01 12:11:10",
                        num: "255"
                    },
                    {
                        status: "存草稿",
                        style: 4,
                        title: "北京某互联网创新创业服务平台项目",
                        startTime: "2018-01-01 12:11:10",
                        num: "255"
                    },
                    {
                        status: "存草稿",
                        title: "北京某互联网创新创业服务平台项目",
                        startTime: "2018-01-01 12:11:10",
                        num: "255"
                    },
                    {
                        status: "存草稿",
                        title: "北京某互联网创新创业服务平台项目",
                        startTime: "2018-01-01 12:11:10",
                        num: "255"
                    },
                    {
                        status: "存草稿",
                        title: "北京某互联网创新创业服务平台项目",
                        startTime: "2018-01-01 12:11:10",
                        num: "255"
                    },
                    {
                        status: "存草稿",
                        title: "北京某互联网创新创业服务平台项目",
                        startTime: "2018-01-01 12:11:10",
                        num: "255"
                    },
                    {
                        status: "存草稿",
                        title: "北京某互联网创新创业服务平台项目",
                        startTime: "2018-01-01 12:11:10",
                        num: "255"
                    },
                    {
                        status: "存草稿",
                        title: "北京某互联网创新创业服务平台项目",
                        startTime: "2018-01-01 12:11:10",
                        num: "255"
                    },
                ],
                pageList:[]
            };
        },
        methods:{
            getMyProject(){
                this.$axios.get(`/jsp/wap/center/ctrl/jsonMyProjectList.jsp`).then(res=>{
                    console.log("我的项目",res)
                    this.pageList = res.data.pageList
                })
            },
            handleApply(){

            }
        },
        created(){
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
        font-size: .4rem;

    }

    .mu-icon {
        font-size: .26rem;
        font-family: "MicrosoftYaHeiLight";
        font-style: normal;
        color: rgb( 102, 102, 102);
    }
    .projectBox{
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
        span{
            font-size: .2rem;
            display: block
        }
    }
</style>