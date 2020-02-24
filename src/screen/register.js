import React, {Component} from 'react'
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
    ToastAndroid
} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';


import styles from './styleregister'
import bg from '../assets/background.jpeg'
import Logo from '../assets/Logo.png'
import Icon from 'react-native-vector-icons/AntDesign'

console.disableYellowBox = true;

class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true
        };
    }
    
    managePasswordVisibility = () => {
        this.setState({
            hidePassword: !this.state.hidePassword
        });
    };
    toast = () => {
        ToastAndroid.showWithGravity(
            'Success Register',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };
    back= () => {
        this.toast()
        this.props.navigation.navigate('Login')
    }
    render() {
        let JenisKelamin = [
            {value: 'Laki - Laki'}, 
            {value: 'Perempuan'}
        ];
        let KotaTinggal = [
            {value: 'Banda Aceh'}, 
            {value: 'Langsa'},
            {value: 'Lhokseumawe'},
            {value: 'Meulaboh'},
            {value: 'Sabang'},
            {value: 'Subulussalam'},
            {value: 'Denpasar'},
            {value: 'Pangkalpinang'},
            {value: 'Cilegon'},
            {value: 'Serang'},
            {value: 'Tangerang Selatan'},
            {value: 'Tangerang'},
            {value: 'Bengkulu'},
            {value: 'Gorontalo'},
            {value: 'Jakarta Barat'},
            {value: 'Jakarta Pusat'},
            {value: 'Jakarta Selatan'},
            {value: 'Jakarta Utara'},
            {value: 'Jakarta Timur'},
            {value: 'Sungai Penuh'},
            {value: 'Jambi'},
            {value: 'Bandung'},
            {value: 'Bekasi'},
            {value: 'Bogor'},
            {value: 'Cimahi'},
            {value: 'Cirebon'},
            {value: 'Depok'},
            {value: 'Sukabumi'},
            {value: 'Tasikmalaya'},
            {value: 'Banjar'},
            {value: 'Magelang'},
            {value: 'Pekalongan'},
            {value: 'Purwokerto'},
            {value: 'Salatiga'},
            {value: 'Semarang'},
            {value: 'Surakarta'},
            {value: 'Tegal'},
            {value: 'Batu'},
            {value: 'Blitar'},
            {value: 'Kediri'},
            {value: 'Madiun'},
            {value: 'Malang'},
            {value: 'Mojokerto'},
            {value: 'Pasuruan'},
            {value: 'Probolinggo'},
            {value: 'Surabaya'},
            {value: 'Pontianak'},
            {value: 'Singkawang'},
            {value: 'Banjarbaru'},
            {value: 'Banjarmasin'},
            {value: 'Palangkaraya'},
            {value: 'Balikpapan'},
            {value: 'Bontang'},
            {value: 'Samarinda'},
            {value: 'Tarakan'},
            {value: 'Batam'},
            {value: 'Tanjungpinang'},
            {value: 'Bandar Lampung'},
            {value: 'Metro'},
            {value: 'Ternate'},
            {value: 'Tidore Kepulauan'},
            {value: 'Ambon'},
            {value: 'Tual'},
            {value: 'Bima'},
            {value: 'Mataram'},
            {value: 'Kupang'},
            {value: 'Sorong'},
            {value: 'Jayapura'},
            {value: 'Dumai'},
            {value: 'Pekanbaru'},
            {value: 'Makassar'},
            {value: 'Palopo'},
            {value: 'Parepare'},
            {value: 'Palu'},
            {value: 'Bau-Bau'},
            {value: 'Kendari'},
            {value: 'Bitung'},
            {value: 'Kotamobagu'},
            {value: 'Manado'},
            {value: 'Tomohon'},
            {value: 'Bukittinggi'},
            {value: 'Padang'},
            {value: 'Padangpanjang'},
            {value: 'Pariaman'},
            {value: 'Payakumbuh'},
            {value: 'Sawahlunto'},
            {value: 'Solok'},
            {value: 'Lubuklinggau'},
            {value: 'Pagaralam'},
            {value: 'Palembang'},
            {value: 'Prabumulih'},
            {value: 'Binjai'},
            {value: 'Medan'},
            {value: 'Padang Sidempuan'},
            {value: 'Pematangsiantar'},
            {value: 'Sibolga'},
            {value: 'Tanjungbalai'},
            {value: 'Tebingtinggi'},
            {value: 'Yogyakarta'},




            
        ];
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#4A86E8'
                }}>
                <StatusBar backgroundColor='#F2F1F1'/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground style={styles.background} source={bg}>
                        {/* <ScrollView> */}
                        <View
                            style={{
                                alignSelf: 'center',
                                marginTop: 50,
                                position: 'absolute'
                            }}>
                            <Image source={Logo} style={styles.logo}/>
                        </View>
                        <View
                            style={{
                                alignContent: 'center',
                                marginTop: 260
                            }}>
                            <View style={styles.viewTextInput}>
                                <TextField
                                    textColor='#fff'
                                    containerStyle={{maxWidth:500}}
                                    label='Nama Lengkap'
                                    lineWidth={0.7}
                                    activeLineWidth={0.7}
                                    tintColor='#fff'
                                    baseColor='#fff'
                                    fontSize={20}
                                />
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Dropdown
                                    containerStyle={{width:'75%'}}
                                    pickerStyle={{backgroundColor:'#4A86E8',borderRadius:10}}
                                    shadeOpacity={0.12}
                                    label='Jenis Kelamin'
                                    baseColor='#fff'
                                    textColor='#fff'
                                    dropdownOffset={{ top: 32, left: 0 }}
                                    dropdownPosition={0}
                                    fontSize={20}
                                    data={JenisKelamin}
                                />
                            </View>
                            <View style={{alignItems:'center'}}>
                                <Dropdown
                                    containerStyle={{width:'75%'}}
                                    pickerStyle={{backgroundColor:'#4A86E8',borderRadius:10}}
                                    shadeOpacity={0.12}
                                    label='Kota Tinggal'
                                    baseColor='#fff'
                                    textColor='#fff'
                                    dropdownOffset={{ top: 32, left: 0 }}
                                    fontSize={20}
                                    data={KotaTinggal}
                                />
                            </View>
                            <View
                                style={{
                                    marginTop: 25,
                                    alignSelf: 'center',
                                    height: 4,
                                    backgroundColor: '#fff',
                                    width: '15%',
                                    borderRadius: 20
                                }}/>
                            <View style={styles.viewTextInput}>
                                <TextField
                                    textColor='#fff'
                                    containerStyle={{maxWidth:500}}
                                    label='Username'
                                    lineWidth={0.7}
                                    activeLineWidth={0.7}
                                    tintColor='#fff'
                                    baseColor='#fff'
                                    fontSize={20}
                                />
                            </View>
                            <View style={styles.viewTextInput2}>
                                <TextField
                                    textColor='#fff'
                                    containerStyle={{maxWidth:500}}
                                    label='Password'
                                    lineWidth={0.7}
                                    activeLineWidth={0.7}
                                    tintColor='#fff'
                                    baseColor='#fff'
                                    fontSize={20}
                                    secureTextEntry={this.state.hidePassword}
                                />
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.positionHide}
                                    onPress={this.managePasswordVisibility}>
                                    <Image
                                        source={this.state.hidePassword
                                            ? require('../assets/visibility.png')
                                            : require('../assets/hide.png')}
                                        style={styles.styleIconHide}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* </ScrollView> */}
                    </ImageBackground>
                    <TouchableWithoutFeedback onPress={this.back}>
                        <View style={styles.viewDaftar}>
                            <Text style={styles.textDaftar}>Daftar Sekarang</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Login')}>
                        <View style={styles.viewLogin}>
                            <Text style={styles.textLoading}>Login</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        )
    }
}

export default register;
