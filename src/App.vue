<template>
<Todo title="My TodoApp"></Todo>
</template>

<script>
import Todo from '@/components/Todo.vue'

export default {
  name: 'App',
  components: {
    Todo
  }
}
</script>

<style>
#app {
  width: 80%;
  margin: 0, auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
