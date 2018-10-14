import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
    backgroundColor: '#eee'
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  avatar: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 8
  },
  cart: {
    height: 20,
    width: 20,
    marginRight: 10
  }
});
