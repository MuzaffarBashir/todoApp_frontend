<template>
  <div>
      <h1>{{title}}</h1>
      <input type="text" data-testid="todo-input" v-model="Description" placeholder="write Description here" required>
      <button type="submit" data-testid="todo-btn" @click.prevent="addTodo()">Add Todo</button>
      <div data-testid="todos" v-for="todo of todos" :key="todo">
        {{todo.Description}}
        </div>        
  </div>
</template>

<script>
import axios from 'axios'
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
            todos:[{
                ID:'',
                Description:''
            }]
        }
    },
    methods: {
        addTodo(){        

        if(this.Description !==""){
            var body ={"Description": this.Description}
            axios({ method: "POST", url: "http://localhost:8090/handlerequest", data: body,
            headers: {"content-type": "text/plain" } }).then(result =>
            this.todos.push(result.data))
            this.Description = ''
        }
            }
    },
}
</script>

<style>

</style>


https://github.com/MuzaffarBashir/todoApp_frontend.git