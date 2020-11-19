import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font';
import * as firebase from 'firebase';
import {AppLoading} from 'expo'

// const firebaseConfig = {
//   apiKey: "AIzaSyAID2GgCDimftouNUMJ8nmnVedHqbxI2dY",
//   authDomain: "signin-212e3.firebaseapp.com",
//   databaseURL: "https://signin-212e3.firebaseio.com",
//   projectId: "signin-212e3",
//   storageBucket: "signin-212e3.appspot.com",
//   messagingSenderId: "646153091065",
//   appId: "1:646153091065:web:731821c8b66797c1392f28"
// };
// let app =firebase.initializeApp(firebaseConfig);
// export const db = app.database();

export default class App extends React.Component{
  state = {
    isFontLoaded : false
  }
  async componentDidMount(){
    await Font.loadAsync({
      'RobotoBold' : require('./src/fonts/Roboto-Bold.ttf'),
      'RobotoRegular' : require('./src/fonts/Roboto-Regular.ttf'),
      'MotionPicture' : require('./src/fonts/MotionPicture.ttf'),
      'SemiBold' : require('./src/fonts/Montserrat-SemiBold.otf'),
      'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
      'Regular' : require('./src/fonts/Montserrat-Regular.otf'),
    });
    this.setState({isFontLoaded:true})
  }
  render(){
    return(
      (this.state.isFontLoaded === true) ? (<AppNavigator/>):(<AppNavigator/>)
    );
  }
}