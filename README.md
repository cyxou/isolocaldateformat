This is a fork from [hnakamur/node-isolocaldateformat](https://github.com/hnakamur/node-isolocaldateformat)

# isolocaldateformat
Format local Date in ISO 8601 'yyyy-mm-ddTHH:MM:SS.fff'

This module is made for minimalists. It reuses one Buffer instance to save
memory and run as fast as possible.


## Installation
    $ npm install cyxou/isolocaldateformat


## Usage
    var formatDate = require('isolocaldateformat');
    console.log(formatDate(new Date()));


## License
Licensed under the MIT license.
