const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog.txt', {encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog2.txt');

// readStream.on('data', (chunk) => {
//     console.log('--- NEW CHUNK ---')
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// piping - this does the same as the above but with less code
readStream.pipe(writeStream);