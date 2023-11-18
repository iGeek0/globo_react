import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [aire, setAire] = useState(200);
  const nielMaximo = 300;

  const agregarAire = () => {
    if (aire < nielMaximo) {
      setAire(aire + 10);
    }
  };

  const quitarAire = () => {
    if (aire > 200) {
      setAire(aire - 10);
    }
  }

  const reset = () => {
    setAire(200);
  }

  useEffect(() => {
    if (aire === nielMaximo) {
      alert('Nivel Maximo de aire el globo');
    }
  }
  , [aire]);

  return (
    <div className='vh-100'>
      <div className="h-100 d-flex align-items-center justify-content-around flex-column">
        <h1 className='fw-bold'>GLOBO</h1>
        {
          aire >= nielMaximo ?
          (<><div style={{ fontSize: `${aire}px` }}>💥</div><h3 className='text-danger fw-bold'>Nivel Maximo de aire el globo</h3></>) :
          (<div style={{ fontSize: `${aire}px` }}>🎈</div>)
        }
        <h3 className='fw-bold'>Nivel de aire: {aire}</h3>
        <div className="d-flex">
          <span className='icono' onClick={agregarAire}>⬆️</span>
          <span className='icono' onClick={reset}>🔁</span>
          <span className='icono' onClick={quitarAire}>⬇️</span>
        </div>
      </div>
    </div>
  )
}

export default App

// https://es.piliapp.com/emoji/list/