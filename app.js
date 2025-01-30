let numeroSecreto = generarNumerosecreto();
console.log(numeroSecreto)
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
    
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos===1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es menor')
        }else{
            asignarTextoElemento('p','El numero es mayor')
        }
    intentos++;
    limpiarCaja();
            }
    return;
       
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}
function condicionesIniciales() {
    asignarTextoElemento( 'h1','Juego del numero Secreto')
    asignarTextoElemento('p',`indica un numero del 1 al 10 ${numeroMaximo}`)
    numeroSecreto = generarNumerosecreto();
    intentos = 1;
}
function reiniciarJuego() {
    // limpiar la caja
    limpiarCaja();
    //indicar el numero de inicio 
    condicionesIniciales();
    //generar el numero alearorio
     // inicializar el numero de intentos
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}
function generarNumerosecreto() {
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        
        if (listaNumeroSorteado.length == numeroMaximo) {
            asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        }else{

        // si el numero generado esta incluido en la lista 

        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumerosecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    }
condicionesIniciales();