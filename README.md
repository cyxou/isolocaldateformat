# node-isolocaldateformat
Format local Date in ISO 8601 'yyyy-mm-ddTHH:MM:SS.fff' for Node.js.

This module is made for minimalists. It reuses one Buffer instance to save
memory and run as fast as possible.


## Installation
    $ npm install isolocaldateformat


## Usage
    var df = require('isolocaldateformat').ISOLocalDateFormat;
    console.log(df.format(new Date()));


## License
Licensed under the MIT license.
