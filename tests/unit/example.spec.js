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
  await wrapper.find('[data-testid="todo-submit"]').trigger('click')
  expect(wrapper.find('[data-testid="todos"]').text()).toContain('buy some milk')
})
it('Displays the second title when passed as a prop', () => {
  const wrapper = shallowMount(Todo, {
    propsData: {
      title: 'My TodoApp'
    }
  })
  expect(wrapper.text()).toMatch('My TodoApp')
})
})


