
type Lista = {
    id: number;
    nome: string;
    preco: number;
    qtd: number;
    descricao: string;
    imagem: string;
}

export let listaProdutos: Lista[] = [
    { id: 1, nome: "Mouse", preco: 40.45, qtd: 10, descricao: "Mouse óptico", imagem: "mouse.jpg" },
    { id: 2, nome: "Teclado", preco: 489.00, qtd: 5, descricao: "Teclado gamer", imagem: "teclado.jpg" },
    { id: 3, nome: "Monitor curvo", preco: 2895, qtd: 3, descricao: "Monitor 32''", imagem: "monitor.jpg" },
    { id: 4, nome: "TCadeira", preco: 2589, qtd: 6, descricao: "Cadeira gamer", imagem: "cadeira.jpg" },
    { id: 5, nome: "Mouse Pad", preco: 75.00, qtd: 32, descricao: "Mouse pad temática", imagem: "mouse-pad.jpg" },
];