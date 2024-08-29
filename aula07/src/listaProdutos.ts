type Lista = {
    id: number;
    nome: string;
    preco: string;
    qtd: number;
    descricao: string;
    imagem: string;
}

export let listaProdutos: Lista[] = [
    { id: 1, nome: "Dr Mouse", preco: "40.45", qtd: 10, descricao: "mouse optico", imagem: "mouse.jpg" },
    { id: 2, nome: "Dr Teclado", preco: "100", qtd: 5, descricao: "teclado gamer", imagem: "teclado gamer.jpg" },
    { id: 3, nome: "Dr Tela", preco: "300", qtd: 2, descricao: "Monitor daora", imagem: "tela.jpg" },
    { id: 4, nome: "Dr Pc", preco: "1000", qtd: 5, descricao: "Computador gamer", imagem: "Computador gamer.jpg" },
    { id: 5, nome: "Dr Ssd", preco: "200", qtd: 10, descricao: "Armazenamento", imagem: "Armazenamento.jpg" }
];

