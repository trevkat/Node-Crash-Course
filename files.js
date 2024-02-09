// import core module to work with filesystem
const fs = require('fs');

// reading files
fs.readFile('./docs/test.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

console.log('last line');

// writing files
fs.writeFile('./docs/test.txt', 'hello, world', () => {
    console.log('file was written');
});

// directories - The below code will create or delete the assets folders after checking if it exists.
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created!')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted!')
    })
}

// deleting files - checks if file exists and then deletes it.
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted!')    
    })
}



