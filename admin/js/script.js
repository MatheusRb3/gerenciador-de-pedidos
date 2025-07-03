const lista = document.getElementById("lista_itens");
const botao_adicionar = document.getElementById("button_add");
const nome = document.getElementById("nome_produto");
const valor = document.getElementById("valor_produto");

const produtos = [];
const valores = [];


let x = 0;


botao_adicionar.addEventListener("click", function(){

    if(nome.value != "" && valor.value != "")
    {
        produtos.push(nome.value);
        valores.push(parseFloat(valor.value).toFixed(2));

        lista.innerHTML += `<li>${produtos[x]} R$${valores[x]}</li>`;

        x += 1;

        nome.value = "";
        valor.value = "";

        nome.focus();
    }
    else
    {
        alert("Preencha os dados!");

        nome.value = "";
        valor.value = "";

        nome.focus();
    }
});