const http = require('http');
const fs = require('fs');

const port = 3000;

let isOnWatch = false;

// tested with argument in cmd "./";

fs.watch(process.argv[2], (eventType, filename) => {
    //Stop script from running twice for same change because of small function
    if(isOnWatch)
        return;

    isOnWatch = true;

    console.log(`The file ${filename} was changed and the type of change was ${eventType}`);

    setTimeout(() => {
        isOnWatch = false;
    }, 100);
});
