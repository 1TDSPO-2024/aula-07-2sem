type Lista = {
    id:number;
    nome:string;
    preco:number;
    qtd:number;
    descricao:string;
    imagem:string;
}

export let listaProdutos:Lista[] = [
    {id:1, nome:"Mouse", preco:40.45, qtd:10, descricao:"Mouse Gamer", imagem:"mouse.jpg"},
    {id:2, nome:"Teclado Mecânico", preco:489.00, qtd:5, descricao:"Teclado Gamer", imagem:"teclado.jpg"},
    {id:3, nome:"Monitor Curvo", preco:2895, qtd:3, descricao:"Monitor 32", imagem:"monitor.jpg"},
    {id:4, nome:"Cadeira", preco:870.00, qtd:6, descricao:"Cadeira Gamer", imagem:"cadeira.jpg"},
    {id:5, nome:"Headset", preco:231.90, qtd:7, descricao:"Headset Gamer", imagem:"headset.jpg"},
];