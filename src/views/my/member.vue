<template>
  <div class="all">
    <Header></Header>
    <div class="container_warp">
      <div class="clearfix ">
        <div class="fll">
          <span class="star">* </span>
          <span>认证类型</span>
        </div>
        <div class="flr">
          <button>专家</button>
          <button>投资方</button>
          <button>项目方</button>
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
      }
    }
  }
</script>
<style scoped lang="scss">
  .all {
    background: #fff;
  }

  .container_warp {
    padding: 1rem .3rem 0;
    width: 100%;

    button {
      outline: none;
      border: 0;
      background: rgba(237, 237, 237, 1);
      border-radius: 4px;
      margin-right: .2rem;
      min-width: 1.3rem;
      height: .6rem;
    }
  }

  .star {
    color: #f00;
    line-height: 2
  }

  button.active {
    background: #005982
  }
</style>