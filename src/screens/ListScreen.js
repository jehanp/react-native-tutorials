import {react} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: 20},
        {name: 'Friend 2', age: 21},
        {name: 'Friend 3', age: 22},
        {name: 'Friend 4', age: 23},
        {name: 'Friend 5', age: 24},
        {name: 'Friend 6', age: 25},
    ];

    return(
        <View>
            <Text style={styles.textStyleLarge}>List</Text>
            <FlatList
            keyExtractor={friend=>friend.name}
            data={friends}
            renderItem={({item})=>{
                //element === {item:{name: 'Friend 1}, index: 0}
                return (
                    <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
                );
            }}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center'
    },
    textStyleLarge: {
        fontSize: 40,
        padding: 20,
        textAlign: 'center',
    }
});

export default ListScreen;