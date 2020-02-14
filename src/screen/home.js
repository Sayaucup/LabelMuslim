import React, {Component} from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar
} from 'react-native';

import bg from '../assets/bgHome.png'
import notip from '../assets/notip.png'
import schedule from '../assets/schedule.png'
import plus from '../assets/plus.png'
import pin from '../assets/pin.png'
import pt from '../assets/pt.png'
import koperasi from '../assets/koperasi.png'
import cv from '../assets/cv.png'
import close from '../assets/close.png'

import ImageCarousel from '../ImageCarousel'

class home extends Component {
    render() {
        return (
            <View style={{
                    flex: 1
                }}>
                <StatusBar backgroundColor='#548BE3'/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground
                        style={{
                            height: 175
                        }}
                        source={bg}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 35,
                                marginLeft: 20
                            }}>
                            <Text
                                style={{
                                    fontFamily: 'nunito.bold',
                                    fontSize: 30,
                                    color: '#fff'
                                }}>
                                Selamat Pagi,
                            </Text>
                            <Image
                                style={{
                                    height: 40,
                                    width: 35,
                                    marginRight: 35
                                }}
                                source={notip}/>
                        </View>
                        <Text
                            style={{
                                paddingLeft: 20,
                                fontSize: 23,
                                fontFamily: 'nunito.semibold',
                                color: '#fff'
                            }}>
                            Bpk. Riyadi
                        </Text>
                        <View
                            style={{
                                height: 85,
                                width: '90%',
                                backgroundColor: '#fff',
                                marginTop: 10,
                                borderRadius: 10,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                elevation: 15
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}>
                                <View
                                    style={{
                                        marginLeft: 15,
                                        height: 60,
                                        width: 60,
                                        borderRadius: 7,
                                        borderWidth: 2,
                                        borderColor: '#E8E8E8',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <Image
                                        style={{
                                            height: 35,
                                            width: 28,
                                            borderRadius: 5
                                        }}
                                        source={schedule}/>
                                </View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Tambah')}>
                                    <View
                                        style={{
                                            marginLeft: 10,
                                            height: 60,
                                            width: 60,
                                            borderRadius: 7,
                                            borderWidth: 2,
                                            borderColor: '#E8E8E8',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <Image
                                            style={{
                                                height: 30,
                                                width: 30,
                                                borderRadius: 5
                                            }}
                                            source={plus}/>
                                    </View>
                                </TouchableOpacity>
                                <View
                                    style={{
                                        marginLeft: 13,
                                        maxWidth: 300
                                    }}>
                                    <Text
                                        style={{
                                            fontFamily: 'nunito.bold',
                                            fontSize: 18,
                                            color: '#EE2020'
                                        }}>
                                        12 Januari 2020
                                    </Text>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            marginTop: 5
                                        }}>
                                        <Image
                                            style={{
                                                height: 25,
                                                width: 15
                                            }}
                                            source={pin}/>
                                        <Text
                                            style={{
                                                fontFamily: 'nunito.bold',
                                                fontSize: 13,
                                                marginLeft: 8,
                                                color: '#171717'
                                            }}>
                                            D.I. YOGYAKARTA
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: 60
                        }}>
                        <Text
                            style={{
                                fontFamily: 'nunito.bold',
                                fontSize: 16,
                                color: '#171717'
                            }}>
                            Berita Terbaru
                        </Text>
                    </View>
                    <View
                        style={{
                            marginTop: 10
                        }}>
                        <ImageCarousel/>
                    </View>
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: 15
                        }}>
                        <Text
                            style={{
                                fontFamily: 'nunito.bold',
                                fontSize: 16,
                                color: '#171717'
                            }}>
                            Label Terbaru
                        </Text>
                    </View>
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
                                    source={pt}/>
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
                                    PT. GARUDA BANGSA INDONESIA
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 9,
                                        fontFamily: 'nunito.semibold',
                                        color: '#000000'
                                    }}>
                                    TOKO ONLINE
                                </Text>
                                <Text
                                    style={{
                                        top: 8,
                                        fontSize: 10,
                                        fontStyle: 'italic',
                                        fontFamily: 'nunito.semibold',
                                        color: '#000000'
                                    }}>
                                    12 Januari 2019
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
                                        height: '60%',
                                        width: '100%',
                                        maxHeight: '100%',
                                        maxWidth: '100%'
                                    }}
                                    source={koperasi}/>
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
                                    KOPERASI SIMPAN PINJAM AL HUSNA
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 9,
                                        fontFamily: 'nunito.semibold',
                                        color: '#000000'
                                    }}>
                                    TOKO ONLINE
                                </Text>
                                <Text
                                    style={{
                                        top: 8,
                                        fontSize: 10,
                                        fontStyle: 'italic',
                                        fontFamily: 'nunito.semibold',
                                        color: '#000000'
                                    }}>
                                    12 Januari 2019
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
                                        height: '50%',
                                        width: '62%',
                                        maxHeight: '100%',
                                        maxWidth: '100%'
                                    }}
                                    source={cv}/>
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
                                    CV. ADITYA PRADESTA
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 9,
                                        fontFamily: 'nunito.semibold',
                                        color: '#000000'
                                    }}>
                                    TOKO ONLINE
                                </Text>
                                <Text
                                    style={{
                                        top: 8,
                                        fontSize: 10,
                                        fontStyle: 'italic',
                                        fontFamily: 'nunito.semibold',
                                        color: '#000000'
                                    }}>
                                    12 Januari 2019
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
                    <View
                        style={{
                            alignItems: 'center',
                            marginTop: 20,
                            paddingBottom: 100
                        }}>
                        <Text
                            style={{
                                fontFamily: 'nunito.bold',
                                fontSize: 14,
                                color: '#538AE3'
                            }}>
                            Lihat Selengkapnya
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default home;
