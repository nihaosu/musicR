import React, { useEffect, useContext } from 'react';
import { useNavigationState } from '@react-navigation/native';
import { context } from '@/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import Music from '@/views/Home/Music';
import Mine from '@/views/Home/Mine';
import {ScreenNavigationProp} from '@/router/type';

const Home = ({navigation}: {navigation: ScreenNavigationProp}) => {
  const { state } = useContext(context);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Music navigation={navigation} show={state.curSelect === 'music' ? true : false} />
      <Mine show={state.curSelect === 'mine' ? true : false} />
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