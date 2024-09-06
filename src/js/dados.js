//dados de tipos de café
const tiposDeCafe = [
    {
        tipo: "Arábica",
        sabor: "suave, acidez equilibrada, aroma intenso",
        caracteristicas: "considerado o café nobre, diversas variedades",
        origem: "Brasil, Colômbia",
        torraIdeal: "média",
        metodosPreparo: "coado, espresso",
        notasDeDegustacao: "chocolate, frutas cítricas",
        link: "https://pt.wikipedia.org/wiki/Coffea_arabica",
        tags: "café cafe"
    },
    {
        tipo: "Robusta",
        sabor: "forte, corpo intenso, baixo teor de acidez",
        caracteristicas: "mais resistente a pragas, sabor mais encorpado",
        origem: "Vietnã, Indonésia",
        torraIdeal: "escura",
        metodosPreparo: "espresso café com leite",
        notasDeDegustacao: "terroso, nozes",
        link: "https://pt.wikipedia.org/wiki/Coffea_canephora",
        tags: "café cafe"
    },
    {
        tipo: "Conilon",
        sabor: "forte, amargo, corpo intenso",
        caracteristicas: "mais resistente, amplamente cultivado no Brasil",
        origem: "Brasil",
        torraIdeal: "escura",
        metodosPreparo: "espresso café com leite",
        notasDeDegustacao: "terroso, vegetal",
        link: "https://pt.wikipedia.org/wiki/Coffea_canephora",
        tags: "café torra escura vegetal"
    },
    {
        tipo: "Bourbon",
        sabor: "suave, acidez equilibrada, aroma floral",
        caracteristicas: "variedade do arábica, grãos grandes e arredondados",
        origem: "Brasil",
        torraIdeal: "média",
        metodosPreparo: "coado espresso",
        notasDeDegustacao: "frutas vermelhas, caramelo",
        link: "https://en.wikipedia.org/wiki/Bourbon_coffee#:~:text=Bourbon%20is%20a%20cultivar%20of,Both%20originated%20in%20Yemen.&text=Bourbon%20coffee%20was%20first%20produced,as%20Île%20Bourbon%20before%201789.",
        tags: "café torra média coado"
    },
    {
        tipo: "Catuaí",
        sabor: "suave, acidez equilibrada, corpo médio",
        caracteristicas: "variedade do arábica, alta produtividade",
        origem: "Brasil",
        torraIdeal: "média",
        metodosPreparo: "coado espresso",
        notasDeDegustacao: "chocolate, frutas cítricas",
        link: "https://pt.wikipedia.org/wiki/Coffea_arabica",
        tags: "café torra média coado chocolate"
    },
    {
        tipo: "Novo Mundo",
        sabor: "suave, corpo médio, aroma floral",
        caracteristicas: "variedade do arábica, resistente a doenças",
        origem: "Brasil",
        torraIdeal: "média",
        metodosPreparo: "coado espresso",
        notasDeDegustacao: "frutas cítricas, caramelo",
        link: "https://pt.wikipedia.org/wiki/Café#:~:text=Na%20sua%20peregrinação%20pelo%20mundo,Porto%20Rico%20e%20Cuba.%20Gabriel",
        tags: "café torra média coado caramelo"
    },
    {
        tipo: "Caturra",
        sabor: "suave, acidez equilibrada, corpo médio",
        caracteristicas: "variedade do bourbon, planta de porte menor",
        origem: "Brasil",
        torraIdeal: "média",
        metodosPreparo: "coado espresso",
        notasDeDegustacao: "avelã, chocolate",
        link: "https://pt.wikipedia.org/wiki/Coffea_arabica",
        tags: "café torra média avelâ"
    },
    {
        tipo: "Acaiá",
        sabor: "suave, acidez equilibrada, corpo médio",
        caracteristicas: "variedade do arábica, grãos grandes",
        origem: "Brasil",
        torraIdeal: "média",
        metodosPreparo: "coado espresso",
        notasDeDegustacao: "frutas vermelhas, caramelo",
        link: "https://pt.wikipedia.org/wiki/Coffea_arabica",
        tags: "café torra média coado frutas"
    }
];

const bebidasDeCafe = [
    {
        imagem: "https://i.postimg.cc/jdctKh6H/espresso.png",
        nome: "Espresso",
        ingredientes: "café espresso",
        preparo: "Extraído sob alta pressão, servido em pequenas xícaras.",
        base: "espresso"
    },
    {
        imagem: "https://i.postimg.cc/R6CY6HtM/Cappuccino.png",
        nome: "Cappuccino",
        ingredientes: "espresso, leite vaporizado, espuma de leite",
        preparo: "Espresso coberto com leite vaporizado e espuma de leite, polvilhado com cacau em pó.",
        base: "espresso"
    },
    {
        imagem: "https://i.postimg.cc/0603yfbW/Irish-Coffee.png",
        nome: "Irish Coffee",
        ingredientes: "café, whisky irlandês, açúcar, creme de leite",
        preparo: "Café quente com whisky irlandês, açúcar e creme de leite por cima.",
        base: "coado"
    },
    {
        imagem: "https://i.postimg.cc/HVFFZnq2/Caff-Latte.png",
        nome: "Caffè Latte",
        ingredientes: "espresso, leite vaporizado",
        preparo: "Espresso com uma grande quantidade de leite vaporizado.",
        base: "espresso"
    },
    {
        imagem: "https://i.postimg.cc/tsPwLyyH/Caf-Macchiato.png",
        nome: "Café Macchiato",
        ingredientes: "espresso, um toque de leite",
        preparo: "Espresso com uma pequena quantidade de leite, geralmente com uma mancha de espuma.",
        base: "espresso"
    },
    {
        imagem: "https://i.postimg.cc/B80k3yQP/Caf-Mocha.png",
        nome: "Café Mocha",
        ingredientes: "espresso, chocolate quente, leite vaporizado, creme chantilly",
        preparo: "Combinação de espresso, chocolate quente, leite vaporizado e creme chantilly.",
        base: "espresso"
    },
    // {
    //     imagem: "",
    //     nome: "Café Duplo",
    //     ingredientes: "dois espressos",
    //     preparo: "Dois shots de espresso servidos em uma xícara.",
    //     base: "espresso"
    // }
];