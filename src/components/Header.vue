
<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add" v-model="title">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {  //  向外默认暴露配置对象
    // 声明接收属性： 更新数据的函数属性  要接收函数父组件要先定义一个函数
    // props: {  // 属性名，属性值的类型，属性的必要性   自定义事件不用此方法接收
    //   addTodo: {
    //     type: Function,
    //     required: true
    //   }
    // },
    data () {
      return {
        title: ''  //  最开始没有输入title
      }
    },

    methods: {
      add () {
        console.log(this)
        // 根据输入的title封装一个todo对象
        const title = this.title.trim()

        // 判断是否有输入title,没有不添加
        if (!title) return
        
        const todo = {
          id: Date.now(),
          title,
          completed: false
        }
        // 调用更新的函数 给todos添加一个todo
        // this.addTodo(todo)  //  定义后就不能用此方法
        // 分发自定义事件  addTodo
        this.$emit('addTodo', todo)

        // 清除title
        this.title = ''
      }
    }
  }
</script>
  
<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  } 
</style>