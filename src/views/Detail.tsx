import React from 'react';
import { Text, View, Button } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

const Detail = ({ navigation }: any) => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1, backgroundColor: '#bfa'}}>
        <Text>Detail</Text>
        <Button
          title="go to SongBox"
          onPress={() => {navigation.navigate('SongBox')}}
        />
      </View>
    </SafeAreaView>
  );
}

export default Detail;