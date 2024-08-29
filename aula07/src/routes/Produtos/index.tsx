import { Link } from "react-router-dom";
import { listaProduto } from "../listaProduto";


export default function Produtos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "PRODUTOS";

    return(
      <div>
        <h1>Olá, mundo sou o Produtos!</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Preco</th>
              <th>Quantidade</th>
              <th>Descricao</th>
              <th>Imagem</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {listaProduto.map((produto)=>(
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>{produto.qtd}</td>
                <td>{produto.descricao}</td>
                <td>{produto.imagem}</td>
                <td> <Link to={`/editar/produtos/${produto.id}`}>Editar</Link> </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>
                <span>quantidade de produtos{listaProduto.length}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }