import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from '@expo/vector-icons/MaterialIcons';

import Discover from './pages/Discover';
import Favorites from './pages/Favorites';
import More from './pages/More';

export default function Routes (){
    const BottomTab = createMaterialBottomTabNavigator();
    
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      
                      if (route.name === 'Descubra') {
                        iconName = 'explore';
                      } else if (route.name === 'Favoritos') {
                        iconName = focused ? 'favorite' : 'favorite-border';
                      } else if (route.name === 'Mais') {
                        iconName =  'more-horiz';
                      }
          
                      // You can return any component that you like here!
                      return <Icon name={iconName} size={25} color={'#808080'} />;
                    },
                })}
                  tabBarOptions={{
                    backgroundColor: '#0a0a0a',
                  }}>
                <BottomTab.Screen name = "Descubra" component={Discover} />
                <BottomTab.Screen name = "Favoritos" component={Favorites }/>
                <BottomTab.Screen name = "Mais" component={More} />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}