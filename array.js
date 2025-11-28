// Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents & studentName) iterate over all students and find that specific user "studentName".
//         const arr = ["Zubair", "Raja", "Abdul", "Hamza", "Ali"];
//         const arr2 = ["Raja", "Ayan", "hello"];

//         function findStudent(allStudents, studentName){
//             let found = false;
//             for(let i = 0; i<allStudents.length; i++){
//                 if(allStudents[i] === studentName){
//                     found = true;
//                 };
//             };
//             if(found){
//                 console.log(`Found ${studentName}`);
//             } else{
//                 console.log(`Can't Found ${studentName}`);
//             }
//         };

//         findStudent(arr, "Zubair");
//         findStudent(arr2, "hee");

// class MyArray{
//     constructor(){
//         this.length = 0;
//         this.data = {};
//     }

//     push(item){
//         this.data[this.length] = item;
//         this.length++;
//         return item.length;
//     }
//     get(index){
//        return this.data[index]
//     }
//     pop(){
//         let lastItem = this.data[this.length-1];
//         delete this.data[this.length-1];
//         this.length--;
//         return lastItem;
//     }
//     shift(){
//         let firstItem = this.data[0];
//         for(let i = 0; i<this.length; i++){
//             this.data[i] = this.data[i + 1];
//         }
//         delete this.data[this.length -1];
//         this.length--;
//         return firstItem;
//     }
//     deleteByIndex(index){
//         for(let i = 0; i<this.length; i++){
//             if(index === this.length[i]){
//                 delete this.data[i];
//             }
//         }
//         return this.data;
//     }
// }
// const MyNewArray = new MyArray();
// MyNewArray.push("Zubair")
// MyNewArray.push("bsir")
// MyNewArray.push("apo")
// MyNewArray.push("Raja")
// MyNewArray.pop();
// console.log(MyNewArray);
// MyNewArray.shift();
// console.log(MyNewArray);
// console.log(MyNewArray.deleteByIndex(0));

// Reverse a String
// function reverseString(str){
//     let rev = "";
//     for(let i = str.length-1; i>=0; i--){
//         rev = rev + str[i];
//     }
//     return rev;
// }
// console.log(reverseString("Zubair"));
// console.log(reverseString("RAJA"));
// console.log(reverseString("HELL0O"));
// console.log(reverseString("436282"));

// let Str = "Zubair is a BCA Student";
// let arr = Str.split(" ");
// console.log(arr);
// let words = "Hello".split("");
// console.log(words);

// String to Array to String
// let name = "Zubair";
// let arr = Array.from(name);
// let revArr = arr.reverse();
// console.log(revArr);
// let str1 = revArr.join("");
// console.log(str1);

// let str = "Raja";
// let arr = str.split("");
// let rev = arr.reverse();
// let revArr = rev.join("");
// console.log(revArr);

// final 
// const reverseString =(str)=>
//     str.split("").reverse().join("");
//     console.log(reverseString("hello"));
//     console.log(reverseString("Hello IM Zubair"));

// Palindrome
// const checkPalindrome = (str)=> {
// let temp = str.split("").reverse().join("");
// if(temp === str){
// console.log("Its Palindrome");
// } else {
//     console.log("Its not a Palindrome");
// }
// }
// console.log(checkPalindrome("Zubair"));
// console.log(checkPalindrome("acca"));

// let str = "acca";
// let first = str.split("").reverse().join("");
// if(str === first){
//     console.log("Its Palindrome");
// } else {
//     console.log("Its not a Palindrome");
// }
// console.log(first);
// Final 
// const Palindrome = (str) => str.split("").reverse().join("") === str
// console.log(Palindrome("Zubair"));
// console.log(Palindrome("acca"));

// Integer Reversal 
// let a = 1234;
// let temp = Number(a.toString().split("").reverse().join(""));
// console.log(temp);
// final 
// const numReverse = (num) => {
//     let rev = num.toString().split("").reverse().join("")
// return parseInt(rev) * Math.sign(num);
// }
// console.log(numReverse(1234))

// Sentence Capitalization 
// const capital = (str) => str
// .toLowerCase()
// .split(" ")
// .map((word) => word[0]
// .toUpperCase() + word
// .slice(1))
// .join(" ");
// console.log(capital("HELLO world hello yrroe"));
// let name = "Zubair";
// console.log(name.slice(1));

// FizzBuzz
// const FizzBuzz =(n)=>{
//     for(let i = 1; i<= n; i++){
//         if(i%3===0 && i%5===0){
//             console.log("FizzBuzz");
//         } else if(i%3===0){
//             console.log("Fizz");
//         } else if(i%5===0){
//             console.log("Buzz");
//         } else{
//             console.log(i);
//         }
//     }
// }
// console.log(FizzBuzz(30));

// MaxProfit
// const maxProfit = (prices)=> {
//         let minPrice = prices[0];
//         let maxProfit = 0;

//         for(let i =1; i<prices.length; i++){
//                 const currentPrice = prices[i];
//                 minPrice = Math.min(minPrice, currentPrice);
//                 const potentialProfit = currentPrice - minPrice;

//                 maxProfit = Math.max(maxProfit, potentialProfit);
//                 console.log(maxProfit);
//         }
//         return maxProfit;
// }
// const prices = [7,1,5,3,6,4];
// const profit = maxProfit(prices);
// console.log("Maximum Profit : ", profit);

// Array Chunk 
// let arr = [1,2,3,4,5,6,7,8,9];
// let arrChunk = [];
// let slice = arr.slice(2,2+2);
// let newArray = arr.toString().split(",").join("").slice(3);
// console.log(arr);
// console.log(newArray);
// console.log(slice);
// final 
// const chunk =(array,size)=>{
//         const chunked = [];
//         let index = 0;
//         while(index<array.length){
//                 const chunk = array.slice(index, index+size);
//                 console.log(chunk);
//                 chunked.push(chunk);
//                 index+=size;
//         }
//         return chunked;
// };
// console.log(chunk([1,2,3,4,5,6,7,8],3));

// let arr1 = [1,2,4,5,6,7,8];
// let arr2 = [];
// let new2 = arr1.slice(2);
// let new3 = arr1.slice(5);
// arr2.push(new2,new3);
// console.log(arr2);

// TwoSum
// function twoSum(nums,target){
//         for(let i = 0; i<nums.length; i++){
//                 for(let j = i+1; j<nums.length; j++){
//                         if(nums[i] + nums[j] === target){
//                                 return [i,j];
//                         }
//                 }
//         }
//         return [];
// }
// console.log(twoSum([7,2,1,11,3],9));