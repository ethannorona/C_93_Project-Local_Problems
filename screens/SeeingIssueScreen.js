import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import * as Speech from 'expo-speech';

import { Header } from 'react-native-elements';

export default class SeeingIssueScreen extends Component{
  constructor(props){
    super(props);

    this.state = {
      introductionText: "Welcome to Local Problems, here you will learn how to deal with seeing issues and how to use this app to help you."
    }
  }
  
  introduction = () =>{
    //Speech.speak(this.state.introductionText);
  }

  componentDidMount(){
    this.introduction();
  }
  
  render(){
    return(
      //Introduces user to app and tells them the functionaliy and how to use the app (First Text Line)
      //Will come back to this once a replacement for speech to text is found
      <View style = {styles.container}>
        <View style = {{marginBottom: 20}}>
          <Header
            backgroundColor = "#0f0f0f"
            centerComponent = {{
              text: 'Seeing Issues',
              style: { 
                color: "white",
                textAlign: 'center', 
                justifyContent: "center", 
                alignItems: "center",
                width: 280,
                fontSize: 24
              }
            }}
          >
          </Header>
        </View>
        <Text style = {styles.introductionText}> {this.state.introductionText} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "#0f0f0f"
  },
  introductionText: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  }
})