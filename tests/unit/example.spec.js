import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo.vue'

//Acceptance Case
it('allows for adding  todo in list', async () => {
  const wrapper = shallowMount(Todo, {
    propsData: {
      title: 'My TOdoApp'
    }
  })
  wrapper.find('[data-testid="todo-input"]').setValue('buy some milk')
  await wrapper.find('[data-testid="todo-submit"]').trigger('click')
  expect(wrapper.find('[data-testid="todos"]').text()).toContain('buy some milk')
})
