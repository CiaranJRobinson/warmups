//Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

// Starting array
let array = [28, 43, 12, 30, 4, 0, 12]
//let array = [0, 21, 33, 6, 0, -9]
//write solution below:
let thisArray = false
for (let x=0; x< array.length; x++){
for(let i=0; i< array.length; i++){
    if((array[i]+array[x]) === 0){
        thisArray = true
    }
}
}
console.log(thisArray)
