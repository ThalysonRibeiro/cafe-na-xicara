//função de pesquisa
function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');
    // seleciona o input de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = `<div class="item-resultado"><P>Por favor digite alguma coisa relacionada a Café</p></div>`;
        return;
    }
    //transfomra tudo em letras menusculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let tipo = "";
    let sabor = "";
    let caracteristicas = "";
    let origem = "";
    let torraIdeal = "";
    let metodosPreparo = "";
    let notasDeDegustacao = "";
    let tags = "";

    // Itera sobre cada dado da lista de resultados da pesquisa
    for (let dado of tiposDeCafe) {
        tipo = dado.tipo.toLowerCase();
        sabor = dado.sabor.toLowerCase();
        caracteristicas = dado.caracteristicas.toLowerCase();
        origem = dado.origem.toLowerCase();
        torraIdeal = dado.torraIdeal.toLowerCase();
        metodosPreparo = dado.metodosPreparo.toLowerCase();
        notasDeDegustacao = dado.notasDeDegustacao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // se titulo oncludes da lisata de dados
        if (
            tipo.includes(campoPesquisa) ||
            sabor.includes(campoPesquisa) ||
            caracteristicas.includes(campoPesquisa) ||
            origem.includes(campoPesquisa) ||
            dado.torraIdeal.includes() ||
            metodosPreparo.includes(campoPesquisa) ||
            notasDeDegustacao.includes(campoPesquisa) ||
            tags.includes(campoPesquisa)
        ) {
            //Cria um novo elemento
            resultados += /* html */`<div class="item-resultado">
            <h2>${dado.tipo}</h2>
            <p><strong>Caracteristicas: </strong>${dado.caracteristicas}</p>
            <p><strong>Origem: </strong>${dado.origem}</p>
            <p><strong>Torra Ideal: </strong>${dado.torraIdeal}</p>
            <p><strong>Metodo de Preparo: </strong>${dado.metodosPreparo}</p>
            <p><strong>Notas de Degustação: </strong>${dado.notasDeDegustacao}</p>
            <p class="descricao-meta"><a href="${dado.link}" target="_blank">mais
                informações...</a>
        </div>`;
        }
    }
    //se caso pesquisar e não tiver resultado
    if (!resultados) {
        resultados = `<div class="item-resultado"><P>Nada foi encontrado</p></div>`
    }
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}

// Seleciona a seção onde os resultados serão exibidos
let sectionCards = document.getElementById('container-cards');

// Inicializa uma string vazia para armazenar os resultados formatados em HTML
let card = "";

// Itera sobre cada dado da lista de card da pesquisa
for (let bebidas of bebidasDeCafe) {
    // Constrói o HTML para um resultado individual
    card +=/* html */ `
           <div class="card">
                <img src="${bebidas.imagem}" alt="">
                <p><strong>Nome: </strong>${bebidas.nome}<br>
                    <strong>Ingredientes: </strong>${bebidas.ingredientes}<br>
                    <strong>Preparo: </strong>${bebidas.preparo}<br>
                    <strong>Bebidas: </strong>${bebidas.base}<br>
                </p>
            </div>
      
      `;
}

// Atribui o HTML gerado para a seção de card
sectionCards.innerHTML = card;