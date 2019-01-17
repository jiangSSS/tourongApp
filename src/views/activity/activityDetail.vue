<template>

    <div class="all" :data="activityDetail">
        <Header></Header>
        <div class="containerAll">
            <div class="detail">
                <div class="headerWarp">
                    <div class="title">{{activityDetail.title}}</div>
                    <div>
                        <span>主办：</span>
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
            <div v-if="good" @click="isGood"><i class="iconfont icon-dianzan" style="color:#f00"></i><span>{{activityDetail.greatNum}}</span></div>
            <div v-else @click="noGood"><i class="iconfont icon-dianzan"></i><span>{{activityDetail.greatNum}}</span></div>
            <div @click="$router.push('/activityComments')">
                <i class="iconfont icon-weibiaoti-"></i>
                <span>{{commentList.totalCount}}</span>
            </div>
            <div>
                <i class="iconfont icon-share"></i>
                <span>分享</span>
            </div>
        </div>
        <div class="apply" @click="isShowApply = true" v-show="activityDetail.status == 1">
            <i class="iconfont icon-bianji1"></i>
            <span>报名</span>
        </div>
        <mu-dialog width="400" center class="applyDialog" :model="formData" :open.sync="isShowApply">
            <p class="dialogTitle">报名信息</p>
            <div class="">
                <i class="iconfont icon-My"></i>
                <input class="" v-model="formData.memberName" type="text" placeholder="请输入姓名">
            </div>
            <div>
                <i class="iconfont icon-shouji"></i>
                <input type="text" v-model="formData.memberMobile" placeholder="请输入手机号">

            </div>
            <div>
                <i class="iconfont icon-neirong"></i>
                <input type="text" v-model="formData.remark" placeholder="请输入内容">

            </div>
            <mu-button class="applyBtn" @click="closeApply">确认</mu-button>
            <mu-button class="applyBtn" @click="cancelApply">取消</mu-button>
        </mu-dialog>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import Footer from "@/components/Bottom.vue"
    import { Toast } from 'mint-ui'

    export default {
        components: {
            Header,
            Footer,
            Toast
        },
        data() {
            return {
                isShowApply: false,
                activityDetail: [],
                commentList:[],
                // isShowApply:true,
                formData: {
                    // activityId: "",
                    remark: "",
                    memberName: "",
                    memberMobile: ""
                },
                good: 0,
                id: ""
            }
        },
        methods: {
            // 打开报名框
            handleApply() {
                if (this.activityDetail.status != 1) {
                    this.isShowApply = false
                }
                this.isShowApply = true;
            },
            cancelApply() {
                this.isShowApply = false
            },
            // 确认报名 关闭报名框
            closeApply() {
                let activityId = this.$route.query.id
                this.$axios.get(`/jsp/wap/trActivity/do/doSignUp.jsp`, {
                    params: {
                        activityId,
                        memberName: this.formData.memberName,
                        memberMobile: this.formData.memberMobile,
                        remark: this.formData.remark
                    }
                }).then(res => {
                    console.log("活动报名", res)
                    if (res.success == "true") {
                        let instance = Toast('报名成功');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    } else {
                        let instance = Toast(res.message);
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    }
                })
                setTimeout(() => {
                    this.isShowApply = false;
                }, 500);
            },
            // 活动详情
            getActivityDetail() {
                this.id = this.$route.query.id
                this.$axios.get(`/jsp/wap/trActivity/ctrl/jsonActivityDetail.jsp?id=${this.id}`).then(res => {
                    console.log("111", res)
                    this.activityDetail = res.data
                })
            },
            // 是否点赞
            getGood() {
                this.$axios.get(`/jsp/wap/trActivity/do/isGreat.jsp?id=${this.id}`).then(res => {
                    console.log("是否点赞", res)
                    this.good = Number(res.data)
                })
            },
            // 点赞
            noGood() {
                this.$axios.get(`/jsp/wap/trActivity/do/doGreat.jsp?id=${this.id}`).then(res => {
                    console.log("点赞成功",res)
                    if (res.success == "true") {
                        let instance = Toast('点赞成功');
                        setTimeout(() => {
                            instance.close();
                        }, 500);
                        this.good = 1
                        this.activityDetail.greatNum = Number(this.activityDetail.greatNum + 1)
                    }
                })
            },
            // 取消点赞
            isGood() {
                this.$axios.get(`/jsp/wap/trActivity/do/cancelGreat.jsp?id=${this.id}`).then(res => {
                    console.log("取消点赞",res)
                    if (res.success == "true") {
                        let instance = Toast('已取消点赞');
                        setTimeout(() => {
                            instance.close();
                        }, 500);
                        this.good = 0
                        this.activityDetail.greatNum = Number(this.activityDetail.greatNum - 1)
                    }
                })
            },
            // 评论列表

        },
        created() {
            this.getActivityDetail()
            this.getGood()
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

    .detailImg {
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

    .applyDialog {
        text-align: center;
        margin: 0 auto;
        input {
            border: 0;
            border-bottom: 1px solid rgb(237, 237, 237);
            line-height: 2.6;
            margin-left: .1rem;
            width: 80%;
        }
        .iconfont {
            font-size: .6rem; // padding-top: 1rem;
            display: inline-block
        }
    }

    .dialogTitle {
        font-weight: bold;
        font-size: .34rem
    }

    .applyBtn {
        /* width: 90%; */
        background: #005982;
        color: #fff;
        text-align: left;
        margin-top: .4rem;
    }
</style>