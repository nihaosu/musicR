import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from '@/views/Home';
import Detail from '@/views/Detail';
import { View } from 'react-native';

type MainStackParamList = {
  Home: undefined;
  Detail: undefined;
}

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
          options={{
            gestureEnabled: true,
            gestureDirection: 'vertical', //手势退出
            gestureVelocityImpact: 1,
            gestureResponseDistance: {horizontal:25, vertical:1000},
          }}
        />
      </MainStack.Navigator>
      <View style={{height: 50, backgroundColor: '#ffd'}}>
      </View>
    </>
  )
}

export default MainRoute;