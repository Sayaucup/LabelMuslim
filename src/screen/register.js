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
                                <TextInput
                                    style={{
                                        paddingRight: 10,
                                        paddingLeft: 5,
                                        fontFamily: 'Bariol_Bold',
                                        fontSize: 20,
                                        color: '#fff'
                                    }}
                                    placeholderTextColor='#fff'
                                    placeholder="Nama Lengkap"/>
                            </View>
                            <View
                                style={{
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignSelf: 'center',
                                    width: '75%',
                                    borderColor: '#fff',
                                    borderBottomWidth: 2
                                }}>
                                <TextInput
                                    style={{
                                        paddingLeft: 5,
                                        paddingRight: 15,
                                        fontFamily: 'Bariol_Bold',
                                        fontSize: 20,
                                        color: '#fff'
                                    }}
                                    placeholderTextColor='#fff'
                                    placeholder="Jenis Kelamin"/>
                                <TouchableOpacity>
                                    <Icon
                                        name='caretdown'
                                        size={20}
                                        style={{
                                            alignSelf: 'center',
                                            marginTop: 13,
                                            marginRight: 5
                                        }}
                                        color='#fff'/>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignSelf: 'center',
                                    width: '75%',
                                    borderColor: '#fff',
                                    borderBottomWidth: 2
                                }}>
                                <TextInput
                                    style={{
                                        paddingLeft: 5,
                                        paddingRight: 15,
                                        fontFamily: 'Bariol_Bold',
                                        fontSize: 20,
                                        color: '#fff'
                                    }}
                                    placeholderTextColor='#fff'
                                    placeholder="Kota Tinggal"/>
                                <TouchableOpacity>
                                    <Icon
                                        name='caretdown'
                                        size={20}
                                        style={{
                                            alignSelf: 'center',
                                            marginTop: 13,
                                            marginRight: 5
                                        }}
                                        color='#fff'/>
                                </TouchableOpacity>
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
                                <TextInput
                                    style={styles.textInput}
                                    placeholderTextColor='#fff'
                                    placeholder="Username"/>
                            </View>
                            <View style={styles.viewTextInput2}>
                                <TextInput
                                    secureTextEntry={this.state.hidePassword}
                                    style={styles.textInput2}
                                    placeholderTextColor='#fff'
                                    placeholder="Password"/>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={styles.positionHide}
                                    onPress={this.managePasswordVisibility}>
                                    <Image
                                        source={this.state.hidePassword
                                            ? require('../assets/hide.png')
                                            : require('../assets/visibility.png')}
                                        style={styles.styleIconHide}/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* </ScrollView> */}
                    </ImageBackground>
                    <TouchableWithoutFeedback onPress={this.back}>
                        <View style={styles.viewDaftar}>
                            <Text style={styles.textLoading}>Daftar Sekarang</Text>
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
