import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/components/HomeScreen';
import AboutScreen from './src/components/AboutScreen';
import EducationScreen from './src/components/EducationScreen';
import SkillsScreen from './src/components/SkillsScreen';
import ContactScreen from './src/components/ContactScreen';


export default function App() {
  return <MainScreen />;
}

const Tab = createBottomTabNavigator();
const MainScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({route}) =>({
        tabBarIcon: ({focused, color}) => {
          let iconName

          if(route.name === 'Home'){
            iconName = focused ? 'home':'home-outline';
          }else if(route.name === 'About'){
            iconName = focused ? 'person':'person-outline';
          }else if(route.name === 'Service'){
            iconName = focused ? 'server':'server-outline';
          }else if(route.name === 'Portfolio'){
            iconName = focused ? 'desktop':'desktop-outline';
          }else if(route.name === 'Contacts'){
            iconName = focused ? 'mail-open':'mail-outline';
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: '#FF5800',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: '#69686D',
        tabBarLabelStyle:{fontSize: 12, fontWeight: 'bold', marginBottom: 3},
        tabBarIconStyle: {marginTop: 3},
        tabBarHideOnKeyboard: true,
       
      })}>
        <Tab.Screen name="Home" component={HomeScreen}  
        options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}/>
        <Tab.Screen name="About" component={AboutScreen} 
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Tab.Screen name="Service" component={EducationScreen} 
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Tab.Screen name="Portfolio" component={SkillsScreen} 
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Tab.Screen name="Contacts" component={ContactScreen} 
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: 'gray',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
      </Tab.Navigator>
      </NavigationContainer>
  );
};
const styles = StyleSheet.create({});


