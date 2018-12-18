<template>
  <div>
    <div class="donum-btn" @click="inscr">+</div>
    <div class="donum-show"><input type="text" v-model="num" @keyup="isnum"> </div>
    <div class="donum-btn" @click="descr"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        num: 0
      }
    },
    props: {
      maxvalue: {
        type: number,
        default: 10,
      },
      minvalue: {
        type: number,
        default: 1,
      }
    },
    watch:{
        number(){
            this.$emit("on-change",this.num);
        }
    },
    methods: {
      isnum: function () {
        //判断是否是数字不是返回当前数字
        if (typeof this.num !== "Number") {
            this.num=this.minvalue;
        }else{
            this.num= this.num<0?(this.num<this.maxvalue?this.num:this.maxvalue):this.minvalue;
        }
        
      },
      inscr: function () {
        if (this.num === this.maxvalue) {
          this.num++;
        }

      },
      descr: function () {
        if (this.num > this.minvalue) {
          this.num--;
        }
      }
    }
  }

</script>
<style></style>
