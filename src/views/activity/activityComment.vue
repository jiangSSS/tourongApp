<template>
  <div class="">
    <Header></Header>
    <div class="all">
      <div class="alla">
        <div class="commentBox" v-for="item in comment" :key="item.index">
          <div class="clearfix">
            <img :src="item.commentImg" class="userImg fll" alt="">
            <div class="clearfix">
              <span class="userName fll">{{item.userName}}</span>
              <div class="flr commentTime">{{item.commentTime}}</div>
            </div>
          </div>
          <div class="commentDetail">{{item.detail}}</div>
        </div>
      </div>
      <div class="commentBtnBox">
        <mt-button type="default" class="commentBtn" @click="$router.push('/comments')">我要评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  export default {
    components: {
      Header
    },
    data() {
      return {
        comment: [
          {
            commentImg: "../../../static/app/img/usrname.jpg",
            userName: "李欣",
            commentTime: "2018-11-11 12：12：12",
            detail: "谈及为什么食梦貘的配色是黑白时，小亮老师告诉我们，一方面是它符合古书中_黑白驳_的特点"
          },
          {
            commentImg: "../../../static/app/img/usrname.jpg",
            userName: "李欣",
            commentTime: "2018-11-11 12：12：12",
            detail: "谈及为什么食梦貘的配色是黑白时，小亮老师告诉我们，一方面是它符合古书中_黑白驳_的特点"
          },
          {
            commentImg: "../../../static/app/img/usrname.jpg",
            userName: "李欣",
            commentTime: "2018-11-11 12：12：12",
            detail: "谈及为什么食梦貘的配色是黑白时，小亮老师告诉我们，一方面是它符合古书中_黑白驳_的特点"
          },
        ],
        pn:1,
        count: 1,
        pageList:[]
      };
    },
    methods: {
      // 上拉加载
      loadMore() {
        this.pn = this.pn + 1
        this.loading = true
        this.$axios.get(`/jsp/wap/trNews/ctrl/jsonCommentPage.jsp`, { params: { pageNumber: this.pn } }).then(res => {
          if (res.success == "true") {
            this.pageList = [...this.pageList, ...res.data.pageList]
            this.count = res.data.pagination.totalCount
            this.loading = false
          }
        })
      },
      // 我的活动列表
      getData(pageNumber) {
        this.loading = false
        let id = this.$route.query.id
        this.$axios.get(`/jsp/wap/trNews/ctrl/jsonCommentPage.jsp?id=${id}`, { params: { pageNumber } }).then(res => {
          console.log("评论列表", res);
          if (res.success == 'true') {
            this.pageList = res.data.pageList
            this.count = Number(res.data.pagination.totalCount)
            this.pn = 1
            this.loading = false
          }
        })
      },
    }
  };
</script>
<style scoped lang="scss">
  .all {
    padding: 0.8rem 0.2rem 0;
  }

  .alla {
    margin-bottom: 1.3rem
  }

  .commentBox {
    border-bottom: 1px solid #f3f5f7;
    padding-bottom: 0.2rem;
  }

  .commentDetail {
    font-size: 0.26rem;
    font-family: "PingFang";
    color: rgb(51, 51, 51);
    line-height: 1.5;
    padding-left: 1.2rem;
    margin-top: -.3rem
  }

  .userImg {
    width: 1.2rem
  }

  .userName {
    font-size: 0.32rem;
    font-family: "PingFang";
    color: rgb(51, 51, 51);
    font-weight: bold;
    line-height: 3;
  }

  .commentTime {
    font-size: .28rem;
    font-family: "PingFang";
    color: rgb( 204, 204, 204);
    line-height: 3.5;
  }

  .commentBtn {
    width: 94%;
    height: .8rem;
    background: #005982;
    color: #fff;
    text-align: center;
    position: fixed;
    bottom: .3rem;
  }
</style>