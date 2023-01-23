function add(a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject(a + b);
        }, 1000);
    })
}

function multiply(a) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(a * 2);
        }, 2000);
    })
}

function divide(a) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(a / 3);
        }, 100);
    })
}

// add(2, 5, function (addresult) {
//     multiply(addresult, function (result) {
//         divide(result, function (final) {
//             console.log("addResult =>", addresult);
//             console.log("result =>", result);
//             console.log("final =>", final);
//         });
//     });
// });

// resolve reject

add(2, 5)
    .then(result => multiply(result))
    .then(result2 => divide(result2))
    .then((final) => {
        console.log(final);
    })
    .catch((error) => {
        console.log("error",error)
    });

