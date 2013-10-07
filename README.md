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

###Languages
```js
beglobal.languages.all(
  function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
    // returning a list of language pairs
    /*
      [
        {
            "from": {
                "id": "505037985fe01ac20407b7fb",
                "code": "eng",
                "name": "English",
                "fullName": "English",
                "rightToLeft": false
            },
            "to": {
                "id": "505037985fe01ac20407b81f",
                "code": "spa",
                "name": "Spanish",
                "fullName": "Spanish; Castilian",
                "rightToLeft": false
            }
        },
        ...
      ]
    */
  }
);
```

###Languages

`GET` all languages

```js
beglobal.projects.all(
  function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
    // returning a list of projects
    /*
    {
        "totalCount" : 1,
        "projects" : [
           {
              "type" : "translationProject",
              "id" : "5176407e132b856177f4c87a",
              "notificationCallbackURL" : "https://some.api.com/endpoint",
              "autoAcceptProject" : false,
              "links" : null,
              "creationDate" : "2013-04-24 11:13:09",
              "lastModifiedDate" : null,
              "version" : null,
              "apiKeyId" : null,
              "accessControllList" : [

             ],
              "description" : null,
              "projectName" : null,
              "currentState" : null,
              "stateHistory" : [
                 {
                    "state" : "temporary",
                    "date" : "2013-04-24 11:13:09",
                    "comment" : null,
                    "paymentTimeStamp" : 0
                },
                 {
                    "state" : "paid",
                    "date" : "2013-04-24 11:21:09",
                    "comment" : null,
                    "paymentTimeStamp" : 0
                },
                 {
                    "state" : "inProgress",
                    "date" : "2013-04-24 12:13:09",
                    "comment" : null,
                    "paymentTimeStamp" : 0
                }
             ],
              "price" : 200,
              "preApprove" : false,
              "jobs" : null,
              "from" : "505037985fe01ac20407b7fb",
              "to" : "301037985fe01ac20337b7fa",
              "customerProfileId" : null,
              "customerProfile" : {
                 "type" : "customerProfile",
                 "id" : "5176407e132b856177f4c87a",
                 "links" : null,
                 "creationDate" : "2013-04-24 11:13:09",
                 "lastModifiedDate" : null,
                 "version" : null,
                 "apiKeyId" : null,
                 "accessControllList" : [

                ],
                 "user" : {
                    "id" : "5176407e132b856177f4c87a",
                    "links" : null,
                    "creationDate" : "2013-04-24 11:13:09",
                    "lastModifiedDate" : null,
                    "version" : null,
                    "apiKeyId" : null,
                    "accessControllList" : [

                   ],
                    "firstName" : "John",
                    "lastName" : "Doe",
                    "email" : "me@mydomain.com",
                    "password" : "mysecret",
                    "confirmed" : false,
                    "active" : true,
                    "browserInfo" : null,
                    "temporary" : false,
                    "test" : false,
                    "paymentSources" : {
                       "defaultIndex" : -1,
                       "list" : [

                      ],
                       "defaultValue" : null,
                       "nonDefaultValues" : null
                   }
                },
                 "userId" : "5176407e132b856177f4c87a",
                 "timezone" : null,
                 "companyName" : null,
                 "location" : null,
                 "phoneNumber" : null,
                 "webSite" : null
             },
              "quality" : "Q4",
              "paymentAttemptId" : null,
              "paymentTimestamp" : 0,
              "wordCountDetails" : [
                 {
                    "fileId" : "120037985fe01ac20407b7fb",
                    "xliffFileId" : null,
                    "wordCount" : 12312,
                    "fileName" : "poetry.doc",
                    "size" : 12312,
                    "failureCode" : null,
                    "note" : null,
                    "cost" : 200,
                    "duration" : null,
                    "formattedCost" : null,
                    "formattedDuration" : null
                },
                 {
                    "fileId" : "887037985fe01ac20407b7fb",
                    "xliffFileId" : null,
                    "wordCount" : 45312,
                    "fileName" : "novel.txt",
                    "size" : 11122,
                    "failureCode" : null,
                    "note" : null,
                    "cost" : 200,
                    "duration" : null,
                    "formattedCost" : null,
                    "formattedDuration" : null
                }
             ],
              "sandbox" : false
          }
       ]
    }
    */
  }
);
```

