import { Link } from "react-router-dom";
import { listaProdutos } from "../../listaProdutos";

export default function Produtos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "PRODUTOS";

  return (
    <div>
      <h1>Olá, mundo sou o Produtos!</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Descrição</th>
            <th>Imagem</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {listaProdutos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.qtd}</td>
              <td>{produto.descricao}</td>
              <td>{produto.imagem}</td>
              <td> <Link to={`/editar/produtos/:${produto.id}`}>Editar</Link></td>
            </tr>
          ))}
          <tfoot>
            <tr>
              <td colSpan={6}>
                <span>Quantidade produtos{listaProdutos.length}</span>
              </td>
            </tr>
          </tfoot>
        </tbody>
      </table>
    </div>

  );
}