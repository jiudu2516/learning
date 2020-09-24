<template>
  <div>
    <h2>Blog列表</h2>
    <ul>
      <Blog v-for="(blog, index) in blogs" :key="blog.id" :blog="blog"/>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Blog from './Blog'
  export default {
    data () {
      return {
        blogs: [
          {id: 1, title: '想要收获就要努力1'},
          {id: 3, title: '想要收获就要努力3'},
          {id: 5, title: '想要收获就要努力5'}
        ]
      }
    },
    // 注册组件,只能在当前组件中使用
    components: {
      Blog
    }
  }
</script>
  

<style scoped>
/* /* scoped: 限定当前组件的样式只对当前组件有效, 对外部和内部的其它组件无效 */ 
  h2 {
    color:red;
  }
</style>