import { Link } from 'react-router-dom';
import './styles.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export function Home() {
  return (
    <div className="home">
      <Card className="home--card">
        <Card.Header>Newsletter</Card.Header>
        <Card.Body>
          <Card.Title>Assinar Newsletter</Card.Title>
          <Card.Text>
            Quer receber as dicas de carreiras, vagas de emprego e ficar por dentro das tendências do mercado de trabalho ?
          </Card.Text>
          <Button variant="success">
            <Link to="/newsletter">Assinar</Link>
          </Button>
        </Card.Body>
      </Card>
      <Card className="home--card">
        <Card.Header>Cancelamento</Card.Header>
        <Card.Body>
          <Card.Title>Cancelar a Newsletter</Card.Title>
          <Card.Text>
            Use seu e-mail para cancelar a assinatura da newsletter.
          </Card.Text>
          <Button variant="success">
            <Link to="/cancelamento">Cancelar</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}