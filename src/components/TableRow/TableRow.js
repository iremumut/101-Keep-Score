import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useContext, useRef, useEffect} from 'react';
import styles from './TableRow.style';
import LineSeparator from '../LineSeparator/LineSeparator';
import {IconDelete} from '../../assets/icons';
import {ScoreContext} from '../../context/scoreContext';
import uuid from 'react-native-uuid';

const TableRow = ({rowNumber, scores, rightSideScrollAmount, index}) => {
  const {deleteRow} = useContext(ScoreContext);

  const rowRef = useRef(null);

  useEffect(() => {
    rowRef.current.scrollToOffset({
      offset: rightSideScrollAmount,
      animated: true,
    });
  }, [rightSideScrollAmount]);

  return (
    <ScoreContext.Consumer>
      {() => (
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.rowNumberContainer}>
              <Text style={styles.rowNumber}>{rowNumber}</Text>
            </View>
            <View style={styles.rowScores}>
              <FlatList
                data={scores}
                horizontal
                scrollEnabled
                ref={rowRef}
                keyExtractor={x => uuid.v4()}
                renderItem={({item, index}) => (
                  <Text
                    style={[
                      styles.scoreText,
                      index === 0 ? styles.firstText : null,
                    ]}>
                    {item}
                  </Text>
                )}
              />
              <View style={styles.deleteIcon}>
                <TouchableOpacity onPress={() => deleteRow(index)}>
                  <IconDelete />
                </TouchableOpacity>
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
