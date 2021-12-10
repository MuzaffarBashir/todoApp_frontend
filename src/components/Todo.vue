<template>
  <div>
      <h1>{{title}}</h1>
      <input type="text" data-testid="todo-input" v-model="Description">
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
            Description:''
        }
    }
}
</script>

<style>

</style>


https://github.com/MuzaffarBashir/todoApp_frontend.git