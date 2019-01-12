<template>

    <div class="all" :data="activityDetail">
        <Header></Header>
        <div class="containerAll">
            <div class="detail">
                <div class="headerWarp">
                    <div class="title">{{activityDetail.title}}</div>
                    <div>
                        <span>主讲：</span>
                        <span>{{activityDetail.speaker}}</span>
                    </div>
                    <div>
                        <span>地点：</span>
                        <span>{{activityDetail.address}}</span>
                    </div>
                    <div>
                        <span>活动时间：</span>
                        <span>{{activityDetail.regStartTimeStr}}</span>
                        <span>至</span>
                        <span>{{activityDetail.regEndTimeStr}}</span>
                    </div>
                </div>
                <div>
                    <div class="contentImg">
                        <img :src="$url + activityDetail.imgPath" class="detailImg" alt="">
                    </div>
                    <div class="contentText" v-html="activityDetail.content"></div> 
                </div>
            </div>
        </div>
        <div class="footer">
            <div>
                <i class="iconfont icon-dianzan"></i>
                <span>60</span>
            </div>
            <div @click="$router.push('/activityDetail/comment')">
                <i class="iconfont icon-weibiaoti-"></i>
                <span>60</span>
            </div>
            <div>
                <i class="iconfont icon-share"></i>
                <span>分享</span>
            </div>
        </div>
        <div class="apply" @click="handleApply">
            <i class="iconfont icon-bianji1"></i>
            <span>报名</span>
        </div>
        <mu-dialog width="400" center class="applyDialog" :open.sync="openSimple">
            <p class="dialogTitle">报名信息</p>
            <div class="">
                <i class="iconfont icon-My"></i><input class="" type="text" placeholder="请输入姓名"> 
            </div>
            <div>
            <i class="iconfont icon-shouji"></i><input type="text" placeholder="请输入手机号">
                
            </div>
            <div>
            <i class="iconfont icon-neirong"></i><input type="text" placeholder="请输入内容">
                
            </div>
            <mu-button class="applyBtn" @click="closeApply">确认</mu-button>
        </mu-dialog>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import Footer from "@/components/Bottom.vue"

    export default {
        components: {
            Header,
            Footer
        },
        data() {
            return {
                core: [
                    {
                        name: "张麟（法人）",
                        detail: "之前就职于苏州工业园区大型企业10多年，管理企业大型项目，对现代化企业管理流程熟悉。"
                    },
                    {
                        name: "黄羽（总经理）",
                        detail: "之前就职于苏州工业园区大型企业10多年，管理企业大型项目，对现代化企业管理流程熟悉。"
                    },
                ],
                review: [
                    {
                        title: "完整的逻辑架构",
                        desc: "打造符合投资人口味的完整计划书逻辑框架和商业模式，提出优化建议。"
                    },
                    {
                        title: "清晰的商业模式",
                        desc: "打造符合投资人口味的完整计划书逻辑框架和商业模式，提出优化建议。"
                    },
                ],
                mayProject: [
                    {
                        title: "预防近视阻止近视发生发展的可穿戴品，健康医疗领域，需要融资项目，金额为100万元",
                        time: "2018-01-01"
                    },
                    {
                        title: "预防近视阻止近视发生发展的可穿戴品，健康医疗领域，需要融资项目，金额为100万元",
                        time: "2018-01-01"
                    },
                    {
                        title: "预防近视阻止近视发生发展的可穿戴品，健康医疗领域，需要融资项目，金额为100万元",
                        time: "2018-01-01"
                    },
                    {
                        title: "预防近视阻止近视发生发展的可穿戴品，健康医疗领域，需要融资项目，金额为100万元",
                        time: "2018-01-01"
                    },
                ],
                openSimple: false,
                // widthDialog:"3rem"
                activityDetail:[]
            }
        },
        methods: {
            handleApply() {
                this.openSimple = true;
            },
            closeApply() {
                this.openSimple = false;
            },
            getActivityDetail(){
                let id = this.$route.query.id
                this.$axios.get(`/jsp/wap/trActivity/ctrl/jsonActivityDetail.jsp?id=${id}`).then(res=>{
                    console.log("111",res)
                    this.activityDetail = res.data
                })
            }
        },
        created(){
            this.getActivityDetail()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .containerAll {
        background: #f3f5f7;
        margin-bottom: 1rem
    }

    img {
        width: 100%
    }
    .detailImg{
        width: 100%
    }
    .detail {
        background: #fff;
        padding: 1rem .3rem 0;
    }

    .title {
        font-size: .32rem;
        font-family: "PingFang";
        color: rgb( 51, 51, 51);
        font-weight: bold;
        line-height: 2;
    }

    .headerWarp {
        padding-bottom: .2rem
    }

    .headerWarp span {
        font-size: .24rem;
        font-family: "PingFang";
        color: rgb( 153, 153, 153);
        line-height: 2;
    }

    .contentText {
        font-size: .3rem;
        font-family: "PingFang";
        color: rgb( 102, 102, 102);
        line-height: 1.429;
    }

    .contentImg {
        padding: .3rem 0
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-size: 100%;
        display: flex;
        background: #fff;
        div {
            width: 2.5rem;
            flex: 1;
            text-align: center;
            span {
                font-size: .32rem;
                font-family: "PingFang";
                color: rgb( 102, 102, 102);
                line-height: 2.5;
                margin-left: .1rem
            }
        }
    }

    .apply {
        width: 1.7rem;
        height: 1.7rem;
        position: fixed;
        bottom: 1.8rem;
        right: .4rem;
        background: #005982;
        border-radius: 50%;
        color: #fff;
        text-align: center;

        .icon-bianji1::before {
            display: block;
            font-size: .5rem;
            margin-top: .15rem;
        }
    }

    .icon-dianzan,
    .icon-weibiaoti-,
    .icon-share {
        font-size: .4rem
    }
    .applyDialog{
        text-align: center;
        margin: 0 auto;
        input{
            border:0;
            border-bottom: 1px solid rgb(237,237,237);
            line-height: 2.6;
            margin-left: .1rem;
            width: 80%;
        }
        .iconfont{
            font-size: .6rem;
            // padding-top: 1rem;
            display: inline-block
        }
    }
    .dialogTitle{
        font-weight: bold;
        font-size: .34rem
    }
    .applyBtn{
        width: 90%;
        background: #005982;
        color: #fff;
        text-align: center;
        margin-top: .4rem
       
    }
</style>