import React from 'react';
import GameCard from './GameCard.jsx';

const GameContainer = (props) => {
  const { data } = props;

  const list = data.map((subject) => <GameCard data={subject} />);

  return (
    <div className="col-3">
      <h3>Game Board</h3>
      <button />
      {list}
    </div>
  );
};

export default GameContainer;
