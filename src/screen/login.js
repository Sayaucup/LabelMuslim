import React,{Component} from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Modal,
    StatusBar
} from 'react-native'
import Logo from '../assets/Logo.png'
import background from '../assets/background.jpeg'
import styles from '../style'

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true,
            role: true,
            loading: true
        };
    }
    managePasswordVisibility = () => {
        this.setState({
            hidePassword: !this.state.hidePassword
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
                                marginTop: 80
                            }}>
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <View style={styles.viewLogin}>
                                <Text style={styles.textLoading}>Login</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <View style={styles.viewDaftar}>
                                <Text style={styles.textLoading}>Daftar</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </ScrollView>

            </View>
        );
    }
}

export default login;