console.log("First");

//node is a asynchronous programming language it can execute all code at a time it does not wait for another function to run
setTimeout(()=>{
    console.log("Second");
},1000)
console.log("Third");
