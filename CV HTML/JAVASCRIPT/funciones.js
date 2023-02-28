
// Boton volver arriba 
// Get the button:
let mybutton = document.getElementById("myBtn");

// Al bajar 20px aparece el boton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll hacia arriba al clickear botón
function topFunction() {
  document.body.scrollTop = 0; //  Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
}
//Desocultar mensaje - De forma simbólica: Creo que debería ser un alert configurado con if(que aparezca el mensaje si fue exitoso el envio) y else(Si falla por estar mal algún dato) pero al no tener un servidor al que mandar los datos no se puede configurar
document.getElementById("Enviar").addEventListener('click', function() {
    document.getElementById("ocultar").style.display="block";
});
//Modo oscuro
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'dark');
                } else {
                    document.documentElement.setAttribute('tema', 'light');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);


