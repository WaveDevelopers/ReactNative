/**
 * React Native App
 * Author: WaveDevelopers
 */
   import React, { Component } from 'react';
 import {
	 Text,
	 AppRegistry	 
 } from  'react-native';

 
 class AwesomeProject extends Component {

    render() {
        return (
            <Text>Hello World!</Text>
        )
    }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);