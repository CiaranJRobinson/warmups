let result = [];
let luckyarr = [];
function luckyNumbers (n){
    result = [1,2,3,4,5,6,7,8,9,10]
    
    for (let j=1; j <= n; j++){
        const random = Math.floor(Math.random() * result.length);
    luckyarr.push(result[random]);
    result.splice(random, 1)
    }
    return luckyarr
    }

console.log(luckyNumbers(5));