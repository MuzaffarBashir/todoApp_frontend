/* eslint-disable quotes */
/* eslint-disable quotes */
<template>
  <div>
      <h1>{{title}}</h1>
      <input  type="text" data-testid="todo-input" v-model="Description" placeholder="write Description here" required>
      <button type="submit" data-testid="todo-btn" @click.prevent="addTodo()">Add Todo</button>
      <div data-testid="todos" v-for="todo of todos" :key="todo" class="todos-list">
          <ul>
              <li>
                  {{todo.Description}}
              </li>
          </ul>
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
  data () {
    return {
      Description: '',
      todos: [{
        ID: '',
        Description: ''
      }]
    }
  },
  mounted () {
    this.listAllData()
  },
  methods: {
    async listAllData () {
      let response
      try {
        response = await axios.get('http://localhost:8090/gettodo')
        console.log('data', response)
        this.todos = response.data
      } catch (error) {
      }
    },
    async addTodo () {
      if (this.Description !== '') {
        // eslint-disable-next-line quote-props
        var body = { 'Description': this.Description }
        try {
          const result = await axios.post('http://localhost:8090/handlerequest', body, {
            headers: {
              'content-type': 'text/plain'
            }

          })
          this.todos.push(result.data)
        } catch (e) {
          console.log('error', e)
        }
        this.Description = ''
      }
    }
  }
}
</script>

<style>
div {text-align: center;}
  input[type=text] {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

ul {
      width: 50%;
  list-style-type: none;
  padding: 0px !important;
  margin: 0px auto;
  border: 1px solid #ddd;
}

ul li {
    text-align: left;
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
  margin: 0 auto;
}

ul li:last-child {
  border-bottom: none

}
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

</style>

https://github.com/MuzaffarBashir/todoApp_frontend.git
