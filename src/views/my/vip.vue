<template>
    <div>
        <Header></Header>
        <div class="all">
            <div class="detail">
                <div class="bg">
                    <div id="vip">
                        <img src="../../../static/app/img/vip.jpg" alt="">
                        <div class="a">1</div>
                        <div class="title">投融连线</div>
                        <div class="content">可以帮助会员实现价值</div>
                        <div class="desc">会员体验更顺畅、更便利、更专业</div>
                    </div>
                    <div class="userBox">
                        <div class="clearfix" v-for="item in vipList" :key="item.index">
                            <div class="rows fll">
                                <img :src="item.img" alt="">
                            </div>
                            <div class="fll vipDesc">{{item.desc}}</div>
                        </div>
                        <div class="btnBox">
                            <mt-button type="default" class="vipOpen">立即开通</mt-button>
                        </div>
                    </div>
                </div>
            </div>
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
                vipList: [
                    {
                        img: "../../../static/app/img/vip1.jpg",
                        desc: "系统能力、全球视野"
                    },
                    {
                        img: "../../../static/app/img/vip1.jpg",
                        desc: "更多机会、更多选择"
                    },
                    {
                        img: "../../../static/app/img/vip1.jpg",
                        desc: "更高效率、更省成本"
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .detail {
        padding-bottom: 1.1rem;
    }

    img {
        width: 100%
    }

    #vip {
        margin-top: .2rem;
        position: relative;
    }
    .a{
        // padding: .1rem .3rem;
        height: .08rem;
        width: 1rem;
        background: #fff;
        position: absolute;
        bottom: 5.3rem;
        right: .6rem;
        color: transparent
    
    }
    .desc {
        position: absolute;
        bottom: 2.4rem;
        right: .4rem;
        font-size: .32rem;
        font-family: "PingFang";
        color: rgb( 255, 255, 255);
        line-height: 1.637;
    }

    .content {
        position: absolute;
        bottom: 3.2rem;
        right: .5rem;
        font-size: .6rem;
        font-family: "SingYiEG";
        color: rgb( 230, 230, 230);
        line-height: 1.515;
    }

    .title {
        position: absolute;
        bottom: 4.2rem;
        right: .5rem;
        font-size: .6rem;
        font-family: "PingFang";
        color: rgb( 230, 230, 230);
        font-weight: bold;
        line-height: 1.515;
    }

    .bg {
        background: #f3f5f7
    }

    .userBox {
        background: #fff;
        margin: .3rem;
        border-radius: .2rem;
        position: absolute;
        top: 6.2rem;
        width: 92%;
        -webkit-box-shadow: 0 0 15px rgba(137, 137, 137, .5);
        -moz-box-shadow: 0 0 15px rgba(137, 137, 137, .5);
        box-shadow: 0 0 15px rgba(137, 137, 137, .5);
    }

    .rows {
        padding-left: .7rem
    }

    .rows img {
        width: 1.6rem
    }

    .vipDesc {
        font-size: .4rem;
        font-family: "PingFang";
        color: rgb( 102, 102, 102);
        line-height: 4;
    }

    .btnBox {
        text-align: center;
    }

    .vipOpen {
        background: #005982;
        color: #fff;
        margin-bottom: .6rem;
        margin-top: .1rem;
        width: 74%;
        height: .8rem;
    }
</style>