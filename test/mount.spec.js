import test from 'ava'
import {mount} from 'avoriaz'
import ContentPlaceholder from '../src'

test('mount', t => {
  const rows = [{height: '5px', boxes: [[0, '40px']]}]
  const wrapper = mount(ContentPlaceholder, {
    propsData: {rows}
  })
  const result = wrapper.vm.formattedRows
  t.deepEqual(result, [{
    boxes: [
      {
        style: 'flex-grow: 0; flex-shrink: 0; flex-basis: 40px;'
      },
      {
        style: 'flex-grow: 1; flex-shrink: 0; flex-basis: 0;',
        subClass: 'box'
      }
    ],
    height: '5px'
  }])
})
