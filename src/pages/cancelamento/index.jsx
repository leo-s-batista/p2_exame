import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputMask from 'react-input-mask';
import { ListCancelamento } from './list.jsx';
import { useState } from 'react';
import { api } from '../../axios.js'

import './styles.scss';

export function Cancelamento() {

  const [validated, setValidated] = useState(false);
  const [cpf, setCpf] = useState('');
  const [inscricoes, setInscricoes] = useState([]);

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
    if (validated) {
      setValidated(false);
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity()) {
      api.get(`/inscricao/${cpf}`).then((response) => {
        setInscricoes(response.data);
      }).catch((error) => {
        console.log(error);
      });


      setValidated(true);
    }
  }

  let result = ''

  if (validated) {
    if (inscricoes.length > 0) {
      result = <ListCancelamento inscricoes={inscricoes} setCpf={setCpf} setValidated={setValidated} setInscricoes={setInscricoes} />
    } else {
      result = <p>Nenhuma inscrição encontrada</p>
    }
  }

  return (
    <div className="cancelamento">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} md="3">
            <Form.Label>Informe seu CPF</Form.Label>
            <InputMask value={cpf}
              onChange={handleCpfChange} mask="999.999.999-99" maskChar={null}>
              {(inputProps) => <Form.Control {...inputProps} type="text" required />}
            </InputMask>
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