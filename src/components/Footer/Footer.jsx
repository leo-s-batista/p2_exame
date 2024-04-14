import { Logo } from '../Logo/Logo';

import './styles.scss';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer--logo">
        <Logo />
      </div>
      <div className="footer--author">
        <div className="footer--author__row"><b>Nome</b>: Leonardo de Souza Batista</div>
        <div className="footer--author__row"><b>RA</b>: 9332323844</div>

      </div>
    </footer>
  );
}