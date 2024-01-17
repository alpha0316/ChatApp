// AppNavigator.js

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Onboarding from '../screens/Onboarding'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}


export default AppNavigator;
