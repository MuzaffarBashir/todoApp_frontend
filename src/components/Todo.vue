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
     mounted() { 
            this.listAllData()        
                
      },
    methods: {
       async listAllData(){
           let response;
           try {
              response = await axios.get('http://localhost:8090/gettodo');  
              this.todos = response.data 
           } catch (error) {
               console.log('exception ...',error)
           }             
                            
        },
        async addTodo(){        

        if(this.Description !==""){
            var body ={"Description": this.Description}
            try{
                const result =  await axios({ method: "POST", url: "http://localhost:8090/handlerequest", body,
                headers: {"content-type": "text/plain" } })
                console.log(result)
                 this.todos.push(result.data)
            } catch(e){
                    console.log('error',e)
                    }            
        }
        }
    },
}
</script>

<style>

</style>


https://github.com/MuzaffarBashir/todoApp_frontend.git