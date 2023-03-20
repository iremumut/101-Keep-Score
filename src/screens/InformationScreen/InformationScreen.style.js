import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    marginVertical: '15%',
    marginHorizontal: '10%',
    paddingHorizontal: '10%',
    width: '100%',
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
    marginVertical: '10%',
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
    marginTop: '5%',
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
