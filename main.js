const R = require('ramda');
const fs = require('fs');

fs.readFile('connect-4.data', 'utf8', (err, data) => {

    if (err) {
        console.error(err);
        return;
    }

    console.log(data);
});

