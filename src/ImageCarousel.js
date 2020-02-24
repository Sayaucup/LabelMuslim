import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ImageBackground,
    Image
} from 'react-native';
import Carousel from 'react-native-anchor-carousel'
import Logo from './assets/Logo.png'
import loadingBlurImage from './loading-blur.png';

const {width} = Dimensions.get('window');

const data = [
    {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        title: 'Lorem ipsum dolor sit amet',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, a' +
                'dipisci velit...'
    }, {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        title: 'Lorem ipsum ',
        content: 'Neque porro quisquam est qui dolorem ipsum '
    }, {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, a' +
                'dipisci velit...'
    }, {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
    }, {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
    }, {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
    }, {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
    }
];

export default class ImageCarousel extends Component {
    renderItem = ({item, index}) => {
        const {uri, title, content} = item;
        return (
            <View style={{
                    marginHorizontal: 5
                }}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.item}
                    onPress={() => {
                        this
                            .numberCarousel
                            .scrollToIndex(index);
                    }}>
                    <Image
                        source={{
                            uri: uri
                        }}
                        style={styles.imageBackground}/> 
                        {/* <View style={styles.rightTextContainer}>
                        <Text style={styles.rightText}>Riyadi</Text>
                    </View> */
                    }

                    {/* <View style={styles.lowerContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.contentText}>{content}</Text>
                </View> */
                    }
                </TouchableOpacity>
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
        flex: 1
    },
    item: {
        // borderWidth: 2, backgroundColor: 'white',
        flex: 1,
        height: 160,
        // borderRadius: 5, borderColor: 'white'
    },
    imageBackground: {
        flex: 2,
        backgroundColor: '#fff',
        borderWidth: 5,
        borderRadius: 20,
        height: '100%',
        borderColor: '#61dbfb'
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
        fontSize: 15,
        fontFamily: 'nunito.semibold'
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