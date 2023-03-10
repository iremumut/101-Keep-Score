import React, {createContext, useState} from 'react';

export const ScoreContext = createContext();

export const ContextProvider = props => {
  const [playerCount, setPlayerCount] = useState(4);

  const [playerNames, setPlayerNames] = useState([
    'Player #1',
    'Player #2',
    'Player #3',
    'Player #4',
    /*'Player #5',
    'Player #6',*/
  ]);

  const [isPartners, setIsPartners] = useState(false);

  const changePlayerCount = count => {
    setPlayerCount(count);
    const names = [];
    for (var i = 0; i < count; i++) {
      names.push(`Player #${i}`);
    }
    setPlayerNames(names);
  };

  const changePlayerName = (playerNumber, name) => {
    const names = [...playerNames];
    names[playerNumber] = name;
    setPlayerNames(names);
  };

  const changePartners = () => {
    if (!isPartners && playerCount % 2 !== 0) {
      return;
    }
    setIsPartners(!isPartners);
  };

  const getPlayerName = playerNumber => {
    return toString(playerNames[playerNumber]);
  };

  return (
    <ScoreContext.Provider
      value={{
        playerCount,
        changePlayerCount,
        playerNames,
        setPlayerNames,
        changePlayerName,
        isPartners,
        changePartners,
        getPlayerName,
      }}>
      {props.children}
    </ScoreContext.Provider>
  );
};
