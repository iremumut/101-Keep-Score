import {View, Text, FlatList} from 'react-native';
import React, {useContext, useRef, useEffect} from 'react';
import styles from './ScoresTable.style';
import {ScoreContext} from '../../context/scoreContext';
import uuid from 'react-native-uuid';
import LineSeparator from '../LineSeparator/LineSeparator';
import TableRow from '../TableRow/TableRow';

const ScoresTable = () => {
  const {playerNames, scores} = useContext(ScoreContext);

  const listRef = useRef();

  return (
    <ScoreContext.Consumer>
      {() => (
        <View style={styles.tableContainer}>
          <View style={styles.playerNameListContainer}>
            <FlatList
              data={playerNames}
              keyExtractor={x => uuid.v4()}
              horizontal
              scrollEnabled={false}
              contentContainerStyle={{
                flex: 1,
                width: '100%',
              }}
              renderItem={({item}) => {
                return (
                  <Text style={styles.playerNameText}>
                    {item.length > 9 ? item.slice(0, 9) + '..' : item}
                  </Text>
                );
              }}
            />
          </View>
          <LineSeparator />
          <View style={styles.rowContainer}>
            <FlatList
              data={scores}
              ref={listRef}
              keyExtractor={x => uuid.v4()}
              contentContainerStyle={{overflow: 'scroll'}}
              renderItem={x => (
                <TableRow
                  rowNumber={x.index + 1}
                  scores={x.item}
                  lastRow={x.index === scores.length - 1}
                />
              )}
            />
          </View>
        </View>
      )}
    </ScoreContext.Consumer>
  );
};

export default ScoresTable;
