# vue-content-placeholder

Inspired by [Facebook content placeholder deconstruction](http://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html)

## Get stared

Here is [DEMO](https://stevenyuysy.github.io/vue-content-placeholder/).

```
npm install vue-content-placeholder
```

Then in your Vuejs file:

```JavaScript
import 'ContentPlaceholder' from 'vue-content-placeholder'
```

## How it work?

You can check out the article above. The difference is that I use the property of `flex` instead of `absolute` in every row.

The boxes can be custom height and custom width, you can choose a fixed height with `px`, or just use Number to declare its `flex-basis` or use `%`, `em` ...

## Option


| Options | type | discription|
| -- | -- | -- |
| rows | Array  | The property of the component |
| row  | Object | The element of the rows |
| row.height | String | The height of the row, support `px`, `rem`, `em`, `%` |
| row.boxes | Array | The transition boxes of the row |
| box | Array | The box in the row.boxes |
| box[0] | String `||` Number | To declare the width of the left gutter |
| box[1] | String `||` Number | To declare the width of the box |


## Contribution

- Fork it
- PR
