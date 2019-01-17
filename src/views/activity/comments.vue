<template>
  <div class="all">
    <Header></Header>
    <div class="container_warp" :model="formData">
      <textarea class="textarea" v-model="formData.content" placeholder="请输入评论内容" name="" id="" cols="30" rows="10"></textarea>
      <mt-button type="default" class="submit" @click="submit">提交</mt-button>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import {Toast} from "mint-ui"
  export default {
    components: {
      Header,
      Toast
    },
    data() {
      return {
        formData: {
          content: ""
        }
      };
    },
    methods: {
      submit() {
        let newsId = this.$route.query.id;
        this.$axios.get(`/jsp/wap/trNews/do/doComment.jsp`, {
            params: {
              newsId,
              content:this.formData.content
            }
          }).then(res => {
            console.log("活动评论", res);
            if (res.success == "true") {
              let instance = Toast("评论成功");
              setTimeout(() => {
                instance.close();
              }, 2000);
              setTimeout(()=>{
                this.$router.push('/news/newsComment')
              },2000)
            } else {
              let instance = Toast("评论失败");
              setTimeout(() => {
                instance.close();
              }, 2000);
            }
          });
      }
    }
  };
</script>
<style scoped lang="scss">
  .all {
    background: #fff;
  }

  .container_warp {
    padding-top: 1rem;
    text-align: center;
    width: 100%;
  }

  .textarea {
    width: 94%;
    padding: 0.2rem;
    background: #f3f5f7;
    border: none;
    resize: none;
  }

  .textarea:focus {
    outline: none;
  }

  .submit {
    width: 94%;
    height: 0.8rem;
    background: #005982;
    color: #fff;
    margin-top: 0.6rem;
  }
</style>