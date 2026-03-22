
const truncatesentence = function(str, k){
    const words = str.split(" ");
      return ele = words.slice(0,k).join(" ");
}
let finding =  truncatesentence("Hello Guys Welcome to Sukhee Lavanya",2);
console.log(finding);