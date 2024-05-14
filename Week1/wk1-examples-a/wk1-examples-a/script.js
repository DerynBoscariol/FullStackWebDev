//DEMO BLOCKING VS NON-BLOCKING SCRIPT
//Sequential code is blocking code because it always executes in order.
console.log("1");
console.log("2");
console.log("3");

//This click handler is an example of non-blocking code because it doesn't block line 12 from executing when no click has happened yet.
document.getElementById("click").addEventListener("click", function() {
  console.log("I have been clicked!");
})

console.log("After the click");