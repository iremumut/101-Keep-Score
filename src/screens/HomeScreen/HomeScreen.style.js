import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'RedHatDisplay-Black',
    fontWeight: 900,
    fontStyle: 'normal',
    fontSize: 70,
    lineHeight: 100,
    color: AppStyles.color.white,
    marginTop: '20%',
    letterSpacing: 0.1,
    paddingHorizontal: '25%',
  },
  startButton: {
    position: 'absolute',
    bottom: '20%',
    alignSelf: 'center',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    height: 45,
  },
  startButtonBorder: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: AppStyles.color.white,
    flex: 0.2,
    shadowColor: AppStyles.color.white,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  startButtonText: {
    color: AppStyles.color.white,
    fontFamily: 'ReadexPro-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
    flex: 1,
    width: '100%',
    flex: 0.8,
  },
});
