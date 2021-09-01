let result = document.querySelector("#result");
let resultBox = document.getElementById("resultBox")
let calcButton = document.querySelectorAll("button.btnCalcular");

calcButton[1].addEventListener('click', circleEspira);


let mi = 4 * Math.PI * Math.pow(10, -7);

function circleEspira() {
    let campo = document.getElementById("Campo").value;
    let permeabilidadeMagnetica = document.getElementById("mi").value;
    
    let intensidade = document.getElementById("intensidade").value;
    let raio = document.getElementById("raio").value;
    let total;

    if(permeabilidadeMagnetica == 0) {
        permeabilidadeMagnetica = mi;
    } 

    if (campo == 0) {
        campo = (permeabilidadeMagnetica * intensidade) / (2 * raio);
        total = campo
        createResult('Campo magnético', 'T', total.toFixed(2));
    } else if(campo != 0){
       if(intensidade == 0) {
        intensidade = (permeabilidadeMagnetica / 2  * raio) - campo;
        total = intensidade;
        createResult('Corrente elétrica', 'A', total.toFixed(2));
       } else if(raio == 0) {
        raio = (permeabilidadeMagnetica * intensidade / 2 ) - campo; 
        total = raio;
        createResult('raio', 'm', total.toFixed(2));
       }
    }
    
}

calcButton[0].addEventListener('click', fioReto);
function fioReto() {
    let campo = document.getElementById("campoReto").value;
    let permeabilidadeMagnetica = document.getElementById("miReto").value;
    
    let intensidade = document.getElementById("intensidadeReto").value;
    let distancia = document.getElementById("distanciaReto").value;
    let total;
    let pi = Math.PI.toFixed(2);

    if(permeabilidadeMagnetica == 0) {
        permeabilidadeMagnetica = mi;
    } 

    if (campo == 0) {
        campo = permeabilidadeMagnetica * intensidade / 2 * pi *  distancia;
        total = campo
        createResult('Campo magnético', 'T', total.toFixed(2));
    } else if(campo != 0){
       if(intensidade == 0) {
           intensidade = (permeabilidadeMagnetica / 2  * pi * distancia) - campo;
        total = intensidade;
        createResult('Corrente elétrica', 'A', total.toFixed(2));
       } else if(distancia == 0) {
        distancia = (permeabilidadeMagnetica * intensidade / 2 * pi) - campo; 
        total = distancia;
        createResult('distancia', 'm', total.toFixed(2));
       }
    }
}

calcButton[2].addEventListener('click', bobinaChata);
function bobinaChata() {
    let campo = document.getElementById("campoChatas").value;
    let n = document.getElementById("voltasChatas").value;
    let permeabilidadeMagnetica = document.getElementById("miChatas").value;
    
    let intensidade = document.getElementById("intensidadeChatas").value;
    let raio = document.getElementById("raioChatas").value;
    let total;

    

    total = Math.round(campo);

    if(permeabilidadeMagnetica == 0) {
        permeabilidadeMagnetica = mi;
    } 

    if (campo == 0) {
        campo = n * permeabilidadeMagnetica * intensidade / 2 * raio;
        total = campo;
        createResult('Campo magnético', 'T', total.toFixed(2));
    } else if(campo != 0){
       if(intensidade == 0) {
        intensidade = (permeabilidadeMagnetica * n/ 2  * raio) - campo;
        total = intensidade;

        createResult('Corrente elétrica', 'A', total.toFixed(2));
       } else if(raio == 0) {
        raio = (permeabilidadeMagnetica * intensidade  * n/ 2 ) - campo; 
        total = raio;

        createResult('raio', 'm', total.toFixed(2));
       } else if(n == 0) {
        n = ((permeabilidadeMagnetica * intensidade) / 2 * raio) - campo;
        total = n;

        createResult('voltas', ' ', Math.abs(total.toFixed(2)));
       }
    }


}

calcButton[3].addEventListener('click', Solenoide);
function Solenoide() {
    
    let campo = document.getElementById("CampoSolenoide").value;
    let l = document.getElementById("lSolenoide").value;
    let n = document.getElementById("nSolenoide").value;
    let permeabilidadeMagnetica = document.getElementById("miSolenoide").value;
    
    let intensidade = document.getElementById("intensidadeSolenoide").value;
    let total;

    if(permeabilidadeMagnetica == 0) {
        permeabilidadeMagnetica = mi;
    } 

    if (campo == 0) {
        campo = (l/n) *  permeabilidadeMagnetica * intensidade;
        total = campo;
        createResult('Campo magnético', 'T', total.toFixed(2));
    } else if(campo != 0){
       if(intensidade == 0) {
        intensidade = ((n/l) * permeabilidadeMagnetica) - campo;
        total = intensidade;

        createResult('Corrente elétrica', 'A', total.toFixed(2));
       } else if(l == 0) {
        l = (permeabilidadeMagnetica * intensidade  * n) - campo; 
        total = l;

        createResult('Comprimento', 'm', total.toFixed(2));
       } else if(n == 0) {
        n = (permeabilidadeMagnetica * l * intensidade) - campo;
        total = n;

        createResult('voltas', ' ', Math.abs(total));
       }
    }
}


function createResult(variable, unidade, total) {
    result.textContent =  `${variable} = ${total} ${unidade}`
    resultBox.classList.remove("hidden");
}