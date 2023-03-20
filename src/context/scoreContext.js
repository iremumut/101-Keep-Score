import React, {createContext, useState} from 'react';

export const ScoreContext = createContext();

const initial_Data = {
  playerNames: ['Player #1', 'Player #2', 'Player #3', 'Player #4'],
  playerCount: 4,
  partners: false,
};

export const ContextProvider = props => {
  const [playerCount, setPlayerCount] = useState(initial_Data.playerCount);

  const [playerNames, setPlayerNames] = useState([...initial_Data.playerNames]);

  const [scores, setScores] = useState([]);

  const [isPartners, setIsPartners] = useState(initial_Data.partners);

  const [winners, setWinners] = useState([]);

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

  const addScores = oneRowScores => {
    setScores([...scores, oneRowScores]);
  };

  const deleteLastScores = () => {
    const newScores = scores.slice(0, scores.length - 1);
    setScores(newScores);
  };

  const getWinners = () => {
    let res = [];
    playerNames.forEach((x, ind) => {
      let sum = 0;
      scores.forEach(x => {
        sum = sum + x[ind];
      });
      res.push({score: sum, name: x});
    });

    if (isPartners) {
      const newRes = [...res];
      res = [];
      for (let i = 0; i <= newRes.length - 1; i = i + 2) {
        const team = {
          name: `${playerNames[i]}-${playerNames[i + 1]}`,
          score: newRes[i].score + newRes[i + 1].score,
        };
        res.push(team);
      }
    }
    const newArr = res.sort((a, b) => {
      if (a.score < b.score) {
        return -1;
      } else return 1;
    });

    setWinners(newArr);
    setScores([]);
    setPlayerNames([...initial_Data.playerNames]);
    setPlayerCount(initial_Data.playerCount);
    setIsPartners(initial_Data.partners);
  };

  const clearWinners = () => {
    setWinners([]);
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
        addScores,
        scores,
        deleteLastScores,
        winners,
        getWinners,
        clearWinners,
      }}>
      {props.children}
    </ScoreContext.Provider>
  );
};
