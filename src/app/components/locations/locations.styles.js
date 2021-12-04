import { StyleSheet } from 'react-native';

const locationsStyles = StyleSheet.create({
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginBottom: 30,
    width: '90%',
    alignSelf: 'center',
  },
  categoriesActive: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#00cb82',
    width: 'auto',
    height: 40
  },
  categories: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 15,
    width: 'auto',
    height: 40
  },
  textActive: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white'
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#868AA6'
  }
});

export default locationsStyles;
