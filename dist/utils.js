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
    if (isFlexBasis(width)) {
      arr.push({style: `flex: ${left} 0 0`, subClass: 'box'})
    } else if (isWidth(width)) {
      arr.push({style: `flex: 0 0 ${left}`, subClass: 'box'})
    }
  }
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
