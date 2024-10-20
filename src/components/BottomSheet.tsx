import { View,  Pressable,  } from 'react-native';
import { icons } from 'lucide-react-native';
import Animated, { FadeInRight, FadeOutRight, LinearTransition } from 'react-native-reanimated';
import { MotiProps, MotiView } from 'moti';

type IconNames = keyof typeof icons;

export type TabItem = {
    icon: IconNames;
    label: string;
    component: React.FC; 
};

type TabsNavigatorProps = {
    data: TabItem[];
    selectedIndex: number;
    onChange: (index: number) => void;
    activeBackgroundColor?: string;
    inactiveBackgroundColor?: string;
    activeColor?: string 
    inactiveColor?: string

};

type IconProp = {
    name: IconNames;
    color: string;
    
} & MotiProps;

function Icon({ color , name,...rest }: IconProp) {
    const IconComponent = icons[name];
    return <IconComponent color={color} size={16} {...rest} />;
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
        <View style={{ flexDirection: 'row', gap: _spacing * 8 , paddingBottom:_spacing * 5 , justifyContent:'center' }}>
            {data.map((item, index) => {
                const isSelected = selectedIndex === index;
                return (
                    <View key={index}>
                        <MotiView
                        animate={{
                            backgroundColor: isSelected ? activeBackgroundColor : inactiveBackgroundColor,
                            borderRadius: 5,
                            overflow: 'hidden',
                            borderColor: 'black',
                            borderWidth: isSelected ? 0 : 1
                        }}
                            layout={LinearTransition.springify().damping(80).stiffness(200)}
                        >
                        <Pressable
                            onPress={() => {
                                onChange(index);
                            }}
                            style={{
                                padding: _spacing * 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: _spacing,
                                flexDirection: 'row',
                            }}
                        >
                             <Icon 
                             name={item.icon}
                             color={isSelected ? '#fff' : 'black'}
                             animate={
                                {color: isSelected ? activeColor : inactiveColor,
                                }
                            }
                             />
                            {isSelected && (
                                <Animated.Text 
                                entering={FadeInRight.springify().damping(80).stiffness(200)}
                                exiting={FadeOutRight.springify().damping(80).stiffness(200)}
                                style={{
                                color : isSelected ? activeColor : inactiveColor  
                            }}>{item.label}</Animated.Text>)
                            }
                        </Pressable>
                        </MotiView>
                    </View>
                );
            })}
        </View>
    );
}
