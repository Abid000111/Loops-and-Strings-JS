// for loop


// for(let i = 1; i <= 5; i++){
//     console.log("Abid")
// }

// for (let i = 1; i <= 10; i++){
//     console.log("i =", i);
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++){
//     sum = sum + i;
//     console.log("sum =", sum);
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++){
//     console.log("sum =", sum);
//     sum = sum + i;
// }








//  while loop


// let i = 1;
// while (i <= 10) {
//     console.log("Abid");
//     i++;
// }








// do while loop:


// let i = 20;
// do {
//     console.log("Abid Shahrier");
// } while(i <= 10);

// console.log("do while loop runs the programme at least once if the condition true or not");








//  for of loop


// let fullName = "Abid Shahrier";
// for(let i of fullName){
//     console.log("i =", i);
// }

// let fullName = "Abid Shahrier";
// let len = 0;
// for(let i of fullName){
//     len++;
// }
// console.log("length of Abid Shahrier is =", len);








//  for in loop


// let student = {
//     name : "Abid Shahrier",
//     age : 23,
//     class : 11,
// };

// for (let i in student){
//     console.log(i);
// }

// for (let i in student){
//     console.log(student);
// }

// for (let i in student){
//     console.log(student[i]);
// }

// for (let key in student){
//     console.log("key is =", key, "and its value is =", student[key]);
// }

// console.log(student.name)

// for (let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// for(let i = 1; i <= 100; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }








// Defining length


// let name = "Abid Shahrier";
// console.log(name.length);
// console.log(name[5]);  // index








// Template Literals


// let obj = {
//     item: "Pen",
//     price: 10
// }
// console.log(`The cost of ${obj.item} is ${obj.price} taka.`)  // this is written by backtick and $ sign








// escape character


// let name = "Abid\nShahrier";
// let name2 = "Abid\tShahrier";
// console.log(name);
// console.log(name2);
// console.log(name.length);
// console.log("Mahadi\nHasan");








//  String method


// UpperCase method
// let name = "Abid";
// console.log(name.toUpperCase());  // Convert all the characters to upper case








// LowerCase method
// let name = "Abid";
// console.log(name.toLowerCase());  // Convert all the characters to lower case

// LowerCase method
// let inp = prompt();
// inp = inp.toString().toLowerCase();
// // inp.toLowerCase();
// console.log(inp);

// LowerCase method
// let inp = prompt("");
// let lowerCaseInp = inp.toString().toLowerCase();
// console.log(lowerCaseInp);








// trim method
// let str = "     Abid      ";
// console.log(str.trim())           // Removes all the white spaces from start and end








// slice method
// let name = "Abid";
// console.log(name.slice(1,3));        // 1 is starting index and 3 is ending index which is not counted








// concat method
// let firstName = "Abid";
// let secondName = "Shahrier";
// console.log(firstName.concat(secondName));
// console.log(firstName + secondName);
// let str = "My name is " + firstName + secondName;
// console.log(str + 123);








// replace method
// let str = "hello";
// console.log(str.replace("lo", "p"));

// let str2 = "hellolololo";
// console.log(str2.replace("lo", "p"));

// let a = "Kobita"
// console.log(a.replace("obita", "abir"));

// let b = "Kobita";
// let c = b.replace("obita", "abir");
// console.log(c);








// charAt method
// let str = "Abid";
// console.log(str.charAt(3));
// console.log(str[3]);