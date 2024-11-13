const printInfo = function (hi,greeting){
 
  console.log(`${hi} ${greeting}  my name is ${this.firstName} ${this.Lastname}, I Am ${this.age} years old`)

}
const ali ={
  firstName: "ali",
  Lastname:"ahmadi",
  age:32,
};
//const printInfo=ali.printInfo;

const hasan= {
  firstName:"hasan",
  Lastname:"rezayee",
  age: 64,
};
printInfo.call(hasan,"Hello","!");
printInfo.call(ali,"Hello","!");
//const printAliInfo=printInfo.blind(ali);

//printInfo()