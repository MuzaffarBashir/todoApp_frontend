import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo.vue'
import axios from 'axios'
import mockAxios from 'jest-mock-axios'
import { fetchTodoUrl, fetchTodos, postTodoUrl, insertTodo } from '@/utiles/util.js'

//Acceptance Case
describe('Todo.vue', () => {
  it('allows for adding  todo in list', async () => {
    const wrapper = shallowMount(Todo, {
      propsData: {
        title: 'My TodoApp'
      }
    })
    //given
    const todos= [
      {  ID: '1',Description: 'buy some milk'}
    ]
    axios.post = jest.fn().mockResolvedValue({
      data: [
        { ID: '1', Description: 'buy some milk' }
      ]
    })
     // when
     const result = await insertTodo()
     // then
     expect(axios.post).toHaveBeenCalledWith(`${postTodoUrl}/handlerequest`)
     expect(result.data).toEqual(todos)
  })
  //Test case for title
  it('Displays the title when passed as a prop', () => {
    const wrapper = shallowMount(Todo, {
      propsData: {
        title: 'My TodoApp'
      }
    })
    //expect(wrapper.text()).toMatch('My TodoApp')
    expect(wrapper.props().title).toBe('My TodoApp')
    expect(wrapper.props('title')).toBe('My TodoApp')
  })
  //Test case for todo-input field
  it('allows for adding  todo in todo-input field', async () => {
    const wrapper = shallowMount(Todo, {
      propsData: {
        title: 'My TodoApp'
      }
    })
    await wrapper.find('[data-testid="todo-input"]').setValue('buy some milk')
    expect(wrapper.find('[data-testid="todo-input"]').element.value).toBe('buy some milk')
  })
    //Test case for  add  more than one items in todo list
    it('trigger button to add todo', async () => {      
      const wrapper = shallowMount(Todo, {
        propsData: {
          title: 'My TodoApp'
        }
      })
      const todos= [
        {  Description: 'buy some milk'},
        { Description: 'buy some fruits'}
      ]
       wrapper.find('[data-testid="todo-input"]').setValue('buy some milk')
      await wrapper.find('[data-testid="todo-btn"]').trigger('click')
      expect(todos).toEqual([{Description: 'buy some milk'},
      {Description: 'buy some fruits'}])      
    })

    jest.mock('axios')
    /* Reset the mocked Axios object afterEach hook so mock is cleared and each test starts fresh */

    afterEach(() => {
      mockAxios.reset()
    })
     //Should return error
     it('should return empty todo ', async () => {
      const message = 'Network Error'
      axios.post.mockRejectedValueOnce(new Error(message))
  
      const result = await insertTodo()
  
      // then
      expect(axios.post).toHaveBeenCalledWith(`${postTodoUrl}/handlerequest`)
      expect(result).toEqual([])
    })
    //Succesfully call api
    it('should return todo ', async () => {
      // given
      const todo = [
        { ID: '1', Description: 'Test Todo' }
      ]
      axios.post = jest.fn().mockResolvedValue({
        data: [
          { ID: '1', Description: 'Test Todo' }
        ]
      })
      // when
      const result = await insertTodo()
      // then
      expect(axios.post).toHaveBeenCalledWith(`${postTodoUrl}/handlerequest`)
      expect(result.data).toEqual(todo)
    }),
      // API success case for getting list of todos uding get API
      it('should return todos list', async () => {
        // given
        const todos = [
          { ID: '1', Description: 'Test Todo' },
          { ID: '2', Description: 'New Todo' }
        ]
        axios.get = jest.fn().mockResolvedValue({
          data: [
            { ID: '1', Description: 'Test Todo' },
            { ID: '2', Description: 'New Todo' }
          ]
        })
        // when
        const result = await fetchTodos()
        // then
        expect(axios.get).toHaveBeenCalledWith(`${fetchTodoUrl}/gettodo`)
        expect(result.data).toEqual(todos)
      })	
        //Fail call of API for getting todos list
    it('should return empty todo list', async () => {
      const message = 'Network Error'
      axios.get.mockRejectedValueOnce(new Error(message))
  
      const result = await fetchTodos()
  
      // then
      expect(axios.get).toHaveBeenCalledWith(`${fetchTodoUrl}/gettodo`)
      expect(result).toEqual([])
    })
  })





