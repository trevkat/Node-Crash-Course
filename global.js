// Global object

// console.log(global);

global.setTimeout(() => {
    console.log(`in the timeout`);
    clearInterval(int);
}, 3000);

// this set an interval and runs every second
const int = setInterval(() => {
    console.log(`in the interval`)
}, 1000);

// shows the directory we are in
console.log(__dirname);
// shows the filename we are in 
console.log(__filename);

