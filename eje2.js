function ordenararray(array){
    cantidad = array.length;
    for (i=0 ; i<cantidad; i++ ){
        for ( y=0; y<cantidad;y++){
            if(array[y] > array[y+1]){
                aux = array[y+1];
                array[y+1] = array[y];
                array[y] = aux;
            }
            
        }

    } 
}