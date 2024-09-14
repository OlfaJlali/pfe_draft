import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen'; // Make sure HomeScreen is created
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import VerifyScreen from './screens/VerifyScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import useShouldShowButtonSheet from './hooks/useShouldShowButtonSheet';
import ButtonSheet from './navigators/ButtonSheet';
import { StyleSheet, View } from 'react-native';
import BordoreauxScreen from './screens/BordoreauxScreen'

export type RootStackParamList = {
  SignIn: undefined;
  Home: undefined; 
  ForgotPassword: undefined;
  VerifyScreen: undefined;
  Bordoreaux: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
          <Stack.Screen name="VerifyScreen" component={VerifyScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Bordoreaux" component={BordoreauxScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
        <ConditionalButtonSheet />
      </View>
    </NavigationContainer>
  );
};

const ConditionalButtonSheet: React.FC = () => {
  const showButtonSheet = useShouldShowButtonSheet();

  return showButtonSheet ? <ButtonSheet /> : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
