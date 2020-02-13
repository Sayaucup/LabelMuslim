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
        fontFamily: 'nunito.semibold',
        fontWeight:'900'
    },
    viewTextInput : {
        alignSelf: 'center',
        width: '75%',
        borderColor: '#fff',
        borderBottomWidth: 2.5
    },
    viewTextInput2 : {
        marginTop:30,
        alignSelf: 'center',
        width: '75%',
        borderColor: '#fff',
        borderBottomWidth: 2.5
    },
    textInput : {
        paddingRight: 50,
        paddingLeft: 5,
        fontFamily: 'nunito.semibold',
        fontSize: 20,
        color:'#fff'
    },
    textInput2 : {
        paddingRight: 50,
        paddingLeft: 5,
        fontFamily: 'nunito.semibold',
        fontSize: 20,
        color:'#fff'
    },
    positionHide : {
        position: 'absolute',
        right: 10,
        top: 5,
        height: 40,
        width: 35,
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
        paddingBottom: 29
    },
    textLogin : {
        fontSize:25,
        color:'#fff',
        fontFamily: 'nunito.semibold',
    }
})

export default styles