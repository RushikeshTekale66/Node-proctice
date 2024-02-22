const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'Path');
const filePath = `${dirPath}/text.txt`;

// fs.writeFileSync(filePath, "This is simple text file");

// fs.readFile(filePath, 'utf-8', (err, item) => { console.log(item); })

// fs.appendFile(filePath, "And writer is rushikesh", (err) => { if (!err) { console.log("File is updated") } })

fs.rename(filePath, "text2.txt", (err)=>{if(!err)console.log("File name updated");});