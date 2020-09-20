import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from '@/views/Home';
import Detail from '@/views/Detail';
import { View } from 'react-native';
import { MainStackParamList } from './type';

const MainStack = createStackNavigator<MainStackParamList>();

const MainRoute = () => {
  return (
    <>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 左右滑动
      }}>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <MainStack.Screen
          name="Detail"
          component={Detail}
        />
      </MainStack.Navigator>
      <View style={{height: 80, backgroundColor: '#fff'}}>
      </View>
    </>
  )
}

export default MainRoute;