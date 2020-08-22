import React, { useEffect, useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigationState } from '@react-navigation/native';

const Home = ({ navigation, route }: any) => {
  // const routeState = useNavigationState(state => state); // 当前路由的状态
  // console.log(routeState);
  useEffect(() => {
  }, []);
  return (
    <>
      <Button
        title='go to detail'
        onPress={() => navigation.navigate('Detail')}
      />
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.1)' }}>
        <Text>{'nihap'}</Text>
      </View>
    </>
  );
}

export default Home;