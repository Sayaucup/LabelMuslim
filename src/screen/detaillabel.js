import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import barcode from '../assets/barcode.png'
import verify from '../assets/verify.png'
import Img from '../assets/pt.png'

class detaillabel extends Component {
    state = {}
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#fff'
                }}>
                <View
                    style={{
                        height: 50,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        style={{
                            marginLeft: 10
                        }}
                        onPress={() => this.props.navigation.navigate('Daftar')}
                        underlayColor={'rgba(0,0,0,0.8)'}>
                        <Icon name="arrow-left" size={25} color="#171717"/>
                    </TouchableOpacity>
                    <View
                        style={{
                            marginLeft: 20
                        }}>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#171717',
                                    fontFamily: 'nunito.bold'
                                }}>
                                Detail Label
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        right: 15,
                        top: -20,
                        alignSelf: 'flex-end',
                        padding: 18,
                        elevation: 10,
                        backgroundColor: '#fff',
                        borderRadius: 50
                    }}>
                    <Image
                        style={{
                            height: 50,
                            width: 50
                        }}
                        source={barcode}/>
                </View>
                <View
                    style={{
                        alignSelf: 'center',
                        top: -45
                    }}>
                    <Image
                        style={{
                            height: 200,
                            width: 120
                        }}
                        source={Img}/>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        top: -10
                    }}>
                    <Image
                        style={{
                            height: 27,
                            width: 22
                        }}
                        source={verify}/>
                    <Text
                        style={{
                            left: 10,
                            fontSize: 15,
                            fontFamily: 'nunito.bold'
                        }}>PT. GARUDA BANGSA INDONESIA</Text>
                </View>
                <View
                    style={{
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            fontSize: 15,
                            fontFamily: 'nunito.semibold'
                        }}>TOKO ONLINE</Text>
                </View>
                <View
                    style={{
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            top: 65,
                            fontSize: 13,
                            fontFamily: 'nunito.semibold'
                        }}>Dibuat pada 30 Maret 2019</Text>
                </View>
            </View>
        );
    }
}

export default detaillabel;