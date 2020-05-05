import { mount, createLocalVue } from '@vue/test-utils'
import PostCard from '@/components/PostCard.vue'
const localVue = createLocalVue()

describe('PostCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PostCard, {
      localVue,
      propsData: {
        title: 'Test',
        description: 'desc',
        date: '',
        slug: 'test'
      }
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('should have props: title, description, date, slug', () => {
    expect(wrapper.props('title')).toBeDefined()
    expect(wrapper.props('description')).toBeDefined()
    expect(wrapper.props('date')).toBeDefined()
    expect(wrapper.props('slug')).toBeDefined()
  })
})
