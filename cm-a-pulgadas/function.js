getPulgadas= () =>{
    let cm = document.getElementById('centimetros').value;
    let pulgadas = cm * 2.54;
    document.getElementById('pulgadas').innerHTML = `El valor de las pulgadas es de ${pulgadas}.`;
}

