// const person = {
//     name:"Apurbo paul",
//     job:"Tiger it Bangladesh",
//     desgination:"senior Engineer",
//     salary:250000,
//     info:{
//         leader:"Apurbo",
//         address:"kolabagan",
//     }
// }
// const {name,job,salary,phone} = person;
// console.log(name,job,salary,phone);
// const Name = person.name;
// const Job = person.job;
// console.log(Name,Job);
const friends = ["sajib","Saifuddin","Ali Hasan","Sajadul islam dipu"];
// const [first,second] = friends;
// console.log(first,second);
// const {leader} = person.info;
// console.log(leader);
// console.log(friends.length);
let [first,...last] = friends;
console.log(last);