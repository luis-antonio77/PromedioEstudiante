function calcular(){
    const formulario = document.getElementById('formulario');
    let nombreE = formulario['nombreE'].value;
    let notaM = formulario['notaM'];
    let notaS= formulario['notaS'];
    let promedio = parseFloat(notaM.value) + parseFloat(notaS.value);
    let resultado = promedio/2;
    
    if(isNaN(resultado))
        resultado = '';
    document.getElementById('resultado').innerHTML = `El promedio de ${nombreE} es: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}