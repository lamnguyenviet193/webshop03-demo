// let inputNumber = prompt("nhapso");
// let isPrime = true ; 

// for(let i = 2 ; i < inputNumber ; ++i) {
//    if(inputNumber % i ===0 ) {
//     isPrime=false;
//     console.log ("uoc so dau tien la", i);
//     break ; 
//    }

// }

// if(isPrime){
//     console.log("day la so nguyen to ");
    
// }else {
//     console.log("day la hop so");
// }
let inputStr = 10 ;
let inputNumber = Number(inputStr) ;
if (isNaN (inputStr)){
    console.log("user ngu")
}else {
    for(let i=1; 1 <= 10 ; i++){
        if(checkPrime(i)){
            console.log (i);
        }
    }
}

function checkPrime(inputNumber) {

    let isPrime =true;
    for(let i=2 ; i<=10;++i){
        if(inputNumber % i ===0){
            isPrime=false;
            break;
        }

    }
    return isPrime;
}
