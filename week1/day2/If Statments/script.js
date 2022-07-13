console.log("hello world")
let name="oday"
let age
console.log(name,age)
console.log("----------------")
console.log(1>2)
console.log(1>1)
console.log(1>=1)
console.log(1<2)
console.log(1<=2)
console.log(1==1)
console.log(1=="1")
console.log(1==="1")
console.log("=================")
let x=NaN
console.log((x||0)+10)
function testMark(time){
    if(time>=5&&time<=8){
        return true
    }
    return false
}
console.log(testMark(100))
let a = 3
let c = 0
let b = a
b = a
c = a
b = c
a = b
console.log(a,b,c)
let sss=prompt("whats your name")
console.log("==================")
let baughtTesla,UScitizen,longBaught,upgrade,satisfied,MoveUS,intrestedBuying
baughtTesla=prompt("already have tesla?(y/n)")
    if(baughtTesla==="y") baughtTesla=true
    else baughtTesla=false

UScitizen=prompt("are you US citizen?(y/n)")
    if(UScitizen==="y") UScitizen=true
    else UScitizen=false

 if(baughtTesla&&UScitizen){
    longBaught=prompt("how long baught tesla?(years)")
    if(longBaught>1){
        upgrade=prompt("would you upgread?(y/n)")
        if (upgrade==="y") {upgrade=true; console.log(upgrade,longBaught,baughtTesla,UScitizen)}
        else {upgrade=false;console.log(upgrade,longBaught,baughtTesla,UScitizen)}
    }else{
        satisfied=prompt("are you satisfied(y/n)")
        if(satisfied==="y") {satisfied=true; console.log(upgrade,longBaught,baughtTesla,UScitizen,satisfied)}
        else {satisfied=false;console.log(upgrade,longBaught,baughtTesla,UScitizen,satisfied)}
    }
}else if(baughtTesla&&!UScitizen){
MoveUS=prompt("whould you like to move to use? (y/n)")
if(MoveUS==="y") {MoveUS=true;console.log(baughtTesla,UScitizen,MoveUS)}
else {MoveUS=false;console.log(baughtTesla,UScitizen,MoveUS)}
}else{
    intrestedBuying=prompt("are you intrested in buying tesla?")
    if(intrestedBuying==="y") {intrestedBuying=true ;console.log(baughtTesla,UScitizen,intrestedBuying)}
    else {intrestedBuying=false;console.log(baughtTesla,UScitizen,intrestedBuying)}
}
