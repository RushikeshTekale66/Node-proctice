 const fs = require("fs");
 
//1]  Create new file & add data to it , if file already exist then replace it

// sysc
fs.writeFileSync("./text.txt", "Hellow text 1 file");

// Async
fs.writeFile("./text1.txt", "Hellow text 2 file", (error)=>{});

//2]Create file & add data to it

// sync
fs.appendFileSync("./text2.txt", "Hey there \n");

// async
fs.appendFile("./text3.txt", "hey there \n", (error)=>{});

//3] Read data from file
//sync
const result = fs.readFileSync("./text.txt", "utf-8");
console.log(result);


//async
fs.readFile("./text1.txt", "utf-8", (error, result)=>{
    if(error){
        console.log("Got error : ", error);
        
    }
    else{
        console.log(result);
        
    }
})

// 4] Copy file
fs.cpSync("./text3.txt", "./Copy.txt");

// 5]Delete file
fs.unlinkSync("./text3.txt");

// 6] Rename file
fs.renameSync("./text.txt", "./newFile.txt");