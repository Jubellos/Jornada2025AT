function inserirNome(){
let nomeUsuario = prompt("Qual é o seu nome?");
let elemento = document.querySelector ("#nome-usuario");
elemento.textContent = nomeUsuario;
}
inserirNome();
let linguagens = ["JavaScript","Pyton","C"]
console.log(linguagens[0])