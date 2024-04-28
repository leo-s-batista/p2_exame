import { Button } from 'react-bootstrap';

import './styles.scss';

export function SuccessView({ handleReset }) {
    return (
        <div className="newsletter">
            <div className="newsletter--success">Formulário enviado com sucesso</div>
            <Button onClick={handleReset} variant="success">
                Realizar outra Assinatura
            </Button>
        </div>
    );
}