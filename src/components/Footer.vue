
<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" v-model="isCheckAll"> -->
      <slot name="left"></slot>
    </label>
    <!-- <span>
      <span>已完成{{completeSize}}</span> /全部 {{todos.length}}
    </span> -->
    <slot name="middle"></slot>
    <!-- <button class="btn btn-danger" v-show="completeSize>0" @click="clearCompleteTodo">清除已完成任务</button> -->
    <slot name="right"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {  //  向外默认暴露配置对象
    // props: {
    //   todos: Array,
    //   clearCompleteTodo: Function,
    //   checkAll: Function
    // },   //  利用插槽就不用通过props传递了
 
    // computed: {  //  利用插槽后，对应的计算属性也要写道对应的位置去
    //   completeSize () {
    //     return this.todos.reduce((preTotal, todo, index) => preTotal + (todo.completed ? 1 : 0), 0)
    //   },
    //   isCheckAll: {
    //     get () {
    //       return this.todos.length === this.completeSize && this.completeSize > 0   // 读属性值就会自动调用对应的getter方法
    //   },
    //     set (value) {   // value代表当前勾选状态的boolean值
    //       this.checkAll(value)
    //     }
    //   }
    // }
  
  }
</script>
  
<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>