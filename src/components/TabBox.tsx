import React, { useState, useEffect, useContext, useRef } from 'react';
import {ScreenNavigationProp} from '@/router/type';
import { View, StyleSheet, Text, Image, Pressable, Animated } from 'react-native';
import { context } from '@/store';
import { actionTypes } from '@/store/reducer';
import { useNavigationState } from '@react-navigation/native';

interface Props {
  navigation: ScreenNavigationProp
}

export default ({ navigation }: Props) => {
  const {commit} = useContext(context);
  const [curSelect, setCurSelect] = useState<'music'|'mine'>('music');
  const preRouteName = useRef('');
  const translateY = useRef(new Animated.Value(0)).current;

  const routeState = useNavigationState(state => state); // 当前路由的状态

  useEffect(() => {
    let routeName = 'Home';
    const state = routeState.routes[0].state;
    if (state) {
      const { index, routeNames } = (state as any);
      routeName = routeNames[index];
    }
    if (preRouteName.current === routeName) return
    preRouteName.current = routeName;
    // console.log(routeName);
    const toValue = routeName === 'Home' ? 0 : 55
    Animated.timing(translateY, {
      toValue,
      duration: 200,
      useNativeDriver: true
    }).start();
  }, [routeState])

  useEffect(() => {
    commit({type: actionTypes.CHANGE_CUR_SELECT, payload: {curSelect}});
  }, [curSelect])

  return (
    <Animated.View style={{
      ...styles.wraper,
      transform: [{
        translateY
      }]
    }}>
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
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  wraper: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 83,
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  songBox: {
    height: 45,
    marginLeft: 3,
    marginRight: 3,
    marginTop: -22.5,
    backgroundColor: '#ddd',
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
