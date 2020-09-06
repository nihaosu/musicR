import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from '@/views/Home';
import Detail from '@/views/Detail';
import { Text } from 'react-native';

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
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, // 左右滑动
      }}>
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#555', //背景颜色
            },
            headerTintColor: '#fff',    //文字颜色
            headerTitleStyle: {
              fontWeight: 'bold',  //文字加粗
            }
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
      <Text>main</Text>
    </>
  )
}

export default MainRoute;