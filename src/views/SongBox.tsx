import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SongBox = ({ navigation }: any) => {
  return(
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff'}}>
      <View>
        <Text>SongBox</Text>
        <Text>SongBox</Text>
        <Text>SongBox</Text>
      </View>
    </SafeAreaView>
  );
}

export default SongBox;