import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearData, incrementId, decrementId, inputId, fetchData, fetchRandomData } from './features/dataSlice';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const renderImg = () => {
    if (data.apiData) {
      return <img style={{ width: '100%', maxWidth: '100vw', height: 'auto' }} src={data.apiData.primaryImage} alt={data.apiData.title} />;
    } else {
      return <p>image here</p>;
    }
  };

  useEffect(() => {
    dispatch(fetchData());
  }, [data.objectId, dispatch]);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <button onClick={() => dispatch(fetchRandomData())}>Random!</button>
          <button onClick={() => dispatch(clearData())}>Clear</button>
          <button onClick={() => dispatch(incrementId())}>Next</button>
          <button onClick={() => dispatch(decrementId())}>Back</button>
        </div>
        <input
          value={data.objectId}
          onChange={(e) => {
            dispatch(inputId(Number(e.target.value)));
          }}
          placeholder="Search by ID"
          style={{ marginLeft: '10px' }}
        />
      </div>
      <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

export default App;
