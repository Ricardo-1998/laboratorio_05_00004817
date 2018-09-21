function entero_binario(num){
    var aux = 0;
    array = [0];
    while(num != 0 || num !=1){
        extra = num%2;
        num = (num/2) - aux;
        array.push(extra);
    }
    resultado = array.reverse().join("");
    console.log(resultado);
}