getFibonacci = () => {
    let num = document.getElementById('num').value;
    let f1 = 0; //posicion 1
    let f2 = 1; //posicion 2
    let resultado = '';
    for(i =0;i<=num;i++){
        if(i == 0){
            resultado = ''+f1; //la primera sucesion comienza con 0
        }else if(i== 1){
            resultado += ','+f2 //Segunda sucesion es 1
        }else{
            let suma = f1 +f2;
            resultado+= ','+suma
            f1 = f2
            f2 = suma
        }
    }
    document.getElementById('resultado').innerHTML = resultado
}