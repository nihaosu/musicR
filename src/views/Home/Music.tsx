import React, { useEffect, useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { context } from '@/store';
import { dispatchTypes } from '@/store/action';

const Home = ({ navigation, show }: any) => {
  const {state, commit, dispatch} = useContext(context);
  useEffect(() => {
    dispatch(dispatchTypes.setName);
  }, []);
  return (
    <View style={{display: show ? 'flex' : 'none', flex: 1}}>
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
    </View>
  );
}

export default Home;