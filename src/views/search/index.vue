<template>
    <div>
        <div class="header clearfix">
            
            <div class="search fll">
                    <div class="fll clearfix select">
                            <div class="fll leftHeader">
                                <span class="fll radioItem">项目</span>
                                <div class="type" v-show="isShow">
                                    <span class="radioItem" v-for="(item,index) in searchList" :key="index">{{item}}</span>
                                </div>
                            </div>
                            <div class="sbuTitle fll">
                                <i class="iconfont icon-xiangxia" v-if="!isShow" @click="handleShowList"></i>
                                <i class="iconfont icon-xiangshang" v-else @click="handleCloseList"></i>
                            </div>
                        </div>
                <input type="text" placeholder="请输入内容" v-model="title" class="input_search" />
                <i class="iconfont icon-sousuo1" @click="search"></i>
            </div>
            <div class="fll cancel" @click="$router.push('/')">取消</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false,
                searchList: ["项目", "资金", "资讯"],
                title: ""
            }
        },
        methods: {
            handleShowList() { this.isShow = true },
            handleCloseList() { this.isShow = false },
            search() {

            }
        }
    }
</script>
<style scoped lang="scss">
    .header {}

    .select {
        width: 1.5rem;       
    }

    .search {
        margin: .2rem;
        background: #f3f5f7;
    }
    .leftHeader{
       
    }

    .icon-sousuo1 {
        line-height: 2;
        margin-right: .2rem
    }

    .input_search {
        border: 0;
        color: rgb( 153, 153, 153);
        width: 4rem;
        border-radius: 4px;
        font-family: "PingFang";
        line-height: 2.103;
        padding: 0 .2rem;
        background: #f3f5f7
    }

    .input_search:focus {
        outline: none;
    }

    .input_search::-webkit-input-placeholder {
        padding-left: .3rem
    }

    .cancel {
        line-height: 3.5;
        margin: 0 .2rem
    }

    .type {
        /* background: #f3f5f7 */
    }

    .radioItem {
        display: block;
        line-height: 2;
        margin:0 .1rem
    }

    .sbuTitle {
        /* background: #f3f5f7 */
    }
</style>