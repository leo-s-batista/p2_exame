import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { api } from '../../axios.js'
import { ErrorView } from './error.jsx';
import { SuccessView } from './success.jsx';

import './styles.scss';

export function Newsletter() {

 const [sent, setSent] = useState(false);
 const [error, setError] = useState(false);
 const [validated, setValidated] = useState(false);
 const [formValues, setFormValues] = useState({
    nome_completo: '',
    email: '',
    rua: '',
    complemento: '',
    cidade: '',
    estado: '',
    privacy_term: false,
    notifications: false
 });

 const handleSubmit = (event) => {
    const form = event.currentTarget;

    setValidated(true);

    event.preventDefault();

    if (form.checkValidity()) {
      api.post('/newsletter', formValues).then((response) => {
        setSent(true);
      }).catch((error) => {
        console.log(error);
        setSent(true);
        setError(true);
      });
    }
 };

 const handleReset = () => {
    setSent(false);
    setError(false);
    setValidated(false);
    setFormValues({
      nome_completo: '',
      email: '',
      rua: '',
      complemento: '',
      cidade: '',
      estado: '',
      privacy_term: false,
      notifications: false
    });
 }

 return (
    sent ? (error ? <ErrorView /> : <SuccessView handleReset={handleReset} />) :
      <div className="newsletter">
        <div className="newsletter--header">
          <div className="newsletter--header__title">Newsletter Carreira 3.0</div>
          <div className="newsletter--header__subtitle">Junte-se a quase 70 mil pessoas que recebem a Carreira 3.0 e esteja por dentro das principais tendências e oportunidades do mercado de trabalho</div>

        </div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nome Completo <span className="mandatory">*</span></Form.Label>
            <Form.Control
              required
              type="text"
              value={formValues.nome_completo}
              onChange={(e) => setFormValues({ ...formValues, nome_completo: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Campo obrigatório
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>E-mail <span className="mandatory">*</span></Form.Label>
            <Form.Control
              required
              type="email"
              value={formValues.email}
              placeholder="ex: email@yahoo.com"
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Campo obrigatório
            </Form.Control.Feedback>
          </Form.Group>

      <h1 className="newsletter--address">Endereço <span className="mandatory">*</span></h1>

          <Form.Group>
            <Form.Label>Rua</Form.Label>
            <Form.Control
              required
              type="text"
              value={formValues.rua}
              onChange={(e) => setFormValues({ ...formValues, rua: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Campo obrigatório
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Complemento</Form.Label>
            <Form.Control
              type="text"
              value={formValues.complemento}
              onChange={(e) => setFormValues({ ...formValues, complemento: e.target.value })}
            />
          </Form.Group>
          <Row>
          <Form.Group as={Col} md="6">
            <Form.Label>Cidade</Form.Label>
            <Form.Control
              required
              type="text"
              value={formValues.cidade}
              onChange={(e) => setFormValues({ ...formValues, cidade: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Campo obrigatório
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              pattern="[A-Za-z]{2}" maxLength={2}
              required
              type="text"
              value={formValues.estado}
              onChange={(e) => setFormValues({ ...formValues, estado: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Campo obrigatório
            </Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row className="checksRow">
          <Form.Group>
            <Form.Label>Aceito os <a href="/">Termos e Condições</a> e autorizo o uso de meus dados de acordo com a  <a href="/">Delcaração de Privacidade</a> <span className="mandatory">*</span></Form.Label>
            <Form.Check
              required
              type="checkbox"
              label="Sim"
              checked={formValues.privacy_term}
              onChange={(e) => setFormValues({ ...formValues, privacy_term: e.target.checked })}
            />
            <Form.Control.Feedback type="invalid">
              Campo obrigatório
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Aceito Receber comunicações sobre produtos da Exame</Form.Label>
            <Form.Check
              type="checkbox"
              label="Sim"
              checked={formValues.notifications}
              onChange={(e) => setFormValues({ ...formValues, notifications: e.target.checked })}
            />
          </Form.Group>
          </Row>
          <div className="flex justify-center pt-6 pb-12">
            <Button variant="success" type="submit">Enviar</Button>
          </div>
        </Form>
      </div >
 );
}
