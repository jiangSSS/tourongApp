<template>
    <div class="">
        <img src="../../../static/app/img/sendProject.png" class="sendHeader" alt="">
        <div class="header">
            <mt-header title="发布项目" class="header-title">
                <mt-button icon="back" slot="left" @click="$router.back()"></mt-button>
            </mt-header>
        </div>
        <div class="detail">
            <div class="itemBox">
                <div class="">
                    <div class="peojectTitle">项目基本信息</div>
                    <mt-field label="项目名称" placeholder="例:广东某企业5000万元寻互联网项目"></mt-field>
                    <div class="rows">
                        <span>所属行业</span>
                        <select class="oneRows">
                            <option value="1">互联网</option>
                            <option value="2">金融</option>
                        </select>
                    </div>
                    <div class="rows">
                        <div>项目简介</div>
                        <textarea class="textarea" placeholder="请输入项目简介">
            
                            </textarea>
                    </div>
                    <div class="rows">
                        <span>所属阶段</span>
                        <select class="oneRows">
                            <option value="1">种子期</option>
                            <option value="2">发芽期</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div class="peojectTitle">融资主体信息</div>
                    <mu-flex align-items="center" class="radio">
                        <span class="itemRadio">融资主体</span>
                        <mu-radio class="itemRadio" v-model="labelPosition" value="top" label="企业"></mu-radio>
                        <mu-radio class="itemRadio" v-model="labelPosition" value="left" label="个人"></mu-radio>
                        <mu-radio class="itemRadio" v-model="labelPosition" value="aa" label="政府"></mu-radio>
                    </mu-flex>
                    <mt-field label="企业全称" placeholder=""></mt-field>
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
                    <mt-field label="详细信息" placeholder=""></mt-field>
                    <mt-field label="注册资本" placeholder=""></mt-field>
                </div>
                <div>
                    <div class="peojectTitle">附件上传</div>
                    <div class="descBox rows"><span style="color:#f00">*</span><span class="desc">商业计划书、融资计划书等文件请在此上传</span><mt-button type="default" class="btn flr">添加文件</mt-button></div>
                </div>
                <div>
                    <div class="peojectTitle">保密设置</div>
                      <div class="rows">
                        <span>融资主体信息</span>
                        <select class="pwdMessage">
                            <option value="1">登录用户可见</option>
                            <option value="2">仅对VIP会员公开</option>
                            <option value="3">保密，仅对后台管理员公开</option>
                        </select>
                    </div>
                      <div class="rows">
                        <span>项目融资信息</span>
                        <select class="pwdMessage">
                            <option value="2">仅对VIP会员公开</option>
                            <option value="1">登录用户可见</option>                            
                            <option value="3">保密，仅对后台管理员公开</option>
                        </select>
                    </div>
                    
                </div>
                 <div class="rows clearfix footers">
                <mt-button type="default" class="btns flr">提交</mt-button>
                <mt-button type="default" class="btns fll submit">保存</mt-button>
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
        }
    }
</script>
<style scoped lang="scss">
    img {
        width: 100%
    }

    .detail {
        padding-top: 3.5rem
    }

    .header-title {
        background: transparent;
        color: #fff;
        font-size: .4rem
    }

    .sendHeader {
        position: absolute;
        top: 0;
    }

    .peojectTitle {
        border-left: 3px solid #005982;
        margin: .3rem;
        padding-left: .2rem;
        font-size: .34rem;
        font-family: "PingFang";
        color: rgb( 51, 51, 51);
        line-height: 1.533;
    }
    /* money */
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
    /deep/ .mu-radio-label{
        font-size: .3rem
    }

    .itemRadio {
        margin-left: .3rem;
        font-size: .3rem
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
    .pwdMessage{
        width: 4.5rem!important
    }
</style>