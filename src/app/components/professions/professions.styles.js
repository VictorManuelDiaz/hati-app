import { StyleSheet } from 'react-native';

const prosStyles = StyleSheet.create({
  categoriesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom: 20,
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
    backgroundColor: '#f8c30c',
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
    color: '#090c22'
  },
  text: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#868AA6'
  }
});

export default prosStyles;
