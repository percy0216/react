import React, { useEffect, useState } from 'react';

function DBConexion() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('http://localhost/backend/') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la conexión: ' + response.status);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message); 
      });
  }, []);

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Conexión con el Backend</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : data ? (
        <p style={{textAlign: 'center'}}>Mensaje del backend: {data.message}</p>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}

export default DBConexion;
