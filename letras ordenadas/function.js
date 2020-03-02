getOrdenedStringList = () => {
    let s1 = document.getElementById('s1').value;
    let s2 = document.getElementById('s2').value;

    s1 = s1.toUpperCase().split('');
    s2 = s2.toUpperCase().split('');

    let resultado = new Array().concat(s1,s2)
    resultado = [... new Set(resultado)].sort(); // array de valores unicos.
    console.log(resultado);
    document.getElementById('resultado').innerHTML = `Resultado de la cadena: ${resultado}`
}