import React from 'react';
import Pregunta from './components/Pregunta';

function App() {
  return (
   <div className="container">
     <header>
       <h1>Control de gastos semanal</h1>
       <div className="contenido-principal contenido">
          <Pregunta />
       </div>

     </header>
   </div>
  );
}

export default App;
