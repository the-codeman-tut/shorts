
function add(leftOperand, rightOperand) {
    return new Promise(function (resolve, reject){
        resolve(leftOperand + rightOperand);
    })
}

function multiply(leftOperand, rightOperand) {
    return new Promise(function (resolve, reject){
        resolve(leftOperand * rightOperand);
    })
}

function divide(leftOperand, rightOperand) {
    let result = leftOperand / rightOperand;
    return result;
}

function subtraction(leftOperand, rightOperand, myCallback) {
    return new Promise(function (resolve, reject){
        resolve(leftOperand - rightOperand);
    })
}

// add(2, 5, function (addresult) {
//     multiply(addresult, 3, function (multiplyResult) {
//         subtraction(multiplyResult, 5, function (result) {
//             console.log(addresult);
//             console.log(multiplyResult);
//             console.log(result);
//         })
//     })
// })

// resolve, reject

// isEven(4, 2)
//     .then((result) => {
//         console.log("multiply",result)
//         return multiply(result, 2)
//     })
//     .then((result) => {
//         console.log("subtraction",result)
//         return subtraction(result, 5)
//     })
//     .then((result) => console.log(result))
//     .catch((error)=>console.log("error",error))

async function printResult() {
    let add_result = await add(4, 2);
    let multiplResult = await multiply(add_result, 5);
    let subtractionResult = await subtraction(multiplResult, 5);


    console.log("add_result", add_result);
    console.log("multiplResult", multiplResult);
    console.log("subtractionResult", subtractionResult);
}

printResult();