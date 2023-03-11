import {Text, View, FlatList} from 'react-native';
import React from 'react';
import styles from './TableRow.style';
import LineSeparator from '../LineSeparator/LineSeparator';

const TableRow = ({rowNumber = 1, scores = [122, 34, -23, 12]}) => {
  return (
    <View>
      <View style={styles.rowContainer}>
        <Text style={styles.rowNumber}>{rowNumber}</Text>
        <FlatList
          data={scores}
          horizontal
          keyExtractor={x => x}
          contentContainerStyle={{
            justifyContent: 'space-between',
            flex: 1,
          }}
          renderItem={({item}) => <Text style={styles.scoreText}>{item}</Text>}
        />
      </View>
      <LineSeparator />
    </View>
  );
};

export default TableRow;
