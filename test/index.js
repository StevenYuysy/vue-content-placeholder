import test from 'ava'
import utils from '../src/utils'

test('my passing test', t => {
  t.pass()
})

test('number is flexBasis', t => {
  const str = 1
  t.true(utils.isFlexBasis(str))
})

test('number-string is flexBasis', t => {
  const str = '1'
  t.true(utils.isFlexBasis(str))
})

test('string is not flexBasis', t => {
  const str = '1rem'
  t.false(utils.isFlexBasis(str))
})

test('1px is width in css', t => {
  const str = '1px'
  t.true(utils.isWidth(str))
})

test('1% is width in css', t => {
  const str = '1%'
  t.true(utils.isWidth(str))
})

test('1 rem is width in css', t => {
  const str = '1rem'
  t.true(utils.isWidth(str))
})

test('1em is width in css', t => {
  const str = '1em'
  t.true(utils.isWidth(str))
})

test('1pxpx is not width in css', t => {
  const str = '1pxpx'
  t.false(utils.isWidth(str))
})

test('1 is not width in css', t => {
  const str = '1'
  t.false(utils.isWidth(str))
})

test('sth else is not width in css', t => {
  const str = 'px11px%%%'
  t.false(utils.isWidth(str))
})

test('no left get BoxStyle', t => {
  const boxOption = {
    left: 0,
    width: 1
  }
  t.deepEqual(utils.getBoxStyle(boxOption.left, boxOption.width),
  [{style: 'flex-grow: 1; flex-shrink: 0; flex-basis: 0;'}])
})

test('with left get BoxStyle', t => {
  const boxOption = {
    left: 1,
    width: 1
  }
  t.deepEqual(utils.getBoxStyle(boxOption.left, boxOption.width),
    [
      {style: 'flex-grow: 1; flex-shrink: 0; flex-basis: 0;', subClass: 'box'},
      {style: 'flex-grow: 1; flex-shrink: 0; flex-basis: 0;'}
    ])
})

test('with last get BoxStyle', t => {
  const boxOption = {
    left: 1,
    width: 1,
    last: true
  }
  t.deepEqual(utils.getBoxStyle(boxOption.left, boxOption.width, boxOption.last),
    [
      {style: 'flex-grow: 1; flex-shrink: 0; flex-basis: 0;', subClass: 'box'},
      {style: 'flex-grow: 1; flex-shrink: 0; flex-basis: 0;'},
      {style: 'flex-grow: 1; flex-shrink: 0; flex-basis: 0;', subClass: 'box'}
    ])
})
