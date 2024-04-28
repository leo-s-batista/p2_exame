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
  const [sent, setSent] = useState('');
  const [newsletters, setNewsletters] = useState([]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (validated) {
      setValidated(false);
      setSent(false)
    }
  }

  const handleSubmit = (event) => {
    let form = event.currentTarget;
    event.preventDefault();
    
    if(form.localName === 'button') {
      form = document.querySelector('form');
    }
    
    setValidated(true);

    if (form.checkValidity() && email) {
      api.get(`/newsletter/${email}`).then((response) => {
        setSent(true);
        setNewsletters(response.data);
      }).catch((error) => {
        console.log(error);
      });


    }
  }

  let result = ''

  if (sent) {
    if (newsletters.length > 0) {
      result = <ListCancelamento newsletters={newsletters} setEmail={setEmail} setSent={setSent} setValidated={setValidated} setNewsletters={setNewsletters} />
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
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <Button onClick={handleSubmit} variant="success">Buscar</Button>
            <Form.Control.Feedback type="invalid">
              Digite um e-mail válido
            </Form.Control.Feedback>
            </Row>
          </Form.Group>
        </Row>
      </Form>

      <div className="cancelamento--result">
        { result }
      </div>

      
    </div>
  );
}