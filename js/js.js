/*BARRA TOP NAV RESPONSIVE */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


/*CREAMOS INPUT DINAMICAMENTE*/

function mostrar_control() {
    var select = document.getElementById("myselect");
    var inputText = document.getElementById("Texto");
        if (select.options[select.selectedIndex].value == "Nuevo") {
                inputText.style.visibility = "visible";
            } else {
                inputText.style.visibility = "hidden";
            }
        }

/*CONTAMOS PALABRAS DE UN TEXTAREA*/

function contar_palabras() {
        //Obtenemos el texto del campo
    var texto = document.getElementById("mensaje").value;
        //Reemplazamos los saltos de linea por espacios
        texto = texto.replace(/\r?\n/g, " ");
        //Reemplazamos los espacios seguidos por uno solo
        texto = texto.replace(/[ ]+/g, " ");
        //Quitarmos los espacios del principio y del final
        texto = texto.replace(/^ /, "");
        texto = texto.replace(/ $/, "");
        //Troceamos el texto por los espacios
        var textoTroceado = texto.split(" ");
        //Contamos todos los trozos de cadenas que existen
        var numeroPalabras = textoTroceado.length;

        if(numeroPalabras <= 150){
            document.getElementById("primerParrafo").innerHTML = "* El numero de palabras es correcto: " + numeroPalabras;
        }
        else{
            document.getElementById("primerParrafo").innerHTML = "* El numero de palabras es incorrecto: " + numeroPalabras;

            
        }
        
    }
