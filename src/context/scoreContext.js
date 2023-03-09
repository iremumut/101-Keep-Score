import React, {createContext, useState} from 'react';

export const ScoreContext = createContext();

export const ContextProvider = props => {
  const [playerCount, setPlayerCount] = useState(6);

  const [playerNames, setPlayerNames] = useState([
    'Player #1',
    'Player #2',
    'Player #3',
    'Player #4',
    'Player #5',
    'Player #6',
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
    /*names = [
      {...playerNames.slice(0, playerCount / 2)},
      {...playerNames.slice(playerCount / 2, playerCount)},
    ];
    setPlayerNames(names);*/
    setIsPartners(!isPartners);
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
      }}>
      {props.children}
    </ScoreContext.Provider>
  );
};
