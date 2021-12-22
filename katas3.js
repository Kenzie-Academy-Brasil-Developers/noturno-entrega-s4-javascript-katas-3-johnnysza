const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults (output, titulo){
    const displayResultados = document.getElementById("displayResultados");

    displayResultados.innerHTML = "";

    const tituloKata = document.createElement("h2");
    tituloKata.innerHTML = titulo;

    const paragrafoResultado = document.createElement("p");
    if (Array.isArray(output)){
        paragrafoResultado.innerHTML = output.join(", ") 
        console.log("Isso é um array")
    } else {
        paragrafoResultado.innerHTML = output
        console.log("Isso é um numero")
    }
     
    
    

    displayResultados.appendChild(tituloKata);
    displayResultados.appendChild(paragrafoResultado);
}

function kata1() {
    const output1 = []
    for (let contador1 = 1; contador1 <= 25; contador1++){
        output1.push(contador1);
    }
    showResults(output1, "Kata 1");
}

const botaoKata1 = document.getElementById("kata1");
botaoKata1.addEventListener("click", kata1);

function kata2() {
    const output2 = [];
    for (contador = 25; contador >= 1; contador--){
        output2.push(contador);
    }
    showResults(output2, "Kata 2");
}

const botaoKata2 = document.getElementById("kata2");
botaoKata2.addEventListener("click", kata2)

function kata3() {
    const output3 = []
    for (contador = -1; contador >= -25; contador--){
        output3.push(contador);
    }
    showResults(output3, "Kata 3");
}

const botaoKata3 = document.getElementById("kata3");
botaoKata3.addEventListener("click", kata3);

function kata4() {
    const output4 = []
    for (contador = -25; contador <= -1; contador++){
        output4.push(contador);
    }
    showResults(output4, "Kata 4")
}

const botaoKata4 = document.getElementById("kata4");
botaoKata4.addEventListener("click", kata4);

function kata5() {
    const output5 = []
    for (contador = 25; contador >= -25; contador--){
        if (contador % 2 !== 0)
        output5.push(contador);
    }
    showResults(output5, "Kata 5")
}

const botaoKata5 = document.getElementById("kata5");
botaoKata5.addEventListener("click", kata5);

function kata6() {
    const output6 = []
    for (contador = 3; contador <= 100; contador++){
        if(contador % 3 === 0)
        output6.push(contador);
    }
    showResults(output6, "Kata 6")
}

const botaoKata6 = document.getElementById("kata6");
botaoKata6.addEventListener("click", kata6);

function kata7() {
    const output7 = []
    for (contador = 7; contador <= 100; contador++){
        if(contador % 7 === 0)
        output7.push(contador);
    }
    showResults(output7, "Kata 7")
}

const botaoKata7 = document.getElementById("kata7");
botaoKata7.addEventListener("click", kata7);

function kata8() {
    const output8 = []
    for (contador = 100; contador >= 1; contador--){
        if(contador % 7 === 0 || contador % 3 === 0)
        output8.push(contador);
    }
    showResults(output8, "Kata 8")
}

const botaoKata8 = document.getElementById("kata8");
botaoKata8.addEventListener("click", kata8);

function kata9() {
    const output9 = []
    for (contador = 5; contador <= 100; contador++){
        if(contador % 5 === 0 && contador % 2 !== 0)
        output9.push(contador);
    }
    showResults(output9, "Kata 9")
}

const botaoKata9 = document.getElementById("kata9");
botaoKata9.addEventListener("click", kata9);

function kata10() {
    const output10 = []
    output10.push(sampleArray)
    
    showResults(sampleArray, "Kata 10")
}

const botaoKata10 = document.getElementById("kata10");
botaoKata10.addEventListener("click", kata10);


function kata11() {
    const output11 = []
    for (let contador = 0; contador < sampleArray.length; contador++){
        if(sampleArray[contador] % 2 === 0){
            output11.push(sampleArray[contador])
        }
    }
    showResults(output11, "Kata 11")
}

const botaoKata11 = document.getElementById("kata11");
botaoKata11.addEventListener("click", kata11);

function kata12() {
    const output12 = []
    for (let contador = 0; contador < sampleArray.length; contador++){
        if(sampleArray[contador] % 2 !== 0){
            output12.push(sampleArray[contador])
        }
    }
    showResults(output12, "Kata 12")
}

const botaoKata12 = document.getElementById("kata12");
botaoKata12.addEventListener("click", kata12);

function kata13() {
    const output13 = []
    for (let contador = 0; contador < sampleArray.length; contador++){
        if(sampleArray[contador] % 8 === 0){
            output13.push(sampleArray[contador])
        }
    }
    showResults(output13, "Kata 13")
}

const botaoKata13 = document.getElementById("kata13");
botaoKata13.addEventListener("click", kata13);


function kata14() {
    const output14 = []
    for (let contador = 0; contador < sampleArray.length; contador++){
        output14.push(sampleArray[contador] ** 2);
    }
    showResults(output14, "Kata 14")
}

const botaoKata14 = document.getElementById("kata14");
botaoKata14.addEventListener("click", kata14)

function kata15() {
    let output15 = 0;
    for (let contador = 1; contador <= 20; contador++){
        output15 += contador
    }
     showResults(output15, "Kata 15");
}

const botaoKata15 = document.getElementById("kata15");
botaoKata15.addEventListener("click", kata15)

function kata16() {
    let output16 = 0;
    for (let contador = 0; contador < sampleArray.length; contador++){
        output16 += sampleArray[contador]
    }
     showResults(output16, "Kata 16");
}

const botaoKata16 = document.getElementById("kata16");
botaoKata16.addEventListener("click", kata16)

function kata17() {
    let output17 = sampleArray[0];
    for (let contador = 0; contador < sampleArray.length; contador++){
        if (sampleArray[contador] < output17){
            output17 = sampleArray[contador]
        }
    }
    showResults(output17, "Kata 17")
}

const botaoKata17 = document.getElementById("kata17");
botaoKata17.addEventListener("click", kata17)

function kata18() {
    let output18 = sampleArray[0];
    for(let contador = 0; contador < sampleArray.length; contador++){
       if (sampleArray[contador] > output18){
           output18 = sampleArray[contador]
       }
    }
    showResults(output18, "Kata 18")
}

const botaoKata18 = document.getElementById("kata18");
botaoKata18.addEventListener("click", kata18)

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
