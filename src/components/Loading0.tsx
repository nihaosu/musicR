import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

interface props {
  height?: number
}

const Loading = ({ height = 20 }: props) => {
  const width = 81 * height / 60;
  const colWidth = 9 * height / 60;
  const colStyle = {
    width: colWidth,
    borderRadius: colWidth,
    backgroundColor: '#111310'
  }
  const shortHeight = 3 * height / 5;
  const longHeight = 4 * height / 5;
  const minHeight = 3 * height / 10;
  const differ = 7 * height / 10;

  // 350ms 走完一个differ  等待时间各 150ms
  // 相邻相差  differ/350 * 75  即 height/10

  const first = useRef(new Animated.Value(shortHeight)).current;
  const second = useRef(new Animated.Value(longHeight)).current;
  const third = useRef(new Animated.Value(height)).current;
  const fourth = useRef(new Animated.Value(longHeight)).current;
  const fifth = useRef(new Animated.Value(shortHeight)).current;

  const state = [
    {
      value: first,
      reset: shortHeight,
      ready: 14 * height / 20,
      toMin: {
        time: 200,
        delay: 0
      }
    },
    {
      value: second,
      reset: longHeight,
      ready: 17 * height / 20,
      toMin: {
        time: 275,
        delay: 0
      }
    },
    {
      value: third,
      reset: height,
      ready: height,
      toMin: {
        time: 350,
        delay: 0
      }
    },
    {
      value: fourth,
      reset: longHeight,
      ready: height,
      toMin: {
        time: 350,
        delay: 75
      }
    },
    {
      value: fifth,
      reset: shortHeight,
      ready: height,
      toMin: {
        time: 350,
        delay: 150
      }
    }
  ]

  function reset() {
    Animated.parallel(state.map(({ value, reset }) => {
      return Animated.timing(value, {
        toValue: reset,
        duration: 0,
        useNativeDriver: false
      })
    })).start()
  }

  function ready() {
    return new Promise((resolve, reject) => {
      Animated.parallel(state.map(({ value, ready }) => {
        return Animated.timing(value, {
          toValue: ready,
          duration: 0,
          useNativeDriver: false
        })
      })).start(() => resolve())
    })
  }

  function startToMin() {
    state.forEach(({ value, toMin: { time, delay } }) => {
      Animated.timing(value, {
        duration: time,
        toValue: minHeight,
        delay,
        useNativeDriver: false
      }).start(() => {
        console.log(value)
        loopAniStart(value);
      })
    })
  }

  function loopAniStart(value: Animated.Value) {
    Animated.timing(value, {
      duration: 350,
      delay: 150,
      toValue: height,
      useNativeDriver: false
    }).start(() => {
      Animated.timing(value, {
        duration: 350,
        delay: 150,
        toValue: minHeight,
        useNativeDriver: false
      }).start(() => {
        loopAniStart(value);
      })
    })
  }

  useEffect(() => {
    ready().then(() => {startToMin()})
  }, [])

  return (
    <View style={{height, justifyContent: 'center'}}>
      <View style={{...styles.loading_wraper, width}}>
        <Animated.View style={{height: first, ...colStyle}}></Animated.View>
        <Animated.View style={{height: second, ...colStyle}}></Animated.View>
        <Animated.View style={{height: third, ...colStyle}}></Animated.View>
        <Animated.View style={{height: fourth, ...colStyle}}></Animated.View>
        <Animated.View style={{height: fifth, ...colStyle}}></Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loading_wraper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    // backgroundColor: '#bfa'
  },
})

export default  Loading;
