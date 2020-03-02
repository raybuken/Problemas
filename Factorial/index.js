

getFactorial = () => {
    let num = document.getElementById('num').value;
    let resultado = 1;
    console.log("12" == 1);
    if(num < 0){
        alert('ingrese un numero natural.');
    }else if(num == 0 || num == 1){
        resultado = 1;
    }else{
        for(let i = 2;i<=num;i++){
            resultado = resultado * i;
        }
    }
    if(resultado){
        document.getElementById('resultado').innerHTML = `El Factorial de ${num} es ${resultado}`    
    }
}
