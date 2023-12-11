import React, { useState, useEffect } from 'react';
import Gallery from './Gallery';
import ButtonBar from './ButtonBar';

function App() {
  let [data, setData] = useState({});
  let [artId, setArtId] = useState(12770);

  useEffect(() => {
    document.title = 'Welcome to ArtWorld';
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resdata => setData(resdata));
  }, [artId]);

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };

  const displayImage = () => {
    if (!data.primaryImage) {
      return <h2>No Image!</h2>;
    }
    return <Gallery objectImg={data.primaryImage} title={data.title} />;
  };

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <div style={{ marginTop: '50px' }}>
        <h1>{data.title}</h1>
      </div>
      <div style={{ width: '100%' }}>
        {displayImage()}
      </div>
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
