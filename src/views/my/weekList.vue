<template>
    <div>
        <Header></Header>
        <div class="all">
            <div class="detail">
                <div class="week">
                    <img src="../../../static/app/img/my/week.jpg" class="headers">
                    <span class="num">第4期</span>
                    <span class="numbers">2018年第4期</span>
                    <span class="nowTime">2018--11--11</span>
                </div>
                <div class="weekTitle">
                    <div class="weekName">
                        往期回顾
                    </div>
                </div>
                <div class="weekList" v-for="(item,index) in weekLists" :key="index">
                    <div class="clearfix rows">
                        <router-link :to="{name:'weekDetail'}" >
                            <img src="../../../static/app/img/my/dian.jpg" class="dian fll">
                            <div class="nums fll">
                                <span class="">{{item.addTimeStr.slice(0,4)}}年第{{item.id}}期</span>
                                <span class="">{{item.addTimeStr.slice(0,10)}}</span>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <Footer class="footer"></Footer>
    </div>

</template>

<script>
    import Header from "@/components/Header.vue"
    import Footer from "@/components/Bottom.vue"
    export default {
        components: {
            Footer,
            Header
        },
        data() {
            return {
                weekList: [
                    {
                        timeYear: "2018",
                        timeNum: "10",
                        time: "2018-01-01"
                    },

                ],
                weekLists: []
            }
        },
        methods: {
            getData() {
                this.$axios.get(`/jsp/wap/center/ctrl/jsonWeeklyList.jsp`).then(res => {
                    console.log("周报列表", res)
                    this.weekLists = res.data.pageList
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .detail {
        padding-bottom: 1rem;
        padding-top: 1rem;
        background: #f3f5f7
    }

    img {
        width: 100%
    }

    .headers {}

    ;
    .num {
        color: #fff;
        position: absolute;
        display: inline-block;
        top: .55rem;
        left: .6rem
    }

    .numbers {
        font-size: .32rem;
        font-family: "PingFang";
        color: rgb( 193, 171, 114);
        font-weight: bold;
        position: absolute;
        top: 1.5rem;
        left: .8rem
    }

    .nowTime {
        font-size: .28rem;
        font-family: "PingFang";
        color: rgb( 193, 171, 114);
        line-height: 0.565;
        position: absolute;
        top: 2.4rem;
        left: .8rem
    }

    .week {
        position: relative;
        width: 95%;
        text-align: center;
        margin: .1rem auto
    }

    .weekTitle {

        background: #fff;
        padding: .2rem 0;
        border-bottom: 1px solid #f3f5f7
    }

    .weekName {
        border-left: 3px solid #005982;
        margin-left: .3rem;
        padding-left: .2rem;
    }

    .weekList {
        background: #fff;
    }

    .weekList .rows {
        padding: .1rem .2rem; // border-bottom: 1px solid #f3f5f7;
        font-family: "PingFang";
        color: rgb( 153, 153, 153);
    }

    .nums {
        // display: inline-block;
        line-height: 2.8;
        border-bottom: 1px solid #f3f5f7;
        display: flex;
        justify-content: space-between;
        width: 90%
    }

    .nums span:nth-child(1) {
        color: #333
    }

    .nums span:nth-child(2) {
        color: #999
    }
</style>