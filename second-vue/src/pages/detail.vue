<template>
    <div class="detail-warp">
        <div class="detail-left">
            <div class="product-board">
             <img :src="productInco" />
             <ul>
                 <router-link v-for="item in product" :to="{path:item.path}" tag="li" active-class="active">
                     {{item.name}}
                 </router-link>
             </ul>
            </div>
        </div>
        <div class="detail-right">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      product: [
        {
          name: '英雄联盟',
          path: 'lolGames',
          active: false
        },
        {
          name: '地下城与勇士',
          path: 'dxcGames',
          active: false
        }, {
          name: '真剑灵',
          path: 'trueJLGames',
          active: false
        }, {
          name: '真剑灵2',
          path: 'trueJLGames2',
          active: false
        }
      ],
      imgMap: {
        '/detail/lolGames': require('../assets/images/1.png'),
        '/detail/dxcGames': require('../assets/images/2.png'),
        '/detail/trueJLGames': require('../assets/images/3.png'),
        '/detail/trueJLGames2': require('../assets/images/4.png')
      }
    }
  },
  computed: {
    productInco: function () {
      return this.imgMap[this.$route.path]
    }
  }
}
</script>
<style scoped>
.detail-warp{
    width:1200px;
    overflow: hidden;
    margin: 0 auto;
    padding-top:20px;
}

.detail-left{
    width:200px;
    float: left;
    text-align: center;
}
.detail-right{
    width:980px;
    float: left;
    margin-left:20px;
}
.product-board{
    background: #fff;
    padding:20px 0;
}
.product-board ul{
 margin-top:20px;
}
.product-board li{
 padding:10px 15px;
 text-align: left;
 cursor:pointer;
}

.product-board li.active,
.product-board li:hover
{
    background-color: #4fc08d;
    color: #fff;
}

</style>
