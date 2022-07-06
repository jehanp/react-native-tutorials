import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () =>{
    return (
        <View>
            <View style={styles.viewStyle}>
                <View style={styles.viewOneStyle}/>
                <View style={styles.viewTwoStyle}/>
                <View style={styles.viewThreeStyle}/>
            </View>
            <View style={styles.viewStyle1}>
                <Text style={styles.textStyle}>Child #1</Text>
                <Text style={styles.textStyle}>Child #2</Text>
                <Text style={styles.textStyle}>Child #3</Text>
            </View>
            <View style={styles.viewStyle2}>
                <Text style={styles.textStyle}>Child #1</Text>
                <Text style={styles.textStyle}>Child #2</Text>
                <Text style={styles.textStyle}>Child #3</Text>
            </View>
            <View style={styles.viewStyle3}>
                <Text style={styles.textStyle}>Child #1</Text>
                <Text style={styles.textStyle}>Child #2</Text>
                <Text style={styles.textStyle}>Child #3</Text>
            </View>
            <View style={styles.viewStyle4}>
                <Text style={styles.textStyle}>Child #1</Text>
                <Text style={styles.textStyle}>Child #2</Text>
                <Text style={styles.textStyle}>Child #3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewStyle1:{
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    viewStyle2:{
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    viewStyle3:{
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    viewStyle4:{
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 5,
        marginHorizontal: 10,
    },
    textStyle:{
        borderWidth: 3,
        borderColor: 'red',
    },
    viewOneStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'red',
    },
    viewTwoStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle:{
        height: 50,
        width: 50,
        backgroundColor: 'purple',
    },
});

export default BoxScreen;