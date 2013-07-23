node-beglobal
=============

A node.js wrapper for [BeGlobal API](https://www.beglobal.com/)

## Installation

You can install it using NPM (Node Package Manager)
```
npm install node-beglobal
```
Also you can add it as a dependecy in your `package.json` file.

##Usage

Refer to the [BeGlobal API page](https://www.beglobal.com/developers/) for more information about the API.

###Initialize
```js
var BeGlobal = require('node-beglobal');

//initialize the BeGlobal API
var beglobal = new BeGlobal.BeGlobalAPI({
  api_token: 'API_TOKEN'
});
```

###Translation
```js
beglobal.translations.translate(
  {text: 'hello', from: 'eng', to: 'fra'},
  function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
  }
);
```

## License

The MIT License (MIT)

Copyright (c) 2013 Robert Onodi (robert_onodi@yahoo.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
