type Lista ={
    id:number;
    nome:string;
    preco:number;
    qtd:number;
    descricao:string;
    imagem:string;
}

export let listaProduto: Lista[] = [
    {id:1,nome:'mouse',preco: 40.45,qtd:10, descricao:'mouse gamer',imagem:'mouse.jpg'},
    {id:2, nome:'Teclado mecânico', preco: 480.45 , qtd:5, descricao:'teclado Gamer', imagem:'teclado.jpg'},
    {id:3, nome:'Monitor curvo', preco: 2.456, qtd:3, descricao:'Monitor 32', imagem:'monitor.jpg'},
    {id:4, nome:'cadeira', preco: 2.700 , qtd:6, descricao:'MCadeira Gamer', imagem:'cadeira.jpg'},
    {id:5, nome:'Mouse Pad', preco: 75.00, qtd:32, descricao:'moise pad tmatico', imagem:'mouse-pad.jpg'},
];