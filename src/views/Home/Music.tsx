import React, { useEffect, useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { context } from '@/store';
import { dispatchTypes } from '@/store/action';
import {ScreenNavigationProp} from '@/router/type';
import Loading from '@/components/Loading';
import LoadingC from '@/components/LoadingCa';

const Home = ({ navigation, show }: { navigation: ScreenNavigationProp, show: boolean }) => {
  const {state, commit, dispatch} = useContext(context);
  useEffect(() => {}, []);
  return (
    <View style={{display: show ? 'flex' : 'none', flex: 1, backgroundColor: '#ffe'}}>
      <Button
        title='go to detail'
        onPress={() => navigation.navigate('Detail')}
      />
      <View>
        <Text>{'nihap'}</Text>
      </View>
      <Button
        title="go to playList"
        onPress={() => {navigation.navigate('PlayList')}}
      />
      <View>
        <Text>{'nihap'}</Text>
      </View>
      <Button
        title="go to SongBox"
        onPress={() => {navigation.navigate('SongBox')}}
      />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Loading />
        <LoadingC />
      </View>
    </View>
  );
}

export default Home;