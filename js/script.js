const comandaDiv = document.getElementById("comanda");
const totalDiv = document.getElementById("total");

const select = document.getElementById("opcoes");
const quantidade = document.getElementById("qtd");



let x = 1;



let total = 0;

function adicionar()
{
    if(select.value != "")
    {

        const selecionada = select.options[select.selectedIndex];

        const nome = selecionada.dataset.name;
        const preco = selecionada.dataset.price;



        comandaDiv.innerHTML += `<li>${nome} R$${preco}   qtd:${quantidade.value}</li>`;



        for(contagem = x-1;contagem < x;contagem++)
        {

            total = total + parseFloat(preco) * quantidade.value;



        }

        totalDiv.innerHTML = `Total da comanda: R$${total.toFixed(2)}`;

    

        x += 1;

        select.value = "";
    }
    else
    {
        alert("Escolha uma opção!");
    }
}


