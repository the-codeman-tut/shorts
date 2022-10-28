let arryData = [];
console.log("arryData ==> ", arryData);

arryData[0] = "Apple";
console.log("arryData[0] ==> ", arryData);

arryData.push("Banana");
console.log("arryData.push ==> ", arryData);

arryData.push(123);
console.log("arryData.push ==> ", arryData);

arryData[2] = 2;
console.log("arryData.push ==> ", arryData);

arryData[3] = true;
console.log("arryData[3] ==> ", arryData);

console.log("reading by index arryData[2]", arryData[2]);

console.log("======Loop starts========");
for (let index = 0; index < arryData.length; index++){
    console.log(arryData[index]);
}
console.log("======Loop ends========");