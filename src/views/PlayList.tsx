import React from 'react';
import { Text, View } from 'react-native';

import ModalWraper from '@/components/ModalWraper';

const PlayList = ({ navigation }: any) => {
  return(
    <ModalWraper height={125} navigation={navigation}>
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <Text>PlayList</Text>
      </View>
    </ModalWraper>
  );
}

export default PlayList;