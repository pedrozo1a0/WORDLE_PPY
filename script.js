let intentos= 6;
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
const API="https://random-word-api.herokuapp.com/word?length=5&lang=es";
fetch(API).then((response)=>{
    response.json().then((body)=>{
        palabra=body[0].toUpperCase();
    });
}).catch((error)=>{
    console.log(error);
    const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
});
 const ERROR= document.getElementById("Error");  //Se busca en el html el mensaje de error y se inicializa
 ERROR.style.display = "none"                    //Se oculta el mensaje de error
window.addEventListener('load', init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}
const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);      //Al presionar el botón con el mouse, se llama a la función "intentar"
function intentar(){
    const INTENTO= leerIntento();
    if (INTENTO.length !==5){                     //Si la palabra no tiene 5 letras, se muestra el mensaje de error
        ERROR.style.display = "block"
        return
    }
    if (INTENTO === palabra){
        ERROR.style.display = "none"
        terminar("<h1>GANASTE!😀</h1>")
        return
        if(intentos==0){
            terminar("<h1>PERDISTE😖</h1>")
        }
    }
    const GRID= document.getElementById("grid");
     const ROW = document.createElement("div");
      ROW.className= "row";
    for(let i in palabra){
        const SPAN= document.createElement("span");
        SPAN.className= "letter";
        if(INTENTO[i]===palabra[i]){
            ERROR.style.display = "none"
            SPAN.innerHTML= INTENTO[i];
            SPAN.style.backgroundColor= "green";
        }else if(palabra.includes(INTENTO[i]))
    { 
        ERROR.style.display = "none"
        SPAN.innerHTML= INTENTO[i];
        SPAN.style.backgroundColor= "yellow"
        
        }else{
            ERROR.style.display = "none"
            SPAN.innerHTML= INTENTO[i];
            SPAN.style.backgroundColor= "grey";
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--
    if(intentos==0){
        button.style.display= "none";
    }
}
function leerIntento(){
    let intento= document.getElementById("guess-input");
    intento= intento.value ;
    intento= intento.toUpperCase();
    return intento;
}
function terminar(mensaje){
     const INPUT = document.getElementById("guess-input");
     const BOTON = document.getElementById("guess-button")
     INPUT.disabled = true;
     BOTON.disabled= true;
     let contenedor = document.getElementById("guesses");
     contenedor.innerHTML= mensaje;
}


