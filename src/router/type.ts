import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamList = {
  Main: undefined;
  PlayList: undefined;
  SongBox: undefined;
}

export type MainStackParamList = {
  Home: undefined;
  Detail: undefined;
}

export type ScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<StackParamList>,
  StackNavigationProp<MainStackParamList>
>;

export type ScreenRouteProp = RouteProp<StackParamList, 'Main'>
