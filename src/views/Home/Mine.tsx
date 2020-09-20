import React from 'react';
import { Text, View, Button } from 'react-native';

const Detail = ({ navigation, show }: any) => {
  return(
    <View style={{flex: 1, display: show ? 'flex' : 'none'}}>
      <View style={{ flex: 1, backgroundColor: '#bfa'}}>
        <Text>Mine</Text>
        <Button
          title="go to SongBox"
          onPress={() => {navigation.navigate('SongBox')}}
        />
      </View>
    </View>
  );
}

export default Detail;