import PlayList from '@/views/PlayList';
import SongBox from '@/views/SongBox';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 80,
    mass: 20,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const screenOptions= {
  headerShown: false,
  cardStyle: { backgroundColor: 'transparent' },
  cardOverlayEnabled: true,
  transitionSpec: {
    open: config,
    close: config
  },
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

enum MODAL_NAME {
  PlayList = 'PlayList',
  SongBox = 'SongBox'
}

const ModalRouteList: {
  name: MODAL_NAME,
  component: any,
  options?: any
}[] = [
  {
    name: MODAL_NAME.PlayList,
    component: PlayList,
    options: screenOptions
  },
  {
    name: MODAL_NAME.SongBox,
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
