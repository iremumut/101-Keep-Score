import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  tableContainer: {
    marginTop: '30%',
    alignSelf: 'center',
    width: '100%',
    height: '75%',
    borderColor: AppStyles.color.white,
    borderRadius: 12.87,
    borderWidth: 0.58,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 0.9,
    shadowRadius: 12.87,
    backgroundColor: 'rgba(235, 167, 146, 0.2)',
    paddingVertical: 10,
    paddingHorizontal: 8,
  },
  playerNameListContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginVertical: '2%',
    paddingHorizontal: '5%',
  },
  playerNameText: {
    textAlign: 'center',
    color: AppStyles.color.white,
    fontFamily: 'ReadexPro-SemiBold',
    fontWeight: '600',
    fontSize: 14,
    letterSpacing: 0.01,
    flexBasis: '25%',
  },
  rowContainer: {
    flex: 1,
  },
});
