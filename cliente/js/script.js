const comandaDiv = document.getElementById("comanda");
const totalDiv = document.getElementById("total");

let pedidos = [];

let valor = 3.00;

let x = 1;



let total = 0;

function adicionar()
{


    comandaDiv.innerHTML += `<li>Item ${x} R$${valor.toFixed(2)}</li>`;

    pedidos.push(valor.toFixed(2));



    for(contagem = x-1;contagem < x;contagem++)
    {

        total = total + valor;


            console.log(x);

        console.log(valor);
    }

    totalDiv.innerHTML = `Total da comanda: R$${total}`;

    valor += 1.00;

    x += 1;
}


