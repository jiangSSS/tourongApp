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
                <div class="" :model="formData">
                    <div class="peojectTitle">项目基本信息</div>
                    <div class="rows">
                        <span>项目名称</span>
                        <input class="oneInput" type="text" placeholder="例:广东某企业5000万元寻互联网项目" v-model="formData.title">
                    </div>
                    <div class="rows">
                        <span>所属行业</span>
                        <select class="oneRows" v-model="industys">
                            <option :value="item.dataValue" v-for="item in industryList" :label="item.dataName" :key="item.dataValue" name="type">
                                {{item.dataName}}
                            </option>
                        </select>
                    </div>
                    <div class="rows">
                        <div>项目简介</div>
                        <textarea class="textarea" placeholder="请输入项目简介" v-model="formData.brief">
            
                            </textarea>
                    </div>
                    <div class="rows">
                        <span>所属阶段</span>
                        <select class="oneRows" v-model="industys">
                            <option value="item.dataValue" v-for="item in stageList" :label="item.dataName" :key="item.dataValue" name="type">
                                {{item.dataName}}
                            </option>
                        </select>
                    </div>
                </div>
                <div>
                    <div class="peojectTitle">融资主体信息</div>
                    <!-- <mu-flex align-items="center" class="radio">
                        <span class="itemRadio">融资主体</span>
                        <mu-radio class="itemRadio" v-model="labelPosition" value="aa" label="政府"></mu-radio>
                    </mu-flex> -->
                    <mu-flex align-items="center" class="radio">
                        <span class="itemRadio">融资主体</span>
                        <mu-radio class="itemRadio" v-model="formData.financeBody" v-for="item in financeBodyList" name="type" :key="item.dataValue"
                            :value="item.dataValue" :label="item.dataName"></mu-radio>
                    </mu-flex>
                    <!-- <mt-field label="企业全称" placeholder=""></mt-field> -->
                    <div class="rows">
                        <span>企业全称</span>
                        <input class="oneInput" type="text" v-model="formData.companyName">
                    </div>
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
                    <!-- <mt-field label="详细信息" placeholder=""></mt-field> -->
                    <!-- <mt-field label="注册资本" placeholder=""></mt-field> -->
                    <div class="rows">
                        <span>详细信息</span>
                        <input class="oneInput" type="text" v-model="formData.address">
                    </div>
                    <div class="rows">
                        <span>注册资本</span>
                        <input class="oneInput" type="text" v-model="formData.registeredCapital">
                    </div>
                </div>
                <div>
                    <div class="peojectTitle">附件上传</div>
                    <div class="descBox rows">
                        <span style="color:#f00">*</span>
                        <span class="desc">商业计划书、融资计划书等文件请在此上传</span>
                        <mt-button type="default" class="btn flr">添加文件</mt-button>
                    </div>
                </div>
                <div>
                    <div class="peojectTitle">保密设置</div>
                    <div class="rows">
                        <span>融资主体信息</span>
                        <select class="pwdMessage" v-model="formData.bodySecrecyType">
                            <option value="3" v-for="item in bodySecrecyList" :key="item.dataValue" :label="item.dataName">
                                {{item.dataName}}
                            </option>
                        </select>
                    </div>
                    <div class="rows">
                        <span>项目融资信息</span>
                        <select class="pwdMessage" v-model="formData.infoSecrecyType">
                            <option value="3" v-for="item in infoSecrecyList" :key="item.dataValue" :label="item.dataName">
                                {{item.dataName}}
                            </option>
                        </select>
                    </div>

                </div>
                <div class="rows clearfix footers">
                    <mt-button type="default" class="btns flr" @click="onSave">提交</mt-button>
                    <mt-button type="default" class="btns fll submit" @click="addProject(5)">保存</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import qs from "qs";
    export default {
        components: {
            Header
        },
        data() {
            return {
                labelPosition: "",
                aa: "",
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
                },
                formData: {
                    title: "",
                    brief: "",
                    financeBody: "",
                    companyName: "",
                    address: "",
                    registeredCapital: "",
                    owner: "",
                    business: "",
                    brightSpot: "",
                    position: "",
                    trienniumFinancialData: "",
                    profitForecast: "",
                    averageAge: "",
                    websiteUrl: "",
                    weChat: "",
                    companyFoundTimeStr: "",
                    registeredCapital: "",
                    pe: "",
                    pb: "",
                    expiryDateStartTimeStr: "",
                    expiryDateEndTimeStr: "",
                    safeguard: "",
                    opponentBrief: "",
                    teamBrief: "",
                    directorName: "",
                    directorJob: "",
                    directorAge: "",
                    directorPhone: "",
                    directorEmail: "",
                    bodySecrecyType: "",
                    infoSecrecyType: "",
                    contactSecrecyType: "",
                    regionProvinceId: "",
                    regionCityId: "",
                    regionCountyId: "",
                    financingWay: "",
                    stage: "",
                    industryName: "",
                    paymentTypeName: "",
                    stockStructureImgPath: "",
                },
                financeBodyList: [],
                stageList: [],
                industryList: [],
                financingWayList: [],
                paymentTypeList: [],
                bodySecrecyList: [
                    { dataValue: "0", dataName: "全部可见" },
                    { dataValue: "1", dataName: "登录用户可见" },
                    { dataValue: "2", dataName: "仅对VIP会员公开" },
                    { dataValue: "3", dataName: "保密，仅对后台管理员公开" }
                ],
                infoSecrecyList: [
                    { dataValue: "0", dataName: "全部可见" },
                    { dataValue: "1", dataName: "登录用户可见" },
                    { dataValue: "2", dataName: "仅对VIP会员公开" },
                    { dataValue: "3", dataName: "保密，仅对后台管理员公开" }
                ],
                contactSecrecyTypeList: [
                    { dataValue: "0", dataName: "全部可见" },
                    { dataValue: "1", dataName: "登录用户可见" },
                    { dataValue: "2", dataName: "仅对VIP会员公开" },
                    { dataValue: "3", dataName: "保密，仅对后台管理员公开" }
                ],
                industys: [],
                paymentTypes: [],
                fileNames: [],
                filePaths: [],
                fileList: [],
            }
        },
        methods: {
            addProject() {
                this.$axios.post(`/jsp/wap/center/do/doEditProject.jsp`).then(res => {
                    console.log("添加项目", res)
                })
            },
            onSave(){

            },
            getData(id) {
                this.$axios
                    .get(`/jsp/wap/center/ctrl/jsonProjectDetail.jsp?id=${id}`)
                    .then(res => {
                        console.log(res)
                        this.formData = res.data.project;
                        let project = res.data.project;
                        // if (project.regionNameStr != "") {
                        //     this.provinceStr = project.regionNameStr.split(",")[0];
                        //     var cityStr = project.regionNameStr.split(",")[1];
                        //     if (this.provinceStr == "北京市" && cityStr == "市辖区") {
                        //         cityStr = "北京城区";
                        //     } else if (this.provinceStr == "天津市" && cityStr == "市辖区") {
                        //         this.cityStr = "天津城区";
                        //     } else if (this.provinceStr == "上海市" && cityStr == "市辖区") {
                        //         this.cityStr = "上海城区";
                        //     } else if (this.provinceStr == "重庆市" && cityStr == "市辖区") {
                        //         this.cityStr = "重庆城区";
                        //     } else {
                        //         this.cityStr = project.regionNameStr.split(",")[1];
                        //     }
                        //     this.countyStr = project.regionNameStr.split(",")[2];
                        // }
                        this.financeBodyList = res.data.financeBodyList;
                        this.industryList = res.data.industryList;
                        this.paymentTypeList = res.data.paymentTypeList;
                        var stageList = res.data.stageList;
                        if (this.formData.stage == '') {
                            stageList.forEach(item => {
                                this.$set(item, 'checked', false)
                            })
                            this.stageList = stageList
                        } else if (this.formData.stage == '67') {
                            stageList.forEach(item => {
                                this.$set(item, 'checked', false)
                            })
                            stageList[0].checked = true
                            this.stageList = stageList
                        } else if (this.formData.stage == '68') {
                            stageList.forEach(item => {
                                this.$set(item, 'checked', false)
                            })
                            stageList[1].checked = true
                            this.stageList = stageList
                        } else if (this.formData.stage == '69') {
                            stageList.forEach(item => {
                                this.$set(item, 'checked', false)
                            })
                            stageList[2].checked = true
                            this.stageList = stageList
                        } else if (this.formData.stage == '70') {
                            stageList.forEach(item => {
                                this.$set(item, 'checked', false)
                            })
                            stageList[3].checked = true
                            this.stageList = stageList
                        } else if (this.formData.stage == '71') {
                            stageList.forEach(item => {
                                this.$set(item, 'checked', false)
                            })
                            stageList[4].checked = true
                            this.stageList = stageList
                        } else if (this.formData.stage == '72') {
                            stageList.forEach(item => {
                                this.$set(item, 'checked', false)
                            })
                            stageList[5].checked = true
                            this.stageList = stageList
                        }
                        var financingWayList = res.data.financingWayList;
                        if (this.formData.financingWay == '') {
                            financingWayList.forEach(item => {
                                this.$set(item, 'checked', false)
                            })
                            this.financingWayList = financingWayList
                        } else if (this.formData.financingWay == '61') {
                            financingWayList.forEach(item => {
                                this.$set(item, 'checked', false)
                            })
                            financingWayList[0].checked = true
                            this.financingWayList = financingWayList
                        } else if (this.formData.financingWay == '62') {
                            financingWayList.forEach(item => {
                                this.$set(item, 'checked', false)
                            })
                            financingWayList[1].checked = true
                            this.financingWayList = financingWayList
                        } else if (this.formData.financingWay == '63') {
                            financingWayList.forEach(item => {
                                this.$set(item, 'checked', false)
                            })
                            financingWayList[2].checked = true
                            this.financingWayList = financingWayList
                        }
                        if (res.data.project.industryName != '') {
                            this.industys = res.data.project.industryName.split(",");
                        }
                        if (res.data.project.paymentTypeName != '') {
                            this.paymentTypes = res.data.project.paymentTypeName.split(",");
                        }
                        var file = {};
                        var fileList = [];
                        var fileList = res.data.project.fileList;
                        if (fileList.length != 0) {
                            fileList.forEach(item => {
                                file.name = item.name;
                                file.url = item.filePaths;
                            });
                            this.fileList.push(file);
                        }
                    });
            },
        },
        created() {
            let id = this.$route.query.id;
            this.getData(id)
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

    /deep/ .mu-radio-svg-icon {
        width: .4rem;
        height: .4rem
    }

    /deep/ .mu-radio-label {
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
        margin-left: .2rem;
        outline: none;
        height: .6rem;
        width: 1.59rem
    }

    option {
        outline: none;
        max-width: 1rem
    }

    select:focus {
        border: 1px solid #005982
    }

    .oneRows {
        width: 5.3rem !important // width: 75%
    }

    .twos {
        width: 1.8rem !important
    }

    .textarea {
        margin-top: .2rem;
        width: 6.8rem;
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

    .twoInput input {
        width: 1.8rem;
        height: .7rem;
    }

    input:focus {
        border: 1px solid #005982
    }

    .oneInput {
        margin-left: .3rem;
        width: 5.3rem; // width: 75%;
        height: .6rem
    }

    input {
        border: 1px solid #ccc;
        padding-left: .1rem
    }

    .attachment {
        font-weight: 700;
        font-size: .32rem
    }

    .desc {
        color: #999;
        font-size: .26rem
    }

    .descBox {
        line-height: 3
    }

    .btn {
        color: #005982;
        border: 1px solid #005982;
        line-height: 1;
        padding: 0 .2rem;
        height: .7rem;
        margin-top: .1rem;
        font-weight: 700;
    }

    .btns {
        width: 3.2rem;
        height: 1rem;
        color: #005982;
        border: 1px solid #005982;
        font-weight: 700;
    }

    .submit {
        background: #005982;
        color: #fff;
        font-weight: 700;
    }

    .footers {
        margin: .6rem 0
    }

    .pwdMessage {
        width: 4.5rem !important
    }
</style>