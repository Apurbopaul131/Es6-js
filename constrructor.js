class phone{
  
    constructor(){
        this.type = "Phone";
        this.phonePrice = 80000;
        this.phoneColor = "blue";
        this.phoneBrand = "samsung";
    }
}
class Laptop extends phone{
    constructor(price,color,brand){
        super();
        this.name = "Laptop";
        this.laptopPrice = price;
        this.laptopColor = color;
        this.laptopBrand = brand;
    }
    call(){
       return this.name + " " + this.laptopPrice;
    }
   
}
let redmi = new Laptop(30000,"blue","Xawmi");
let Fun = redmi.call();

// let Hp = new Laptop(55000,"black","hp");

console.log(redmi);
console.log(Fun);

// console.log(Hp);