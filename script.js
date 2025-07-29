function inserirNome() {
    let nomeUsuario = prompt("Qual é o seu nome?");
    let elemento = document.querySelector("#nome-usuario");
    elemento.textContent = nomeUsuario;
}
inserirNome();

let linguagens = ["JavaScript", "Pyton", "C++"];
console.log(linguagens[0]);
console.log(linguagens[1]);
console.log(linguagens[2]);

const lista = document.querySelector("#lista");
lista.textContent = linguagens[0];
//lista.textContent = linguagens[1];//
//lista.textContent = linguagens[2];//

let aluno1 = {
    nome: "Juliana",
    idade: 43,
    anoLetivo: "univeridade",
    materiasFavoritas: ["Matemática", "Robótica", "Pensamento Computacional"];
}
console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.materiasFavoritas);
console.log(aluno1.materiasFavoritas[1]);

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;
