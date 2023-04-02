import {View, Text, FlatList} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import styles from './ScoresTable.style';
import {ScoreContext} from '../../context/scoreContext';
import uuid from 'react-native-uuid';
import LineSeparator from '../LineSeparator/LineSeparator';
import TableRow from '../TableRow/TableRow';

const ScoresTable = () => {
  const {playerNames, scores} = useContext(ScoreContext);

  const [rightSideScrollAmount, setRightSideScrollOffsetAmount] = useState(0);

  const namesListRef = useRef(null);

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
              ref={namesListRef}
              onScroll={e => {
                if (e.nativeEvent.contentOffset.x !== rightSideScrollAmount) {
                  if (
                    e.nativeEvent.contentOffset.x > 0 &&
                    rightSideScrollAmount > e.nativeEvent.contentOffset.x
                  ) {
                    setRightSideScrollOffsetAmount(
                      e.nativeEvent.contentOffset.x,
                    );
                  } else {
                    setRightSideScrollOffsetAmount(
                      e.nativeEvent.contentOffset.x,
                    );
                  }
                }
              }}
              renderItem={({item}) => {
                return (
                  <Text
                    style={[
                      styles.playerNameText,
                      {flexBasis: 1 / playerNames.length},
                    ]}>
                    {item.length > 9 ? item.slice(0, 7) + '..' : item}
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
                  index={x.index}
                  rightSideScrollAmount={rightSideScrollAmount}
                  setRightSideScrollOffsetAmount={
                    setRightSideScrollOffsetAmount
                  }
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
