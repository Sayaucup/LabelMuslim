import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './screen/login';
import Register from './screen/register';
import Home from './screen/home';
import Tambah from './screen/tambahlabel';
import Daftar from './screen/daftarlabel';
import Detail from './screen/detaillabel';
import ImageCarousel from './ImageCarousel';

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const Route = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Tambah: {
    screen: Tambah,
    navigationOptions: {
      headerShown: false,
    },
  },
  ImageCarousel: {
    screen: ImageCarousel,
    navigationOptions: {
      headerShown: false,
    },
  },
  Daftar: {
    screen: Daftar,
    navigationOptions: {
      headerShown: false,
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      headerShown: false,
    },
  },
});
const Switch = createSwitchNavigator({
  AuthStack: AuthStack,
  App: Route,
});

export default createAppContainer(Switch);
