// Good Luck! You got this 💪🏾
// Write your code here.
function calculator (num1, num2,operator){

    if(operator === "+"){
        console.log(num1 + num2);
    }


    else if(operator === "-") {
        console.log(num1 - num2);
    }

    else if(operator === "-"){
        console.log(num1 - num2);
    }

    else if(operator === "*"){
        console.log(num1 * num2);
    }

    else if(operator === "/"){
        if(num2 !== 0){ 
            console.log(num1 / num2)
        }else{
            console.log("error: Division by zero")
        }
        
        
    } else{
        console.log("error invalid operator")
    }
calculator(10,5,"operator")

}