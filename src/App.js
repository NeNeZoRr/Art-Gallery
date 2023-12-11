import { useState, useEffect } from 'react'
import Gallery from './Gallery'
import ButtonBar from './ButtonBar'

function App() {
  let [data, setData] = useState({})
  let [artId, setArtId] = useState(12770)

  useEffect(() => {
    document.title='Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resdata => setData(resdata))
  }, [artId])
  
  return (
    <div className="App">
      <h1>{data.title}</h1>
      <div style={{'width': '100%'}}>
        {displayImage()}
      </div>
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
}

export default App;
