import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import styles from './TableRow.style';
import LineSeparator from '../LineSeparator/LineSeparator';
import {IconDelete} from '../../assets/icons';
import {ScoreContext} from '../../context/scoreContext';
import uuid from 'react-native-uuid';

const TableRow = ({rowNumber, scores, lastRow}) => {
  const {deleteLastScores} = useContext(ScoreContext);

  return (
    <ScoreContext.Consumer>
      {() => (
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.rowNumber}>{rowNumber}</Text>
            <View style={styles.rowScores}>
              <FlatList
                data={scores}
                horizontal
                keyExtractor={x => uuid.v4()}
                contentContainerStyle={{
                  justifyContent: 'space-between',
                  flex: 1,
                }}
                renderItem={({item}) => (
                  <Text style={styles.scoreText}>{item}</Text>
                )}
              />
              <View style={styles.deleteIcon}>
                {lastRow ? (
                  <TouchableOpacity onPress={deleteLastScores}>
                    <IconDelete />
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
          </View>
          <LineSeparator />
        </View>
      )}
    </ScoreContext.Consumer>
  );
};

export default TableRow;
