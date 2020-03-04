import React, {Component, Fragment} from 'react'
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
import {Dropdown} from 'react-native-material-dropdown';
import {TextField} from 'react-native-material-textfield';

import styles from './styleregister'
import bg from '../assets/background.jpeg'
import Logo from '../assets/Logo.png'
import Icon from 'react-native-vector-icons/AntDesign'

import SearchableDropdown from 'react-native-searchable-dropdown';

console.disableYellowBox = true;

const items = [
    {
                value: 'Ambon'
    }, {
                value: 'Balikpapan'
    }, {
                value: 'Banda Aceh'
    }, {
                value: 'Bandar Lampung'
    }, {
                value: 'Bandung'
    }, {
                value: 'Banjar'
    }, {
                value: 'Banjarbaru'
    }, {
                value: 'Banjarmasin'
    }, {
                value: 'Batam'
    }, {
        
        value: 'Batu'
    }, {
        
        value: 'Bau-Bau'
    }, {
        
        value: 'Bekasi'
    }, {
        
        value: 'Bengkulu'
    }, {
        
        value: 'Bima'
    }, {
        
        value: 'Binjai'
    }, {
        
        value: 'Bitung'
    }, {
        
        value: 'Blitar'
    }, {
        
        value: 'Bogor'
    }, {
        
        value: 'Bontang'
    }, {
        
        value: 'Bukittinggi'
    }, {
        
        value: 'Cilegon'
    }, {
        
        value: 'Cimahi'
    }, {
        
        value: 'Cirebon'
    }, {
        
        value: 'Denpasar'
    }, {
        
        value: 'Depok'
    }, {
        
        value: 'Dumai'
    }, {
        
        value: 'Gorontalo'
    }, {
        
        value: 'Jambi'
    }, {
        
        value: 'Jayapura'
    }, {
        
        value: 'Kediri'
    }, {
        
        value: 'Kendari'
    }, {
        
        value: 'Jakata Barat'
    }, {
        
        value: 'Jakarta Pusat'
    }, {
        
        value: 'Jakarta Selatan'
    }, {
        
        value: 'Jakarta Timur'
    }, {
        
        value: 'Jakarta Utara'
    }, {
        
        value: 'Kotamobagu'
    }, {
        
        value: 'Kupang'
    },  {
        
        value: 'Langsa'
    }, {
        
        value: 'Lhokseumawe'
    }, {
        
        value: 'Lubuklinggau'
    }, {
        
        value: 'Madiun'
    }, {
        
        value: 'Magelang'
    }, {
        
        value: 'Makassar'
    }, {
        
        value: 'Malang'
    }, {
        
        value: 'Manado'
    }, {
        
        value: 'Mataram'
    }, {
        
        value: 'Medan'
    }, {
        
        value: 'Metro'
    }, {
        
        value: 'Meulaboh'
    }, {
        
        value: 'Mojokerto'
    }, {
        
        value: 'Padang'
    }, {
        
        value: 'Padang Sidempuan'
    }, {
        
        value: 'Padangpanjang'
    }, {
        
        value: 'Pagaralam'
    }, {
        
        value: 'Palangkaraya'
    }, {
        
        value: 'Palembang'
    }, {
        
        value: 'Palopo'
    }, {
        
        value: 'Palu'
    }, {
        
        value: 'Pangkalpinang'
    }, {
        
        value: 'Parepare'
    }, {
        
        value: 'Pariaman'
    }, {
        
        value: 'Pasuruan'
    }, {
        
        value: 'Payakumbuh'
    }, {
        
        value: 'Pekalongan'
    }, {
        
        value: 'Pekanbaru'
    }, {
        
        value: 'Pematangsiantar'
    }, {
        
        value: 'Pontianak'
    }, {
        
        value: 'Prabumulih'
    }, {
        
        value: 'Probolinggo'
    }, {
        
        value: 'Purwokerto'
    }, {
        
        value: 'Sabang'
    }, {
        
        value: 'Salatiga'
    }, {
        
        value: 'Samarinda'
    }, {
        
        value: 'Sawahlunto'
    }, {
        
        value: 'Semarang'
    }, {
        
        value: 'Serang'
    }, {
        
        value: 'Sibolga'
    }, {
        
        value: 'Singkawang'
    }, {
        
        value: 'Solok'
    }, {
        
        value: 'Sorong'
    }, {
        
        value: 'Subulussalam'
    }, {
        
        value: 'Sukabumi'
    }, {
        
        value: 'Sungai Penuh'
    }, {
        
        value: 'Surabaya'
    }, {
        
        value: 'Surakarta'
    }, {
        
        value: 'Tangerang'
    }, {
        
        value: 'Tangerang Selatan'
    }, {
        
        value: 'Tanjungbalai'
    }, {
        
        value: 'Tanjungpinang'
    }, {
        
        value: 'Tarakan'
    }, {
        
        value: 'Tasikmalaya'
    }, {
        
        value: 'Tebingtinggi'
    }, {
        
        value: 'Tegal'
    }, {
        
        value: 'Ternate'
    }, {
        
        value: 'Tidore Kepulauan'
    }, {
        
        value: 'Tumohon'
    }, {
        
        value: 'Tual'
    }, {
        
        value: 'Yogyakarta'
    }
];
const JenisKelamin = [
    {
        value: 'Laki - Laki'
    }, {
        value: 'Perempuan'
    }
];

