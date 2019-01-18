<template>
    <div class="">
        <div v-for="(item,index) in messageList" :key="index" class="messageBox">
            <router-link to="">
                <div class="messageTitle">{{item.title}}</div>
                <div class="messageDetail">{{item.detail}}</div>
                <div class="messageTime">{{item.time}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                messageList: [
                    {
                        title: "111北京某互联网创新创业服务平台项目",
                        detail: "感谢大家关注本项目，现已将正式投入研发，预计年底之前上线",
                        time: "2018-01-01  12:11:10"
                    },
                    {
                        title: "111北京某互联网创新创业服务平台项目",
                        detail: "感谢大家关注本项目，现已将正式投入研发，预计年底之前上线",
                        time: "2018-01-01  12:11:10"
                    },
                    {
                        title: "111北京某互联网创新创业服务平台项目",
                        detail: "感谢大家关注本项目，现已将正式投入研发，预计年底之前上线",
                        time: "2018-01-01  12:11:10"
                    },
                ]
            }
        },
        methods:{
            getData(){
                this.$axios.get(`/jsp/wap/trProject/ctrl/jsonProjectDynamicList.jsp?id`).then(res=>{
                    console.log("项目进展",res)
                })
            }
        },
        created(){
            this.getData()
        }

    }
</script>
<style scoped lang="scss">
    .detail {
        padding-top: .8rem;
        padding-bottom: .9rem;
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
        border-top: .2rem solid #f3f5f7;
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
        .messageTime {
            color: #999;
            font-size: .26rem;
        }
    }
</style>