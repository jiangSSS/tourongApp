<template>
    <div class="all">
        <div>

        </div>
        <Header></Header>
        <div class="detail">
            <mt-field label="投资主题" placeholder="例:广东某企业5000万元寻互联网项目"></mt-field>
            <mu-flex align-items="center" class="radio">
                <span class="itemRadio">资金主体</span>
                <mu-radio class="itemRadio" v-model="labelPosition" value="top" label="企业资金"></mu-radio>
                <mu-radio class="itemRadio" v-model="labelPosition" value="left" label="个人资金"></mu-radio>
            </mu-flex>
            <!-- <mu-col span="12" lg="4" sm="6">
                <mu-select label="Normal" v-model="normal.value1" full-width>
                    <mu-option v-for="(option,index) in options" :key="index" :label="option" :value="option"></mu-option>
                </mu-select>
            </mu-col> -->
            <div class="rows">
                <span>所在地区</span>
                <select>
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
                <select>
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
                <select>
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
            </div>
            <mt-field label="联系地址" placeholder=""></mt-field>
            <mt-field label="联系姓名" placeholder=""></mt-field>
            <mt-field label="联系电话" placeholder=""></mt-field>
            <div class="rows">
                <span>投资地区</span>
                <select>
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
                <select>
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
                <select>
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
            </div>
            <div class="rows">
                <span>投资金额</span>
                <select class="oneRows">
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
            </div>
            <div class="rows">
                <span>投资行业</span>
                <select class="oneRows">
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
            </div>
            <div class="rows">
                <span>投资阶段</span>
                <select class="oneRows">
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
            </div>
            <mu-flex align-items="center" class="radio">
                <span class="itemRadio">资金来源</span>
                <mu-radio class="itemRadio" v-model="labelPosition" value="1" label="自有资金"></mu-radio>
                <mu-radio class="itemRadio" v-model="labelPosition" value="2" label="募集资金"></mu-radio>
            </mu-flex>
            <mu-flex align-items="center" class="radio">
                <span class="itemRadio">投资类型</span>
                <mu-radio class="itemRadio" v-model="aa" value="11" label="参股合作"></mu-radio>
                <mu-radio class="itemRadio" v-model="aa" value="22" label="收购/并购"></mu-radio>
            </mu-flex>
            <mt-field label="回报要求" placeholder=""></mt-field>
            <div class="rows">
                <span>投资期限</span>
                <select class="twos">
                    <option value="1">11</option>
                    <option value="2">22</option>
                </select>
                <span style="margin-left:.3rem">--</span>
                <select class="twos">
                    <option value="3">33</option>
                    <option value="4">44</option>
                </select>
                <span>年</span>
            </div>
            <div class="rows">
                <span>风控要求</span>
                <select class="oneRows">
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
            </div>
            <div class="rows">
                <span>材料要求</span>
                <select class="oneRows">
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
            </div>
            <div class="rows">
                <span>抵押类型</span>
                <select class="oneRows">
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
            </div>
            <div class="rows twoInput">
                <span>抵押物折扣率</span>
                <input style="margin-left:.2rem" type="text">
                <span>--</span>
                <input type="text"><span style="margin-left:.2rem">折</span>
            </div>
            <div class="rows">
                <div>投资要求概述</div>
                <textarea class="textarea" placeholder="请输入要求">

                </textarea>
            </div>
            <div class="rows">
                <div>投资案例</div>
                <textarea class="textarea" placeholder="请输入投资案例">

                </textarea>
            </div>
            <div class="rows">
                <div class="attachment">附件上传</div>
                <div class="descBox"><span style="color:#f00">*</span><span class="desc">商业计划书、融资计划书等文件请在此上传</span><mt-button type="default" class="btn flr">添加文件</mt-button></div>
            </div>
            <div class="rows clearfix footers">
                <mt-button type="default" class="btns flr">存草稿</mt-button>
                <mt-button type="default" class="btns fll submit">提交</mt-button>
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
                labelPosition: "",
                aa:"",
                options: [
                    'Option 1', 'Option 2', 'Option 3', 'Option 4',
                    'Option 5', 'Option 6', 'Option 7', 'Option 8',
                    'Option 9', 'Option 10'
                ],
                normal: {
                    value1: '',
                    value2: '',
                    value3: '',
                    value4: 'Option 1',
                    value5: 'Option 2'
                }
            }
        },
        methods:{
            addMoney(){
                this.$axios.get(`/jsp/wap/center/do/doEditCapital.jsp`).then(res=>[
                    console.log("添加资金",res)
                ])
            }
        },
        created(){
            this.addMoney()
        }
    }
</script>
<style scoped lang="scss">
    .detail {
        padding-top: 1rem;

    } // .all{
    //     font-size: 22rem;
    //     font-family: "PingFang";
    //     color: rgb( 51, 51, 51);
    // }
    /deep/ .mint-field .mint-cell-title {
        width: 1.53rem
    }

    /deep/ .mint-radiolist-title {
        font-size: .3rem;
        color: #333;
    }

    /deep/ .mu-radio-checked .mu-radio-icon-checked {
        color: #005982
    }

    /deep/ .mint-field-core {
        border-radius: 2%;
        height: .7rem;
    }
     /deep/ .mu-radio-svg-icon{
        width: .4rem;
        height: .4rem
    }

    .itemRadio {
        margin-left: .3rem;
        
    }

    .radio {
        padding: .25rem 0
    }

    .rows {
        padding: .1rem .3rem
    }

    .rows select {
        list-style: none;
        color: #333;
        background: #fff;
        border-radius: 2%;
        margin-left: .3rem;
        outline: none;
        height: .7rem;
        width: 1.5rem
    }

    option {
        outline: none;
        max-width: 1rem
    }

    select:focus {
        border: 1px solid #005982
    }

    .oneRows {
        width: 5.3rem !important
    }
    .twos{
        width: 1.8rem!important
    }

    .textarea {
        margin-top: .2rem;
        width: 100%;
        resize: none;
        height: 2rem;
        border: 1px solid #ccc;
        border-radius: 2%
    }

    .textarea::-webkit-input-placeholder {
        padding-left: .1rem;
        color: #999
    }

    .textarea:focus {
        border: 1px solid #005982
    }
    .twoInput input{
        width: 1.8rem;
        height: .7rem;
        padding: 0 .1rem
    }
    input:focus{
        border: 1px solid #005982
    }
    .attachment{
        font-weight: 700;
        font-size: .32rem
    }
    .desc{
        color: #999;
        font-size: .26rem
    }
    .descBox{
        line-height: 3
    }
    .btn{
        color: #005982;
        border: 1px solid #005982;
        line-height: 1;
        padding: 0 .2rem;
        height: .7rem;
        margin-top: .1rem;
        font-weight: 700;
    }
    .btns{
        width: 3.2rem;
        height: 1rem;
        color: #005982;
        border: 1px solid #005982;
        font-weight: 700;
    }
    .submit{
        background: #005982;
        color: #fff;
        font-weight: 700;
    }
    .footers{
        margin: .6rem 0
    }
</style>