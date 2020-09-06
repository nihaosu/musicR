import PlayList from '@/views/PlayList';
import SongBox from '@/views/SongBox';

const ModalRouteList: {
  name: string,
  component: any,
  options?: any
}[] = [
  {
    name: 'PlayList',
    component: PlayList,
    options: {
      headerShown: false,
    }
  },
  {
    name: 'SongBox',
    component: SongBox,
    options: {
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'vertical', //手势退出
      gestureVelocityImpact: 1,
      gestureResponseDistance: {horizontal:25, vertical:1000},
    }
  },
];

export default ModalRouteList;