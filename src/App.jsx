import React, { useState } from 'react';
import axios from 'axios';
import InputCard from './client/components/InputCard.jsx';
import DataCard from './client/components/DataCard.jsx';

const App = () => {
  const [currSubject, setCurrSubject] = useState('');
  const [prevSubject, setPrevSubject] = useState('');
  const [data, setData] = useState({});

  const handleSubject = (e) => {
    setCurrSubject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/movies', {
        query: currSubject,
      })
      .then((res) => {
        console.log(res.data);
        // console.log('data.data[0]', data.data[0]);
        // console.log(data.data);
        setData(res.data);
        setPrevSubject(currSubject);
        setCurrSubject('');
        // console.log(data);
      })
      .catch((err) => console.log('err', err));
  };

  return (
    <div>
      <div>
        <h3>Enter Movie or Actor</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleSubject} id={currSubject} />
        </form>
      </div>
      <h2>Data</h2>
      <DataCard data={data} />
    </div>
  );
};

export default App;
