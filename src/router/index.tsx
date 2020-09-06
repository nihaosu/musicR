import React from 'react';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MainRoute from '@/router/MainRoute';
import ModalRouteList from '@/router/ModalRoute';

enableScreens();

const RootStack = createStackNavigator();

const RouterView = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <NavigationContainer>
        <RootStack.Navigator
          mode="modal"
          screenOptions={{
            cardStyle: { backgroundColor: 'transparent' }, // 背景透明
            cardOverlayEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS, // 左右滑动
          }}
        >
          <RootStack.Screen
            name="Main"
            component={MainRoute}
            options={{
              headerShown: false
            }}
          />
          {
            ModalRouteList.map((item, index) => (
              <RootStack.Screen
                name={item.name}
                component={item.component}
                options={item.options}
                key={index}
              />
            ))
          }
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RouterView;
