import React, { useState, useEffect, useContext } from 'react';
import {ScreenNavigationProp} from '@/router/type';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { context } from '@/store';
import { actionTypes } from '@/store/reducer';

interface Props {
  navigation: ScreenNavigationProp
}

export default ({ navigation }: Props) => {
  const [curSelect, setCurSelect] = useState<'music'|'mine'>('music');
  const {commit} = useContext(context);

  useEffect(() => {
    commit({type: actionTypes.CHANGE_CUR_SELECT, payload: {curSelect}});
  }, [curSelect])

  return (
    <View style={styles.wraper}>
      <View style={styles.songBox}></View>
      <View style={styles.tabWraper}>
        <Pressable onPress={() => setCurSelect('music')}>
          <View style={styles.tabItem}>
            <Image
              style={styles.image}
              source={curSelect === 'music' ? require('@/assets/music_select.png') : require('@/assets/music.png')}
            />
            <Text style={curSelect === 'music' ? styles.active : styles.defaultColor}>首页</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => setCurSelect('mine')}>
          <View style={styles.tabItem}>
            <Image
              style={{width: 23, height: 23, marginTop: 5}}
              source={curSelect === 'mine' ? require('@/assets/mine_select.png') : require('@/assets/mine.png')}
            />
            <Text style={curSelect === 'mine' ? styles.active : styles.defaultColor}>我的</Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wraper: {
    height: 83,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10
  },
  songBox: {
    height: 45,
    marginTop: -22.5,
    backgroundColor: '#ccc',
    borderTopRightRadius: 22.5,
    borderBottomRightRadius: 22.5
  },
  tabWraper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    minWidth: 50
  },
  image: {
    height: 34,
    width: 34
  },
  defaultColor: {
    color: '#bfbfbf',
    fontSize: 12
  },
  active: {
    color: '#1bd79c',
    fontSize: 12
  }
})
