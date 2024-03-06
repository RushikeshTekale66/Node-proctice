const os = require('os');

// Some os function 

// Gives the architecture of system EX: x64
console.log(os.arch());

// Gives the free memory of system EX: 1.3540420532226562
console.log(os.freemem()/(1024*1024*1024));

// Gives the to total ram memory EX : 7.9
console.log(os.totalmem()/(1024*1024*1024));

// Gives the host name EX: Rushi
console.log(os.hostname());

// Gives the platform EX: x64
console.log(os.platform());

// Gives the user information
// EX:
// {
//   uid: -1,
//   gid: -1,
//   username: 'Rushikesh Tekale',
//   homedir: 'C:\\Users\\Rushikesh Tekale',
//   shell: null
// }
console.log(os.userInfo());