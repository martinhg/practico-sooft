import React from 'react';

const Histograma = () => {
    var contadorUno = 0;
    var contadorDos = 0;
    var contadorTres = 0;
    var contadorCuatro = 0;
    var contadorCinco = 0;
    const myArray = [1,2,1,3,3,1,2,1,5,1];

    function asteriscos(numero) {
        let cadena = '';
        for (let i=0; i < numero; i++) {
            cadena = cadena + '*';
        }
        return cadena;
    }

    return (
        <div>
            <p>Histograma - Ejercicio 1</p>
                {   
                    myArray.forEach( (elemento) => {
                        switch (elemento) {
                            case 1: 
                                contadorUno++
                                break
                            case 2: 
                                contadorDos++
                                break
                            case 3: 
                                contadorTres++
                                break
                            case 4: 
                                contadorCuatro++
                                break
                            case 5: 
                                contadorCinco++
                                break
                            default: 
                                break
                        }
                    })
                }
                <div>
                    <p>1: { asteriscos(contadorUno) }</p>
                    <p>2: { asteriscos(contadorDos) }</p>
                    <p>3: { asteriscos(contadorTres) }</p>
                    <p>4: { asteriscos(contadorCuatro) }</p>
                    <p>5: { asteriscos(contadorCinco) }</p>
                </div>
        </div>
    );
}

export default Histograma;