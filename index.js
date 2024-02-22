const fs = require('fs');

const input = process.argv;

// PS C:\Users\Rushikesh Tekale\Web devlopment VS\Practice\Node>  node index.js remove data.txt
// if CMD contain the remove key the it will remove that file
if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("Invalid input");
}