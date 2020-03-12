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

import Prov from '../provinsi.json';
import Kota from '../kota.json';

console.disableYellowBox = true;

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
      modalkota: false,
      modalprovinsi: false,
      data: [],
      provinsi: '',
      id_provinsi: '',
      kotak: [],
      provin: [],
      nama_eror: false,
      jenis_eror: false,
      provinsi_eror: false,
      kota_eror: false,
      username_eror: false,
      password_eror: false,
    };
  }
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
        console.log(response);
        if (response == 'Berhasil') {
          console.log(response);
          this.back();
        } else if (response.username) {
          console.log(response.username);
          this.username();
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({error: 'error'});
      });
  };
  componentDidMount() {
    this.setState({provin: Prov});
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
    this.setState({username_eror: true});
    ToastAndroid.showWithGravity(
      'Username sudah terpakai',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  };
  usernamenull = () => {
    ToastAndroid.showWithGravity(
      'username null',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  passwordnull = () => {
    ToastAndroid.showWithGravity(
      'password null',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  back = () => {
    this.toast();
    this.props.navigation.navigate('Login');
  };
  filterkota = item => {
    this.setState({id_provinsi: item.id});
    var obj = [];
    console.log(item);
    Kota.filter(value => {
      if (parseInt(value.id_provinsi) === parseInt(item.id)) {
        obj.push(value);
        this.setState({
          kotak: obj,
          provinsi: item.provinsi,
          modalprovinsi: false,
        });
        console.log(obj);
      }
    });
  };
  searchprovinsi = ({item}) => {
    return (
      <View
        style={{
          padding: 13,
          borderBottomWidth: 0.5,
          borderColor: 'gray',
          left: 15,
        }}>
        <TouchableOpacity onPress={() => this.filterkota(item)}>
          <Text style={{fontFamily: 'nunito.regular', fontSize: 20}}>
            {item.provinsi}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  searchkota = ({item}) => {
    return (
      <View
        style={{
          padding: 13,
          borderBottomWidth: 0.5,
          borderColor: 'gray',
          left: 15,
        }}>
        <TouchableOpacity
          onPress={() => this.setState({kota: item.kota, modalkota: false})}>
          <Text style={{fontFamily: 'nunito.regular', fontSize: 20}}>
            {item.kota}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  functionSearchprovinsi = text => {
    const newData = Prov.filter(item => {
      const itemData = item.provinsi.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({provin: newData, text: text});
  };
  functionSearchkota = text => {
    const newData = this.state.kotak.filter(item => {
      const itemData = item.kota.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({kotak: newData, text: text});
  };
  kota = () => {
    if (this.state.kota != '') {
      return (
        <Text style={{color: '#fff', bottom: -10, fontSize: 11}}>Kota</Text>
      );
    }
  };
  provinsi = () => {
    if (this.state.provinsi != '') {
      return (
        <Text style={{color: '#fff', bottom: -10, fontSize: 11}}>Provinsi</Text>
      );
    }
  };
  kota_kosong = () => {
    if (this.state.kotak != '') {
      this.setState({modalkota: true});
    } else {
      alert('isi provinsi dulu');
    }
  };
  error = () => {
    if (
      this.state.nama_lengkap != '' &&
      this.state.jenis_kelamin != '' &&
      this.state.provinsi != '' &&
      this.state.kota != '' &&
      this.state.username != '' &&
      this.state.password != ''
    ) {
      this.Register();
    }
    if (this.state.nama_lengkap === '') {
      this.setState({nama_eror: true});
    } else {
      this.setState({nama_eror: false});
    }
    if (this.state.jenis_kelamin === '') {
      this.setState({jenis_eror: true});
    } else {
      this.setState({jenis_eror: false});
    }
    if (this.state.provinsi === '') {
      this.setState({provinsi_eror: true});
    } else {
      this.setState({provinsi_eror: false});
    }
    if (this.state.kota === '') {
      this.setState({kota_eror: true});
    } else {
      this.setState({kota_eror: false});
    }
    if (this.state.username === '') {
      // this.setState({username_eror: true});
      setTimeout(() => {
        this.usernamenull();
      }, 100);
    } else {
      this.setState({username_eror: false});
    }
    if (this.state.password === '') {
      // this.setState({password_eror: true});
      setTimeout(() => {
        this.passwordnull();
      }, 2000);
    } else {
      this.setState({password_eror: false});
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#4A86E8',
        }}>
        <Modal visible={this.state.modalprovinsi}>
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
                  placeholder="Cari Provinsi"
                  onChangeText={text => this.functionSearchprovinsi(text)}
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
              data={this.state.provin}
              renderItem={this.searchprovinsi}
              keyExtractor={item => item.toString()}
            />
          </View>
        </Modal>
        <Modal visible={this.state.modalkota}>
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
                  onChangeText={text => this.functionSearchkota(text)}
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
              data={this.state.kotak}
              renderItem={this.searchkota}
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
                {this.state.nama_eror === true ? (
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
                {this.state.jenis_eror === true ? (
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
                <TouchableOpacity
                  onPress={() => this.setState({modalprovinsi: true})}>
                  {this.provinsi()}
                  <TextInput
                    placeholder="Provinsi"
                    placeholderTextColor="#fff"
                    editable={false}
                    value={this.state.provinsi}
                    style={{color: '#fff', fontSize: 18, left: -5}}
                  />
                  {this.state.provinsi_eror === true ? (
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
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: '85%',
                  borderBottomWidth: 0.3,
                  borderBottomColor: '#fff',
                  height: 50,
                }}>
                <TouchableOpacity onPress={() => this.kota_kosong()}>
                  {this.kota()}
                  <TextInput
                    placeholder="kota "
                    placeholderTextColor="#fff"
                    editable={false}
                    value={this.state.kota}
                    style={{color: '#fff', fontSize: 18, left: -5}}
                  />
                  {this.state.kota_eror === true ? (
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

          <TouchableWithoutFeedback onPress={this.error}>
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
