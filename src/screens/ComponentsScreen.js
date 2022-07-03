 import React from 'react';
 import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi there!';
    const numbers = [123, 456];
    const stringArray = ['asdf', 'jkl;'];
    const colorsObject = {color: 'red'};

    const myName = 'Patrick';

    const title = <Text style={styles.textStyleLarge}>Getting started with React Native!</Text>
    const person = <Person name="Patrick"/>

    return (
        <View>
            {title}
            {person}
        </View>
    );
}
const Person = (props) => {
    return (
        <Text style={styles.textStyleSmall}>My name is {props.name}</Text>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    textStyleLarge:{
        fontSize: 45,
        textAlign: 'center',
        padding: 20,
    },
    textStyleSmall:{
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
    }
});

export default ComponentsScreen;
