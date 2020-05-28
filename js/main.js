function clicou(){
    document.getElementById("agradecimento").innerHTML="Obrigado por ter clicado";
}

function redirecionar(){
    window.open("http://google.com.br/");
    //window.location.href="www.google.com.br";
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse"
    //alert("Trocar texto");
    elemento.innerHTML="Obrigado por passar o mouse";

}

function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui";
}

function funcaoChange(elemento){
console.log(elemento.value);

}