import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    marginVertical: '30%',
    marginHorizontal: '15%',
    flex: 1,
  },
  title: {
    fontFamily: 'ReadexPro-Regular',
    fontWeight: '400',
    fontSize: 25,
    letterSpacing: 0.1,
    color: AppStyles.color.white,
    marginBottom: '5%',
    width: '100%',
    textAlign: 'center',
  },
  partnerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '15%',
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
    flex: 1,
    //marginTop: '20%',
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
    flex: 1,
    marginVertical: '5%',
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  },
  nextButtonText: {
    color: AppStyles.color.white,
    fontFamily: 'ReadexPro-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
  },
});
