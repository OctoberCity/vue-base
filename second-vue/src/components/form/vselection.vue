<template>
  <div class="select-component">
    <div class="select-show" @click="closeSelecList"><span>{{selections[nowIndex].name}}</span>
      <div class="arrow"></div>
    </div>
    <div class="select-list" v-if="isShow">
        <ul>
            <li v-for="(item,index) in selections" @click="choseSelection(index)">{{selections[index].name}}</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selections: {
      type: Array,
      default: {
        name: 'lol',
        value: 1
      }

    }
  },
  data () {
    return {
      nowIndex: 0,
      isShow: false
    }
  },
  methods: {
    choseSelection: function (index) {
      this.nowIndex = index
      this.$emit('on-select', this.selections[index])
      this.closeSelecList()
    },
    closeSelecList: function () {
      this.isShow = !this.isShow
    }
  }
}

</script>
<style scoped>
        .select-component{
        position:relative;
        display:inline-block;
    }
    .select-list{
        position: absolute;
        background-color: #fff;
        z-index: 15;
        top:25px;
        left:0px;
        display: inline-block;
        border-top: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        width: 100%;

    }
    .select-list li{
       padding: 5px  15px  5px 10px;
       cursor: pointer;
       border-left:   1px solid #e3e3e3;
       border-left:   1px solid #e3e3e3;
       overflow: hidden;
       white-space: nowrap;
       text-overflow: ellipsis;
       background:#fff;
    }
    .select-list li:hover{
        background: #e3e3e3;
    }

  .select-show{
      height: 25px;
      line-height: 25px;
      background-color: #fff;
      border-radius:3px;
      border:1px solid #e3e3e3;
      padding: 0 20px 0 10px;
      cursor: pointer;
      position: relative;
      display: inline-block;
  }
</style>
