<template>
   <div>
       <div class="app-header">
           <div class="app-header-inner">
               <router-link :to="{path:'/'}">
                <img  src="../assets/logo.png"/>
                </router-link>

           <div class="app-header-nav">
               <ul class="nav-list">
                   <li>{{username}}</li>
                   <li>退出</li>
                   <li>登录</li>
                   <li>注册</li>
                   <li class="nav-pile">|</li>
                   <li @click="getAbout">关于</li>
               </ul>
           </div>
           </div>
       </div>
       <div class="container">
       <keep-alive>
       <router-view></router-view>
       </keep-alive>
       </div>
       <div class="app-footer">
        <p>@ 2016 test fishenal MIT</p>
    </div>
    <li-dialog :is-show="isShowAboutDialog"  @on-close="closeDialog('isShowAboutDialog')">
           <p> 这是vuede1插槽功能，slot也就是将这个弹窗标签的内容替换组件中slot的标签，当然你也可以使用多个插槽，而多个插槽需要命名</p>
            <p>这是第二段插槽功能的这些需要在标签内加入slot 属性</p>
    </li-dialog>
   </div>
</template>
<script>
import LiDialog from './dialog/Dialog.vue'
import Login from './form/login.vue'
import Register from './form/register.vue'
export default{
  data () {
    return {
      isShowAboutDialog: false,
      isShowRegisterDialog: false,
      isShowloginDialog: false,
      username: 'hjw'
    }
  },
  components: {
    LiDialog,
    Login,
    Register

  },
  methods: {
    getAbout: function () {
      this.isShowAboutDialog = true
    },
    getRegister: function () {
      this.isShowRegisterDialog = true
    },
    getLogin: function () {
      this.isShowloginDialog = true
    },
    closeDialog: function (dialogName) {
      console.log('关闭')
      console.log(dialogName)
      this[dialogName] = false
    }
  }

}
</script>
<style>
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.app-header{
    height:90px;
    line-height: 90px;
    width: 100% ;
    color: #b2b2b2;
    background-color: #323232;
}
.app-header-inner{
    width:1200px;
    margin: 0 auto;
}
.app-header-nav{
   float: right;
}
.app-header-nav ul{
    overflow: hidden;
}
.app-header-nav li{
    float: left;
    cursor: pointer;
}
.app-header-inner img{
    width:50px;
    margin-top:20px;
}
.app-header-nav .nav-pile{
  padding: 0 10px;
}

.container{
    width:1200px;
    margin: 0 auto;
}

.app-footer{
    text-align: center;
    height: 80px ;
    width: 100% ;
    background-color: darkgrey;
    clear: both;
    line-height: 80px;
    margin-top: 30px;
}
</style>
