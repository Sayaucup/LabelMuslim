import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  ScrollView,
  StatusBar,
  ToastAndroid,
  Modal,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {TextField} from 'react-native-material-textfield';

import styles from './styleregister';
import bg from '../assets/background.jpeg';
import Logo from '../assets/Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconn from 'react-native-vector-icons/SimpleLineIcons';

import {FlatList} from 'react-native-gesture-handler';

console.disableYellowBox = true;

const items = [
  {
    value: 'Ambon',
  },
  {
    value: 'Balikpapan',
  },
  {
    value: 'Banda Aceh',
  },
  {
    value: 'Bandar Lampung',
  },
  {
    value: 'Bandung',
  },
  {
    value: 'Banjar',
  },
  {
    value: 'Banjarbaru',
  },
  {
    value: 'Banjarmasin',
  },
  {
    value: 'Batam',
  },
  {
    value: 'Batu',
  },
  {
    value: 'Bau-Bau',
  },
  {
    value: 'Bekasi',
  },
  {
    value: 'Bengkulu',
  },
  {
    value: 'Bima',
  },
  {
    value: 'Binjai',
  },
  {
    value: 'Bitung',
  },
  {
    value: 'Blitar',
  },
  {
    value: 'Bogor',
  },
  {
    value: 'Bontang',
  },
  {
    value: 'Bukittinggi',
  },
  {
    value: 'Cilegon',
  },
  {
    value: 'Cimahi',
  },
  {
    value: 'Cirebon',
  },
  {
    value: 'Denpasar',
  },
  {
    value: 'Depok',
  },
  {
    value: 'Dumai',
  },
  {
    value: 'Gorontalo',
  },
  {
    value: 'Jambi',
  },
  {
    value: 'Jayapura',
  },
  {
    value: 'Kediri',
  },
  {
    value: 'Kendari',
  },
  {
    value: 'Jakata Barat',
  },
  {
    value: 'Jakarta Pusat',
  },
  {
    value: 'Jakarta Selatan',
  },
  {
    value: 'Jakarta Timur',
  },
  {
    value: 'Jakarta Utara',
  },
  {
    value: 'Kotamobagu',
  },
  {
    value: 'Kupang',
  },
  {
    value: 'Langsa',
  },
  {
    value: 'Lhokseumawe',
  },
  {
    value: 'Lubuklinggau',
  },
  {
    value: 'Madiun',
  },
  {
    value: 'Magelang',
  },
  {
    value: 'Makassar',
  },
  {
    value: 'Malang',
  },
  {
    value: 'Manado',
  },
  {
    value: 'Mataram',
  },
  {
    value: 'Medan',
  },
  {
    value: 'Metro',
  },
  {
    value: 'Meulaboh',
  },
  {
    value: 'Mojokerto',
  },
  {
    value: 'Padang',
  },
  {
    value: 'Padang Sidempuan',
  },
  {
    value: 'Padangpanjang',
  },
  {
    value: 'Pagaralam',
  },
  {
    value: 'Palangkaraya',
  },
  {
    value: 'Palembang',
  },
  {
    value: 'Palopo',
  },
  {
    value: 'Palu',
  },
  {
    value: 'Pangkalpinang',
  },
  {
    value: 'Parepare',
  },
  {
    value: 'Pariaman',
  },
  {
    value: 'Pasuruan',
  },
  {
    value: 'Payakumbuh',
  },
  {
    value: 'Pekalongan',
  },
  {
    value: 'Pekanbaru',
  },
  {
    value: 'Pematangsiantar',
  },
  {
    value: 'Pontianak',
  },
  {
    value: 'Prabumulih',
  },
  {
    value: 'Probolinggo',
  },
  {
    value: 'Purwokerto',
  },
  {
    value: 'Sabang',
  },
  {
    value: 'Salatiga',
  },
  {
    value: 'Samarinda',
  },
  {
    value: 'Sawahlunto',
  },
  {
    value: 'Semarang',
  },
  {
    value: 'Serang',
  },
  {
    value: 'Sibolga',
  },
  {
    value: 'Singkawang',
  },
  {
    value: 'Solok',
  },
  {
    value: 'Sorong',
  },
  {
    value: 'Subulussalam',
  },
  {
    value: 'Sukabumi',
  },
  {
    value: 'Sungai Penuh',
  },
  {
    value: 'Surabaya',
  },
  {
    value: 'Surakarta',
  },
  {
    value: 'Tangerang',
  },
  {
    value: 'Tangerang Selatan',
  },
  {
    value: 'Tanjungbalai',
  },
  {
    value: 'Tanjungpinang',
  },
  {
    value: 'Tarakan',
  },
  {
    value: 'Tasikmalaya',
  },
  {
    value: 'Tebingtinggi',
  },
  {
    value: 'Tegal',
  },
  {
    value: 'Ternate',
  },
  {
    value: 'Tidore Kepulauan',
  },
  {
    value: 'Tumohon',
  },
  {
    value: 'Tual',
  },
  {
    value: 'Yogyakarta',
  },
];
const JenisKelamin = [
  {
    value: 'Laki - Laki',
  },
  {
    value: 'Perempuan',
  },
];

