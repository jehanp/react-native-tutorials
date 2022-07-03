import {React} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({title, imageSource, imageScore}) =>{
    return (
        <View style={styles.viewStyleRow}>
            <Image source={imageSource} />
            <View style={styles.viewStyleText}>
                <Text style={styles.textStyle}>{title}</Text>
                <Text style={styles.textStyle}>Image Score: {imageScore}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyleRow:{
        flexDirection: 'row',
        margin:10,
    },
    viewStyleText:{
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textStyle: {
        marginLeft: 10,
        fontSize: 16,
    }
});

export default ImageDetail;