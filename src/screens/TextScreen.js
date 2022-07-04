import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const validatePasswordLength = (password) => {
        return password.length>5;
    }

    return (
        <View>
            <Text style={styles.textStyleLarge}>Text Screen</Text>

            <Text style={styles.textStyleLabel}>Enter name:</Text>
            <TextInput 
                style={styles.input}
                autoCorrect={false}
                value={name}
                onChangeText={(newValue)=> setName(newValue)}
            />        
            <Text style={styles.textStyle}>My name is {name}</Text>  
            
            <Text style={styles.textStyleLabel}>Enter password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue)=> setPassword(newValue)}
            />        
            
            {validatePasswordLength(password) 
            ? <Text style={styles.textStyleValid}>Password valid</Text> 
            : <Text style={styles.textStyleError}>Password must be longer than 5 characters</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    textStyleLarge: {
        fontSize: 30,
        textAlign: 'center',
    },  
    textStyleLabel:{
        fontSize: 18,
        margin: 15,
    },
    textStyle:{
        margin: 15,
    },
    textStyleError:{
        margin: 15,
        color: 'red',
    },
    textStyleValid:{
        margin: 15,
        color: 'green',
    },
    input: {
         margin: 15,
         borderColor: 'black',
         borderWidth: 1,
    }
});

export default TextScreen;