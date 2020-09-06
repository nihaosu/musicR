import React, { useEffect, useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import { context } from '@/store';
import { dispatchTypes } from '@/store/action';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }: any) => {
  const { routeNames, index } = useNavigationState(state => state); // 当前路由的状态
  console.log(routeNames[index]);
  const {state, commit, dispatch} = useContext(context);
  useEffect(() => {
    dispatch(dispatchTypes.setName);
  }, []);
  return (
    <SafeAreaView>
      <Button
        title='go to detail'
        onPress={() => navigation.navigate('Detail')}
      />
      <View>
        <Text>{'nihap'}</Text>
        <Text>{state.name}</Text>
      </View>
      <Button
        title="go to playList"
        onPress={() => {navigation.navigate('PlayList')}}
      />
      <View>
        <Text>{'nihap'}</Text>
        <Text>{state.name}</Text>
      </View>
      <Button
        title="go to SongBox"
        onPress={() => {navigation.navigate('SongBox')}}
      />
    </SafeAreaView>
  );
}

export default Home;