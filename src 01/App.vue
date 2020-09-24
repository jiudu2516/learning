
<template>
  <div>
    <h2>{{title}}</h2>
    <Blogs/>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入blogs、
import Blogs from "./components/Blogs";
export default {  //  向外默认暴露配置对象
  data () {
    return {
      title: "vue组件"
    }
  },
  // 注册组件  ，只能在当前组件中使用
  components: {
    Blogs
  }
}
</script>
  
<style scoped>
  h2 {
    color: pink;
  }
</style>