import React from 'react';

const LetraX = () => {
function crearPiramide(numLineas) {
    if (numLineas === 0) {
        return 'ERROR';
    }

    let cadena = '';
    for (let i=0; i< numLineas; i++) {
        cadena = cadena + '\n';
        for (let j = 1; j <= numLineas - i; j++) {
            cadena= cadena + '*';
        }
       
        
    }
    console.log(cadena);
    return cadena;
}

return (
    <div>
        {crearPiramide(6)}
    </div>
);

}

export default LetraX;