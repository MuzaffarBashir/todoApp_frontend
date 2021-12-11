import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo.vue'

//Acceptance Case
describe('Todo.vue', () => {
  it('allows for adding  todo in list', async () => {
    const wrapper = shallowMount(Todo, {
      propsData: {
        title: 'My TodoApp'
      }
    })
    const todos= [
      {  Description: 'buy some milk'}
    ]
     wrapper.find('[data-testid="todo-input"]').setValue('buy some milk')
    await wrapper.find('[data-testid="todo-btn"]').trigger('click')
    expect(todos).toEqual([{Description: 'buy some milk'}])
  })
  //Test case for title
  it('Displays the title when passed as a prop', () => {
    const wrapper = shallowMount(Todo, {
      propsData: {
        title: 'My TodoApp'
      }
    })
    expect(wrapper.text()).toMatch('My TodoApp')
  })
  //Test case for todo-input field
  it('allows for adding  todo in todo-input field', async () => {
    const wrapper = shallowMount(Todo)
    await wrapper.find('[data-testid="todo-input"]').setValue('buy some milk')
    expect(wrapper.find('[data-testid="todo-input"]').element.value).toBe('buy some milk')
  })
    //Test case for  add  more than one items in todo list
    it('trigger button to add todo', async () => {      
      const wrapper = shallowMount(Todo)
      const todos= [
        {  Description: 'buy some milk'},
        { Description: 'buy some fruits'}
      ]
       wrapper.find('[data-testid="todo-input"]').setValue('buy some milk')
      await wrapper.find('[data-testid="todo-btn"]').trigger('click')
      expect(todos).toEqual([{Description: 'buy some milk'},
      {Description: 'buy some fruits'}])      
    })
})



