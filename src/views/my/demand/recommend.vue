<template>
    <div class="all">
        <!-- <Header></Header> -->
        <div class="container_warp">
            <div :model="formData">
                <mt-field label="姓名" v-model="formData.name"></mt-field>
                <mt-field label="联系方式" type="tel" v-model="formData.mobile"></mt-field>
                <mt-field label="单位" type="url" v-model="formData.company"></mt-field>
                <mt-field label="职位" type="number" v-model="formData.job"></mt-field>
                <mt-field label="介绍" type="textarea" rows="4" v-model="formData.introduce"></mt-field>
            </div>
            <!-- <textarea class="textarea" placeholder="请详细填写你的需求" v-model="content" name="" id="" cols="30" rows="10"></textarea> -->
            <mt-button type="default" class="submit" @click="submit">提交</mt-button>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    import { Dialog } from "vant";
    import { Toast } from "mint-ui"
    export default {
        components: {
            Header,
        },
        data() {
            return {
                formData: {
                    name: "",
                    mobile: "",
                    company: "",
                    job: "",
                    introduce: ""
                }
            }
        },
        methods: {
            submit() {
                // Dialog.alert({
                //     message: "提交成功,客服人员会尽快与您联系。"
                // }).then(() => {
                // on close
                this.$axios.get(`/jsp/wap/center/do/doExpertRecommend.jsp`, {
                    params: {
                        name: this.formData.name,
                        mobile: this.formData.mobile,
                        company: this.formData.company,
                        job: this.formData.job,
                        introduce: this.formData.introduce
                    }
                }).then(res => {
                    console.log("推荐专家", res)
                    if (res.message = "true") {
                        let instance = Toast("推荐成功");
                        setTimeout(() => {
                            instance.close();
                        }, 2000);
                        setTimeout(()=>{
                            this.$router.push("/my")
                        },2000)
                    }
                })
                // });

            }
        }
    }
</script>
<style scoped lang="scss">
    .all {
        background: #fff;
    }

    /deep/ .mint-field .mint-cell-title {
        width: 1.2rem;
        text-align: right;
        margin-right: .2rem
    }

    .container_warp {
        padding-top: .4rem;
        text-align: center;
        width: 100%
    }

    .textarea {
        width: 94%;
        padding: .2rem;
        background: #f3f5f7;
        border: none;
        resize: none;
    }

    .textarea:focus {
        outline: none;
    }

    .submit {
        width: 94%;
        height: .8rem;
        background: #005982;
        color: #fff;
        margin-top: .6rem
    }
</style>