<template>
    <div class="all">
        <Header></Header>
        <div class="detail" :model="formData">
            <!-- <mt-field label="投资主题" placeholder="例:广东某企业5000万元寻互联网项目" v-model="formData.title"></mt-field> -->
            <div class="rows">
                <span>投资主题</span>
                <input class="oneInput" type="text" placeholder="例:广东某企业5000万元寻互联网项目" v-model="formData.title">
            </div>
            <div class="rows">
                <span>所在地区</span>
                <!-- <select v-model="formData.regionProvinceId">
                    <option :value="item.id" v-for="item in capital" :key="item.index">{{item.regionProvinceId}}</option>
                </select> -->
                <!-- <van-area :area-list="areaList" /> -->
                <!-- <select>
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
                <select>
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select> -->
                <!-- <van-area :area-list="areaList" value="110101" /> -->
                <!-- <v-distpicker class="picker" type="mobile" :province="provinceStr" :city="cityStr" :area="countyStr" @selected="selected"></v-distpicker> -->
            </div>
            <div class="rows">
                <span>联系地址</span>
                <input class="oneInput" type="text" v-model="formData.linkmanAddress">
            </div>
            <div class="rows">
                <span>联系姓名</span>
                <input class="oneInput" type="text" v-model="formData.linkmanName">
            </div>
            <div class="rows">
                <span>联系电话</span>
                <input class="oneInput" type="text" v-model="formData.linkmanPhone">
            </div>
            <div class="rows">
                <span>投资地区</span>
                <!-- <select>
                    <option value="1"></option>
                    <option value="2">上海市</option>
                </select>
                <select>
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select>
                <select>
                    <option value="1">北京市</option>
                    <option value="2">上海市</option>
                </select> -->
                <!-- <v-distpicker type="mobile" :province="provinceStr1" :city="cityStr1" :area="countyStr1" @selected="selected1"></v-distpicker> -->
            </div>
            <div class="rows">
                <span>投资金额</span>
                <select class="oneRows" v-model="formData.investAmount">
                    <option :value="item.dataValue" v-for="item in investAmountList" :key="item.dataValue" :label="item.dataName">{{item.dataName}}</option>
                </select>
            </div>
            <div class="rows">
                <span>投资行业</span>
                <select class="oneRows" v-model="investIndustrys">
                    <option :value="item.dataValue" v-for="item in investIndustryList" name="type" :key="item.dataValue" :label="item.dataName">{{item.dataName}}</option>
                </select>
            </div>
            <div class="rows">
                <span>投资阶段</span>
                <select class="oneRows" v-model="investStages">
                    <option :value="item.dataValue" v-for="item in investStageList" name="type" :key="item.dataValue" :label="item.dataName">{{item.dataName}}</option>
                </select>
            </div>
            <div class="rows">
                <span>资金来源</span>
                <select class="oneRows" v-model="capitalSources">
                    <option :value="item.dataValue" v-for="item in capitalSourceList" name="type" :key="item.dataValue" :label="item.dataName">{{item.dataName}}</option>
                </select>
            </div>
            <mu-flex align-items="center" class="radio">
                <span class="itemRadio">投资类型</span>
                <mu-radio class="itemRadio" v-model="investTypes" v-for="item in investTypeList" name="type" :key="item.dataValue" :value="item.dataValue"
                    :label="item.dataName"></mu-radio>
            </mu-flex>
            <div class="rows">
                <span>回报要求</span>
                <input class="oneInput" type="text" v-model="formData.minRepay">
            </div>
            <div class="rows">
                <span>投资期限</span>
                <select class="twos" v-model="formData.expiryDateStartTimeStr">
                    <option value="1">2019</option>
                    <option value="1">2020</option>
                    <option value="1">2021</option>
                </select>
                <span style="margin-left:.3rem">--</span>
                <select class="twos" v-model="formData.expiryDateEndTimeStr">
                    <option value="3">2019</option>
                    <option value="3">2020</option>
                    <option value="3">2021</option>
                </select>
                <span>年</span>
            </div>
            <div class="rows">
                <span>风控要求</span>
                <select class="oneRows" v-model="riskControls">
                    <option :value="item.dataValue" v-for="item in riskControlList" :key="item.dataValue" name="type" :label="item.dataName">{{item.dataName}}</option>
                </select>
            </div>
            <div class="rows">
                <span>材料要求</span>
                <select class="oneRows" v-model="datums">
                    <option :value="item.dataValue" v-for="item in datumList" :key="item.dataValue" :label="item.dataName">{{item.dataName}}</option>
                </select>
            </div>
            <div class="rows">
                <span>抵押类型</span>
                <select class="oneRows" v-model="pawnTypes">
                    <option :value="item.dataValue" v-for="item in pawnTypeList" :key="item.dataValue" :label="item.dataName">{{item.dataName}}</option>
                </select>
            </div>
            <div class="rows twoInput">
                <span>抵押物折扣率</span>
                <input style="margin-left:.2rem" type="text" v-model="formData.pawnDiscountRateMin">
                <span>--</span>
                <input type="text" v-model="formData.pawnDiscountRateMax">
                <span style="margin-left:.2rem">折</span>
            </div>
            <div class="rows">
                <div>投资要求概述</div>
                <textarea class="textarea" placeholder="请输入要求" v-model="formData.investRequire">
                </textarea>
            </div>
            <div class="rows">
                <div>投资案例</div>
                <textarea class="textarea" placeholder="请输入投资案例" v-model="formData.investCase">
                </textarea>
            </div>
            <div class="rows">
                <div class="attachment">附件上传</div>
                <div class="descBox">
                    <span style="color:#f00">*</span>
                    <span class="desc">商业计划书、融资计划书等文件请在此上传</span>
                    <mt-button type="default" class="btn flr">添加文件</mt-button>
                    <!-- <input type="file" class="file" action :http-request="uploadFlie" :file-list="fileList"> -->
                </div>
            </div>
        </div>
        <div class="rows clearfix footers">
            <mt-button type="default" class="btns flr" @click="onSave">存草稿</mt-button>
            <mt-button type="default" class="btns fll submit" @click="addMoney(5,'formData')">提交</mt-button>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import VDistpicker from "v-distpicker";
    import { Toast } from 'mint-ui'
    import qs from "qs"
    export default {
        components: {
            Header,
            VDistpicker,
            Toast
        },
        data() {
            var checkPhone = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error("联系人手机号不能为空"));
                } else {
                    callback()
                }
                if (!/^1[34578]\d{9}$/.test(value)) {
                    callback("手机号码有误，请重填");
                } else {
                    callback()
                }
            };
            var checkNumber = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error("不能为空"));
                } else {
                    callback()
                }
                var re = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/
                if (!re.test(value)) {
                    callback(new Error("请输入数字值"));
                } else {
                    callback()
                }
            };
            return {
                rules: {
                    minRepay: [{ validator: checkNumber, trigger: "blur" }],
                    pawnDiscountRateMin: [{ validator: checkNumber, trigger: "blur" }],
                    linkmanPhone: [{ validator: checkPhone, trigger: "blur" }],
                },
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
                    linkmanPhone: "",
                    linkmanName: "",
                    upfrontCost: "",
                    linkmanAddress: "",
                    regionProvinceId: "",
                    regionCityId: "",
                    regionCountyId: "",
                    investRegionProvinceId: "",
                    investRegionCityId: "",
                    investRegionCountyId: "",
                    investAmount: "",
                    minRepay: "",
                    expiryDateStartTimeStr: "",
                    expiryDateEndTimeStr: "",
                    pawnDiscountRateMin: "",
                    pawnDiscountRateMax: "",
                    investRequire: "",
                    investCase: "",
                    otherExplain: "",
                    capitalBody: ""
                },
                fileList: [],
                value: "",
                countyStr: "海淀区",
                provinceStr: "北京市",
                cityStr: "北京城区",
                countyStr1: "海淀区",
                provinceStr1: "北京市",
                cityStr1: "北京城区",
                capitalBodyList: [],
                investAmountList: [],
                investIndustryList: [],
                investIndustrys: [],
                investStageList: [],
                investStages: [],
                capitalSourceList: [],
                capitalSources: [],
                investTypeList: [],
                investTypes: [],
                upfrontCostList: [],
                riskControlList: [],
                riskControls: [],
                datumList: [],
                datums: [],
                pawnTypeList: [],
                pawnTypes: [],
                fileNames: [],
                filePaths: []
            }
        },
        methods: {
            onSave() {
                let instance = Toast('已存入草稿');
                setTimeout(() => {
                    instance.close();
                }, 2000);
            },
            addMoney() {
                // this.formData = res.data.capital
                var fileNames = this.fileNames.join(";=;");
                var filePaths = this.filePaths.join(",");
                var investStages = this.investStages.join(',')
                var investIndustrys = this.investIndustrys.join(',')
                var capitalSources = this.capitalSources.join(',')
                var investTypes = this.investTypes.join(',')
                var riskControls = this.riskControls.join(',')
                var pawnTypes = this.pawnTypes.join(',')
                var datums = this.datums.join(',')
                var id = this.$route.query.id;
                if (id != '') {
                    var params =
                        {
                            id,
                            title: this.formData.title,
                            linkmanPhone: this.formData.linkmanPhone,
                            linkmanName: this.formData.linkmanName,
                            upfrontCost: this.formData.upfrontCost,
                            linkmanAddress: this.formData.linkmanAddress,
                            regionProvinceId: this.formData.regionProvinceId,
                            regionCityId: this.formData.regionCityId,
                            regionCountyId: this.formData.regionCountyId,
                            investRegionProvinceId: this.formData.investRegionProvinceId,
                            investRegionCityId: this.formData.investRegionCityId,
                            investRegionCountyId: this.formData.investRegionCountyId,
                            investAmount: this.formData.investAmount,
                            minRepay: this.formData.minRepay,
                            expiryDateStartTimeStr: this.formData.expiryDateStartTimeStr,
                            expiryDateEndTimeStr: this.formData.expiryDateEndTimeStr,
                            pawnDiscountRateMin: this.formData.pawnDiscountRateMin,
                            pawnDiscountRateMax: this.formData.pawnDiscountRateMax,
                            investRequire: this.formData.investRequire,
                            investCase: this.formData.investCase,
                            otherExplain: this.formData.otherExplain,
                            capitalBody: this.formData.capitalBody,
                            fileNames,
                            filePaths,
                            investStages,
                            investIndustrys,
                            capitalSources,
                            investTypes,
                            riskControls,
                            pawnTypes,
                            datums
                        }
                } else {
                    var params =
                        {
                            title: this.formData.title,
                            linkmanPhone: this.formData.linkmanPhone,
                            linkmanName: this.formData.linkmanName,
                            upfrontCost: this.formData.upfrontCost,
                            linkmanAddress: this.formData.linkmanAddress,
                            regionProvinceId: this.formData.regionProvinceId,
                            regionCityId: this.formData.regionCityId,
                            regionCountyId: this.formData.regionCountyId,
                            investRegionProvinceId: this.formData.investRegionProvinceId,
                            investRegionCityId: this.formData.investRegionCityId,
                            investRegionCountyId: this.formData.investRegionCountyId,
                            investAmount: this.formData.investAmount,
                            minRepay: this.formData.minRepay,
                            expiryDateStartTimeStr: this.formData.expiryDateStartTimeStr,
                            expiryDateEndTimeStr: this.formData.expiryDateEndTimeStr,
                            pawnDiscountRateMin: this.formData.pawnDiscountRateMin,
                            pawnDiscountRateMax: this.formData.pawnDiscountRateMax,
                            investRequire: this.formData.investRequire,
                            investCase: this.formData.investCase,
                            otherExplain: this.formData.otherExplain,
                            capitalBody: this.formData.capitalBody,
                            fileNames,
                            filePaths,
                            investStages,
                            investIndustrys,
                            capitalSources,
                            investTypes,
                            riskControls,
                            pawnTypes,
                            datums
                        }
                }
                this.$axios.post(`/jsp/wap/center/do/doEditCapital.jsp`, qs.stringify(params)).then(res => {
                    console.log("添加资金", res)
                    if (res.success == "true") {
                        if (status == 0) {
                            let instance = Toast('保存成功');
                            setTimeout(() => {
                                instance.close();
                            }, 2000);
                            setTimeout(() => {
                                this.$router.push('/myMoney')
                            }, 2000)
                        } else {
                            let instance = Toast('上传资金成功');
                            setTimeout(() => {
                                instance.close();
                            }, 2000);
                            setTimeout(() => {
                                this.$router.push('/myMoney')
                            }, 2000)
                        }
                    } else {
                        let instance = Toast('上传资金失败，请完善资金信息或检查登录状态');
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                    }
                })
            },
            getMoneyDetail(id) {
                this.$axios.get(`/jsp/wap/center/ctrl/jsonCapitalDetail.jsp?id=${id}`).then(res => {
                    console.log("资金详情", res)
                    this.formData = res.data.capital;
                    if (res.data.capital.investIndustryStr != '') {
                        this.investIndustrys = res.data.capital.investIndustryStr.split(",");
                    }
                    if (res.data.capital.investStageStr != '') {
                        this.investStages = res.data.capital.investStageStr.split(",");
                    }
                    if (res.data.capital.capitalSourceStr != '') {
                        this.capitalSources = res.data.capital.capitalSourceStr.split(",");
                    }
                    if (res.data.capital.investTypeStr != '') {
                        this.investTypes = res.data.capital.investTypeStr.split(",");
                    }
                    if (res.data.capital.riskControlStr != '') {
                        this.riskControls = res.data.capital.riskControlStr.split(",");
                    }
                    if (res.data.capital.datumStr != '') {
                        this.datums = res.data.capital.datumStr.split(",");
                    }
                    if (res.data.capital.pawnTypesStr != '') {
                        this.pawnTypes = res.data.capital.pawnTypesStr.split(",");
                    }
                    // this.investIndustrys = res.data.capital.investIndustryStr.split(",")
                    // this.investStages = res.data.capital.investStageStr.split(",")
                    // this.capitalSources = res.data.capital.capitalSourceStr.split(",")
                    // this.investTypes = res.data.capital.investTypeStr.split(",")
                    // this.riskControls = res.data.capital.riskControlStr.split(",")
                    // this.datums = res.data.capital.datumStr.split(",")
                    // this.pawnTypes = res.data.capital.pawnTypesStr.split(",")

                    this.capitalBodyList = res.data.capitalBodyList;

                    this.investAmountList = res.data.investAmountList;
                    this.investIndustryList = res.data.investIndustryList;
                    this.investStageList = res.data.investStageList;
                    this.capitalSourceList = res.data.capitalSourceList;
                    this.investTypeList = res.data.investTypeList;
                    this.upfrontCostList = res.data.upfrontCostList;
                    this.riskControlList = res.data.riskControlList;
                    this.datumList = res.data.datumList;
                    this.pawnTypeList = res.data.pawnTypeList;
                })
            },
            selected(e) {
                this.formData.regionProvinceId = e.province.code;
                this.formData.regionCityId = e.city.code;
                this.formData.regionCountyId = e.area.code;
            },
            selected1(e) {
                this.formData.investRegionProvinceId = e.province.code;
                this.formData.investRegionCityId = e.city.code;
                this.formData.investRegionCountyId = e.area.code;
            },
            // uploadFlie(f) {
            //     let param = new FormData(); //创建form对象
            //     param.append("file", f.file); //通过append向form对象添加数据
            //     let config = {
            //         headers: { "content-type": "multipart/form-data" }
            //     }; //添加请求头
            //     this.$axios
            //         .post("/component/trUpload2/uploadify", param, config)
            //         .then(res => {
            //             console.log(res)
            //             if (res.success == true) {
            //                 console.log(res);
            //                 this.fileNames.push(res.data.originalName);
            //                 this.filePaths.push(res.data.relativePath);
            //             } else {
            //                 this.$message.error("上传失败，请检查网络");
            //             }
            //         });
            // },
        },
        created() {
            // this.addMoney()
            let id = this.$route.query.id;
            this.getMoneyDetail(id)
        }
    }
</script>
<style scoped lang="scss">
    .detail {
        padding-top: 1rem;
    }

    /deep/ .distpicker-address-wrapper .address-container ul li {
        color: #999
    }

    /deep/ .distpicker-address-wrapper .address-container ul li.active {
        color: #005982
    }

    .picker {
        width: 100%
    }

    /deep/ .distpicker-address-wrapper .address-header ul li.active {
        color: #005982
    }

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
        margin-left: .2rem;
        outline: none;
        height: .6rem;
        width: 1.58rem
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

    .twos {
        width: 1.8rem !important
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

    .twoInput input {
        width: 1.8rem;
        height: .7rem;
        padding: 0 .1rem;
    }

    .oneInput {
        margin-left: .2rem;
        width: 5.3rem;
        height: .6rem
    }

    input:focus {
        border: 1px solid #005982
    }

    input {
        border: 1px solid #ccc;
        padding-left: .1rem
    } // input::-webkit-input-placeholder{
    //     padding-left: .1rem
    // }
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
</style>