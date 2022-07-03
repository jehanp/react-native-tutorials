import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) =>{
    //state === {count: number}
    //action === {type: 'change_count', payload: 1}
    return {...state, 'count': state.count+action.payload};
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer,{count:0});
    const {count} = state;

    return (
        <View>
            <Text style={styles.textStyleLarge}>Counter</Text>
            <Button title='Increase' onPress={()=>{
                dispatch({type:'change_count', payload: 1});
            }}/>
            <Button title='Decrease' onPress={()=>{
                dispatch({type:'change_count', payload: -1});
            }}/>
            <Text style={styles.textStyle}>Current Count: {count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyleLarge: {
        fontSize: 45,
        textAlign: 'center',
        margin: 10,
    },
    textStyle: {
        fontSize: 16,
        textAlign: 'center',
        margin: 10,
    }
});

export default CounterScreen;