import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
  AsyncStorage,
  ToastAndroid,
} from 'react-native';
import moment from 'moment';

import bg from '../assets/bgHome.png';
import notip from '../assets/notip.png';
import schedule from '../assets/schedule.png';
import plus from '../assets/plus.png';
import pin from '../assets/pin.png';
import pt from '../assets/pt.png';
import koperasi from '../assets/koperasi.png';
import cv from '../assets/cv.png';
import close from '../assets/close.png';

import ImageCarousel from '../ImageCarousel';
import Login from './login';

console.disableYellowBox = true;

const data = [
  {
    img: pt,
    name: 'PT. GARUDA BANGSA INDONESIA',
    desc: 'TOKO ONLINE',
    close: close,
    date: '12 Januari 2019',
  },
  {
    img: pt,
    name: 'PT. GARUDA BANGSA INDONESIA',
    desc: 'TOKO ONLINE',
    close: close,
    date: '12 Januari 2019',
  },
  {
    img: pt,
    name: 'PT. GARUDA BANGSA INDONESIA',
    desc: 'TOKO ONLINE',
    close: close,
    date: '12 Januari 2019',
  },
];

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_lengkap: '',
      id_user: '',
      jenis_kelamin: '',
      selamat: moment().format('HH:mm:ss'),
      kota: '',
    };
  }
  toast = () => {
    ToastAndroid.showWithGravity(
      'Tunggu',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  logout = () => {
    this.toast();
    AsyncStorage.removeItem('api_key');
    this.props.navigation.navigate('AuthStack');
  };
  label = ({item}) => {
    const {img, name, desc, close, date} = item;
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Detail')}>
        <View
          style={{
            padding: 10,
            height: 90,
            width: '90%',
            backgroundColor: '#fff',
            marginTop: 10,
            borderRadius: 15,
            alignSelf: 'center',
            justifyContent: 'center',
            elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: 90,
                width: 75,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 5,
              }}>
              <Image
                style={{
                  height: '55%',
                  width: '42%',
                  maxHeight: '100%',
                  maxWidth: '100%',
                }}
                source={img}
              />
            </View>
            <View
              style={{
                marginLeft: 5,
                justifyContent: 'center',
                position: 'relative',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'nunito.bold',
                  color: '#000000',
                  maxWidth: 210,
                }}>
                {name}
              </Text>
              <Text
                style={{
                  fontSize: 9,
                  fontFamily: 'nunito.semibold',
                  color: '#000000',
                }}>
                {desc}
              </Text>
              <Text
                style={{
                  top: 8,
                  fontSize: 10,
                  fontStyle: 'italic',
                  fontFamily: 'nunito.semibold',
                  color: '#000000',
                }}>
                {date}
              </Text>
            </View>
            <Image
              style={{
                height: 10,
                width: 10,
                top: 8,
                marginLeft: 'auto',
              }}
              source={close}
            />
          </View>
        </View>
        <View
          style={{
            height: 8,
          }}
        />
      </TouchableOpacity>
    );
  };
  componentDidMount() {
    AsyncStorage.getItem('nama_lengkap').then(value => {
      if (value != null) {
        this.setState({nama_lengkap: value});
      }
    });
    AsyncStorage.getItem('id_user').then(value => {
      if (value != null) {
        this.setState({id_user: value});
      }
    });
    AsyncStorage.getItem('jenis_kelamin').then(value => {
      if (value != null) {
        this.setState({jenis_kelamin: value});
      }
    });
    AsyncStorage.getItem('kota').then(value => {
      if (value != null) {
        this.setState({kota: value});
      }
    });
  }
  jenis_kelamin = () => {
    const {jenis_kelamin} = this.state;
    if (jenis_kelamin === 'Laki - Laki') {
      return <Text>Bpk.</Text>;
    } else if (jenis_kelamin === 'Perempuan') {
      return <Text>Ibu.</Text>;
    }
  };
  Selamat () {
    const {selamat} = this.state;
    if (selamat >= '05:00:00' && selamat <= '11:00:00') {
      return <Text>Pagi</Text>;
    } else if (selamat >= '11:00:00' && selamat <= '15:00:00') {
      return <Text>Siang</Text>;
    } else if (selamat >= '15:00:00' && selamat <= '18:00:00') {
      return <Text>Sore</Text>;
    } else if (selamat >= '18:00:00' && selamat <= '05:00:00') {
      return <Text>Malam</Text>;
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
        }}>
        <StatusBar backgroundColor="#548BE3" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            style={{
              height: 175,
            }}
            source={bg}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 35,
                marginLeft: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'nunito.black',
                  fontSize: 30,
                  color: '#fff',
                }}>
                Selamat {this.Selamat()},
              </Text>
              <TouchableOpacity onPress={this.logout}>
                <Image
                  style={{
                    height: 40,
                    width: 35,
                    marginRight: 35,
                  }}
                  source={notip}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                paddingLeft: 20,
                fontSize: 23,
                fontFamily: 'nunito.semibold',
                color: '#fff',
              }}>
              {this.jenis_kelamin()} {this.state.nama_lengkap}
            </Text>
            <View
              style={{
                height: 95,
                width: '90%',
                backgroundColor: '#fff',
                marginTop: 10,
                borderRadius: 10,
                alignSelf: 'center',
                justifyContent: 'center',
                elevation: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Daftar')}>
                  <View
                    style={{
                      marginLeft: 15,
                      height: 66,
                      width: 66,
                      borderRadius: 7,
                      borderWidth: 2,
                      borderColor: '#E8E8E8',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 40,
                        width: 35,
                        borderRadius: 5,
                      }}
                      source={schedule}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Tambah')}>
                  <View
                    style={{
                      marginLeft: 10,
                      height: 66,
                      width: 66,
                      borderRadius: 7,
                      borderWidth: 2,
                      borderColor: '#E8E8E8',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 5,
                      }}
                      source={plus}
                    />
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    marginLeft: 10,
                    maxWidth: 300,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'nunito.black',
                      fontSize: 20,
                      color: '#EE2020',
                    }}>
                    {moment().format('D MMMM YYYY')}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 5,
                    }}>
                    <Image
                      style={{
                        height: 30,
                        width: 18,
                      }}
                      source={pin}
                    />
                    <Text
                      style={{
                        fontFamily: 'nunito.black',
                        fontSize: 18,
                        textAlign: 'center',
                        marginLeft: 5,
                        color: '#171717',
                      }}>
                      {this.state.kota}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              alignItems: 'center',
              marginTop: 60,
            }}>
            <Text
              style={{
                fontFamily: 'nunito.black',
                fontSize: 16,
                color: '#171717',
              }}>
              Berita Terbaru
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
            }}>
            <ImageCarousel />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Text
              style={{
                fontFamily: 'nunito.black',
                fontSize: 16,
                color: '#171717',
              }}>
              Label Terbaru
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={this.label}
              keyExtractor={item => item.toString()}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 20,
              paddingBottom: 100,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Daftar')}>
              <Text
                style={{
                  fontFamily: 'nunito.black',
                  fontSize: 14,
                  color: '#538AE3',
                }}>
                Lihat Selengkapnya
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default home;
