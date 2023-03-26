import {StyleSheet} from 'react-native';
import AppStyles from '../../constants/AppStyles';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 230,
    backgroundColor: AppStyles.color.orange,
    position: 'absolute',
    alignSelf: 'center',
    top: '30%',
    borderRadius: 20.47,
    borderColor: AppStyles.color.white,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 8,
    },
    shadowOpacity: 0.9,
    shadowRadius: 12.87,
    padding: '5%',
  },
  backdrop: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: width,
    height: height,
  },
  buttonContainer: {
    backgroundColor: AppStyles.color.white,
    width: '40%',
    alignSelf: 'center',
    paddingVertical: 10,
    borderRadius: 12.87,
  },
  buttonText: {
    textAlign: 'center',
    color: AppStyles.color.orange,
    fontFamily: 'ReadexPro-Regular',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: '2%',
  },
});
