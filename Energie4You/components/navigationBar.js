import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const NavigationBar = () => {
    return (
        <View style={styles.container}>
            <Text>Navigation Bar</Text>
            <Image
            style={styles.image}
            source={require('../assets/Energie4You_logo.png')}
            ></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#22aed1',
        padding: 40,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        height: 100,
    }
});
export default NavigationBar; 