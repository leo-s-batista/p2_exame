import { Routes, Route } from 'react-router-dom';

import { Default } from './layouts/default/index.jsx';
import { Home } from './pages/home/index.jsx';
import { Inscricao } from './pages/inscricao/index.jsx';
import { Cancelamento } from './pages/cancelamento/index.jsx';

export function CreateRouter () {
  return (
    <Routes>
      <Route path="" element={<Default />} >
        <Route path="/" element={<Home />} />
        <Route path="/inscricao" element={<Inscricao />} />
        <Route path="/cancelamento" element={<Cancelamento />} />
      </Route>
    </Routes>
  );
}