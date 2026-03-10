/*Given a positive integer n, determine whether it is odd or even. Return true if the number is even and false if the number is odd.

Examples:

Input: n = 15
Output: false
Explanation: The number is not divisible by 2, Odd number.*/

const findevenodd = function(x){
    if(x%2==0){
        return  true;
    } else {
        return false;
    }
}
let finding =  findevenodd(15);
console.log(finding);
