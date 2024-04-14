import { Button } from 'react-bootstrap';

import './styles.scss';

export function SuccessView({ handleReset }) {
    return (
        <div className="inscricao">
            <div className="inscricao--success">Formulário enviado com sucesso</div>
            <Button onClick={handleReset} variant="success">
                Realizar outra Inscrição
            </Button>
        </div>
    );
}