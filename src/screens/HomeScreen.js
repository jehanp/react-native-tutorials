import React from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.textStyle}>Hello!</Text>
      <Button 
        title='Components Demo' 
        onPress={()=> navigation.navigate('Components')}
      />
      <Button 
        title='List Demo' 
        onPress={()=> navigation.navigate('List')}
      />
      <Button 
        title='Image Demo' 
        onPress={()=> navigation.navigate('Image')}
      />
      <Button 
        title='Counter Demo' 
        onPress={()=> navigation.navigate('Counter')}
      />
      <Button 
        title='Colors Demo' 
        onPress={()=> navigation.navigate('Colors')}
      />
      <Button 
        title='Single Color Demo' 
        onPress={()=> navigation.navigate('SingleColor')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 10
  }
});

export default HomeScreen;
 