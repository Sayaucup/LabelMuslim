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
  FlatList,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {TextField} from 'react-native-material-textfield';

import styles from './styleregister';
import bg from '../assets/background.jpeg';
import Logo from '../assets/Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconn from 'react-native-vector-icons/SimpleLineIcons';

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
      modaljeniskelamin: false,
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
        } else if (response.nama_lengkap) {
          console.log(response.nama_lengkap);
          this.setState({nama_eror: true});
        } else if (response.password) {
          console.log(response.password);
          this.setState({password_eror: true});
        } else if (response.username) {
          console.log(response.username);
          this.username();
        }
      })
      .catch(error => {
        console.log(error);
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
      this.setState({username_eror: true});
      // setTimeout(() => {
      //   this.usernamenull();
      // }, 100);
    } else {
      this.setState({username_eror: false});
    }
    if (this.state.password === '') {
      this.setState({password_eror: true});
      // setTimeout(() => {
      //   this.passwordnull();
      // }, 2000);
    } else {
      this.setState({password_eror: false});
    }
  };
  Tipee = ({item}) => {
    return (
      <View
        style={{
          padding: 10,
          left: 15,
        }}>
        <TouchableOpacity
          onPress={() => this.setState({jenis_kelamin: item.value, modaljeniskelamin: false})}>
          <Text style={{fontFamily: 'nunito.regular', fontSize: 20}}>
            {item.value}
          </Text>
        </TouchableOpacity>
      </View>
    );
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
        <Modal transparent visible={this.state.modaljeniskelamin}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                height: '25%',
                width: '60%',
                backgroundColor: '#fff',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  top: 15,
                  fontSize: 20,
                  alignSelf: 'center',
                  fontFamily: 'nunito.black',
                }}>
                Jenis Kelamin
              </Text>
              <View
                style={{
                  height: 2,
                  backgroundColor: '#f2f2f2',
                  top: 25,
                  marginHorizontal: 10,
                }}
              />
              <View style={{top:30}}>
              <FlatList
                data={JenisKelamin}
                renderItem={this.Tipee}
                keyExtractor={item => item.toString()}
              />
              </View>
            </View>
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
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 12,
                      top: -10,
                      fontFamily: 'nunito.bold',
                    }}>
                    Nama lengkap tidak valid
                  </Text>
                ) : (
                  <View />
                )}
              </View>
              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: '85%',
                  height: 40,
                }}>
                <TouchableOpacity
                  onPress={() => this.setState({modaljeniskelamin: true})}>
                  <TextField
                    defaultValue={this.state.jenis_kelamin}
                    textColor="#fff"
                    label="Jenis Kelamin"
                    editable={false}
                    lineWidth={0.7}
                    activeLineWidth={0.7}
                    tintColor="#fff"
                    baseColor="#fff"
                    fontSize={18}
                  />
                  {this.state.jenis_eror === true ? (
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 12,
                        fontFamily: 'nunito.bold',
                        top: -10,
                      }}>
                      Pilih salah satu
                    </Text>
                  ) : (
                    <View />
                  )}
                </TouchableOpacity>
              </View>
              {/* <View
                style={{
                  alignContent: 'center',
                }}>
                <View style={styles.viewTextInput}>
                  <Dropdown
                    onChangeText={text => this.setState({jenis_kelamin: text})}
                    value={this.state.jenis_kelamin}
                    pickerStyle={{
                      backgroundColor: '#4A86E8',
                      borderRadius: 10,
                    }}
                    itemTextStyle={{
                      paddingVertical: 7,
                      paddingLeft: 10,
                      fontFamily: 'nunito.bold',
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
                    <Text
                      style={{
                        color: 'red',
                        top: -10,
                        fontFamily: 'nunito.bold',
                        fontSize: 12,
                      }}>
                      Pilih salah satu
                    </Text>
                  ) : (
                    <View />
                    )}
                  
                </View>
              </View> */}
              <View
                style={{
                  alignSelf: 'center',
                  justifyContent: 'center',
                  width: '85%',
                  height: 50,
                  top: 10,
                }}>
                <TouchableOpacity
                  onPress={() => this.setState({modalprovinsi: true})}>
                  <TextField
                    defaultValue={this.state.provinsi}
                    textColor="#fff"
                    label="Provinsi"
                    editable={false}
                    lineWidth={0.7}
                    activeLineWidth={0.7}
                    tintColor="#fff"
                    baseColor="#fff"
                    fontSize={18}
                  />
                  {this.state.provinsi_eror === true ? (
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 12,
                        fontFamily: 'nunito.bold',
                        top: -10,
                      }}>
                      Pilih salah satu
                    </Text>
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
                  height: 70,
                  top: 10,
                }}>
                <TouchableOpacity onPress={() => this.kota_kosong()}>
                  <TextField
                    defaultValue={this.state.kota}
                    textColor="#fff"
                    label="Kota"
                    lineWidth={0.7}
                    editable={false}
                    activeLineWidth={0.7}
                    tintColor="#fff"
                    baseColor="#fff"
                    fontSize={18}
                  />
                  {this.state.kota_eror === true ? (
                    <Text
                      style={{
                        color: 'red',
                        fontFamily: 'nunito.bold',
                        fontSize: 12,
                        top: -10,
                      }}>
                      Pilih salah satu
                    </Text>
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
                {this.state.username_eror === true ? (
                  <Text
                    style={{
                      color: 'red',
                      fontSize: 12,
                      top: -10,
                      fontFamily: 'nunito.bold',
                    }}>
                    Username tidak valid
                  </Text>
                ) : (
                  <View />
                )}
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
                {this.state.password_eror === true ? (
                  <Text
                    style={{
                      color: 'red',
                      top: -10,
                      fontFamily: 'nunito.bold',
                      fontSize: 12,
                    }}>
                    Password tidak valid
                  </Text>
                ) : (
                  <View />
                )}
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
