<template>
  <div>
      <h1>{{title}}</h1>
      <input type="text" data-testid="todo-input" v-model="Description" placeholder="write Description here">
      <button type="submit" data-testid="todo-btn" @click.prevent="addTodo()">Add Todo</button>
      <div data-testid="todo">
        {{todo}}
        </div>        
  </div>
</template>

<script>
export default {
    name: 'Todo',
     props: {
         title: {
             type: String,
             required: true
             }
        },
    data(){
        return{
            Description:'',
            todo:''
        }
    },
    methods: {
        addTodo(){
            this.todo =  this.Description
        }
    },
}
</script>

<style>

</style>


https://github.com/MuzaffarBashir/todoApp_frontend.git