const a = '12345';

// function is used to parse a string and convert it into an integer. 
const b = JSON.parse(a);
const c = parseInt(a);

// string 12345
console.log(typeof(a) , a);

// number 12345
console.log(typeof(b), b);

// number 12345
console.log(typeof(c), c);
