// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//路由
import router from './router'
//swiper组件实现走马灯
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//element组件实现折叠面板
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//viewer组件实现图片放大
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
//velocity组件实现动画效果
import  Velocity from 'velocity-animate'

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.use(Viewer)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
