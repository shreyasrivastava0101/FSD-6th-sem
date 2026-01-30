const fs = require('fs');

// WRITE
fs.writeFileSync('demo.txt', 'Hello Node.js File System');

// READ
const data = fs.readFileSync('demo.txt', 'utf8');
console.log(data);

// APPEND
fs.appendFileSync('demo.txt', '\nAppended text');

// CREATE
fs.writeFileSync('create.txt', 'Created file');

// DELETE
fs.unlinkSync('create.txt');

// RENAME
fs.renameSync('demo.txt', 'renamed.txt');

// MOVE
fs.mkdirSync('backup', { recursive: true });
fs.renameSync('renamed.txt', 'backup/renamed.txt');

console.log('All file operations completed successfully');
