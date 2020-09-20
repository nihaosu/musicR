import React from 'react';
import { Text, View, Button } from 'react-native';

const Detail = ({ show }: {show: boolean}) => {
  return(
    <View style={{flex: 1, display: show ? 'flex' : 'none'}}>
      <View style={{ flex: 1, backgroundColor: '#bfa'}}>
        <Text>Mine</Text>
      </View>
    </View>
  );
}

export default Detail;