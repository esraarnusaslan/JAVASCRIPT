

/*
! ---------SCOPE----------

- Global Scope : heryerden erisilir. rem de yer tutar
- Function Scope  : sadece parantez icinden erisilir.
- Block Scope   : ic ice scope 


*/

/* var number=15; // ? global scope. yani her yerden erisilir. Cunku scope larin disinda.
console.log(number);

if(true){
    console.log(number);
}

function method1(){
    console.log(number);
} */



/* function method1(){  // ? function scope. sadece scope larin icinden erisebilirsin.
    var number =5;
    console.log(number);
}

 console.log(number); //burada yaparsan scope disi oldugu icin hata verir.

method1();
 */



/* function method2(){  // ? block scope.
    var a=5;//function scope
    if(true){
        var a=5;// block scope

    }

    while(true){

    }

} */