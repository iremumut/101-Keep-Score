import {View, Text, FlatList} from 'react-native';
import React, {useContext} from 'react';
import styles from './ScoresTable.style';
import {ScoreContext} from '../../context/scoreContext';
import uuid from 'react-native-uuid';
import LineSeparator from '../LineSeparator/LineSeparator';
import TableRow from '../TableRow/TableRow';

const ScoresTable = () => {
  const {playerNames} = useContext(ScoreContext);

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
                justifyContent: 'space-between',
                flex: 1,
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
            <TableRow />
          </View>
        </View>
      )}
    </ScoreContext.Consumer>
  );
};

export default ScoresTable;
