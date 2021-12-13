import axios from 'axios'
export const fetchTodoUrl = 'http://localhost:8090'
export const postTodoUrl = 'http://localhost:8090'


export const insertTodo = async () => {
  try {
    return await axios.post(`${postTodoUrl}/handlerequest`)
  } catch (e) {
    return []
  }
}
export const fetchTodos = async () => {
  try {
    return await axios.get(`${fetchTodoUrl}/gettodo`)
  } catch (e) {
    return []
  }
}
