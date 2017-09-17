import test from 'ava'
import Vue from 'vue'
import {createRenderer} from 'vue-server-renderer'
import ContentPlaceholder from '../src'

test.cb('ssr', t => {
  const rows = [{height: '5px', boxes: [[0, '40px']]}]
  const renderer = createRenderer()
  const app = new Vue({
    template: '<content-placeholder :rows="rows"></content-placeholder>',
    components: {ContentPlaceholder},
    data: {rows}
  })
  renderer.renderToString(app, (err, html) => {
    t.falsy(err)
    t.true(html.includes('data-server-rendered'))
    t.end()
  })
})
