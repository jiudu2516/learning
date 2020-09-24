import Vue from "vue"  //  引入vue 引入第三方模块名是直接映入模块名
import App from "./App.vue";  //  引入自定义组件的从根目录去找   ./

// 注册全局组件
// Vue.components('App', App)

new Vue({    // new一个对象
  // el: "#root"
  // 注册组件（后面才能写组件标签）
  components: {
    // App: App  前一个App可以改名，第二个不行，它是去找上面引入的App
    App
  },
  template: '<App/>'  // 模板 标签结构字符串，是组件标签
}).$mount("#root")