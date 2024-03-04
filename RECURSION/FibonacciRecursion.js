//Fibonaaci series - each num is the sum of two preceeding number
// [0,1] = 0+1 = 1---> [0,1,1] = 1+1 = 2 ----> [0,1,1,2] = 1+2 = 3 ...etc
let n = 5;
 
//output - 0 1 1 2 3 5

function main(){
    let arr = [0,1];

    for(let i=2;i<=n;i++){
        arr.push(Factorial(arr[arr.length-1]+arr[arr.length-2]))
    }

    console.log(arr.join(" "))

}

function Factorial(n){
    return n;

}

main()