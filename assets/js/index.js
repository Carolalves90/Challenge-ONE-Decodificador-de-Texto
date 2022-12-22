/* 
- Criar função
- Ligar função ao botão correspondente no HTML
- Capturar o texto escrito no campo de input do HTML
- Desenvolver a lógica da criptografia
- Retornar na tela o resultado do texto criptografado
*/

let botaoCriptografar = document.getElementById("criptografar");

botaoCriptografar.onclick = function() {
    let texto = document.getElementById("entrada-texto").value;

    let res = texto.replace(/e/g, "enter");
    res = res.replace(/i/g, "imes");
    res = res.replace(/a/g, "ai");
    res = res.replace(/o/g, "ober");
    res = res.replace(/u/g, "ufat");

    document.getElementById("saida-texto").innerHTML = res;
    document.getElementById("entrada-texto").value = " ";
}

let botaoDescriptografar = document.getElementById("descriptografar");

botaoDescriptografar.onclick = function() {
    let texto = document.getElementById("saida-texto").value;

    let res = texto.replace(/enter/g, "e");
    res = res.replace(/imes/g, "i");
    res = res.replace(/ai/g, "a");
    res = res.replace(/ober/g, "o");
    res = res.replace(/ufat/g, "u");

    document.getElementById("saida-texto").innerHTML = res;
}

let imagem = document.querySelector("#imagem-inicial")

botaoCriptografar.addEventListener('click', function(){
    if(imagem.style.display === "inline-block"){
        imagem.style.display = "none"
    } else {
        imagem.style.display = "none" 
    }
})

let botaoCopiar = document.getElementById('copiar')

botaoCopiar.onclick = function(){
    let texto = document.getElementById("saida-texto").value;
    texto.select();
    texto.setSelectionRange(0, 99999)
    Document.execCommand("copy")

    alert("Texto copiado para área de transferência");
}