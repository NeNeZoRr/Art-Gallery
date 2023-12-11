import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Gallery from './Gallery';
import ButtonBar from './ButtonBar';
import { fetchData, setData } from './features/dataSlice'; 

const App = () => {
  const dispatch = useDispatch();
  const objectId = useSelector(state => state.data.objectId);
  const [data, setDataState] = useState({});
  const [artId, setArtId] = useState(12770);

  useEffect(() => {
    document.title = 'Welcome to ArtWorld';

    const fetchAndSetData = async () => {
      try {
        const response = await dispatch(fetchData(objectId));
        dispatch(setData(response.payload));
      } catch (error) {
        console.error('Error fetching and setting data:', error);
      }
    };

    fetchAndSetData();
  }, [objectId, dispatch]);

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
};

export default App;
