

getHipotenusa = () => {
    let cat1 = document.getElementById('cat1').value;
    let cat2 = document.getElementById('cat2').value;
    let hipotenusa = Math.sqrt((Math.pow(cat1,2)+Math.pow(cat2,2))); // raiz cuadrada de la suma de los catetos al cuadrado.
    document.getElementById('hipotenusa').innerHTML = `La hipotenusa es de ${hipotenusa}.`;
}