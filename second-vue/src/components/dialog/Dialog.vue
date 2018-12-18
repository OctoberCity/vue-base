<template>
    <div class="dialog-warp">
    <div v-if="isShow" class="dialog-cover" @click="closeDialog">sss</div>
    <transition name="drop">
        <div class="dialog-content" v-if="isShow">
                 <p class="dialog-close" @click="closeDialog">close</p>
                 <slot>defalut</slot>
        </div>
    </transition>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    isShow: {
      type: Boolean,
      defalut: false
    }
  },
  methods: {
    closeDialog: function () {
      this.$emit('on-close')
    }
  }
}

</script>
<style scoped>
    .dialog-warp{
      position: fixed;
      width: 100%;
      height: 100%;
    }
    .dialog-cover{
        background-color:#000;
        opacity: 0.3;
        position: fixed;
        z-index: 5;
        top:0;
        left:0;
        width:100%;
        height: 100%;
    }
    .dialog-content{
        width: 50%;
        line-height: 1.3;
        margin-left:-25%;
        max-height:50% ;
        position: fixed;
        top: 20%;
        left:50% ;
        z-index: 15;
        background-color: azure;
        border: 2px solid #464068 ;
        border-radius:5px;
        padding: 2%;

    }
    .dialog-close{
        position: absolute;
        right: 25px;
        top:5px;
        width:20px;
        height: 20px;
        text-align: center;
        cursor: pointer;
    }
</style>
