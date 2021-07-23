import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import { Header } from 'react-native-elements';

export default class HearingIssueScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render(){
    return(
      <View style = {styles.container}>
        <View style = {{marginBottom: 20}}>
          <Header
            backgroundColor = "#0f0f0f"
            centerComponent = {{
              text: 'Hearing Issues',
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
        <Text style = {styles.introductionText}> Welcome to Local Problems, here you will learn sign language and have a text to speech input and button. Below will be a button that will send you to a page showing the many different sign languages.  </Text>
        
        <TouchableOpacity style = {styles.button} onPress = {() => 
            this.props.navigation.navigate("SignLanguageScreen")
          }>
          <Text style = {styles.buttonText} >Click here to go to the next page</Text>
        </TouchableOpacity>
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
  button: {
    width: 190,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: 30
  },
  buttonText: {
    textAlign: 'center',
    color: "white",
    fontWeight: 'bold',
    fontSize: 15.5,
    fontFamily: "sans"
  },
  introductionText: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  }
})