function isFlexBasis(str) {
  return Number(str).toString() === str.toString()
}

function isWidth(str) {
  const cssSuffix = ['px', '%', 'em', 'rem']
  let checkState = false
  cssSuffix.forEach(suffix => {
    if (Number(str.split(suffix)[0]) &&
    str.split(suffix)[1] === '' &&
    str.split(suffix).length === 2) {
      checkState = true
    }
  })
  return checkState
}

function getBoxStyle(left, width, last) {
  const arr = []
  if (left !== 0) {
    if (isFlexBasis(left)) {
      arr.push({style: `flex-grow: ${left}; flex-shrink: 0; flex-basis: 0;`, subClass: 'box'})
    } else if (isWidth(left)) {
      arr.push({style: `flex-grow: 0; flex-shrink: 0; flex-basis: ${left};`, subClass: 'box'})
    }
  }
  if (isFlexBasis(width)) {
    arr.push({style: `flex-grow: ${width}; flex-shrink: 0; flex-basis: 0;`})
  } else if (isWidth(width)) {
    arr.push({style: `flex-grow: 0; flex-shrink: 0; flex-basis: ${width};`})
  }
  if (last) {
    arr.push({style: 'flex-grow: 1; flex-shrink: 0; flex-basis: 0;', subClass: 'box'})
  }
  return arr
}

function formatRows(rows) {
  const rowArr = []
  rows.forEach(row => {
    let boxArr = []
    const rowObj = {}
    // Add height
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

module.exports = {
  isFlexBasis,
  isWidth,
  getBoxStyle,
  formatRows
}
