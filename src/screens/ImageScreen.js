import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Image</Text>
            <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')} imageScore='9'/>
            <ImageDetail title='Beach' imageSource={require('../../assets/beach.jpg')} imageScore='7'/>
            <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')}  imageScore='10'/>

        </View>
    );
}

const styles = StyleSheet.create({
    
    textStyle: {
        fontSize: 40,
        textAlign: 'center',
    }
});

export default ImageScreen;