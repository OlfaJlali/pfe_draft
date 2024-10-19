import { Dimensions, StyleSheet } from 'react-native';
const { height , width} = Dimensions.get('window');

export const CardsSliderItemStyles = StyleSheet.create({
    contract:{
        display:'flex',
        flexDirection:'row',
        paddingLeft: 10,
        paddingBottom:10
    },
    contractText: {
        color: '#1AD5AD',
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemContainer: {
        justifyContent: 'center',
        height: 200,
        borderRadius:20,
        width: width * 0.9,
        backgroundColor:'#1C162E',
        shadowColor: '#7D64FF', 
        shadowOffset: { width: 0, height: 8 }, 
        shadowOpacity: 0.5, 
        elevation: 10, 
        shadowRadius: 5,

    },
    textContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
    },
    amount: {
        color: '#fff',
        fontSize:20,
        fontWeight: 'bold',

    },
});