import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigationTypes'; 
import OnboardingScreen from '../screens/OnBoardingScreen.tsx';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import VerifyScreen from '../screens/VerifyScreen';
import BordoreauxScreen from '../screens/BordoreauxScreen';
import BordoreauxFormScreen from '../screens/BordoreauxForm';
import CongratulationsScreen from '../screens/CongratulationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import SettingsScreen from '../screens/SettingsScreens';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ChangePasswordScreen from '../screens/ChangePassword';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VerifyScreen" component={VerifyScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Bordoreaux" component={BordoreauxScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BordoreauxForm" component={BordoreauxFormScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Congratulations" component={CongratulationsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MyAccount" component={MyAccountScreen} options={{ title: 'My Account' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'General' }} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ title: 'Password' }} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notifications' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
