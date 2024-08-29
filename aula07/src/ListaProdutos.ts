type Lista = {
    id:number;
    nome: string;
    preco: number;
    qtd: number;
    descricao: string;
    imagem: string;
}

export let listaProdutos: Lista[] = [
    {id:1,nome:"Mouse", preco: 199, qtd:10, imagem: "mouse.jpg", descricao: "gpro superlight"},
    {id:2,nome:"Teclado mecanico", preco: 489, qtd:25, imagem: "teclado.jpg", descricao: "razer blackwidow"},
    {id:3,nome:"Monitor Curvo", preco: 4500, qtd:32, imagem: "monitor.jpg", descricao: "alienware 540hz"},
    {id:4,nome:"Headset gamer", preco: 560, qtd:17, imagem: "headset.jpg", descricao: "Hyperx cloud II"},
    {id:5,nome:"Controle", preco: 240, qtd:119, imagem: "controle.jpg", descricao: "8bitDo"},
];