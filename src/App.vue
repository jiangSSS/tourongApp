<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 *{
   font-size: .3rem
 }
 .icon-xiangyou,.icon-dizhi,.icon-gongzuohuibao,.icon-sousuo1{
   font-size: .3rem
 }
 .icon-shijian:before{
   font-size: .28rem
 }
 .noData{
        color: #ccc;
        text-align: center;
        padding: .1rem 0;
        border-bottom: 3px dashed #fafafa;
    }
     .mintui-back:before{
        font-size: .3rem!important
    }
</style>
