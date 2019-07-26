import React, {Component} from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';

export default class Menu extends Component {
    render(){
        return (
            <View style={styles.container}>
            <Text style={styles.welcome}>Menu</Text>
            <Button title={'Nuestra Universidad'} onPress={()=>this.props.navigation.navigate('Inicio')}></Button>
            <Button title={'Nuestra Oficina'} onPress={()=>this.props.navigation.navigate('Inicio')}></Button>
            <Button title={'Estudiantes'} onPress={()=>this.props.navigation.navigate('Inicio')}></Button>
            <Button title={'Docentes'} onPress={()=>this.props.navigation.navigate('Inicio')}></Button>
            <Button title={'Becas'} onPress={()=>this.props.navigation.navigate('Inicio')}></Button>
            <Button title={'Global Festival'} onPress={()=>this.props.navigation.navigate('Inicio')}></Button>
            <Button title={'Convenios'} onPress={()=>this.props.navigation.navigate('Inicio')}></Button>
            <Button title={'Emisora'} onPress={()=>this.props.navigation.navigate('Emisora')}></Button>
            <Button title={'Contáctanos'} onPress={()=>this.props.navigation.navigate('Inicio')}></Button>
        </View>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF00',
    },
    welcome: {
        fontSize: 30
    }
});