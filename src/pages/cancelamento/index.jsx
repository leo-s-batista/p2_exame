import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { ListCancelamento } from './list.jsx';
import { useState } from 'react';
import { api } from '../../axios.js'

import './styles.scss';

export function Cancelamento() {

  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [newsletters, setNewsletters] = useState([]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (validated) {
      setValidated(false);
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() && email) {
      api.get(`/newsletter/${email}`).then((response) => {
        setNewsletters(response.data);
      }).catch((error) => {
        console.log(error);
      });


      setValidated(true);
    }
  }

  let result = ''

  if (validated) {
    if (newsletters.length > 0) {
      result = <ListCancelamento newsletters={newsletters} setEmail={setEmail} setValidated={setValidated} setNewsletters={setNewsletters} />
    } else {
      result = <p>Nenhuma assinatura encontrada</p>
    }
  }

  return (
    <div className="cancelamento">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} md="6">
            <Form.Label>Informe seu E-mail</Form.Label>
            <Row className="cancelamento--input">
              <Form.Control
                required
                value={email}
                onChange={handleEmailChange}
              />
              <Button onClick={handleSubmit} variant="success">Buscar</Button>
            </Row>
            <Form.Control.Feedback type="invalid">
              Campo obrigatório
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
      </Form>

      <div className="cancelamento--result">
        { result }
      </div>

      
    </div>
  );
}