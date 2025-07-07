 function filtrarItens() {
        const termo = document.getElementById("search").value.toLowerCase();
        const itens = document.querySelectorAll(".item");

        itens.forEach((item) => {
          const texto = item.querySelector("strong").innerText.toLowerCase();
          item.style.display = texto.includes(termo) ? "block" : "none";
        });

 // Armazenamento simples na sessão (simula banco)
  const mesas = [];
  const categorias = [];
  const items = [];

  const listaMesas = document.getElementById('listaMesas');
  const listaCategorias = document.getElementById('listaCategorias');
  const listaItens = document.getElementById('listaItens');
  const categoriaSelect = document.getElementById('categoriaItem');

  // Atualiza a lista visual de mesas
  function atualizarListaMesas() {
    listaMesas.innerHTML = '';
    mesas.forEach((m) => {
      const li = document.createElement('li');
      li.textContent = `Mesa ${m.numero}`;
      listaMesas.appendChild(li);
    });
  }

  // Atualiza a lista visual de categorias e o select dos itens
  function atualizarListaCategorias() {
    listaCategorias.innerHTML = '';
    categoriaSelect.innerHTML = '<option value="" disabled selected>Selecione uma categoria</option>';
    categorias.forEach((c) => {
      const li = document.createElement('li');
      li.textContent = c.nome;
      listaCategorias.appendChild(li);

      const option = document.createElement('option');
      option.value = c.nome;
      option.textContent = c.nome;
      categoriaSelect.appendChild(option);
    });
  }

  // Atualiza a lista visual de itens
  function atualizarListaItens() {
    listaItens.innerHTML = '';
    itens.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)} (Categoria: ${item.categoria})`;
      listaItens.appendChild(li);
    });
  }

  // Eventos dos formulários
  document.getElementById('formMesa').addEventListener('submit', function(e) {
    e.preventDefault();
    const numero = parseInt(document.getElementById('numeroMesa').value);
    if (!mesas.some(m => m.numero === numero)) {
      mesas.push({ numero });
      atualizarListaMesas();
      this.reset();
    } else {
      alert('Essa mesa já está cadastrada!');
    }
  });

  document.getElementById('formCategoria').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nomeCategoria').value.trim();
    if (nome && !categorias.some(c => c.nome.toLowerCase() === nome.toLowerCase())) {
      categorias.push({ nome });
      atualizarListaCategorias();
      this.reset();
    } else {
      alert('Categoria já cadastrada ou inválida.');
    }
  });

  document.getElementById('formItem').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nomeItem').value.trim();
    const preco = parseFloat(document.getElementById('precoItem').value);
    const categoria = document.getElementById('categoriaItem').value;
    if (!nome || !categoria || isNaN(preco)) {
      alert('Preencha todos os campos corretamente.');
      return;
    }
    items.push({ nome, preco, categoria });
    atualizarListaItens();
    this.reset();
  });
      }