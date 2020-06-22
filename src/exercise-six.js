import React, { useState } from 'react';

function ContadorHooks(props) {
  //this.state = { contador: 0 }
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Conteo: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}

export default ContadorHooks;