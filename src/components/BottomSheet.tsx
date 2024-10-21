import { View, Pressable } from 'react-native';
import { icons } from 'lucide-react-native';
import Animated, { FadeInLeft, FadeInRight, FadeOutRight, LinearTransition } from 'react-native-reanimated';
import { MotiView } from 'moti';
import { IconProp, TabsNavigatorProps } from '../types/BottomSheetTypes';

function Icon({ color, size = 16, name, ...rest }: IconProp) {
    const IconComponent = icons[name];
    return <IconComponent color={color} size={size} {...rest} />;
}

const _spacing = 4;

export function TabsNavigator({
    data,
    selectedIndex,
    onChange,
    activeBackgroundColor = '#1591ea',
    inactiveBackgroundColor = 'transparent',
    activeColor = '#fff',
    inactiveColor = '#ddd'
}: TabsNavigatorProps) {
    
    return (
        <View style={{  flexDirection: 'row', height:50, alignItems: 'center', justifyContent:'space-evenly', backgroundColor:'white',  paddingBottom: _spacing * 5 }}>
            {data.map((item, index) => {
               
                const isSelected = selectedIndex === index;

                if (index === 2) {
                    // Render an empty button for spacing
                    return (
                        <MotiView
                            key={index}
                            style={{width:160,alignItems: 'center' }} // Empty button for spacing
                        >
                            <Pressable style={{ padding: 12, opacity: 0 }} />  
                        </MotiView>
                    );
                }
                return (
                    <MotiView
                        key={index}
                        animate={{
                            backgroundColor: isSelected ? activeBackgroundColor : inactiveBackgroundColor,
                            borderRadius: 5,
                            overflow: 'hidden',
                            borderColor: 'black',
                            borderWidth: isSelected ? 0 : 1,

                        }}
                        layout={LinearTransition.springify().damping(80).stiffness(200)}
                        style={{   maxWidth: 100, alignItems: 'center' }} // Fixed width for buttons
                    >
                        <Pressable
                            onPress={() => {
                                onChange(index);
                            }}
                            style={{
                                padding: _spacing * 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row',
                            }}
                        >
                            <Icon
                                name={item.icon}
                                size={index === 2 ? 40 : 16}
                                color={isSelected ? '#fff' : 'black'}
                                animate={{
                                    color: isSelected ? activeColor : inactiveColor,
                                }}
                            />
                            
                            {isSelected && (
                                <Animated.Text
                                    entering={ FadeInRight.springify().damping(80).stiffness(200)}
                                    exiting={FadeOutRight.springify().damping(80).stiffness(200)}
                                    style={{
                                        color: isSelected ? activeColor : inactiveColor
                                    }}
                                >
                                    {item.label}
                                </Animated.Text>
                            )}
                            
                        </Pressable>
                        
                    </MotiView>
                );
            })}
                        <MotiView
                key={2}
                style={{
                    position: 'absolute',
                    top: -40, 
                    left: '50%',
                    width:80,
                    transform: [{ translateX: -50 }],
                    alignItems: 'center',
                }}
            >
                <Pressable onPress={() => onChange(2)} style={{ padding: 12 ,borderWidth:1, borderColor:'black', borderRadius: 20, backgroundColor: selectedIndex === 2 ? activeBackgroundColor : inactiveBackgroundColor}}>
                    <Icon name={data[2].icon} size={40} color={selectedIndex === 2 ? '#fff' : 'black'} />
                </Pressable>
            </MotiView>
        </View>
        
    );
}
