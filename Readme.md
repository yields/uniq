
# Uniq

  Remove repeated elements of an Array

## Installation

```
$ npm install uniq-component
$ component install yields/uniq
```

## API

### uniq(arr)

```js
var uniq = require('uniq');
var arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
uniq(arr); // -> [1, 2, 3]
```

### uniq(arr, select)

```js
var uniq = require('uniq');
var arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
uniq(arr, [1, 3]); // // remove specific elements -> [1, 2, 3, 2, 2]
```

## Tests

Download testing dependecies

```
npm install
```

Run tests

```
make test
```

## License

  MIT
