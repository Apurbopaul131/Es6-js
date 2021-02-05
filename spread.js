// const ages1 = [10,20,30,40];
// const ages2 = [25,55,60,26];
// const ages3 = [28,29,39,40];
// const ages4 = [27,23,63,53];
// const allAges =[...ages1,...ages2 ,...ages3,...ages4];
// console.log(allAges);
// const maximum = Math.max(...allAges);
// console.log("Maximum = ",maximum);
// const ages = [10,20,30];
// const add = (x,y,z,a) => x + y + z + a ;
// const result = add(...ages,40);
// console.log(result);
let product = {
    name:"laptop",
    price:500000,
};
let place = {
    shopName:"Brand laptop Bangladesh",
    address:"Dhaka,mirpur",
};
let store = {...product,...place};
console.log(store);
