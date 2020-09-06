import React from 'react';
import { Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const PlayList = ({ navigation }: any) => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1, backgroundColor: '#fba', opacity: 0.5}}>
        <Text>PlayList</Text>
      </View>
    </SafeAreaView>
  );
}

export default PlayList;