# array-previous

### Counterpart to Henrik Joreteg's [array-next](https://github.com/HenrikJoreteg/array-next). Credit to him.

Super tiny module that returns the `previous` item in an array when given an item in the array.

If you give it the first item in the array and call `previous` it will loop around and give you the last.

## installing

```
npm install array-previous
```

## how to use

```js
var previous = require('array-previous')

// our demo array
var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// if none specified previous should return last
previous(arr) // returns 'g'

// when given an item in the array it returns the previous one
previous(arr, 'c') // returns 'b'

// it also loops if you give it the first item
previous(arr, 'a') // returns 'g'
```

## license

MIT
