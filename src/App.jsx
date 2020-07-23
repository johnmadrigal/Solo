import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import InputCard from './client/components/InputCard.jsx';
import DataContainer from './client/components/DataContainer.jsx';
import NavBar from './client/components/NavBar.jsx';
import FavoritesContainer from './client/components/FavoritesContainer.jsx';
import HowToPlay from './client/components/HowToPlay.jsx';
import GameContainer from './client/components/GameContainer.jsx';

const App = () => {
  const [currSubject, setCurrSubject] = useState('');
  const [data, setData] = useState({});
  const [gameData, setGameData] = useState([]);

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
        const subjectData = {};
        if (res.data.actor) {
          subjectData.subject = 'actor';
          subjectData.name = res.data.actor.name;
        } else {
          subjectData.subject = 'movie';
          subjectData.name = res.data.movieName;
        }
        setGameData([subjectData, ...gameData]);
        console.log(res.data);
        setData(res.data);
        setCurrSubject('');
      })
      .catch((err) => console.log('err', err));
  };

  return (
    <div>
      <NavBar />
      <div className="container-fluid row" id="main">
        <FavoritesContainer />
        <div className="col-6">
          <h1>So You're Not Good At The Movie Game</h1>
          <p>
            If you're like me, you enjoy movies but struggle to know what movie actors are in or
            don't have the eccletic taste and knowledge of movies your friends share.
          </p>
          <Route path="/howtoplay">
            <h3>How to Play</h3>
            <p>
              1 person starts with a movie or an actors. If the person before you says a movie you
              have to say an actor in that movie, the next person has to say a movie that your actor
              is in and so on. Play with no repeats or no immediate repeats of actors/movies.
            </p>
          </Route>
          <h3>Enter Movie or Actor</h3>
          <InputCard
            handleSubmit={handleSubmit}
            handleSubject={handleSubject}
            currSubject={currSubject}
          />
          <DataContainer data={data} />
        </div>
        <GameContainer data={gameData} />
      </div>
    </div>
  );
};

export default App;
