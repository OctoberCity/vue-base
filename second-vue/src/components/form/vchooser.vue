<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li v-for="(item,index) in selections" @click="choseSelection(index) " :title="item.name" :class="{active:index=== nowIndex}">
        {{item.name}}
      </li>
    </ul>
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
      nowIndex: 0
    }
  },
  methods: {
    choseSelection: function (index) {
      this.nowIndex = index
      this.$emit('on-select', this.selections[index])
    }
  }
}
</script>
<style scoped>
.chooser-component{
    position: relative;
    display:inline-block;
}
.chooser-list{
    text-decoration: none;
}
.chooser-list li{
 display: inline-block;
    border:1px solid #f2f2f2;
    border-radius:3px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    padding:0 8px;
    cursor: pointer;
}
.chooser-list li.active{
    border:1px solid #4fc080;
    background-color: #4fc08d;
    color:#fff;
}

</style>
