<template>
  <div class="lol-board">
    <div class="lol-board-intro">
      <h2>产品说明</h2>
      <p>历史资料，巴巴爸爸爸爸爸爸爸爸爸爸爸爸爸爸八佰伴，用于巴啦啦巴啦啦巴拉巴拉巴拉吧爸爸爸爸爸爸爸爸爸爸爸爸爸爸八佰伴，用于巴啦啦巴啦啦巴拉巴拉巴拉</p>
    </div>
    <div class="lol-board-form">
      <div class="lol-board-form-line">
        <div class="lol-board-form-left">产品类型:</div>
        <div class="lol-board-form-right">
          <v-chooser :selections="productType" @on-select="chooseProType"></v-chooser>
        </div>
      </div>
      <div class="lol-board-form-line">
        <div class="lol-board-form-left">适用地区:</div>
        <div class="lol-board-form-right">
          <v-selection :selections="selectsPlace" @on-select="chooseProType"></v-selection>
        </div>
      </div>
      <div class="lol-board-form-line">
        <div class="lol-board-form-left">有效时间:</div>
        <div class="lol-board-form-right">
          半年
        </div>
      </div>
      <div class="lol-board-form-line">
        <div class="lol-board-form-left">总价:</div>
        <div class="lol-board-form-right">
          {{allcount}}
        </div>
      </div>
      <div class="lol-board-form-line">
        <div class="lol-board-form-left"></div>
        <div class="lol-board-form-right">
          <div class="button">确认提交</div>
        </div>
      </div>
    </div>
    <div class="lol-board-des">
      <h2>产品说明</h2>
      <p>历史资料，巴巴爸爸爸爸爸爸爸爸爸爸爸爸爸爸八佰伴，用于巴啦啦巴啦啦巴拉巴拉巴拉吧爸爸爸爸爸爸爸爸爸爸爸爸爸爸八佰伴，用于巴啦啦巴啦啦巴拉巴拉巴拉</p>
      <table class="lol-board-des-table">
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  </div>

</template>
<script>
import VChooser from '../../components/form/vchooser.vue'
import vSelection from '../../components/form/vselection.vue'
export default {
  data () {
    return {
      allcount: 400,
      productType: [{
        name: '简单',
        value: 1
      }, {
        name: '普通',
        value: 3
      }],
      selectsPlace: [{
        name: '北京',
        value: 1
      }, {
        name: '上海',
        value: 3
      }]
    }
  },
  components: {
    VChooser,
    vSelection
  },
  methods: {
    chooseProType: function (se) {
      console.log(se)
    }
  }
}

</script>
<style scoped>
  .lol-board-intro h2 {
    font-size: 20px;
    padding: 20px;
  }

  .lol-board-intro p {
    color: #999;
    background-color: #fff;
    line-height: 1.8;
    padding: 10px 20px;
  }

  .lol-board-form {
    font-size: 14px;
    padding: 30px 40px;
  }

  .lol-board-form-line {
    padding-bottom: 20px;
  }

  .lol-board-form-left {
    display: inline-block;
    width: 100px;
    text-align: right;
    padding-right: 20px;
  }

  .lol-board-form-right {
    display: inline-block;
    width: 75%;
  }

  .lol-board-form-right .button {
    border-radius: 3px;
    background-color: #4fc08d;
    color: #fff;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    padding: 10px 20px;
  }

  .lol-board-des h2 {
    font-size: 20px;
    padding: 20px;
  }
  .lol-board-des p {
    color: #000;
    background-color: #fff;
    line-height: 1.8;
    padding: 10px 20px;
  }

</style>
