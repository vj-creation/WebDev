//OBJECTS IN JS AND EQUALITY.//

// const company ={
// name:'apple',
// founded : 1976,
// founders: ['steve jobs', 'steve wozniak'],
// products: [
//   {name : 'iphone', year : 2007},
//   {name:'macbook', year:1976}
// ],
// ceo:'tim cook',
// createnewProduct:function(productName){
//   this.products.push(productName);
// console.log("Creating product");
// return this.products;
// },
// fireCeo:function() {
// console.log('Firing CEO');
// this.ceo = null;
// return this.ceo;
// },
// hireCeo:function(ceo)
// {
//   this.ceo=ceo;
//   console.log('hiring new ceo');
//   return this.ceo;
//   }
// }
// company.createnewProduct({name: 'ihome', year:2020});
// company.fireCeo();
// company.hireCeo('steve wozniak');
// company.ceo;
/*LOOSE AND STRICT EQUALITY CHECKS*/
let number = 7;
let numberObj1= { num : 7}
let numberObj2= { num : 7}
let numberObj3 = numberObj1;
/*loose euality check == , strict equality check ===: */
number === 7;
numberObj1 == numberObj3;

numberObj3.num =1 ;
console.log(numberObj1.num);
console.log(numberObj3.num);
// whatever you do to object 1 automatically gets copied to object 3.
//both these a objects aren't separate entities but actually the same thing.
