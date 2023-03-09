import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginTop: '25%',
  },
  title: {
    fontFamily: 'ReadexPro-Regular',
    fontWeight: '400',
    fontSize: 25,
    letterSpacing: 0.1,
    color: AppStyles.color.white,
    marginBottom: '5%',
  },
  partnerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '5%',
  },
  partnerSectionText: {
    fontFamily: 'ReadexPro-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    letterSpacing: 0.01,
    color: AppStyles.color.white,
    marginRight: '5%',
  },
  nameInputSection: {
    //marginVertical: '10%',
  },
  partnersInputSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  partnersInputsList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '5%',
  },
});