class register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true,
            nama_lengkap : '',
            kota : '',
            jenis_kelamin : '',
            username : '',
            password : ''
        };
    }

    managePasswordVisibility = () => {
        this.setState({
            hidePassword: !this.state.hidePassword
        });
    };
    toast = () => {
        ToastAndroid.showWithGravity(
            'Register berhasil, Silahkan Login',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        );
    };
    back = () => {
        this.toast()
        this
            .props
            .navigation
            .navigate('Login')
    }
    Register = () => {
        const {
            nama_lengkap,
            kota,
            jenis_kelamin,
            username,
            password
        } = this.state
        return fetch('http://labelmuslim.sipondok.com/api/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama_lengkap: nama_lengkap,
                kota: kota,
                jenis_kelamin: jenis_kelamin,
                username: username,
                password: password
            })
        })
            .then(response => response.json())
            .then(response => {
                if (response == 'Berhasil') {
                    console.log(response);
                    this.back()
                }
            })
            .catch(error => {
                console.log(error);
                alert('error');
            });
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#4A86E8'
                }}>
                    
                <StatusBar backgroundColor='#F2F1F1'/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground style={styles.background} source={bg}>
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
                                    onChangeText={text => this.setState({nama_lengkap: text})}
                                    value={this.state.nama_lengkap}
                                    textColor='#fff'
                                    
                                    label='Nama Lengkap'
                                    lineWidth={0.7}
                                    activeLineWidth={0.7}
                                    tintColor='#fff'
                                    baseColor='#fff'
                                    fontSize={18}/>
                            </View>
                            <View
                                style={{
                                    alignItems: 'center'
                                }}>
                                <Dropdown
                                    onChangeText={text => this.setState({jenis_kelamin: text})}
                                    value={this.state.jenis_kelamin}
                                    containerStyle={{
                                        width: '85%'
                                    }}
                                    pickerStyle={{
                                        backgroundColor: '#4A86E8',
                                        borderRadius: 10,
                                    }}
                                    
                                    itemTextStyle={{borderColor:'#fff',borderRadius:5,paddingVertical:7,paddingLeft:10,borderWidth:1}}
                                    dropdownMargins	={{min:20}}
                                    shadeOpacity={0.12}
                                    label='Jenis Kelamin'
                                    baseColor='#fff'
                                    textColor='#fff'
                                    dropdownOffset={{
                                        top: 12,
                                        left: 0
                                    }}
                                    dropdownPosition={-3}
                                    fontSize={18}
                                    data={JenisKelamin}/>
                            </View>
                            <View
                                style={{
                                    alignItems: 'center'
                                }}>
                                <Dropdown
                                    onChangeText={text => this.setState({kota: text})}
                                    value={this.state.kota}
                                    containerStyle={{
                                        width: '85%'
                                    }}
                                    pickerStyle={{
                                        backgroundColor: '#4A86E8',
                                        borderRadius: 10,
                                        height: 181
                                    }}
                                    
                                    itemTextStyle={{borderColor:'#fff',borderRadius:5,paddingVertical:7,paddingLeft:10,borderWidth:1}}
                                    dropdownMargins	={{min:20}}
                                    shadeOpacity={0.12}
                                    label='Kota Tinggal'
                                    baseColor='#fff'
                                    textColor='#fff'
                                    dropdownOffset={{
                                        top: 12,
                                        left: 0
                                    }}
                                    dropdownPosition={-5}
                                    fontSize={18}
                                    data={items}/>
                            </View>
                            {/* <View
                                style={{
                                    justifyContent: 'center'
                                }}> 
                            <SearchableDropdown 
                                onItemSelect={(item) => {
                                    const items = this.state.selectedItems;
                                    items.push(item)
                                    this.setState({selectedItems: items});
                                }} containerStyle={{
                                    width:'75%',
                                    alignSelf:'center'
                                }} itemStyle={{
                                    padding: 10,
                                }} itemTextStyle={{
                                    color: '#fff',
                                    backgroundColor: '#4A86E8',
                                    fontSize:20
                                }} itemsContainerStyle={{
                                    maxHeight: 206,
                                    color:'#fff'
                                }} items={items} 
                                    defaultIndex={0}
                                textInputProps={{
                                    placeholder: "Kota Tinggal",
                                    // underlineColorAndroid: "transparent",
                                    stylevalue                                        fontSize:20,
                                        color:'#fff',
                                        borderBottomWidth: 0.7,
                                        borderColor: '#fff',
                                    },
                                }} listProps={{
                                    nestedScrollEnabled: true
                                }}/> 
                                </View> */}
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
                                    onChangeText={text => this.setState({username: text})}
                                    value={this.state.username}
                                    textColor='#fff'
                                    
                                    label='Username'
                                    lineWidth={0.7}
                                    activeLineWidth={0.7}
                                    tintColor='#fff'
                                    baseColor='#fff'
                                    fontSize={18}/>
                            </View>
                            <View style={styles.viewTextInput2}>
                                <TextField
                                    onChangeText={text => this.setState({password: text})}
                                    value={this.state.password}
                                    textColor='#fff'
                                    
                                    label='Password'
                                    lineWidth={0.7}
                                    activeLineWidth={0.7}
                                    tintColor='#fff'
                                    baseColor='#fff'
                                    fontSize={18}
                                    secureTextEntry={this.state.hidePassword}/>
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
        )
    }
}

export default register;
