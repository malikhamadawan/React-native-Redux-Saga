import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/HomeScreen/HomeScreen';
import DetailScreen from '../screen/DetailScreen/DetailScreen';
import Login from '../screen/AuthScreen/Login';
import {GoogleLogin} from '../screen/GoogleLogin/GoogleLogin';

const AppStack = createStackNavigator();

const MainAppNav = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="GoogleLogin"
        screenOptions={{headerShown: false}}
      >
        <AppStack.Screen name="GoogleLogin" component={GoogleLogin} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name={'Home'} component={HomeScreen} />
        <AppStack.Screen name={'Details'} component={DetailScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainAppNav;
