// object { name: 'Rushikesh', lname: 'Tekale' }
const str = {name:"Rushikesh", lname:"Tekale"};
console.log(typeof(str), str);


// string {"name":"Rushikesh","lname":"Tekale"}
// Convert object to String
const str2 = JSON.stringify(str);
console.log(typeof(str2), str2);

// object { name: 'Rushikesh', lname: 'Tekale' }
// Convert json string into object
const str3 = JSON.parse(str2);
console.log(typeof(str3), str3);