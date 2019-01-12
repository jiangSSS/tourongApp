<template>
    <div>
        <Header></Header>
        <div class="">
            <div class="containerAll">
                <div class="all" v-for="(item,index) in activityList" :key="index">
                    <div class="clearfix activity"> 
                        <div class="fll activityTitle">投融咨询活动</div>
                        <div class="flr"><i class="iconfont icon-xiangyou"></i></div>
                    </div>
                    <div class="activityMessage">
                        <div><span>报名时间：</span><span>{{item.applyTime}}</span></div>
                        <div><span>姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名：</span><span>{{item.name}}</span></div>
                        <div><span>联系电话：</span><span>{{item.tel}}</span></div>
                        <div><span>其&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp他：</span><span>{{item.other}}</span></div>
                    </div>
                </div>
            
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
      activityList: [
          {
              applyTime:"2018-01-01 12:11:10",
              name:"沈平",
              tel:"15100001111",
              other:"带两个人一起去"
          },
           {
              applyTime:"2018-01-01 12:11:10",
              name:"沈平",
              tel:"15100001111",
              other:"带两个人一起去"
          },
           {
              applyTime:"2018-01-01 12:11:10",
              name:"沈平",
              tel:"15100001111",
              other:"带两个人一起去"
          },
      ]
    };
  },
  methods:{
      getMyActivity(){
          this.$axios.get(`/jsp/wap/center/ctrl/jsonMyActivityList.jsp`).then(res=>{
              console.log("我的活动",res)
          })
      }
  },
  created(){
      this.getMyActivity()
  }
};
</script>
<style scoped lang="scss">

    .all{
        // background: #fff;
        // padding: .2rem
    }
    .containerAll{
        padding-top: .8rem;
        min-width: 7.5rem;
        background: #f3f5f7

    }
    .activity{
        background: #fff;
        padding: .3rem .2rem;
        margin-top: .3rem;
        border-bottom: 1px solid #f3f5f7
    }
    .activityTitle{
        border-left: 3px solid #005982;
        padding-left: .2rem;

    }
    .activityMessage{
        background: #fff;
        padding: .2rem
    }
    .activityMessage div span:nth-child(1){
        font-size: .3rem;
        font-family: "PingFang";
        color: rgb( 102, 102, 102 );
    }
    .activityMessage div span:nth-child(2){
        font-size: .3rem;
        font-family: "PingFang";
        color: #333;
    }





</style>