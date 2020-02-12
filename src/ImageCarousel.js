import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ImageBackground
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import loadingBlurImage from './loading-blur.png';

const {width} = Dimensions.get('window');

const data = [
    {
        uri: 'https://i.imgur.com/GImvG4q.jpg',
        title: 'Lorem ipsum dolor sit amet',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, a' +
                'dipisci velit...'
    }, {
        uri: 'https://i.imgur.com/Pz2WYAc.jpg',
        title: 'Lorem ipsum ',
        content: 'Neque porro quisquam est qui dolorem ipsum '
    }, {
        uri: 'https://i.imgur.com/IGRuEAa.jpg',
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, a' +
                'dipisci velit...'
    }, {
        uri: 'https://i.imgur.com/fRGHItn.jpg',
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
    }, {
        uri: 'https://i.imgur.com/WmenvXr.jpg',
        title: 'Lorem ipsum ',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor '
    }
];

export default class ImageCarousel extends Component {
    renderItem = ({item, index}) => {
        const {uri, title, content} = item;
        return (
            <View style={{marginHorizontal:5}}>
                <View
                style={styles.item}
                >
                <ImageBackground
                    source={{
                        uri: uri
                    }}
                    style={styles.imageBackground}>
                    <View style={styles.rightTextContainer}>
                        <Text style={styles.rightText}>Riyadi</Text>
                    </View>
                </ImageBackground>
                {/* <View style={styles.lowerContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.contentText}>{content}</Text>
                </View> */}
            </View>
            </View>
        );
    };

    render() {
        return (
            <Carousel
                style={styles.carousel}
                data={data}
                renderItem={this.renderItem}
                itemWidth={0.7 * width}
                inActiveOpacity={0.3}
                containerWidth={width - 10}
                ref={(c) => {
                    this.numberCarousel = c;
                }}/>
        );
    }
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
    },
    item: {
        borderWidth: 2,
        backgroundColor: 'white',
        flex: 1,
        height:160,
        borderRadius: 5,
        borderColor: 'white'
    },
    imageBackground: {
        flex: 2,
        backgroundColor: '#EBEBEB',
        borderWidth: 5,
        height:'100%',
        borderColor: 'white'
    },
    rightTextContainer: {
        marginLeft: 'auto',
        marginRight: -10,
        backgroundColor: 'rgba(49, 49, 51,0.5)',
        padding: 5,
        marginTop: 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    rightText: {
        color: 'white',
        fontSize:15,
        fontFamily:'nunito.semibold'
    },
    lowerContainer: {
        flex: 1,
        margin: 10
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    contentText: {
        marginTop: 10,
        fontSize: 12
    }
})