// function add(x,y){
//     sum = x + y ;
//     return sum ;
// }
// const result = add(10,20);
// const add = function(x,y){
//     const sum = x + y ;
//     return sum;
// }

// const result = add(10,20);
// console.log(result);
// const add = (x,y) => {
//     if(x<=0 || y<=0){
//         x = 20;
//         y = 20;
//     }
//     return x + y;
// };
// const result = add(0,0);
// console.log(result);
const doubleIt = (num1,num2) => {
    const sum = num1 + num2 ;
    const difference = num1 - num2;
    return sum * difference;
}
const result = doubleIt(20,10);
console.log(result);