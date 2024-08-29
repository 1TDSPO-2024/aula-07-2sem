type Lista = {
    id: number
    nome: string
    preco: number
    qtd: number
    descricao: string
    img: string
}

export let listaProdutos: Lista[] = [
    { id: 1, nome: "Mouse", preco: 40.45, qtd: 10, descricao: "Mouse óptico", img: "mouse.jpg" },
    { id: 2, nome: "Teclado Mecânico", preco: 489.00, qtd: 5, descricao: "Teclado Gamer", img: "teclado.jpg" },
    { id: 3, nome: "Monitor Curvo", preco: 2895, qtd: 3, descricao: "Monitor 32''", img: "monitor.jpg" },
    { id: 4, nome: "Cadeira", preco: 2589, qtd: 6, descricao: "Cadeira Gamer", img: "cadeira.jpg" },
    { id: 5, nome: "Mouse Pad", preco: 75.00, qtd: 32, descricao: "Mouse pad temática", img: "mousePad.jpg" }

]