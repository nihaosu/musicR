import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { MainStackParamList } from './type';
import {ScreenNavigationProp} from '@/router/type';

import Home from '@/views/Home';
import Detail from '@/views/Detail';
import TabBox from '@/components/TabBox';

const MainStack = createStackNavigator<MainStackParamList>();

const MainRoute = ({navigation}: {navigation: ScreenNavigationProp}) => {
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
      <TabBox navigation={navigation} />
    </>
  )
}

export default MainRoute;