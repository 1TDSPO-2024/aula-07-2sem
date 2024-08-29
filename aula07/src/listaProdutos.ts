type Lista = {
    id: number;
    nome: string;
    preco: number;
    qtd: number;
    descricao: string;
    imagem: string
}

export let listaProdutos: Lista[] = [
    { id: 1, nome: 'mouse', preco: 40.45, qtd: 10, descricao: 'Mouse optico', imagem: 'mouse.jpg' },
    { id: 1, nome: 'teclado mecanico', preco: 489.00, qtd: 5, descricao: 'Teclado Gamer', imagem: 'teclado.jpg' },
    { id: 1, nome: 'Monitor Curvo', preco: 2895.90, qtd: 3, descricao: 'Monitor 32"', imagem: 'monitor.jpg' },
    { id: 1, nome: 'Cadeira', preco: 2589.77, qtd: 3, descricao: 'Cadeira Gamer', imagem: 'cadeira.jpg' },
    { id: 1, nome: 'Mouse Pad', preco: 75.00, qtd: 32, descricao: 'Mouse Pad Tematico', imagem: 'mouse-pad.jpg' },
];