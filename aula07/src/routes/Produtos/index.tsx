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
          {listaProdutos.map((Produtos) => (
            <tr key={(Produtos.id)}>
              <td>{Produtos.nome}</td>
              <td>{Produtos.preco}</td>
              <td>{Produtos.qtd}</td>
              <td>{Produtos.descricao}</td>
              <td>{Produtos.imagem}</td>
              <td><Link to={`/editar/produtos/${Produtos.id}`}>Editar</Link> </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>
              <span>Quantidade de produtos: {listaProdutos.length}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}