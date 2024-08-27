// Autor: Camilo Rozo 
// Definición de variables

let encriptarBTN = document.getElementById('encriptar');
let desencriptarBTN = document.getElementById('desencriptar');
let btnCopy = document.getElementById('copyBtn');
let inputMsg = document.getElementById('input-message');
let input = document.getElementById('inp-txt');
let mensaje;


// funcion para enviar el texto encriptado
function encriptarTexto(event) {
  event.preventDefault();
  let textEnc = encriptar(input.value);
  inputMsg.value = textEnc;
}
// Evento para cuando se presiona el boton de encriptar
encriptarBTN.addEventListener("click", encriptarTexto);


// funcion para enviar el texto desencriptado
function desencriptarTexto(event){
  event.preventDefault();
  let textDes = desencriptar(input.value);
  inputMsg.value = textDes;
}
// Evento para cuando se presiona el boton de desencriptar
desencriptarBTN.addEventListener("click", desencriptarTexto);


// Funcion para copiar el texto
function copyText() {
   inputMsg.focus();
   document.execCommand("selectAll");
   document.execCommand("copy")
   alert("Texto copiado: " + inputMsg.value);
};


// Funcion para mostrar el texto encriptado
function encriptar(inputtext) {
  inputtext = input.value;
  mensaje = inputtext.replaceAll('e','enter')
  .replaceAll('i','imes')
  .replaceAll('a','ai')
  .replaceAll('o','ober')
  .replaceAll('u','ufat');

  return mensaje;
}


// Funcion para mostrar el texto desencriptado
function desencriptar(inputtext) {
  inputtext = input.value;
  mensaje = inputtext.replaceAll('enter','e')
  .replaceAll('imes','i')
  .replaceAll('ai','a')
  .replaceAll('ober','o')
  .replaceAll('ufat','u');

  return mensaje;
}


