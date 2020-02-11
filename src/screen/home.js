import React, {Component} from 'react';
import {  View,Text,ImageBackground,Image,ScrollView,TouchableOpacity,StatusBar} from 'react-native';

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
    constructor(i){
        super(i)
        this.state= {
            
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar backgroundColor='#548BE3'/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ImageBackground style={{height:175}} source={bg}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingTop:25,paddingLeft:20}}>
                            <Text style={{fontFamily:'nunito.bold',fontSize:30,color:'#fff'}}>
                                Selamat Pagi,
                            </Text>
                            <Image style={{height:40,width:35,marginRight:35}} source={notip}/>
                        </View>
                        <Text style={{paddingLeft:20,fontSize:23,fontFamily:'nunito.semibold',color:'#fff'}}>
                            Bpk. Riyadi
                        </Text>
                        <View style={{height:100,width:'90%',backgroundColor:'#fff',marginTop:10,borderRadius:10,alignSelf:'center',justifyContent:'center',elevation:15}}>
                            <View style={{flexDirection:'row'}}>
                                <View style={{marginLeft:15,height:65,width: 60,borderRadius:10,borderWidth:2,borderColor:'#E8E8E8',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:36,borderRadius:8}} source={schedule}/>
                                </View>
                                <View style={{marginLeft:10,height:65,width: 60,borderRadius:10,borderWidth:2,borderColor:'#E8E8E8',justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{height:40,width:36,borderRadius:8}} source={plus}/>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <Text style={{fontFamily:'nunito.bold',fontSize:20,color:'#EE2020'}}>
                                        12 Januari 2020
                                    </Text>
                                    <View style={{flexDirection:'row',marginTop:5}}>
                                        <Image style={{height:25,width:15}} source={pin}/>
                                        <Text style={{fontFamily:'nunito.bold',fontSize:15,marginLeft:8,color:'#171717'}}>
                                            D.I. YOGYAKARTA
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{alignItems:'center',marginTop:60}}>
                        <Text style={{fontFamily:'nunito.bold',fontSize:16,color:'#171717'}}>
                            Berita Terbaru
                        </Text>
                    </View>
                    
                        <View style={{marginTop:10}}>
                            <ImageCarousel/>
                        </View>
                    <View style={{alignItems:'center',marginTop:15}}>
                        <Text style={{fontFamily:'nunito.bold',fontSize:16,color:'#171717'}}>
                            Label Terbaru
                        </Text>
                    </View>
                    <View style={{height:90,width:'90%',backgroundColor:'#fff',marginTop:10,borderRadius:15,alignSelf:'center',justifyContent:'center',elevation:5}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{height:90,width:50,justifyContent:'center'}}>
                                <Image style={{marginLeft:25,height:'51%',width:'55%',maxHeight:'80%',maxWidth:'60%'}} source={pt}/>
                            </View>
                            <View style={{marginLeft:5,justifyContent:'center'}}>
                                <Text style={{fontSize:13,fontFamily:'nunito.bold',color:'#000000',maxWidth:215}}>
                                    PT. GARUDA BANGSA INDONESIA
                                </Text>
                                <Text style={{fontSize:9,fontFamily:'nunito.semibold',color:'#000000'}}>
                                    TOKO ONLINE
                                </Text>
                                <Text style={{top:8,fontSize:10,fontStyle:'italic',fontFamily:'nunito.semibold',color:'#000000'}}>
                                    12 Januari 2019
                                </Text>
                            </View>
                            <Image style={{height:10,width:10,top:8,right:10}} source={close}/>
                        </View>
                    </View>
                    <View style={{height:90,width:'90%',backgroundColor:'#fff',marginTop:10,borderRadius:15,alignSelf:'center',justifyContent:'center',elevation:5}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{height:90,width:50,justifyContent:'center'}}>
                                <Image style={{marginLeft:25,height:'51%',width:'55%',maxHeight:'80%',maxWidth:'60%'}} source={pt}/>
                            </View>
                            <View style={{marginLeft:5,justifyContent:'center'}}>
                                <Text style={{fontSize:13,fontFamily:'nunito.bold',color:'#000000',maxWidth:215}}>
                                    PT. GARUDA BANGSA INDONESIA
                                </Text>
                                <Text style={{fontSize:9,fontFamily:'nunito.semibold',color:'#000000'}}>
                                    TOKO ONLINE
                                </Text>
                                <Text style={{top:8,fontSize:10,fontStyle:'italic',fontFamily:'nunito.semibold',color:'#000000'}}>
                                    12 Januari 2019
                                </Text>
                            </View>
                            <Image style={{height:10,width:10,top:8,right:10}} source={close}/>
                        </View>
                    </View>
                    <View style={{height:90,width:'90%',backgroundColor:'#fff',marginTop:10,borderRadius:15,alignSelf:'center',justifyContent:'center',elevation:5}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{height:90,width:50,justifyContent:'center'}}>
                                <Image style={{marginLeft:25,height:'51%',width:'55%',maxHeight:'80%',maxWidth:'60%'}} source={pt}/>
                            </View>
                            <View style={{marginLeft:5,justifyContent:'center'}}>
                                <Text style={{fontSize:13,fontFamily:'nunito.bold',color:'#000000',maxWidth:215}}>
                                    PT. GARUDA BANGSA INDONESIA
                                </Text>
                                <Text style={{fontSize:9,fontFamily:'nunito.semibold',color:'#000000'}}>
                                    TOKO ONLINE
                                </Text>
                                <Text style={{top:8,fontSize:10,fontStyle:'italic',fontFamily:'nunito.semibold',color:'#000000'}}>
                                    12 Januari 2019
                                </Text>
                            </View>
                            <Image style={{height:10,width:10,top:8,right:10}} source={close}/>
                        </View>
                    </View>
                    <View style={{alignItems:'center',marginTop:20,paddingBottom:100}}>
                        <Text style={{fontFamily:'nunito.bold',fontSize:14,color:'#538AE3'}}>
                            Lihat Selengkapnya
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default home;
