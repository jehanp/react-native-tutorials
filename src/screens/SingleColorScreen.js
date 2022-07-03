import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 50;

const reducer = (state, action) =>{
    //state === {red: number, green: number, blue: number}
    //action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
    switch(action.type){
        case 'change_red':
            return state.red+action.payload>255||state.red+action.payload<0 
            ? state
            : {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green+action.payload>255||state.green+action.payload<0
            ? state
            : {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue+action.payload>255||state.blue+action.payload<0
            ? state
            : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
}

const SingleColorScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return (
        <View>
            <Text style={styles.textStyleLarge}>Single Color</Text>
            <ColorCounter 
                color='Red' 
                onIncrease={()=>{dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}}
                onDecrease={()=>{dispatch({ type: 'change_red', payload: -1*COLOR_INCREMENT })}}
            />
            <ColorCounter 
                color='Green' 
                onIncrease={()=>{dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}}
                onDecrease={()=>{dispatch({ type: 'change_green', payload: -1*COLOR_INCREMENT })}}
            />
            <ColorCounter 
                color='Blue' 
                onIncrease={()=>{dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}}
                onDecrease={()=>{dispatch({ type: 'change_blue', payload: -1*COLOR_INCREMENT })}}
            />

            <View style={styles.colorViewStyle}>
                <View style={{
                    height: '50%',
                    width: '100%',
                    backgroundColor: `rgb(${red},${green},${blue})`,
                }}/>
            </View>
        </View> 
    );
}

const randomRgb = ()=>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    //return template string
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    colorViewStyle:{
        alignContent: 'center',
        padding: 10,
    },
    textStyleLarge: {
        fontSize: 40,
        padding: 20,
        textAlign: 'center',
    }
});

export default SingleColorScreen;