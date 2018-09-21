function palindroma() {
    var p = prompt("palabra");
    var temp = p.split("").reverse().join("");

    if(p != null && p==temp){
        console.log("es palindroma");
    }
    else{
        console.log("no es palindroma");
    }
    

}

