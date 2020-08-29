import React, { useEffect, useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigationState, useFocusEffect } from '@react-navigation/native';
import { context } from '../store';
import { dispatchTypes } from '../store/action';

const Home = ({ navigation }: any) => {
  // const routeState = useNavigationState(state => state); // 当前路由的状态
  // console.log(routeState);
  const {state, commit, dispatch} = useContext(context);
  useEffect(() => {
    dispatch(dispatchTypes.setName);
  }, []);
  return (
    <>
      <Button
        title='go to detail'
        onPress={() => {}}
      />
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,.1)' }}>
        <Text>{'nihap'}</Text>
        <Text>{state.name}</Text>
      </View>
    </>
  );
}

export default Home;