import React from 'react';
import HomeScreen from '../screens/Home/Home';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTopTab from '../screens/Home/HomeTopTab';

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeTopTab}
        // options={{headerShown: false}}
      />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}
