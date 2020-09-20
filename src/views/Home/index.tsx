import React, { useEffect, useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigationState } from '@react-navigation/native';
import { context } from '@/store';
import { dispatchTypes } from '@/store/action';
import { SafeAreaView } from 'react-native-safe-area-context';
import Music from '@/views/Home/Music';
import Mine from '@/views/Home/Mine';
import {ScreenNavigationProp} from '@/router/type';

const Home = ({navigation}: {navigation: ScreenNavigationProp}) => {
  const { routeNames, index } = useNavigationState(state => state); // 当前路由的状态
  console.log(routeNames[index]);
  const {state, commit, dispatch} = useContext(context);
  useEffect(() => {
    dispatch(dispatchTypes.setName);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Music navigation={navigation} show={true} />
      <Mine show={false} />
    </SafeAreaView>
  );
}

export default Home;

// import React, { useRef } from "react";
// import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

// const App = () => {
//   const pan = useRef(new Animated.ValueXY()).current;

//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderGrant: () => {
//         pan.setOffset({
//           x: pan.x._value,
//           y: pan.y._value
//         });
//       },
//       onPanResponderMove: Animated.event(
//         [
//           null,
//           { dx: pan.x, dy: pan.y }
//         ]
//       ),
//       onPanResponderRelease: () => {
//         pan.flattenOffset();
//       }
//     })
//   ).current;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Drag this box!</Text>
//       <Animated.View
//         style={{
//           transform: [{ translateX: pan.x }, { translateY: pan.y }]
//         }}
//         {...panResponder.panHandlers}
//       >
//         <View style={styles.box} />
//       </Animated.View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   titleText: {
//     fontSize: 14,
//     lineHeight: 24,
//     fontWeight: "bold"
//   },
//   box: {
//     height: 150,
//     width: 150,
//     backgroundColor: "blue",
//     borderRadius: 5
//   }
// });

// export default App;