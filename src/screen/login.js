import React, {Component} from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal,
    StatusBar,
    AsyncStorage,
    ToastAndroid
} from 'react-native'
import {
    TextField
} from 'react-native-material-textfield';

import Logo from '../assets/Logo.png'
import background from '../assets/background.jpeg'
import styles from '../style'
import { Value } from 'react-native-reanimated';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true,
            role: true,
            loading: true,
            username:'',
            password:'',
            nama_lengkap:'',
            kota:'',
            jenis_kelamin:'',
            id_user:''
        };
    }
    managePasswordVisibility = () => {
        this.setState({
            hidePassword: !this.state.hidePassword
        });
    };
    componentDidMount() {
        AsyncStorage
            .getItem('api_key')
            .then(value => {
                if (value != null) {
                    this
                        .props
                        .navigation
                        .navigate('Home');
                }
            });
    }
    toast = () => {
        ToastAndroid.showWithGravity(
            'Tunggu',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };
    error = () => {
        ToastAndroid.showWithGravity(
            'diisi',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };
    error2 = () => {
        ToastAndroid.showWithGravity(
            'Password and salah',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };
    error3 = () => {
        ToastAndroid.showWithGravity(
            'Username and salah',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };
    lanjut = () => {
        this.toast()
        this
            .props
            .navigation
            .navigate('Home')
    }
    Login = () => {
        const {username, password} = this.state;
        fetch('http://labelmuslim.sipondok.com/api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password})
        })
            .then(resJson => resJson.json())
            .then(resJson => {
                console.log(resJson);
                if (resJson.api_key) {
                    AsyncStorage.setItem('id_user', resJson.data.id_user);
                    AsyncStorage.setItem('nama_lengkap', resJson.data.nama_lengkap);
                    AsyncStorage.setItem('kota', resJson.data.kota);
                    AsyncStorage.setItem('jenis_kelamin', resJson.data.jenis_kelamin);
                    AsyncStorage.setItem('api_key', resJson.api_key);
                    
                    this.lanjut()
                } else if (resJson == 'Password anda salah') {
                    this.error2()
                }else if (resJson == 'Not Authorized') {
                    this.error3()
                }
            })
            .catch(error => {
                this.error()
                console.log(error);
            });
    };
    render() {
        setTimeout(() => {
            this.setState({role: false})
        }, 2500);
        if (this.state.role) {
            return (

                <ImageBackground style={styles.background} source={background}>
                    <StatusBar backgroundColor='#F2F1F1'/>
                    <View
                        style={{
                            alignSelf: 'center',
                            marginTop: 50
                        }}>
                        <Image source={Logo} style={styles.logo}/>
                    </View>
                    <Modal transparent visible={this.state.loading}>
                        <View style={styles.viewModal}>
                            <ActivityIndicator size={50} color='#fff'/>
                        </View>
                    </Modal>
                    <View
                        style={{
                            alignSelf: 'center',
                            marginTop: 300
                        }}>
                        <Text style={styles.textLoading}>Mohon Menunggu</Text>
                    </View>
                </ImageBackground>
            );
        }
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#4A86E8'
                }}>
                <StatusBar backgroundColor='#F2F1F1'/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground style={styles.background} source={background}>
                        <View
                            style={{
                                alignSelf: 'center',
                                marginTop: 50
                            }}>
                            <Image source={Logo} style={styles.logo}/>
                        </View>
                        <View
                            style={{
                                marginTop: 95
                            }}>
                            <View style={styles.viewTextInput}>
                                <TextField
                                    onChangeText={text => this.setState({username: text})}
                                    value={this.state.username}
                                    textColor='#fff'
                                    containerStyle={{maxWidth:500}}
                                    label='Username'
                                    lineWidth={0.7}
                                    activeLineWidth={0.7}
                                    tintColor='#fff'
                                    baseColor='#fff'
                                    fontSize={18}
                                />
                            </View>
                            <View style={styles.viewTextInput2}>
                                <TextField
                                    onChangeText={text => this.setState({password: text})}
                                    value={this.state.password}
                                    textColor='#fff'
                                    containerStyle={{maxWidth:500}}
                                    label='Password'
                                    lineWidth={0.7}
                                    activeLineWidth={0.7}
                                    tintColor='#fff'
                                    baseColor='#fff'
                                    fontSize={18}
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
                        <TouchableWithoutFeedback
                            onPress={this.Login}>
                            <View style={styles.viewLogin}>
                                <Text style={styles.textLogin}>Login</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('Register')}>
                            <View style={styles.viewDaftar}>
                                <Text style={styles.textLoading}>Daftar</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </ImageBackground>
                </ScrollView>

            </View>
        );
    }
}

export default login;