`GET` a project by id

```js
beglobal.projects.get(
  "5176407e132b856177f4c87a",
  function(err, results) {
    if (err) {
      return console.log(err);
    }

    console.log(results);
    // returning a list of language pairs
    /*
    {
        "type" : "translationProject",
        "id" : "5176407e132b856177f4c87a",
        "notificationCallbackURL" : "https://some.api.com/endpoint",
        "autoAcceptProject" : false,
        "links" : null,
        "creationDate" : "2013-04-24 11:13:09",
        "lastModifiedDate" : null,
        "version" : null,
        "apiKeyId" : null,
        "accessControllList" : [

       ],
        "description" : null,
        "projectName" : null,
        "currentState" : null,
        "stateHistory" : [
           {
              "state" : "temporary",
              "date" : "2013-04-24 11:13:09",
              "comment" : null,
              "paymentTimeStamp" : 0
          },
           {
              "state" : "paid",
              "date" : "2013-04-24 11:21:09",
              "comment" : null,
              "paymentTimeStamp" : 0
          },
           {
              "state" : "inProgress",
              "date" : "2013-04-24 12:13:09",
              "comment" : null,
              "paymentTimeStamp" : 0
          }
       ],
        "price" : 200,
        "preApprove" : false,
        "jobs" : null,
        "from" : "505037985fe01ac20407b7fb",
        "to" : "301037985fe01ac20337b7fa",
        "customerProfileId" : null,
        "customerProfile" : {
           "type" : "customerProfile",
           "id" : "5176407e132b856177f4c87a",
           "links" : null,
           "creationDate" : "2013-04-24 11:13:09",
           "lastModifiedDate" : null,
           "version" : null,
           "apiKeyId" : null,
           "accessControllList" : [

          ],
           "user" : {
              "id" : "5176407e132b856177f4c87a",
              "links" : null,
              "creationDate" : "2013-04-24 11:13:09",
              "lastModifiedDate" : null,
              "version" : null,
              "apiKeyId" : null,
              "accessControllList" : [

             ],
              "firstName" : "John",
              "lastName" : "Doe",
              "email" : "me@mydomain.com",
              "password" : "mysecret",
              "confirmed" : false,
              "active" : true,
              "browserInfo" : null,
              "temporary" : false,
              "test" : false,
              "paymentSources" : {
                 "defaultIndex" : -1,
                 "list" : [

                ],
                 "defaultValue" : null,
                 "nonDefaultValues" : null
             }
          },
           "userId" : "5176407e132b856177f4c87a",
           "timezone" : null,
           "companyName" : null,
           "location" : null,
           "phoneNumber" : null,
           "webSite" : null
       },
        "quality" : "Q4",
        "paymentAttemptId" : null,
        "paymentTimestamp" : 0,
        "wordCountDetails" : [
           {
              "fileId" : "120037985fe01ac20407b7fb",
              "xliffFileId" : null,
              "wordCount" : 12312,
              "fileName" : "poetry.doc",
              "size" : 12312,
              "failureCode" : null,
              "note" : null,
              "cost" : 200,
              "duration" : null,
              "formattedCost" : null,
              "formattedDuration" : null
          },
           {
              "fileId" : "887037985fe01ac20407b7fb",
              "xliffFileId" : null,
              "wordCount" : 45312,
              "fileName" : "novel.txt",
              "size" : 11122,
              "failureCode" : null,
              "note" : null,
              "cost" : 200,
              "duration" : null,
              "formattedCost" : null,
              "formattedDuration" : null
          }
       ],
        "sandbox" : false
    }
    */
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
