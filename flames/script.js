


function buttonClick() {
    let yourname = document.getElementById('yourname').value;
    let crushname = document.getElementById("crushname").value;
    let relationship = findRelationship(yourname, crushname);

    document.getElementById('view').innerHTML = `${relationship[0]} ${relationship[1]}` ;
}

function findRelationship(nameOne, nameTwo) {
    let nameOneArray = nameOne.split('');
    let nameTwoArray = nameTwo.split('');
    let finalValue = 0;

    if(nameOneArray.length > nameTwoArray.length){
        finalValue = getFinalLetters(nameOneArray, nameTwoArray);
    } else {
        finalValue = getFinalLetters(nameTwoArray, nameOneArray);
    }
    
    return getRelationship(finalValue);
}

function getFinalLetters(arr1, arr2, copyArry1 = [...arr1]) {
    
    for (let i = 0; i < arr1.length; i++){

        const index = arr2.indexOf(arr1[i]);
        const index2 = copyArry1.indexOf(arr1[i]);
        
        if (index2 > -1 && index > -1) { 
            copyArry1.splice(index2, 1);
            arr2.splice(index, 1);
          }
    }
    let finalWords = copyArry1.concat(arr2);
    return finalWords.length
}

function getRelationship(difference) {
    const FLAMES = {
        0: ['F', 'Friends'],
        1: ['L', 'Lovers'],
        2: ['A', 'Admirers'],
        3: ['M', 'Marriage'],
        4: ['E', 'Enemies'],
        5: ['S', 'Secret Lovers']
    };
    let modular_difference = difference % 6; 
    return FLAMES[modular_difference];
}