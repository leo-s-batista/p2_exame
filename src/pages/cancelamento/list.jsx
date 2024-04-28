import { Button, Table } from 'react-bootstrap';
import { api } from '../../axios.js'


export function ListCancelamento({ newsletters, setEmail, setValidated, setNewsletters }) {

  const handleDelete = (id) => {
    api.delete(`/newsletter/${id}`).then(() => {
      alert('Assinatura cancelada com sucesso!')
      let result = newsletters.filter((newsletter) => newsletter.id !== id)
      setNewsletters(result)

      if (result.length === 0) {
      setEmail('');
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
            <th>E-mail</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {newsletters.map((newsletter) => (
            <tr key={newsletter.id}>
              <td>{newsletter.id}</td>
              <td>{newsletter.email}</td>
              <td>
                <Button onClick={() => handleDelete(newsletter.id)} variant="danger">Cancelar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
}