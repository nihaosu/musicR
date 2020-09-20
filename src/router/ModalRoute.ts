import PlayList from '@/views/PlayList';
import SongBox from '@/views/SongBox';

const screenOptions= {
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
  cardOverlayEnabled: true,
  cardStyleInterpolator: ({ current: { progress }, layouts: { screen: { height } } }: any) => ({
    cardStyle: {
      transform: [{
        translateX: 0
      }, {
        translateY: progress.interpolate({
          inputRange: [1, 2],
          outputRange: [0,-height],
        })
      }],
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  })
}

const ModalRouteList: {
  name: string,
  component: any,
  options?: any
}[] = [
  {
    name: 'PlayList',
    component: PlayList,
    options: screenOptions
  },
  {
    name: 'SongBox',
    component: SongBox,
    options: {
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'vertical',
      gestureVelocityImpact: 1,
      gestureResponseDistance: {horizontal:25, vertical:1000},
    }
  },
];

export default ModalRouteList;
