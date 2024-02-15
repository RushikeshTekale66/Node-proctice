const arr = [1,2,3,4,5,6,7,7,8,9];

//filter is used to traverse all element of an array
const result = arr.filter((item)=>{
    return item>5;
})

console.log(result);