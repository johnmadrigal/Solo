import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
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

  const handleReset = (e) => {
    setGameData([]);
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
        const subjectData = {};
        if (res.data.actor) {
          subjectData.subject = 'actor';
          subjectData.name = res.data.actor.name;
        } else {
          subjectData.subject = 'movie';
          subjectData.name = res.data.movieName;
        }
        setGameData([subjectData, ...gameData]);
        setData(res.data);
        setCurrSubject('');
      })
      .catch((err) => console.log('err', err));
  };

  return (
    <div>
      <NavBar />
      <Switch>
        <div className="container-fluid row" id="main">
          <FavoritesContainer />
          <div className="col-6">
            <h1>So You're Not Good At The Movie Game</h1>
            <Route path="/howtoplay">
              <HowToPlay />
              <h3>Enter Movie or Actor</h3>
              <InputCard
                handleSubmit={handleSubmit}
                handleSubject={handleSubject}
                currSubject={currSubject}
              />
            </Route>
            <Route path="/about">
              <h3>About</h3>
              <p>Nothing Much, What About You</p>
            </Route>
            <Route path="/" exact>
              <p>
                Do you find yourself losing at the movie game all the time? Are you embarrassed to
                play because of FOLO (Fear Of Losing Often)? If you're like me, you enjoy movies but
                struggle to know an actors movie credits or maybe you lack the eccletic taste of
                movies your friends share let alone know what actor might be in it. Fear not!!! You
                can use this tool to improve your knowledge and finally reign supreme the next time
                you play the movie game!
              </p>

              <h3>Enter Movie or Actor</h3>
              <InputCard
                handleSubmit={handleSubmit}
                handleSubject={handleSubject}
                currSubject={currSubject}
              />
              <DataContainer data={data} />
            </Route>
          </div>
          <GameContainer data={gameData} handleReset={handleReset} />
        </div>
      </Switch>
    </div>
  );
};

export default App;
