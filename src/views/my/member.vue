<template>
  <div class="all">
    <Header></Header>
    <div class="container_warp" :model="attestForm">
      <div class="clearfix ">
        <div class="fll rows">
          <span class="star">* </span>
          <span>认证类型</span>
        </div>
        <div class="flr">
          <div v-for="(item , index) in type" :key="index" class="fll type_btn" :class="{'active':item.checked}" @click="get_type(index)">{{item.name}}</div>
        </div>
      </div>
      <div class="clearfix ">
        <div class="fll rows">
          <span class="star">* </span>
          <span>认证材料</span>
        </div>
        <div class="flr sendFile">
          点击上传文件
        </div>
      </div>
      <div class="">
        <div class="rows">
          <span class="star">* </span>
          <span>介绍</span>
        </div>
        <textarea placeholder="请输入介绍" class="textarea"></textarea>
      </div>
      <mt-button type="default" class="submit" @click="submit">提交</mt-button>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue"
  import { Toast } from 'mint-ui'
  export default {
    components: {
      Header,
      Toast
    },
    data() {
      return {
        attestForm: {
          brief: "",
          type: "",
          fileNames: [],
          filePaths: [],
        },
        type: [{ name: "项目方", checked: false }, { name: "投资人", checked: false }, { name: "专家", checked: false }],
      }
    },
    methods: {
      get_type(index) {
        if (this.type[index].checked == true) {
          this.type[index].checked = false
          this.attestForm.type = ''
        } else {
          this.type.forEach(item => {
            item.checked = false
          })
          this.type[index].checked = true
          this.attestForm.type = (index + 1).toString()
        }
      },
      submit() {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        var fileNames = this.attestForm.fileNames.join(';=;')
        var filePaths = this.attestForm.filePaths.join(',')
        this.$axios.get('/jsp/wap/center/do/doAuthentication.jsp', { params: { type: this.attestForm.type, brief: this.attestForm.brief, fileNames, filePaths } }).then(res => {
          if (res.success == "true") {
            let instance = Toast('上传认证资料成功');
            setTimeout(() => {
              instance.close();
            }, 2000);
            this.attestForm.brief = ""
            this.type.forEach(item => {
              item.checked = false
            })
            this.attestForm.type = ""
            this.fileList = []
            this.attestForm.fileNames = []
            this.attestForm.filePaths = []
            setTimeout(()=>{
              this.$router.push("/my")
            },2000)
          } else {
            let instance = Toast('上传认证资料失败，请检查网络');
            setTimeout(() => {
              instance.close();
            }, 2000);
          }
        })
      }
      //   else {
      //     // console.log('error submit!!');
      //     return false;
      //   }
      // });
      // },
    }
  }
</script>
<style scoped lang="scss">
  .all {
    background: #fff;
  }

  .rows {
    line-height: 3
  }

  .textarea {
    resize: none;
    border: 1px solid #f3f5f7;
    width: 100%;
    height: 4rem;
    padding: .1rem .2rem
  }

  .container_warp {
    padding: 1rem .3rem 0;
    width: 100%;

  }

  .star {
    color: #f00;
    line-height: 2
  }

  .sendFile {
    color: #005982;
    line-height: 2.6
  }

  .type_btn {
    background: #f3f5f7;
    padding: .1rem 0;
    margin-left: .2rem;
    width: 1.2rem;
    text-align: center;
    margin-top: .1rem;
    border-radius: 6%
  }

  .active {
    background: #005982;
    color: #fff
  }

  .submit {
    background: #005982 !important;
    color: #fff;
    padding: 0 .2rem !important;
    width: 1.6rem;
    margin-top: .4rem !important
  }
</style>