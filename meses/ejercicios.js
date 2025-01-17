document.getElementById('mostrarMes').addEventListener('click', function() {
    
    let numeroMes = parseInt(document.getElementById('numeroMes').value);
    
    let mesNombre;
    let dias;

    switch (numeroMes) {
        case 1:
            mesNombre = "Enero";
            dias = 31;
            break;
        case 2:
            mesNombre = "Febrero";
            dias = 28;
            break;
        case 3:
            mesNombre = "Marzo";
            dias = 31;
            break;
        case 4:
            mesNombre = "Abril";
            dias = 30;
            break;
        case 5:
            mesNombre = "Mayo";
            dias = 31;
            break;
        case 6:
            mesNombre = "Junio";
            dias = 30;
            break;
        case 7:
            mesNombre = "Julio";
            dias = 31;
            break;
        case 8:
            mesNombre = "Agosto";
            dias = 31;
            break;
        case 9:
            mesNombre = "Septiembre";
            dias = 30;
            break;
        case 10:
            mesNombre = "Octubre";
            dias = 31;
            break;
        case 11:
            mesNombre = "Noviembre";
            dias = 30;
            break;
        case 12:
            mesNombre = "Diciembre";
            dias = 31;
            break;
        default:
            mesNombre = null;
            dias = null;
            break;
    }

    
    if (mesNombre) {
        document.getElementById('resultado').innerText = `El mes correspondiente al número ${numeroMes} es: ${mesNombre} y tiene ${dias} días.`;
    } else {
        document.getElementById('resultado').innerText = "Error: El número del mes debe estar entre 1 y 12.";
    }
});