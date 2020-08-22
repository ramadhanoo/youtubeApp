import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Library from './screens/Library';
import Notifications from './screens/Notifications';
import Explore from './screens/Explore';
import Subscriptions from './screens/Subscriptions';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name === 'Home') {
              icon = (<Icon1 name={"home"} color={color} size={25} />)
            } else if (route.name === 'Explore') {
              icon =  (<Icon1 name={"explore"} color={color} size={25} />)
            } else if (route.name === 'Subscriptions') {
              icon =  (<Icon2 name={"youtube-subscription"} color={color} size={25} />)
            } else if (route.name === 'Notifications') {
              icon =  (<Icon1 name={"notifications"} color={color} size={25} />)
            } else if (route.name === 'Library') {
              icon =  (<Icon1 name={"video-library"} color={color} size={25} />)
            }

            // You can return any component that you like here!
            return icon;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Subscriptions" component={Subscriptions} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Library" component={Library} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}