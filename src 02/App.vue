
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List 
        :todos="todos" 
        :deleteTodo="deleteTodo"
        :updateTodo="updateTodo"
      />
      <Footer 
        :todos="todos" 
        :clearCompleteTodo="clearCompleteTodo" 
        :checkAll="checkAll"
      />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // 引入模块
  import Header from "./components/Header";
  import List from "./components/List";
  import Footer from "./components/Footer";
  import { saveTodos, readTodos } from "./utils/storageUtils";
  export default {  //  向外默认暴露配置对象
    data () {
      return {
        todos: []
      }
    },

    mounted() {
      // 模拟异步读取数据
      setTimeout(() => {
        // 读取local中保存的todos, 更新数据
        // this.todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
        this.todos = readTodos()
      }, 1000);
      
    },

    watch: {
      todos: {
        deep: true,  // 深度监视（本身和内部所有层次的数据）
        /*handler (value) {  // 最新的todos值
          // 将todos保存到local中（以json形式）
          // localStorage.setItem('todos_key', JSON.stringify(value))
          saveTodos(value)
        }*/
        handler:saveTodos
      }
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },

      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      clearCompleteTodo () {
        this.todos = this.todos.filter((todo, index) => !todo.completed)
      },
      checkAll (isCheckAll) {  //  传入的参数为Boolean类型
        this.todos.forEach(todo => todo.completed = isCheckAll)
      },
      updateTodo (todo, isCheck) {
        todo.completed = isCheck
      }
    },
    
    // 注册组件
    components: {
      Header,
      List,
      Footer
    }
  
  }
</script>
  
<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>