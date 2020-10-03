import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

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

  const _first = useRef<View|null>(null);
  const _second = useRef<View|null>(null);
  const _third = useRef<View|null>(null);
  const _fourth = useRef<View|null>(null);
  const _fifth = useRef<View|null>(null);

  const aniId = useRef<number>(0);

  const state = [
    {
      el: _first,
      height: shortHeight,
      getHeight(aniHeight: number, state: 'down' | 'up') {
        let _height: number;
        if (state === 'down') {
          _height = minHeight - aniHeight < 0 ? aniHeight - 3/10 * height : 2 * minHeight - aniHeight
        } else {
          _height = height - aniHeight > 0 ?  aniHeight + 3/10 * height : 2 * height - aniHeight
        }
        return handleHeight(_height);
      }
    },
    {
      el: _second,
      height: longHeight,
      getHeight(aniHeight: number, state: 'down' | 'up') {
        let _height: number;
        if (state === 'down') {
          _height = minHeight - aniHeight > 3/20 * height ? 9/20 * height - aniHeight : aniHeight - 3/20 * height
        } else {
          _height = aniHeight - height > 3/20 * height ? 43/20 * height - aniHeight : aniHeight + 3/20 * height
        }
        return handleHeight(_height);
      }
    },
    {
      el: _third,
      height: height,
      getHeight(aniHeight: number, state: 'down' | 'up') {
        return handleHeight(aniHeight)
      }
    },
    {
      el: _fourth,
      height: longHeight,
      getHeight(aniHeight: number, state: 'down' | 'up') {
        const _height = state === 'down' ? aniHeight + 3/20 * height : aniHeight - 3/20 * height
        return handleHeight(_height);
      }
    },
    {
      el: _fifth,
      height: shortHeight,
      getHeight(aniHeight: number, state: 'down' | 'up') {
        const _height = state === 'down' ? aniHeight + 3/10 * height : aniHeight - 3/10 * height
        return handleHeight(_height);
      }
    },
  ]

  function handleHeight(aniHeight: number) {
    if (aniHeight < minHeight) return minHeight
    if (aniHeight > height) return height
    return aniHeight
  }

  function setHeight(el: View | null, height: number) {
    if (el === null) return
    el.setNativeProps({
      style: {
        height
      }
    });
  }

  function reset() {
    state.forEach(({el, height}) => setHeight(el.current, height));
  }

  function render(height: number, _state: 'down' | 'up') {
    state.forEach(({el, getHeight}) => {
      setHeight(el.current, getHeight(height, _state));
    });
  }

  function start() {
    let aniHeight = height;
    let state: 'down' | 'up' = "down";
    const speed: number = 1;

    function change() {
      render(aniHeight, state);
      aniId.current = requestAnimationFrame(change);
      if (state === 'down') {
        if (aniHeight - speed <= 0) {  // minheight -  3/10 * height
          aniHeight = minHeight;
          state = 'up';
          aniHeight += speed;
        } else {
          aniHeight -= speed;
        }
      } else {
        if (aniHeight + speed >= 13/10 * height) {   // height +  3/10 * height
          aniHeight = height;
          state = 'down';
          aniHeight -= speed;
        } else {
          aniHeight += speed;
        }
      }
    }
    change();
  }

  function stop() {
    cancelAnimationFrame(aniId.current);
  }

  useEffect(() => {
    setTimeout(() => {
      start();
    }, 2000);
  }, [])

  return (
    <View style={{height, ...styles.wraper}}>
      <View style={{...styles.loading_wraper, width}}>
        <View ref={_first} style={{height: shortHeight, ...colStyle}}></View>
        <View ref={_second} style={{height: longHeight, ...colStyle}}></View>
        <View ref={_third} style={{height: height, ...colStyle}}></View>
        <View ref={_fourth} style={{height: longHeight, ...colStyle}}></View>
        <View ref={_fifth} style={{height: shortHeight, ...colStyle}}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wraper: {
    justifyContent: 'center'
  },
  loading_wraper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
})

export default  Loading;
