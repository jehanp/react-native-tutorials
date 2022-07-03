import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorsScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Text style={styles.textStyleLarge}>Colors</Text>

            <Button title='Add Color' onPress={()=>{
                setColors([...colors, randomRgb()]);
            }}/>
            
            <FlatList 
                keyExtractor={(item)=> item}
                data={colors} 
                renderItem={({item})=>{
                    return (
                        <View style={styles.viewStyleRow}>
                            <View style={{ height:100, width:100, backgroundColor: item }}/>
                            <View style={styles.viewStyleColumn}>
                                <Text style={styles.textStyle}>{item}</Text>
                            </View>
                        </View>
                    );
            }}/>
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
    viewStyleRow: {
        flexDirection: 'row',
        padding: 20,
        flex: 1
    },
    viewStyleColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textStyleLarge: {
        fontSize: 40,
        textAlign: 'center',
    },
    textStyle:{
        padding: 20,
    }
});

export default ColorsScreen;