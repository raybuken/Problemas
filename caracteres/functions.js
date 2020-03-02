

getTypeOfCharacter = () => {
    
    let caracter = document.getElementById('caracter').value;
    let numEx = /\d/; //caracter numerico.
    let charEx= /[A-Z]|[a-z]/; //caracter letra.
    let isNumber = numEx.exec(caracter);
    let isCharacter = charEx.exec(caracter);
    if(isNumber){
        document.getElementById('resultado').innerHTML = `El carácter '${caracter}' es un número.`
    }else if(isCharacter){
        if(caracter.charCodeAt(0) >=65 && caracter.charCodeAt(0) <=90){ //ascii de las mayusculas
            document.getElementById('resultado').innerHTML = `El carácter '${caracter}' es una letra mayúscula.`    
        }
        else{ //es minuscula
            document.getElementById('resultado').innerHTML = `El carácter '${caracter}' es una letra minúscula.`
        }
        
    }else{
        document.getElementById('resultado').innerHTML = `El carácter '${caracter}' no es ni letra ni numero.`
    }
    
}