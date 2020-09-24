import Vue from "vue"  //  引入vue 引入第三方模块名是直接映入模块名
import App from "./App.vue";  //  引入自定义组件的从根目录去找   ./

Vue.config.productionTip = false  //  不显示不是生产环境的提示

// 注册全局组件
// Vue.components('App', App)

// import "./base.css";

// 所有组件对象的原型对象是一个vm对象 ==》 Vue原型对象是组件对象的原型链上的对象
// 创建一个全局的用于绑定事件监听和分发事件的对象：Global Event Bus（全局事件总线）
// Vue.prototype.$globalEventBus = new Vue()

// 事件总线就是一个vm   
// 将其挂载到Vue的原型对象上，所有的组件对象就都可以看到这个事件总线对象

new Vue({    // new一个对象
  // el: "#root"

  beforeCreate () {  //  尽量早的执行挂载全局事件总线对象事件
    Vue.prototype.$globalEventBus = this
  },


  // 注册组件（后面才能写组件标签）
  components: {
    // App: App  前一个App可以改名，第二个不行，它是去找上面引入的App
    App
  },
  template: '<App/>'  // 模板 标签结构字符串，是组件标签
}).$mount("#root")