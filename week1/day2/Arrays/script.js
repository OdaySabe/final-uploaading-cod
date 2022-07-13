arr=[1,2,3]
arr.push("sameer"); arr.push("maher")
for(let i=0 ; i<arr.length;i++){
    console.log(arr[i])
}
console.log("==============")
arr.splice(0,3);
arr.splice(0,0,1,2,3)
arr.splice(0,1);
for(let i=0 ; i<arr.length;i++){
    console.log(arr[i])
}
/////////////////////////////excercise
console.log("==============")
const arry=[1,2,3,4,5,6,7,8,9,10]
arry.splice(1,2);
for(let i=0 ; i<arry.length;i++){
    console.log(arry[i])
}
console.log("==============")
arry[2]=1;
for(let i=0 ; i<arry.length;i++){
    console.log(arry[i])
}
console.log("========arry======")
arry.splice(arry.length-4,4)
for(let i=0 ; i<arry.length;i++){
    console.log(arry[i])
}
console.log("=====arry2=========");
let arry2=[]
for(let i=0;i<arry.length;i++){
    arry2[i]=arry[i];
}
arry2.push(0);
arry2[0]=0;
for(i=0;i<arry.length;i++){
    arry2[i+1]=arry[i];
}

for(let i=0 ; i<arry2.length;i++){
    console.log(arry2[i])
}