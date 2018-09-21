function fibo(){
    var a = 0;
    var b = 1;
    var fibo = prompt("numero de fibonacci");
    var datos = [0];
    if(fibo==1){
        console.log(0);
    }
    if(fibo==2){
        console.log(1);
    }
    else{
        while(a <= fibo){
            console.log(a);
            b = a + b;
            a = b;
            
        }
    }
    
}