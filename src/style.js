import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create ({
    background : {
        width:'100%',
        height:'100%'
    },
    logo : {
        width:150,
        height:150
    },
    viewModal : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50
    },
    textLoading : {
        fontSize:20,
        color:'#fff',
        fontFamily: 'nunito.black',
        fontWeight:'900'
    },
    viewTextInput : {
        alignSelf: 'center',
        width: '85%',
    },
    viewTextInput2 : {
        alignSelf: 'center',
        width: '85%',
        top:-20
        // borderColor: '#fff',
        // borderBottomWidth: 2.5
    },
    positionHide : {
        position: 'absolute',
        right: 0,
        top: 30,
        height: 33,
        width: 33,
        padding: 5
    },
    styleIconHide : {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
        tintColor: '#fff'
    },
    viewLogin : {
        marginTop:50,
        paddingVertical: 13,
        width: '75%',
        backgroundColor: '#5C97F7',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    viewDaftar : {
        alignSelf: 'center',
        marginTop: 35,
        paddingBottom: 39
    },
    textLogin : {
        fontSize:25,
        color:'#fff',
        fontFamily: 'nunito.black',
    }
})

export default styles