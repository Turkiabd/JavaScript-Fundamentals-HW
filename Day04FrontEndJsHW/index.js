console.log("----------------------Area Of Rectangle-------------------");
function areaOfRecangle(length, width) {
  return length * width;
}
console.log("The Area Of The Rectangle Is : ", areaOfRecangle(10, 10));
console.log("");

console.log("----------------------Temp Converter----------------------");
function fromCtoF(cel) {
  return (cel * 9) / 5 + 32;
}

console.log("26 C = ", fromCtoF(26), "in F");

function fromFtoC(feh) {
  return ((feh - 32) * 5) / 9;
}

console.log("78 F = ", fromFtoC(78.8), "in C");
console.log("");

console.log("----------------------nums summaations---------------------");

nums = [23, 54, 32, 87, 46];
let throArr = 0;
for (let i = 0; i < nums.length; i++) {
  throArr += nums[i];
}
console.log(throArr);
console.log("");
console.log("----------------------max num -----------------------------");

numL = [16, 4, 2, 0, 19, 6];
let max = 0;
for (let i = 0; i < numL.length; i++) {
  if (numL[i] > max) {
    max = numL[i];
  }
}
console.log("largset no. is : ", max);
console.log("");

console.log("----------------------reverse-----------------------------");
revArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = revArr.length - 1; i >= 0; i--) {
  console.log(revArr[i]);
}
// // or

// console.log(revArr.reverse());
console.log("");

console.log("----------------------stars-----------------------------");

let row = 6;
let space = "";
for (let i = 1; i <= row; i++) {
  for (let j = 0; j < i; j++) {
    space += "*";
  }
  space += " \n";
}
console.log(space);

// // or

// for(let i =1 ; i<7 ; i++){
//     console.log("*".repeat(i))
// }
