import React, { useState } from 'react';
import axios from 'axios';
import InputCard from './client/components/InputCard.jsx';
import DataContainer from './client/components/DataContainer.jsx';
import NavBar from './client/components/NavBar.jsx';
import FavoritesContainer from './client/components/FavoritesContainer.jsx';

const App = () => {
  const [currSubject, setCurrSubject] = useState('');
  const [favSubject, setFavSubject] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [data, setData] = useState({});

  const handleAdd = (e) => {
    e.preventDefault();
    axios
      .post('/movies', {
        query: favSubject,
      })
      .then((res) => {
        console.log(res.data);
        const newFavs = [...favorites, favSubject];
        setFavorites(newFavs);
        setFavSubject('');
      })
      .catch((err) => console.log('err', err));
  };

  const handleFavSubject = (e) => {
    setFavSubject(e.target.value);
  };

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
        setData(res.data);
        setCurrSubject('');
      })
      .catch((err) => console.log('err', err));
  };

  return (
    <div>
      <NavBar />
      <FavoritesContainer
        favorites={favorites}
        handleAdd={handleAdd}
        favSubject={favSubject}
        handleFavSubject={handleFavSubject}
      />
      <div>
        <h3>How to Play</h3>
        <p>
          1 person starts with a movie or an actors. If the person before you says a movie you have
          to say an actor in that movie, the next person has to say a movie that your actor is in
          and so on. Play with no repeats or no immediate repeats of actors/movies.
        </p>
        <h3>Enter Movie or Actor</h3>
        <InputCard
          handleSubmit={handleSubmit}
          handleSubject={handleSubject}
          currSubject={currSubject}
        />
      </div>
      <h2>Data</h2>
      <DataContainer data={data} />
    </div>
  );
};

export default App;
