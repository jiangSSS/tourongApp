<template>
  <div class="all">
    <Header></Header>
    <div class="container_warp">
      <textarea class="textarea" placeholder="请详细填写你的需求" name="" id="" cols="30" rows="10"></textarea>
      <mt-button type="default" class="submit">提交</mt-button>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue"
export default {
  components:{
    Header
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="scss">
.all{
  background: #fff;
}
  .container_warp{
    padding-top: 1rem;
    text-align: center;
    width: 100%
  }
  .textarea{
    width: 94%;
    padding: .2rem;
    background: #f3f5f7;
    border: none;
    resize:none;
  }
  .textarea:focus{
    outline: none;
  }
  .submit{
    width: 94%;
    height: .8rem;
    background: #005982;
    color: #fff;
    margin-top: .6rem
  }
</style>