class register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: true,
      nama_lengkap: '',
      kota: '',
      jenis_kelamin: '',
      username: '',
      password: '',
      error: '',
      modal: false,
      data: [],
    };
  }

  managePasswordVisibility = () => {
    this.setState({
      hidePassword: !this.state.hidePassword,
    });
  };
  toast = () => {
    ToastAndroid.showWithGravity(
      'Register berhasil, Silahkan Login',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  };
  username = () => {
    ToastAndroid.showWithGravity(
      'Username sudah terpakai',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  };
  isi = () => {
    ToastAndroid.showWithGravity(
      'isi woy',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  };
  back = () => {
    this.toast();
    this.props.navigation.navigate('Login');
  };
  error = () => {
    const white = '#fff';
    const red = 'red';
    if (this.state.error === 'error') {
      return red;
    } else {
      return white;
    }
  };
  Register = () => {
    const {nama_lengkap, kota, jenis_kelamin, username, password} = this.state;
    return fetch('http://labelmuslim.sipondok.com/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama_lengkap: nama_lengkap,
        kota: kota,
        jenis_kelamin: jenis_kelamin,
        username: username,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (
          this.state.nama_lengkap === '' ||
          this.state.jenis_kelamin === '' ||
          this.state.kota === ''
        ) {
          return this.setState({error: 'error'});
        } else {
          console.log(response);
          if (response == 'Berhasil') {
            console.log(response);
            this.back();
          } else if (response.username) {
            console.log(response.username);
            this.username();
          } else if (response.jenis_kelamin) {
            console.log(response.jenis_kelamin);
          } else if (response.nama_lengkap) {
            console.log(response.nama_lengkap);
          } else if (response.kota) {
            console.log(response.kota);
          }
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({error: 'error'});
        alert('error');
      });
  };
  componentDidMount() {
    this.setState({data: items});
  }
  search = ({item}) => {
    return (
      <View
        style={{
          padding: 13,
          borderBottomWidth: 0.5,
          borderColor: 'gray',
          left: 15,
        }}>
        <TouchableOpacity
          onPress={() => this.setState({kota: item.value, modal: false})}>
          <Text style={{fontFamily: 'nunito.regular', fontSize: 20}}>
            {item.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  functionSearch = text => {
    const newData = items.filter(item => {
      const itemData = item.value.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({data: newData, text: text});
  };
  kota = () => {
    if (this.state.kota != '') {
      return (
        <Text style={{color: '#fff', bottom: -10, fontSize: 11}}>
          Kota Tinggal
        </Text>
      );
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#4A86E8',
        }}>
        <Modal visible={this.state.modal}>
          <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View
              style={{
                height: 60,
                backgroundColor: '#4A86E8',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  borderRadius: 50,
                  alignItems: 'center',
                  height: 45,
                  width: '95%',
                }}>
                <Icon name="search" style={{left: 10}} size={30} />
                <TextInput
                  placeholder="Cari Kota"
                  onChangeText={text => this.functionSearch(text)}
                  style={{
                    left: 10,
                    fontFamily: 'nunito.semibold',
                    color: '#000',
                    fontSize: 20,
                  }}
                />
              </View>
            </View>
            <FlatList
              data={this.state.data}
              renderItem={this.search}
              keyExtractor={item => item.toString()}
            />
          </View>
        </Modal>
        <StatusBar backgroundColor="#F2F1F1" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground style={styles.background} source={bg}>
            <View
              style={{
                alignSelf: 'center',
                marginTop: 50,
                position: 'absolute',
              }}>
              <Image source={Logo} style={styles.logo} />
            </View>
            <View
              style={{
                alignContent: 'center',
                marginTop: 260,
              }}>
              <View style={styles.viewTextInput}>
                <TextField
                  onChangeText={text => this.setState({nama_lengkap: text})}
                  value={this.state.nama_lengkap}
                  baseColor="#fff"
                  textColor="#fff"
                  label="Nama Lengkap"
                  lineWidth={0.7}
                  activeLineWidth={0.7}
                  tintColor="#fff"
                  fontSize={18}
                />
                {this.state.error === 'error' ? (
                  <View
                    style={{
                      position: 'absolute',
                      width: '100%',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      height: '100%',
                    }}>
                    <View style={{backgroundColor: '#4A86E8'}}>
                      <Icon name="error" size={30} color="red" />
                    </View>
                  </View>
                ) : (
                  <View />
                )}
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}>
                <Dropdown
                  onChangeText={text => this.setState({jenis_kelamin: text})}
                  value={this.state.jenis_kelamin}
                  containerStyle={{
                    width: '85%',
                  }}
                  pickerStyle={{
                    backgroundColor: '#4A86E8',
                    borderRadius: 10,
                  }}
                  itemTextStyle={{
                    borderColor: '#fff',
                    borderRadius: 5,
                    paddingVertical: 7,
                    paddingLeft: 10,
                    borderWidth: 1,
                  }}
                  dropdownMargins={{min: 20}}
                  shadeOpacity={0.12}
                  label="Jenis Kelamin"
                  baseColor="#fff"
                  textColor="#fff"
                  dropdownOffset={{
                    top: 12,
                    left: 0,
                  }}
                  dropdownPosition={-3}
                  fontSize={18}
                  data={JenisKelamin}
                />
                {this.state.error === 'error' ? (
                  <View
                    style={{
                      position: 'absolute',
                      paddingRight: '7%',
                      width: '100%',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      height: '100%',
                    }}>
                    <View style={{backgroundColor: '#4A86E8'}}>
                      <Icon name="error" size={30} color="red" />
                    </View>
                  </View>
                ) : (
                  <View />
                )}
              </View>

              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: '85%',
                  borderBottomWidth: 0.3,
                  borderBottomColor: '#fff',
                  height: 50,
                }}>
                <TouchableOpacity onPress={() => this.setState({modal: true})}>
                  {this.kota()}
                  <TextInput
                    placeholder="kota Tinggal"
                    placeholderTextColor="#fff"
                    editable={false}
                    value={this.state.kota}
                    style={{color: '#fff', fontSize: 18, left: -5}}
                  />
                  {this.state.error === 'error' ? (
                    <View
                      style={{
                        position: 'absolute',
                        width: '100%',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        height: '100%',
                      }}>
                      <View style={{backgroundColor: '#4A86E8'}}>
                        <Icon name="error" size={30} color="red" />
                      </View>
                    </View>
                  ) : (
                    <View />
                  )}
                </TouchableOpacity>
              </View>

              <View
                style={{
                  marginTop: 25,
                  alignSelf: 'center',
                  height: 4,
                  backgroundColor: '#fff',
                  width: '15%',
                  borderRadius: 20,
                }}
              />
              <View style={styles.viewTextInput}>
                <TextField
                  onChangeText={text => this.setState({username: text})}
                  value={this.state.username}
                  textColor="#fff"
                  label="Username"
                  lineWidth={0.7}
                  activeLineWidth={0.7}
                  tintColor="#fff"
                  baseColor="#fff"
                  fontSize={18}
                />
              </View>
              <View style={styles.viewTextInput2}>
                <TextField
                  onChangeText={text => this.setState({password: text})}
                  value={this.state.password}
                  textColor="#fff"
                  label="Password"
                  lineWidth={0.7}
                  activeLineWidth={0.7}
                  tintColor="#fff"
                  baseColor="#fff"
                  fontSize={18}
                  secureTextEntry={this.state.hidePassword}
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.positionHide}
                  onPress={this.managePasswordVisibility}>
                  <Image
                    source={
                      this.state.hidePassword
                        ? require('../assets/visibility.png')
                        : require('../assets/hide.png')
                    }
                    style={styles.styleIconHide}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>

          <TouchableWithoutFeedback onPress={this.Register}>
            <View style={styles.viewDaftar}>
              <Text style={styles.textDaftar}>Daftar Sekarang</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('Login')}>
            <View style={styles.viewLogin}>
              <Text style={styles.textLoading}>Login</Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    );
  }
}

export default register;
