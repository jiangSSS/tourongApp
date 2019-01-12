<template>

    <div class="all">
        <Header></Header>
        <div class="detail">
            <mu-container class="subTabs">
                <mu-tabs :value.sync="active1" class="subTab" inverse color="#005982" indicator-color="#005982" full-width>
                    <mu-tab>系统消息</mu-tab>
                    <mu-tab>在线客服</mu-tab>
                    <mu-tab>项目进展</mu-tab>
                    <mu-tab>资金动态</mu-tab>
                </mu-tabs>
                <div v-if="active1 === 0">
                    <div v-for="(item,index) in messageList" :key="index" class="messageBox">
                        <router-link to="">
                            <div class="messageTitle">{{item.title}}</div>
                            <div class="messageDetail">{{item.detail}}</div>
                            <div class="messageTime">{{item.time}}</div>
                        </router-link>
                    </div>
                </div>
                <div v-if="active1 === 1">
                    <div v-for="(item,index) in messageList" :key="index" class="messageBox">
                        <router-link to="">
                            <div class="messageTitle">{{item.title}}</div>
                            <div class="messageDetail">{{item.detail}}</div>
                            <div class="messageTime">{{item.time}}</div>
                        </router-link>
                    </div>
                </div>
                <div v-if="active1 === 2">
                    <div v-for="(item,index) in messageList" :key="index" class="messageBox">

                        <router-link to="">
                            <div class="messageTitle">{{item.title}}</div>
                            <div class="messageDetail">{{item.detail}}</div>
                            <div class="messageTime">{{item.time}}</div>
                        </router-link>
                    </div>
                </div>
                <div v-if="active1 === 3">
                    <div v-for="(item,index) in messageList" :key="index" class="messageBox">

                        <router-link to="">
                            <div class="messageTitle">{{item.title}}</div>
                            <div class="messageDetail">{{item.detail}}</div>
                            <div class="messageTime">{{item.time}}</div>
                        </router-link>
                    </div>
                </div>
            </mu-container>
        </div>
        <Footer class="footer"></Footer>
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
                active1: 0,
                messageList: [
                    {
                        title: "北京某互联网创新创业服务平台项目",
                        detail: "感谢大家关注本项目，现已将正式投入研发，预计年底之前上线",
                        time: "2018-01-01  12:11:10"
                    },
                    {
                        title: "北京某互联网创新创业服务平台项目",
                        detail: "感谢大家关注本项目，现已将正式投入研发，预计年底之前上线",
                        time: "2018-01-01  12:11:10"
                    },
                    {
                        title: "北京某互联网创新创业服务平台项目",
                        detail: "感谢大家关注本项目，现已将正式投入研发，预计年底之前上线",
                        time: "2018-01-01  12:11:10"
                    },
                ]
            }
        }
    }
</script>
<style scoped lang="scss">
    .detail {
        padding-top: .8rem;
        padding-bottom: .9rem;
        background: #f3f5f7
    }

    img {
        width: 100%
    }

    .subTabs {
        // background: #fff
        padding: 0;
    }

    .subTab {
        font-size: .5rem !important;
        font-family: "PingFang";
        color: rgb( 51, 51, 51);
        line-height: 2.727;
        text-align: center;
        background: #fff
    }

    .messageBox {
        background: #fff;
        padding: .2rem;
        margin-top: .2rem;
        .messageTitle {
            font-size: .32rem;
            font-family: "PingFang";
            color: rgb( 51, 51, 51);
        }
        .messageDetail,
         {
            font-size: .28rem;
            font-family: "PingFang";
            color: rgb( 102, 102, 102);

        }
        .messageTime{
            color: #999;
            font-size: .26rem;
        }

    }
</style>