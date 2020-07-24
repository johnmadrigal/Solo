import React from 'react';
import GameCard from './GameCard.jsx';

const GameContainer = (props) => {
  const { data, handleReset } = props;

  const list = data.map((subject, idx) => <GameCard key={subject.name} idx={idx} data={subject} />);

  return (
    <div className="col-3">
      <h3>Game Board</h3>
      <button onClick={handleReset}>Reset</button>
      {list}
    </div>
  );
};

export default GameContainer;
