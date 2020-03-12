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

import pt from '../assets/pt.png'
import close from '../assets/close.png'

import Detaillabel from './detaillabel'

console.disableYellowBox = true;

const data = [
    {
        img: pt,
        name: 'PT. GARUDA BANGSA INDONESIA',
        desc: 'TOKO ONLINE',
        close: close,
        date: '12 Januari 2019',
        detail: '1'
    }, {
        img: pt,
        name: 'PT. GARUDA BANGSA INDONESIA',
        desc: 'TOKO ONLINE',
        close: close,
        date: '12 Januari 2019',
        detail: '2'
    }, {
        img: pt,
        name: 'PT. GARUDA BANGSA INDONESIA',
        desc: 'TOKO ONLINE',
        close: close,
        date: '12 Januari 2019',
        detail: '3'
    }, {
        img: pt,
        name: 'PT. GARUDA BANGSA INDONESIA',
        desc: 'TOKO ONLINE',
        close: close,
        date: '12 Januari 2019',
        detail: '4'
    }, {
        img: pt,
        name: 'PT. GARUDA BANGSA INDONESIA',
        desc: 'TOKO ONLINE',
        close: close,
        date: '12 Januari 2019',
        detail: '5'
    }, {
        img: pt,
        name: 'PT. GARUDA BANGSA INDONESIA',
        desc: 'TOKO ONLINE',
        close: close,
        date: '12 Januari 2019',
        detail: '6'
    }, {
        img: pt,
        name: 'PT. GARUDA BANGSA INDONESIA',
        desc: 'TOKO ONLINE',
        close: close,
        date: '12 Januari 2019',
        detail: '7'
    }

]

class daftarlabel extends Component {
    state = {
        detail: ''
    }

    detail = () => {
        if (this.state.detail === '1') {
            return (<Detaillabel/>)
        } else if (this.state.detail === '2') {
            return (<Detaillabel/>)
        } else if (this.state.detail === '3') {
            return (<Detaillabel/>)
        } else if (this.state.detail === '4') {
            return (<Detaillabel/>)
        } else if (this.state.detail === '5') {
            return (<Detaillabel/>)
        } else if (this.state.detail === '6') {
            return (<Detaillabel/>)
        }
    }

    Daftar = ({item}) => {
        const {img, name, desc, close, date} = item
        return (
            <TouchableOpacity style={{bottom:10}} onPress={() => this.props.navigation.navigate('Detail')}>
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
                        elevation: 5
                    }}>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}>
                        <View
                            style={{
                                height: 90,
                                width: 75,
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 5
                            }}>
                            <Image
                                style={{
                                    height: '55%',
                                    width: '42%',
                                    maxHeight: '100%',
                                    maxWidth: '100%'
                                }}
                                source={img}/>
                        </View>
                        <View
                            style={{
                                marginLeft: 5,
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontFamily: 'nunito.bold',
                                    color: '#000000',
                                    maxWidth: 210
                                }}>
                                {name}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 9,
                                    fontFamily: 'nunito.semibold',
                                    color: '#000000'
                                }}>
                                {desc}
                            </Text>
                            <Text
                                style={{
                                    top: 8,
                                    fontSize: 10,
                                    fontStyle: 'italic',
                                    fontFamily: 'nunito.semibold',
                                    color: '#000000'
                                }}>
                                {date}
                            </Text>
                        </View>
                        <Image
                            style={{
                                height: 10,
                                width: 10,
                                top: 8,
                                marginLeft: 'auto'
                            }}
                            source={close}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

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
                        onPress={() => this.props.navigation.navigate('Home')}
                        underlayColor={'rgba(0,0,0,0.8)'}>
                        <Icon name="arrow-left" size={25} color="#171717"/>
                    </TouchableOpacity>
                    <View
                        style={{
                            marginLeft: 20
                        }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#171717',
                                    fontFamily: 'nunito.bold'
                                }}>
                                Daftar Label
                            </Text>
                    </View>
                </View>
                <FlatList
                    data={data}
                    renderItem={this.Daftar}
                    keyExtractor={item => item.toString()}
                    showsVerticalScrollIndicator={false}/>
            </View>
        );
    }
}

export default daftarlabel;