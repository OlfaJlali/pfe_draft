import React from "react";
import { Dimensions, Text, View } from "react-native";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import {CardsSliderItemStyles} from '../styles/cardsSliderItemStyles'
import { CardsSliderItems } from "../types/cardsSliderItems";
const { width } = Dimensions.get('window');
const CardsSliderItem = ({ index, item  , scrollX}: CardsSliderItems) => {
    const rnAimatedStyle = useAnimatedStyle(()=>{
        return {
            transform: [ 
                {
                    scale: interpolate(
                        scrollX.value,
                        [(index - 1) * width , index * width , (index + 1)* width],
                        [0.5,1,0.5],
                        Extrapolation.CLAMP
                    )
                }
            ]
        }
    })
    return (
        <Animated.View style={[CardsSliderItemStyles.itemContainer,rnAimatedStyle]}>
              <View style={CardsSliderItemStyles.contract}>
              <Text style={CardsSliderItemStyles.contractText}>Contract N°: </Text>
            <Text style={CardsSliderItemStyles.title}> {item.title}</Text>
              </View>

                <View style={CardsSliderItemStyles.textContainer}>
                    <Text style={CardsSliderItemStyles.amount}>{item.amount}</Text>
                </View>
        </Animated.View>
    );
};

export default CardsSliderItem;


