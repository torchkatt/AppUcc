import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Inicio extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Image style = {styles.imgStyle}
                source = { require ('./assets/ucc_logo.png')} />
                <Text style={styles.welcome}>Inicio</Text>
                <Button title={'Ir al Menu'} onPress={()=>this.props.navigation.navigate('Menu')}></Button>
            </View>
        ); 
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0B293D',
    },
    welcome: {
        fontSize: 30,
        color: '#FFFFFF'
    },
    imgStyle: {
        width: 265,
        height: 92,
        marginTop: 5
    }
});