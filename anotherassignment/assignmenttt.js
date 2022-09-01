// let humansarray = ["boy","girl","man","woman","lady","guy"]
//  console.log(humansarray)

//  for(const keys in humansarray){
//    console.log("key",humansarray[keys]);
//    //console.log("humansarray.boy", [keys, humansarray[keys]])
//  };

// const humansarray = ["boy","girl","man","woman","lady","guy"]
// console.log("humansarray[5]",humansarray[humansarray.length -1])

// const humansarray = [
//   {
//     name: "tomiwa",
//     height: "1.8",
//     color: "blue",
//   },
//   {
//     name: "prince",
//     height: "1.9",
//     color: "red",
//   },
//   {
//     name: "chacha",
//     height: "1.6",
//     color: "black",
//   },
//   {
//     name: "david",
//     height: "6.5",
//     color: "green",
//   },
//   {
//     name: "mike",
//     height: "6.8",
//     color: "purple",
//   },
//   {
//     name: "emeka",
//     height: "6.3",
//     color: "orange",
//   },
// ];

// const humansarrayprops = humansarray
//   .filter((val, index) => index <= 2)
//   .map((value) => {
//     console.log("value", [value.name, value.height, value.color]);
//   });

let humansArray = ["boy", "girl", "man", "woman", "lady", "guy"];
let result = humansArray.findIndex((val, index) => index === 2);
console.log("result", result);
console.log("humansArray[2]", humansArray[result]);
