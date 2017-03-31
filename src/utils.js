const DEFAULT_HEIGHT = '1rem'

function isFlexBasis (str) {
  return Number(str) !== NaN
}

function isWidth (str) {
  const cssSuffix = ['px', '%', 'em', 'rem']
  let checkState = false
  cssSuffix.forEach(suffix => {
    if (Number(str.split(suffix)[0]) !== NaN 
      && str.split(suffix)[1] === ''
      && str.split(suffix).length === 2) {
      checkState = true
      return
    }
  })
  return checkState
}

function getBoxStyle (left, width, last) {
  let arr =[]
  // check option
  if (left !== 0) {
    if (isFlexBasis(width)) {
      arr.push({style: `flex: ${left} 0 0`, subClass: 'box'})
    } else if (isWidth(width)) {
      arr.push({style: `flex: 0 0 ${left}`, subClass: 'box'})
    }
  }
  // return only one object
  if (isFlexBasis(width)) {
    arr.push({style: `flex: ${width} 0 0`})
  } else if (isWidth(width)) {
    arr.push({style: `flex: 0 0 ${width}`})
  }
  if (last) {
    arr.push({style: 'flex: 1 0 0', subClass: 'box'})
  }
  return arr
}

function formatRows (rows) {
  let rowArr = []
  rows.forEach(row => {
    let boxArr = []
    let rowObj = {}
    // Add height
    if (!row.height) row.height = DEFAULT_HEIGHT
    rowObj.height = row.height
    // Add style
    row.boxes.forEach((box, index) => {
      if (index === row.boxes.length - 1) {
        boxArr = boxArr.concat(getBoxStyle(box[0], box[1], true))
      } else {
        boxArr = boxArr.concat(getBoxStyle(box[0], box[1]))
      }
    })
    rowObj.boxes = boxArr
    rowArr.push(rowObj)
  })
  return rowArr
}

export default formatRows
