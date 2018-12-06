<template>
<div class="left-nav">
  <ul>
    <li>
      <i class="icon iconfont icon-icon-test8"></i>
      <div>收银</div>
    </li>
    <li>
      <i class="icon iconfont icon-icon-test8"></i>
      <div>店铺</div>
    </li>
    <li>
      <i class="icon iconfont icon-icon-test8"></i>
      <div>商品</div>
    </li>
    <li>
      <i class="icon iconfont icon-icon-test8"></i>
      <div>会员</div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {

    }
  }
}

</script>
<style>
    .left-nav{
       color:#fff;
       font-size: 10px;
       float:left;
       width:5%;
       background-color: skyblue;
       height:100%;
    }
    .left-nav li{
        list-style:none;
        text-align: center;
        border-bottom:1px solid #20a0ff;
        padding:10px
    }
    .iconfont{
        font-size: 24px;
    }
    .left-nav ul {
        padding: 0;
        margin: 0;
    }
</style>
