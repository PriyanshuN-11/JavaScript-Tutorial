//for loop
for(i = 0; i <= 10; i++){
    const element = i;
        if(element === 5){
        console.log("5 is comming")
        }
    console.log(element)
}

//nested for loop
for (i = 0; i <= 10; i++){
    for(j = 0 ; j <= 10; j++){
        console.log(`${i} X ${j} =`, 
            (i*j))
    }
}

for (i=0; i <= 5  ;i++){
    console.log(`outer Number = ${i}`)
    for (j=0; j <= 4;j++)
    {
        console.log(`inner Number = ${j}`)
    }
}

//looping through array

let myArray = ["we", "are", "vennom"]

for(let i=0 ; i < myArray.length; i++){
    console.log(myArray[i])
}

//break 
for(let i = 1; i <= 10 ; i++){

    if(i===6){
        console.log(i);
        break
    }
    console.log(i)
}


//continue
for(let i = 1; i <= 10 ; i++){

    if(i === 6){
        continue;
    }

    console.log(i)
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}