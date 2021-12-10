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
    wrapper.find('[data-testid="todo-input"]').setValue('buy some milk')
    await wrapper.find('[data-testid="todo-btn"]').trigger('click')
    expect(wrapper.find('[data-testid="todos"]').text()).toBe('buy some milk')
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
    //Test case for triggering button to add 
    it('trigger button to add todo', async () => {      
      const wrapper = shallowMount(Todo)
       wrapper.find('[data-testid="todo-input"]').setValue('buy some milk')
      await wrapper.find('[data-testid="todo-btn"]').trigger('click')
      expect(wrapper.find('[data-testid="todo"]').text()).toContain('buy some milk')
    })
})



