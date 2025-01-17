document.getElementById('calcular').addEventListener('click', function() {
    
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let operacion = document.getElementById('operacion').value;
    let resultado;

    if (operacion === '+') {
        resultado = a + b;
    } else if (operacion === '-') {
        resultado = a - b;
    } else if (operacion === '*') {
        resultado = a * b;
    } else if (operacion === '/') {
        if (b !== 0) {
            resultado = a / b;
        } else {
            console.log("Error: División por cero");
        }
    } else if (operacion === '%') {
        resultado = a % b;
    } else if (operacion === '**') {
        resultado = a ** b;
    } else {
        console.log("Error: Operación no válida");
    }

    alert(`El resultado de ${a} ${operacion} ${b} es: ${resultado}`);


    document.getElementById('limpiar').addEventListener('click', function() {
        document.getElementById('a').value = '';
        document.getElementById('b').value = '';
        document.getElementById('operacion').selectedIndex = 0;
    });
});