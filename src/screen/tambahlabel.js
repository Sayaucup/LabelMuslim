import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
    ScrollView
} from 'react-native';

import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { color } from 'react-native-reanimated';

class tambahlabel extends Component {

    defaultScrollViewProps = {
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: {
            flex: 1,
        }
    };

    onNextStep = () => {
        console.log('called next step');
    };
    toast = () => {
        ToastAndroid.showWithGravity(
            'Success',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        )
        this.props.navigation.navigate('Home')
    };

    onPrevStep = () => {
        console.log('called previous step');
    };

    onSubmitSteps = () => {
        alert('called on submit step.')
        
    };

    render() {
        const progressStepsStyle = {
            activeStepIconBorderColor: '#4A86E8',
            borderWidth: 3,
            activeLabelColor: '#4A86E8',
            labelFontFamily: 'nunito.regular',
            activeStepNumColor: '#2E2E2E',
            activeStepIconColor: '#fff',
            disabledStepIconColor: '#B9B9B9',
            completedStepIconColor: '#fff',
            completedProgressBarColor: '#4A86E8',
            completedCheckColor: '#4A86E8',
            progressBarColor: '#B9B9B9',borderStyle:'dashed'
        };

        const buttonTextStyle = {
            color: '#fff',
            fontWeight: 'bold'
        };
        const buttonTextStyle2 = {
            backgroundColor: '#4A86E8',
            borderRadius:10,
            paddingHorizontal:30,
            paddingVertical:10

        };


        return (
            <View style={{
                    flex: 1
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
                        <TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#171717',
                                    fontFamily: 'nunito.bold'
                                }}>
                                Tambah Label
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                    <ProgressSteps {...progressStepsStyle}>
                        <ProgressStep
                        label="Data Usaha"
                        nextBtnTextStyle={buttonTextStyle}
                        nextBtnStyle={buttonTextStyle2}
                        scrollViewProps={this.defaultScrollViewProps}>
                            
                            <View
                                style={{
                                    flex: 1
                                }}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View
                                        style={{
                                            marginTop:0
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: '#171717',
                                                fontFamily: 'nunito.semibold'
                                            }}>Nama Usaha</Text>
                                        <View
                                            style={{
                                                alignSelf: 'center',
                                                width: '100%',
                                                borderColor: '#B3B3B3',
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                marginTop: 10
                                            }}>
                                            <TextInput
                                                style={{
                                                    paddingRight: 50,
                                                    paddingLeft: 5,
                                                    fontFamily: 'nunito.semibold',
                                                    fontSize: 20,
                                                    color: '#fff'
                                                }}/>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 10
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: '#171717',
                                                fontFamily: 'nunito.semibold'
                                            }}>Jenis Usaha</Text>
                                        <View
                                            style={{
                                                alignSelf: 'center',
                                                width: '100%',
                                                borderColor: '#B3B3B3',
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                marginTop: 10
                                            }}>
                                            <TextInput
                                                style={{
                                                    paddingRight: 50,
                                                    paddingLeft: 5,
                                                    fontFamily: 'nunito.semibold',
                                                    fontSize: 20,
                                                    color: '#fff'
                                                }}/>
                                        </View>
                                    </View>
                                    <View style={{alignItems:'center',marginTop:15}}>
                                        <Text style={{fontFamily:'nunito.semibold',fontSize:15,color:'#171717'}}>
                                            Alamat Usaha
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 10
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: '#171717',
                                                fontFamily: 'nunito.semibold'
                                            }}>Nama Jalan</Text>
                                        <View
                                            style={{
                                                alignSelf: 'center',
                                                width: '100%',
                                                borderColor: '#B3B3B3',
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                marginTop: 10
                                            }}>
                                            <TextInput
                                                style={{
                                                    paddingRight: 50,
                                                    paddingLeft: 5,
                                                    fontFamily: 'nunito.semibold',
                                                    fontSize: 20,
                                                    color: '#fff'
                                                }}/>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 10
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: '#171717',
                                                fontFamily: 'nunito.semibold'
                                            }}>Komplek / Gedung</Text>
                                        <View
                                            style={{
                                                alignSelf: 'center',
                                                width: '100%',
                                                borderColor: '#B3B3B3',
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                marginTop: 10
                                            }}>
                                            <TextInput
                                                style={{
                                                    paddingRight: 50,
                                                    paddingLeft: 5,
                                                    fontFamily: 'nunito.semibold',
                                                    fontSize: 20,
                                                    color: '#fff'
                                                }}/>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 10
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: '#171717',
                                                fontFamily: 'nunito.semibold'
                                            }}>Lantai</Text>
                                        <View
                                            style={{
                                                alignSelf: 'center',
                                                width: '100%',
                                                borderColor: '#B3B3B3',
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                marginTop: 10
                                            }}>
                                            <TextInput
                                                style={{
                                                    paddingRight: 50,
                                                    paddingLeft: 5,
                                                    fontFamily: 'nunito.semibold',
                                                    fontSize: 20,
                                                    color: '#fff'
                                                }}/>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 10
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: '#171717',
                                                fontFamily: 'nunito.semibold'
                                            }}>Blok</Text>
                                        <View
                                            style={{
                                                alignSelf: 'center',
                                                width: '100%',
                                                borderColor: '#B3B3B3',
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                marginTop: 10
                                            }}>
                                            <TextInput
                                                style={{
                                                    paddingRight: 50,
                                                    paddingLeft: 5,
                                                    fontFamily: 'nunito.semibold',
                                                    fontSize: 20,
                                                    color: '#fff'
                                                }}/>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 10
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: '#171717',
                                                fontFamily: 'nunito.semibold'
                                            }}>Desa</Text>
                                        <View
                                            style={{
                                                alignSelf: 'center',
                                                width: '100%',
                                                borderColor: '#B3B3B3',
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                marginTop: 10
                                            }}>
                                            <TextInput
                                                style={{
                                                    paddingRight: 50,
                                                    paddingLeft: 5,
                                                    fontFamily: 'nunito.semibold',
                                                    fontSize: 20,
                                                    color: '#fff'
                                                }}/>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 10
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: '#171717',
                                                fontFamily: 'nunito.semibold'
                                            }}>Kecamatan</Text>
                                        <View
                                            style={{
                                                alignSelf: 'center',
                                                width: '100%',
                                                borderColor: '#B3B3B3',
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                marginTop: 10
                                            }}>
                                            <TextInput
                                                style={{
                                                    paddingRight: 50,
                                                    paddingLeft: 5,
                                                    fontFamily: 'nunito.semibold',
                                                    fontSize: 20,
                                                    color: '#fff'
                                                }}/>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 10
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: '#171717',
                                                fontFamily: 'nunito.semibold'
                                            }}>Kabupaten</Text>
                                        <View
                                            style={{
                                                alignSelf: 'center',
                                                width: '100%',
                                                borderColor: '#B3B3B3',
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                marginTop: 10
                                            }}>
                                            <TextInput
                                                style={{
                                                    paddingRight: 50,
                                                    paddingLeft: 5,
                                                    fontFamily: 'nunito.semibold',
                                                    fontSize: 20,
                                                    color: '#fff'
                                                }}/>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            marginVertical: 10
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: '#171717',
                                                fontFamily: 'nunito.semibold'
                                            }}>Provinsi</Text>
                                        <View
                                            style={{
                                                alignSelf: 'center',
                                                width: '100%',
                                                borderColor: '#B3B3B3',
                                                borderWidth: 1,
                                                borderRadius: 10,
                                                marginTop: 10
                                            }}>
                                            <TextInput
                                                style={{
                                                    paddingRight: 50,
                                                    paddingLeft: 5,
                                                    fontFamily: 'nunito.semibold',
                                                    fontSize: 20,
                                                    color: '#fff'
                                                }}/>
                                        </View>
                                        
                                    </View>
                                    
                                    
                                </ScrollView>
                                
                            </View>
                            
                        
                        </ProgressStep>
                        <ProgressStep
                            label="Second"
                            scrollViewProps={this.defaultScrollViewProps}
                            nextBtnTextStyle={buttonTextStyle}
                            nextBtnStyle={buttonTextStyle2}
                            previousBtnStyle={buttonTextStyle2}
                            previousBtnTextStyle={buttonTextStyle}>
                            <View
                                style={{
                                    alignItems: 'center'
                                }}>
                                <Text>This is the content within step 2!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep
                            // label="Third"
                            scrollViewProps={this.defaultScrollViewProps}
                            nextBtnTextStyle={buttonTextStyle}
                            nextBtnStyle={buttonTextStyle2}
                            previousBtnStyle={buttonTextStyle2}
                            previousBtnTextStyle={buttonTextStyle}>
                            <View
                                style={{
                                    alignItems: 'center'
                                }}>
                                <Text>This is the content within step 3!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep
                            // label="Fourth"
                            scrollViewProps={this.defaultScrollViewProps}
                            nextBtnTextStyle={buttonTextStyle}
                            nextBtnStyle={buttonTextStyle2}
                            previousBtnStyle={buttonTextStyle2}
                            previousBtnTextStyle={buttonTextStyle}>
                            <View
                                style={{
                                    alignItems: 'center'
                                }}>
                                <Text>This is the content within step 4!</Text>
                            </View>
                        </ProgressStep>
                        <ProgressStep
                            // label="label"
                            onSubmit={this.toast}
                            scrollViewProps={this.defaultScrollViewProps}
                            nextBtnTextStyle={buttonTextStyle}
                            nextBtnStyle={buttonTextStyle2}
                            previousBtnStyle={buttonTextStyle2}
                            previousBtnTextStyle={buttonTextStyle}>
                            <View
                                style={{
                                    alignItems: 'center'
                                }}>
                                <Text>This is the content within step 5!</Text>
                            </View>
                        </ProgressStep>
                    </ProgressSteps>
                </View>

        );
    }
}

export default tambahlabel;