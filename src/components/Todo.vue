<template>
  <div>
      <h1>{{title}}</h1>
      <input type="text" data-testid="todo-input" v-model="Description" placeholder="write Description here">
      <button type="submit" data-testid="todo-btn" >Add Todo</button>        
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
            todos:''
        }
    }
}
</script>

<style>

</style>


https://github.com/MuzaffarBashir/todoApp_frontend.git