import {View, Text, FlatList} from 'react-native';
import React, {useContext} from 'react';
import styles from './ScoresTable.style';
import {ScoreContext} from '../../context/scoreContext';
import uuid from 'react-native-uuid';
import LineSeparator from '../LineSeparator/LineSeparator';
import TableRow from '../TableRow/TableRow';

const ScoresTable = () => {
  const {playerNames, scores} = useContext(ScoreContext);

  return (
    <ScoreContext.Consumer>
      {() => (
        <View style={styles.tableContainer}>
          <View style={styles.playerNameListContainer}>
            <FlatList
              data={playerNames}
              keyExtractor={x => uuid.v4()}
              horizontal
              scrollEnabled
              renderItem={({item}) => {
                return (
                  <Text
                    style={[
                      styles.playerNameText,
                      {flexBasis: 1 / playerNames.length},
                    ]}>
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
              scrollEnabled
              keyExtractor={x => uuid.v4()}
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
