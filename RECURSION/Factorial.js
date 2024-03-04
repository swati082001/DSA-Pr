//input taking
let n = 5;

//output - 5*4*3*2*1 = 120

function main(){
    let res = Factorial(n)
    console.log(res)
}

function Factorial(n){
    if(n==1){
        return 1;
    }
    
    return n*Factorial(n-1);

}

main()

