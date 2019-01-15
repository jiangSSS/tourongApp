<template>
    <div>
        <Header></Header>
        <div class="detail">
            <div class="clearfix rows">
                <div class="fll">真实照片</div>
                <div class="flr">
                    <van-uploader :after-read="onRead" class="avatarImg" action :http-request="uploadFlie">
                        <van-icon name="photograph" />
                    </van-uploader>
                </div>
            </div>
            <div class="clearfix rows">
                <div class="fll">账号</div>
                <div class="flr">11</div>
            </div>
            <div class="clearfix rows">
                <div class="fll">实名认证</div>
                <div class="flr">11</div>
            </div>
            <div class="clearfix rows">
                <div class="fll">姓名</div>
                <div class="flr">11</div>
            </div>
            <div class="clearfix rows">
                <div class="fll">身份证号</div>
                <div class="flr">11</div>
            </div>
            <div class="clearfix rows">
                <div class="fll">性别</div>
                <div class="flr">11</div>
            </div>
            <div class="clearfix rows">
                <div class="fll">出生日期</div>
                <div class="flr">11</div>
            </div>
            <div class="clearfix rows">
                <div class="fll">公司名称</div>
                <div class="flr">11</div>
            </div>
            <div class="clearfix rows">
                <div class="fll">所在地区</div>
                <div class="flr">11</div>
            </div>
            <div class="clearfix rows">
                <div class="fll">详细地址</div>
                <div class="flr">11</div>
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
            }
        },
        methods: {
            onRead(file) {
                console.log(file)
            },
            uploadFlie(f) {
                let param = new FormData(); //创建form对象
                param.append("file", f.file); //通过append向form对象添加数据
                let config = {
                    headers: { "content-type": "multipart/form-data" }
                }; //添加请求头
                this.$axios
                    .post("/component/trUpload2/uploadify", param, config)
                    .then(res => {
                        if (res.success == true) {
                            console.log(res);
                            this.fileNames.push(res.data.originalName);
                            this.filePaths.push(res.data.relativePath);
                        } else {
                            this.$message.error("上传失败，请检查网络");
                        }
                    });
            },
        }
    }
</script>
<style scoped lang="scss">
    .detail {
        padding: 0 .2rem;
        border-top: .2rem solid #fafafa;
        margin-top: .9rem
    }

    .rows {
        border-bottom: 1px solid #f3f5f7;
        height: 1rem;
        line-height: 1rem
    }

    .rows div:nth-child(1) {
        font-size: .3rem;
        font-family: "Microsoft YaHei";
        color: rgb( 51, 51, 51);
    }

    .avatarImg {
        border-radius: 100%
    }
</style>