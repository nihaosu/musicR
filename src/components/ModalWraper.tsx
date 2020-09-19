import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { View } from 'react-native';

interface props {
  children: Element,
  navigation: any,
  height: number | string
}

const ModalWraper = ({children, navigation, height}: props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => navigation.pop()}>
        <View style={{height}}>
        </View>
      </TouchableWithoutFeedback>
      { children }
    </SafeAreaView>
  )
}

export default ModalWraper;
