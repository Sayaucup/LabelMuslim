import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create ({
    background : {
        width:'100%',
        height:620,
    },
    logo : {
        width:150,
        height:150
    },
    
    textLoading : {
        fontSize:20,
        color:'#fff',
        fontFamily: 'nunito.semibold',
    },
    viewTextInput : {
        marginTop:10,
        alignSelf: 'center',
        width: '75%',
        borderColor: '#fff',
        borderBottomWidth: 2
    },
    viewTextInput2 : {
        marginTop:10,
        flexDirection:'row',
        alignSelf: 'center',
        width: '75%',
        borderColor: '#fff',
        borderBottomWidth: 2
    },
    textInput : {
        marginTop:5,
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
    viewDaftar : {
        marginTop:30,
        paddingVertical: 15,
        width: '50%',
        backgroundColor: '#5C97F7',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    },
    viewLogin : {
        alignSelf: 'center',
        marginTop: 35,
        paddingBottom: 29
    }
})

export default styles