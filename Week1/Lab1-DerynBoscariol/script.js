
//This is blocking code because it must run before the code after it runs
console.log("Before timeout");

//This is non-blocking code beacuse it allows the code after it to run while it waits to be ready to run itself
setTimeout(timeOut, 3000 ); 
function timeOut(){ 
    console.log("Within timeout");
}

//This is also blocking code
console.log("After timeout");