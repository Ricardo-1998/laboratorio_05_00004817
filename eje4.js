function entero_binario(num){
    if(num < 2){
        console.log(num);
    }
    else{
        aux = (num%2).toString;
        while(num>1){
            if(num%2==1){
                num = Math.round(num/2)-1;
            }
            else{
                num = num/2;
            }
        }
        console.log(aux);
    }
}