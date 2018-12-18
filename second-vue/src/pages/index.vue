<template>
  <div class="index-warp">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="produce in produceList">
          <h3>{{produce.title}}</h3>
          <ul>
            <li v-for="item in produce.list">
              <a :href="item.href">{{item.name}}</a>
              <span v-if="item.hot" class="hot-tag">HOT</span>
            </li>
          </ul>
          <div v-if="!produce.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block last-news">
        <h2>最近新闻</h2>
        <ul>
          <li v-for="item in lastNewsList">
            <a :href="item.href" class="news-item"> {{item.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
        <div class="lunbo" >轮播图</div>
        <div class="index-board-list">
        <div class="index-board-item"  v-for="(board,index) in boardList "  :class="['index-board-'+board.toPath]">
            <div class="index-board-item-inner">
                <h2>{{board.title}}</h2>
                <p>{{board.desciption}}</p>
                <div class="index-board-button">
                    <router-link  class="button" :to="{path:'detail/' + board.toPath}">立即购买</router-link>
                </div>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      lastNewsList: [{
        name: '我升天了',
        href: 'https://www.baidu.com/'
      },
      {
        name: '我升天了',
        href: 'https://www.baidu.com/'
      },
      {
        name: '我升天了',
        href: 'https://www.baidu.com/'
      }
      ],
      produceList: [{
        title: 'pc电脑',
        list: [{
          name: '音雄联盟',
          href: 'https://www.baidu.com/',
          hot: false
        }, {
          name: '地下城与勇士',
          href: 'https://www.baidu.com/',
          hot: true
        }, {
          name: '非凡.剑灵',
          href: 'https://www.baidu.com/',
          hot: false
        }, {
          name: '奥比岛',
          href: 'https://www.baidu.com/',
          hot: false
        }]
      },
      {
        title: '移动app',
        list: [{
          name: '王者荣耀',
          href: 'https://www.baidu.com/',
          hot: true
        }, {
          name: '阴阳师',
          href: 'https://www.baidu.com/',
          hot: false
        }, {
          name: '看门狗',
          href: 'https://www.baidu.com/',
          hot: false
        }, {
          name: '洛神',
          href: 'https://www.baidu.com/',
          hot: false
        }]
      }
      ],
      boardList: [
        {title: 'lol',
          desciption: '一款好玩的公平竞技游戏，不公平的是你的天赋',
          toPath: 'lolGames'
        },
        {title: '地下城与勇士',
          desciption: '一款好玩的公平竞技游戏，不公平的是你的金钱',
          toPath: 'dxcGames'
        },
        {title: '剑灵。真',
          desciption: '一款好玩的公平竞技游戏，不公平的是你的天赋和金钱',
          toPath: 'trueJLGames'
        },
        {title: '剑灵。真2',
          desciption: '一款好玩的公平竞技游戏，不公平的是你的天赋和金钱',
          toPath: 'trueJLGames2'
        }
      ]

    }
  }
}

</script>
<style scoped>
.index-warp{
    width:1200px;
    overflow: hidden;
    margin: 0 auto;
}
.index-left{
    float: left;
    width:300px;
}
.index-right{
    float: left;
    width:900px
}
.index-left-block{
    margin:20px;
    background-color: antiquewhite;
    box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr{
   margin-bottom: 20px ;
}
.index-left-block h2{
    background-color: #4fc08d;
    color:#ddd;
    padding: 10px 15px;
    margin-bottom: 20px;
}
.index-left-block h3{
    margin:0 25px 0px 5px;
    font-weight:bold;
}
.index-left-block ul{
    list-style: none;
    padding: 10px 5px;
}
.index-left-block li{
    padding: 5px;
}
.index-left-block a{
    cursor: pointer;
    text-decoration: none;
    color:#000;
}
.index-left-block .hot-tag{
    background-color: red;
    color:#ddd;
    margin-left:5px ;
}

/**右边**/
.lunbo{
    height:300px;
}
.index-board-list{
    overflow: hidden;
}
.index-board-item{
    float:left;
    width:400px;
    padding:20px;
    background:#ddd;
    margin:0 10px 20px 0;
}

.index-board-item-inner{
    min-height:125px;
    padding-left: 120px;
}
.index-board-lolGames .index-board-item-inner{
    background: url(../assets/images/1.png) no-repeat;
}
.index-board-dxcGames .index-board-item-inner{
    background: url(../assets/images/2.png) no-repeat;
}
.index-board-trueJLGames .index-board-item-inner{
    background: url(../assets/images/3.png) no-repeat;
}
.index-board-trueJLGames2 .index-board-item-inner{
    background: url(../assets/images/4.png) no-repeat;
}
.index-board-item  h2{
  font-size: 18px;
  font-weight: bold;
  margin-bottom:10px;
  color:#000;
}
.index-board-item  .index-board-button{
  margin-top:20px;
}
.button{
    text-decoration: none;
    color:#fff;
    background: #4fc08d;
    padding: 10px 20px;
    font-weight: bold;
    display: inline-block;
}

</style>
