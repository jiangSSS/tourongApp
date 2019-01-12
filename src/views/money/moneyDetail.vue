<template>

    <div class="all" :data="moneyDetail">
        <Header></Header>
        <div class="containerAll">
            <div class="detail">
                <div class="projectHeader">
                    <div class="projectTitle">{{moneyDetail.title}}</div>
                    <div class="time">
                        <span>编号：</span>
                        <span>{{moneyDetail.id}}</span>
                    </div>
                    <div class="clearfix">
                        <div class="fll time">
                            <i class="iconfont icon-shijian"></i>
                            <span>2018-01-01</span>
                        </div>
                        <div class="sendBtn flr likeBtn" v-if="follow" @click="isFollow">已关注</div>
                        <div class="sendBtn flr" v-else @click="noFollow">关注</div>
                        <div class="sendBtn flr" @click="$router.push('/sendProject')">投递项目</div>
                    </div>
                </div>
                <div class="user clearfix" @click="$router.push('/investors')">
                    <img class="fll" src="../../../static/app/img/usrname.jpg" style="width:1rem">
                    <span class="fll">李先生</span>
                    <div class="flr">
                        <span class="">北京开拓明天有限公司</span>
                        <i class="iconfont icon-xiangyou"></i>  
                    </div>

                </div>
                <!-- <div class="user clearfix">
                    <div class="fll titleDesc">融资信息</div>
                    <div class="flr customer">
                        客户要求保密
                    </div>

                </div> -->
                <div class="message">
                    <div>
                        <span>投资资金:</span>
                        <span>{{moneyDetail.investAmountName}}</span>
                    </div>
                    <div>
                        <span>投资方式:</span>
                        <span>{{moneyDetail.capitalSourceName}}</span>
                    </div>
                    <div>
                        <span>投资类型:</span>
                        <span>{{moneyDetail.investTypeName}}</span>

                    </div>
                    <div>
                        <span>资金来源:</span>
                        <span>{{moneyDetail.capitalSourceName}}</span>

                    </div>
                    <div>
                        <span>资金类型:</span>
                        <span>{{moneyDetail.capitalBodyName}}</span>

                    </div>
                    <div>
                        <span>投资行业:</span>
                        <span>{{moneyDetail.investIndustryName}}</span>

                    </div>
                    <div>
                        <span>投资阶段: </span>
                        <span>{{moneyDetail.investStageName}}</span>

                    </div>
                    <div>
                        <span>市场热点:</span>
                        <span></span>

                    </div>
                    <div>
                        <span>区域热点:</span>
                        <span></span>

                    </div>
                    <div>
                        <span>支付方式:</span>
                        <span>{{moneyDetail.paymentType}}</span>

                    </div>
                    <div>
                        <span>有效期限:</span>
                        <span>{{moneyDetail.validStartTime}}--{{moneyDetail.validEndTime}}</span>

                    </div>
                    <div>
                        <span>保障措施:</span>
                        <span>{{moneyDetail.safeguard}}</span>
                    </div>

                </div>
                <div class="user clearfix" @click="$router.push('/money/progress')">

                    <div class="fll">查看项目进展</div>
                    <div class="flr">
                        <i class="iconfont icon-xiangyou"></i>
                    </div>

                </div>
                <div class="contentTell">
                    <div class="detaila">
                        <div class="peojectTitle">投资要求概述</div>
                    </div>
                    <div class="contentDesc">{{moneyDetail.investRequire}}</div>
                </div>
                <div class="contentTell">
                    <div class="detaila">
                        <div class="peojectTitle">核心团队</div>

                    </div>
                    <div class="" v-for="(item,index) in core" :key="index">
                        <div class="coreName">
                            {{item.name}}
                        </div>
                        <div class="coreDetail">
                            {{item.detail}}
                        </div>
                    </div>
                </div>
                <div class="contentTell">
                    <div class="detaila">
                        <div class="peojectTitle">项目点评</div>

                    </div>
                    <div class="" v-for="(item,index) in review" :key="index">
                        <div class="coreName">
                            {{item.title}}
                        </div>
                        <div class="coreDetail">
                            {{item.desc}}
                        </div>
                    </div>
                </div>
                <div class="contentTell">
                    <div class="detaila">
                        <div class="peojectTitle">其他说明</div>
                    </div>
                    <div class="contentDesc">{{moneyDetail.otherExplain}}</div>
                </div>
                <div class="contentTell ">
                    <div class="detaila">
                        <div class="peojectTitle">可能感兴趣的项目</div>
                    </div>
                    <div class="mayProject" v-for="(item,index) in mayProject" :key="index">
                        <div class="mayTitle">
                            {{item.title}}
                        </div>
                        <div class="mayTime">
                            <i class="iconfont icon-shijian"></i>
                            <span>{{item.time}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <Footer class="footer"></Footer> -->
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
                moneyDetail:[],
                follow:0,
                id:""
            }
        },
        methods:{
            // 投资详情
            getMoneyDetail(){
                this.id = this.$route.query.id
                this.$axios.get(`/jsp/wap/trCapital/ctrl/jsonCapitalDetail.jsp?id=${this.id}`).then(res=>{
                    console.log("投资详情",res)
                    this.moneyDetail = res.data
                })
            },
            // 获取关注状态
            getFollow(){
                this.$axios.get(`/jsp/wap/trCapital/ctrl/jsonIsFollow.jsp?id=${this.id}`).then(res=>{
                    // this.follow 
                    console.log("是否关注",res)
                    this.follow = Number(res.data)
                })
            },
             // 关注
            noFollow(){
                this.$axios.get(`/jsp/wap/trCapital/do/doFollow.jsp?id=${this.id}`).then(res=>{
                    console.log("投资关注",res)
                    if(res.success == "true"){
                        let instance = Toast('关注成功');
                        setTimeout(() => {
                            instance.close();
                        }, 1000);
                        this.follow = 1
                    } else{
                        let instance = Toast('关注失败');
                        setTimeout(() => {
                            instance.close();
                        }, 1000);
                    }
                })
            },
            // 取消关注
            isFollow(){
                this.$axios.get(`/jsp/wap/trCapital/do/doUnfollow.jsp?id=${this.id}`).then(res=>{
                    console.log("取消关注",res)
                    if(res.success == "true"){
                        let instance = Toast('已取消关注');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                        this.follow = 0
                    } else{
                        let instance = Toast('取消失败');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    }
                })
            },
        },
        created(){
            this.getMoneyDetail()
            this.getFollow()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .containerAll {
        background: #f3f5f7; // margin-bottom: 1rem
    }

    img {
        width: 100%
    }

    .detail {
        background: #f3f5f7;
    }

    .projectTitle {
        font-size: .3rem;
        font-family: "PingFang";
        color: rgb( 51, 51, 51);
        font-weight: bold;
        line-height: 1.6;
        padding: .3rem 0 0 0;
    }

    .sendBtn {
        border: 1px solid #005982;
        border-radius: 2px;
        display: inline-block;
        color: #005982;
        padding: .1rem;
        height: .6rem;
        width: 1.2rem;
        line-height: .4rem;
        font-family: "PingFang";
        font-size: .23rem;
        font-weight: bold;
        opacity: 1;
        margin-right: .3rem;
        text-align: center;
    }

    .likeBtn {
        background: #005982;
        color: #fff
    }

    .time {

        font-size: .3rem;
        font-family: "PingFang";
        color: rgb(137, 137, 137);
        line-height: 2;

    }

    .projectHeader {
        background: #fff;
        padding: .8rem .2rem .1rem;
        margin-bottom: .3rem
    }

    .user {
        line-height: 3;
        padding: .2rem;
        background: #fff;
        margin-bottom: .3rem
    }

    .titleDesc {
        font-size: .3rem;
        color: rgb( 51, 51, 51);
    }

    .customer {
        color: rgb( 0, 89, 130);
    }

    .contentTell {
        background: #fff;
        padding: .2rem;
        margin-bottom: .3rem;
        .detaila {
            background: #fff;
            padding: .2rem 0;
            border-bottom: 1px solid #f3f5f7;
            .peojectTitle {
                border-left: 3px solid #005982; // margin: 0 .3rem;
                padding-left: .2rem;
                font-size: .3rem;
                font-family: "PingFang";
                color: rgb( 51, 51, 51);
                line-height: 1.533;


            }
        }
        .contentDesc {
            color: rgb(128, 128, 128);
            padding: .1rem 0;
            line-height: 1.5;
        }
    }

    .coreDetail {
        color: rgb(128, 128, 128);
    }

    .coreName {
        font-weight: 700;
        padding: .2rem 0 0;
    }

    .mayProject {
        padding: .1rem 0;

    }

    .mayTitle {
        color: rgb(128, 128, 128);
    }

    .mayTime {
        line-height: 2;
        color: rgb(128, 128, 128);
    }
    .message{
        background: #fff;
        padding: .2rem;
        margin-bottom: .3rem
    }
    .message div{
        line-height: 2
    }
    .message div span:nth-child(1){
        font-family: "PingFang";
        color: rgb(137, 137, 137);
        display: inline-block;
        margin-right: .1rem
    }
</style>