function encriptar(){    
    let cadenaTexto = document.getElementById("entrada-input-id").value;
    let codificacion = [];
    for(let letra of cadenaTexto){
        if(letra == 'a'){
            letra = 'ai';
            codificacion.push(letra);
        }else if(letra == 'e'){
            letra = 'enter';
            codificacion.push(letra);
        }else if(letra == 'i'){
            letra = 'imes';
            codificacion.push(letra);
        }else if(letra == 'o'){
            letra = 'ober';
            codificacion.push(letra);
        }else if(letra == 'u'){
            letra = 'ufat';
            codificacion.push(letra);
        }else{
            codificacion.push(letra);
        }   
    }
    console.log(codificacion.join(''));
    mostrarEncriptacion(codificacion);
}

function mostrarEncriptacion(cadenaCodificada){    
       
    let cadenaTexto = document.getElementById("entrada-input-id").value;

    if(cadenaTexto != ''){             
        
        let contenedor = document.querySelector(".salida");

        let divs = contenedor.querySelectorAll('div');
        divs.forEach(element => {
            if(!element.classList.contains('salida-contenedor-mostrar')){
                element.style.display = 'none';
            }
        });

        let mostrarResultado = document.createElement('div');
        mostrarResultado.className = 'salida-contenedor-mostrar';
        mostrarResultado.innerHTML = `
            <div class="salida-mostrar-resultado">
                <h2 class="salida-titulo">Mensaje encriptado</h2>
                <textarea type="text" class="salida-input"></textarea>
            </div>
            <div class="salida-boton">
                <button onclick="copiarTexto();">Copiar</button>
            </div>
        `;

        
        contenedor.appendChild(mostrarResultado); 

        let input = mostrarResultado.querySelector('.salida-input');
        input.value = cadenaCodificada.join('');
    }
}

function copiarTexto(){    
    let texto = document.querySelector('.salida-input').value;
    navigator.clipboard.writeText(texto);    
}


function desencriptar(){
    let cadenaTexto = document.getElementById("entrada-input-id").value;
    cadenaTexto = cadenaTexto.replace(/ai/g, 'a');
    cadenaTexto = cadenaTexto.replace(/enter/g, 'e');
    cadenaTexto = cadenaTexto.replace(/imes/g, 'i');
    cadenaTexto = cadenaTexto.replace(/ober/g, 'o');
    cadenaTexto = cadenaTexto.replace(/ufat/g, 'u');
    mostrarDesencriptacion(cadenaTexto);

}

function mostrarDesencriptacion(cadenaTexto) {
    let mostrarResultado = document.createElement('div');
    mostrarResultado.className = 'salida-contenedor-mostrar';
    mostrarResultado.innerHTML = `
        <div class="salida-mostrar-resultado">
            <h2 class="salida-titulo">Mensaje desencriptado</h2>
            <textarea type="text" class="salida-input"></textarea>
        </div>
        <div class="salida-boton">
            <button onclick="copiarTexto()">Copiar</button>
        </div>
    `;

    let contenedor = document.querySelector('.salida');
    contenedor.innerHTML = '';
    contenedor.appendChild(mostrarResultado);

    let input = mostrarResultado.querySelector('.salida-input');
    input.value = cadenaTexto;
}



    