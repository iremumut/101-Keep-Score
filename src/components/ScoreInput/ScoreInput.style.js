import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  playerContainer: {
    flexBasis: '25%',
  },
  playerName: {
    textAlign: 'center',
    color: AppStyles.color.white,
    fontFamily: 'ReadexPro-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0.01,
  },
  playerInput: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    height: 35,
    marginTop: 10,
    textAlign: 'center',
    color: AppStyles.color.white,
    marginHorizontal: '5%',
  },
});
