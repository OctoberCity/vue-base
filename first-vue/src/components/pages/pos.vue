<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" id="orderList">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="orderData" style="width:100%">
              <el-table-column prop="foodname" label="商品名字" width=""></el-table-column>
              <el-table-column prop="number" label="数量" width=""></el-table-column>
              <el-table-column prop="amount" label="金额" width=""></el-table-column>
              <el-table-column prop="do" label="操作" width="" fixed="right">
                <template slot-scope="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-button type="warning">挂单</el-button>
            <el-button type="danger">删除</el-button>
            <el-button type="success">结账</el-button>
          </el-tab-pane>
          <el-tab-pane label="挂单"></el-tab-pane>
          <el-tab-pane label="外卖"></el-tab-pane>
          <el-tab-pane label="吃土"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="hot-food">
          <div class="title">热门食物</div>
          <div class="HotFood">
            <ul>
              <li v-for="(item,index) in HotFoodList" :key="index">
                <span>{{item.foodName}}</span>
                <span class="price">￥{{item.price}}元</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- <div class="typeOfFood">
          <el-tabs>
            <el-tab-pane label="汉堡" name="hambager">
              <ul class="typeOfFoodList">
                <li v-for="(item,indexs) in typeOfFoodList " :key="item.foodId">
                  <img :src="item.imgSrc" width="100%">
                  <span class="foodName" >{{item.foodName}}</span>
                  <span class="price">￥{{item.price}}</span>
                </li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食品" name="littleFood">小食品</el-tab-pane>
            <el-tab-pane label="饮料" name="drank">饮料</el-tab-pane>
            <el-tab-pane label="套餐" name="foodPackage"></el-tab-pane>
          </el-tabs>
        </div> -->
      </el-col>
    </el-row>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Pos',
  data () {
    return {
      orderData: [{
        foodname: '面包',
        number: 2,
        amount: 45
      },
      {
        foodname: '面包',
        number: 2,
        amount: 45
      },
      {
        foodname: '面包',
        number: 2,
        amount: 45
      }
      ],
      HotFoodList: [{
        foodName: '芝士炒饭',
        price: 16
      },
      {
        foodName: '芝士炒饭2',
        price: 16
      },
      {
        foodName: '芝士炒饭2',
        price: 16
      }
      ]
    //   typeOfFoodList: [{
    //     imgSrc: 'https://img.4008823823.com.cn/kfcios/Version/537_427267.jpg',
    //     foodName: '人肉叉烧汉堡',
    //     price: 16,
    //     foodId: 1
    //   },
    //   {
    //     imgSrc: 'https://img.4008823823.com.cn/kfcios/Version/537_427267.jpg',
    //     foodName: '人肉叉烧汉堡',
    //     price: 16,
    //     foodId: 2
    //   },
    //   {
    //     imgSrc: 'https://img.4008823823.com.cn/kfcios/Version/537_427267.jpg',
    //     foodName: '人肉叉烧汉堡',
    //     price: 16,
    //     foodId: 3
    //   }
    //   ]

    }
  },
  mounted: function () {
    const orderHe = document.body.clientHeight
    document.getElementById('orderList').style.height = orderHe + 'px'
  },
  created: function () {
    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

</script>
<style scoped>
  .el-col:nth-of-type(1) {
    border-right: 2px solid #00dddd;
  }

  .title {
    border-bottom: 2px solid cyan;
    height: 20px;
    padding: 10px;
    background-color: #f9fafc;
  }

  .HotFood ul li {
    list-style: none;
    float: left;
    border: 1px solid #e5e9f2;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
  }

  .price {
    color: crimson;
  }

  .typeOfFood {
    clear: both;
    padding: 20px;
  }
  .typeOfFoodList li {
    list-style: none;
    float: left;
    padding:2px;
    margin:2px;
    width:23%;
    height:auto;
    border:1px solid #000;
  }
  .typeOfFoodList li img {
       width:40%;
       float:left;
  }
  .typeOfFoodList li span{
      display:block;
  }
  .typeOfFoodList li .price{
      font-size: 16px;
      padding-left: 10px;
      padding-top: 10px;
  }
  .typeOfFoodList li  .foodName{
     font-size: 15px;
     padding-left:10px;
     color:#000 ;
  }

</style>
