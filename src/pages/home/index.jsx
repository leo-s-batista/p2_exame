import { Link } from 'react-router-dom';
import './styles.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export function Home() {
  return (
    <div className="home">
      <Card className="home--card">
        <Card.Header>Inscrição</Card.Header>
        <Card.Body>
          <Card.Title>Recrutamento Online</Card.Title>
          <Card.Text>
            Preencha agora mesmo um formulário para se inscrever em nosso processo seletivo.
          </Card.Text>
          <Button variant="success">
            <Link to="/inscricao">Realizar Inscrição</Link>
          </Button>
        </Card.Body>
      </Card>
      <Card className="home--card">
        <Card.Header>Cancelamento</Card.Header>
        <Card.Body>
          <Card.Title>Cancele sua Solicitação</Card.Title>
          <Card.Text>
            Use seu CPF para cancelar uma inscrição.
          </Card.Text>
          <Button variant="success">
            <Link to="/cancelamento">Cancelamento</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}