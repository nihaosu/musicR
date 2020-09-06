/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';

import Home from '@/views/Home';
import Detail from '@/views/Detail';
import Store from '@/store';

enableScreens();

type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
}

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <Store>
        <NavigationContainer>
          <RootStack.Navigator
            // mode="modal" //模态框
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, // 左右滑动
              // cardStyle: { backgroundColor: 'transparent' }, // 背景透明
              // cardOverlayEnabled: true
            }}>
            <RootStack.Screen
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
            <RootStack.Screen
              name="Detail"
              component={Detail}
              options={{
                gestureEnabled: true,
                gestureDirection: 'vertical', //手势退出
                gestureVelocityImpact: 1,
                gestureResponseDistance: {horizontal:25, vertical:1000},
              }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Store>
    </SafeAreaProvider>
  );
};

export default App;
