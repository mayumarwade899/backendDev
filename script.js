const { constants } = require('buffer');
const { log } = require('console');
const fs = require('fs');

// fs.writeFile("hey.txt", "Hello dear, what's going on!!", function(err) {
//     if(err) console.error(err);
//     else console.log("Done")
// })

// fs.appendFile("hey.txt", " Everything is going fine!!", function(err) {
//     if(err) console.error(err);
//     else console.log("Done")
// })

// fs.rename("hey.txt", "hello.txt", function(err) {
//     if(err) console.error(err);
//     else console.log("Done!");
// })

// fs.copyFile("hello.txt", "./copy/copy.txt", function(err) {
//     if(err) console.error(err.message);
//     else console.log("Done!");
// })

// fs.unlink("hello.txt", function(err) {
//     if(err) console.error(err);
//     else console.log("Done!")
// })

// fs.rm("./copy", {recursive: true}, function(err) {
//     if(err) console.error(err);
//     else console.log("Removed")
// })

// fs.readFile("hey.txt", 'utf8', function(err, data) {
//     if(err) console.error(err);
//     else console.log(data)
// })
// console.log('readFile called')

// fs.mkdir("./copy/hello", {recursive: true}, function(err) {
//     if(err) console.error(err);
//     else console.log("Created")
// })

// fs.stat("hey.txt", function(err, stats) {
//     if(err) console.error(err);
//     else console.log(stats);
// })

// fs.access('package.json', constants.F_OK, (err) => {
//     console.log(`${'package.json'} ${err ? 'does not exists' : 'exists'}`)
// })

// fs.access('package.json', constants.R_OK, (err) => {
//     console.log(`${'package.json'} ${err ? 'is not readable' : 'is readable'}`)
// })

// fs.access('package.json', constants.W_OK, (err) => {
//     console.log(`${'package.json'} ${err ? 'is not writable' : 'is writable'}`)
// })

// fs.access('package.json', constants.R_OK | constants.W_OK, (err) => {
//     console.log(`${'package.json'} ${err ? 'is not' : 'is'} readable & writable`)
// })






