import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Detail = () => {
  return(
    <>
      <View style={{ flex: 1, backgroundColor: '#bfa'}}>
        <ScrollView>
          <Text>Detail</Text>
        </ScrollView>
      </View>
    </>
  );
}

export default Detail;