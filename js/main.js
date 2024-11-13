const person = function (hi,ohmygod){
 
  console.log(`${hi} ${ohmygod}  my name is ${this.firstName} ${this.Lastname}, I Am ${this.age} years old`)

}
const ali ={
  firstName: "ali",
  Lastname:"ahmadi",
  age:32,
};


const hasan= {
  firstName:"hasan",
  Lastname:"rezayee",
  age: 64,
};
person.call(hasan,"Hello","!");
person.call(ali,"Hello","!");
let alijon= person.bind(ali,"Hello","!");

console.log(alijon());
