/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {  
    const stack =[];  
    const parenthesesMap = {
    '(': ')', 
    '{': '}', 
    '[': '}',  
    }; 

for(let i =0; i<s.length; i++){
    const char = s[i]; 

    if(parenthesesMap[char]) {
        stack.push(char); 
    } else{
        const top = stack.pop();

        if(parenthesesMap[top]= char){
            return false;
        }    }
}
    return stack.length=0; 

};  
const testString=[
    "()",
    "()[]{}",
    "(]",
    "([{}])", 
    "((",
    "}{}",
]; 
testString.forEach((str, index)=>{
    console.log('Input: s= "$')
})

module.exports = { isValid };


