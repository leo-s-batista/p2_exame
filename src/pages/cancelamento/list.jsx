import { Button, Table } from 'react-bootstrap';
import { api } from '../../axios.js'


export function ListCancelamento({ inscricoes, setCpf, setValidated, setInscricoes }) {

  const handleDelete = (id) => {
    api.delete(`/inscricao/${id}`).then(() => {
      let result = inscricoes.filter((inscricao) => inscricao.id !== id)
      setInscricoes(result)

      if (result.length === 0) {
      setCpf('');
      setValidated(false);
      }

    }).catch((error) => {
      console.log(error);
    });
  }

    return (
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Função Pretendida</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {inscricoes.map((inscricao) => (
            <tr key={inscricao.id}>
              <td>{inscricao.id}</td>
              <td>{inscricao.funcaoPretendida}</td>
              <td>
                <Button onClick={() => handleDelete(inscricao.id)} variant="danger">Cancelar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
}