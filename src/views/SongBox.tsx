import React from 'react';
import { Text, View } from 'react-native';
import ModalWraper from '@/components/ModalWraper';

const SongBox = ({ navigation }: any) => {
  return(
    <ModalWraper navigation={navigation} height={175}>
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <Text>SongBox</Text>
        <Text>SongBox</Text>
        <Text>SongBox</Text>
      </View>
    </ModalWraper>
  );
}

export default SongBox;