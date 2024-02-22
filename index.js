const fs = require('fs');

const input = process.argv;

// PS C:\Users\Rushikesh Tekale\Web devlopment VS\Practice\Node> node index.js add data.txt "Rushikesh"
// If it contain add in input the it will be create file name of data.txt & add data in it Rushikesh
// in node process.argv already contain two file

if(input[2]=='add'){
    fs.writeFileSync(input[3], input[4]);
}
else{
    console.log("Invalid input");
}