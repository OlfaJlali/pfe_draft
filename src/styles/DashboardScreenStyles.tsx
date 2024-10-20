import { Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get('window');

export const DashboardScreenStyles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
    height:height * 0.25,
  },
  card: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 10,
    marginRight: 8,
  },
  cardBlue: {
    backgroundColor: '#007bff',
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
  },
  cardAmount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconContainer: {
    backgroundColor: '#e0e0e0',
    opacity: 0.7,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    shadowColor: '#7D64FF', 
    shadowOffset: { width: 2, height: 4 }, 
    shadowOpacity: 0.5, 
    elevation: 3, 
    shadowRadius: 5,

  },
  iconText: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
  itemLabel: {
    flex: 1,
    fontSize: 16,
  },
  itemAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});