<template>
  <div>
    <li>
      <h2>{{blog.id}}  --  {{blog.title}}</h2>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  // 一个组件对象就是一个小的 vm
  // 组件内回调函数中的this就是组件对象
  // 模板中获取数据读取组件对象的对象属性
  export default {
    // 声明接受属性  接受的所有标签属性都会成为标签组建的属性
    props: ['blog'] 
    
  }
</script>>
  

<style>
  
</style>