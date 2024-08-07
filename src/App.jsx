import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    (async () => {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      const res = await fetch(url);
      const json = await res.json();
      setNutri(json);
    })();
  }, []);

  return (
    <div className="page">
      <header className="header">
        <strong>React Nutri</strong>
      </header>
      <main className="main">
        <div className="content">
          {nutri.map((item) => (
            <article key={item.id} className="article">
              <strong className="title">{item.titulo}</strong>
              <img src={item.capa} alt={item.titulo} />
              <p>{item.subtitulo}</p>
              <button className="button">Acessar</button>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
