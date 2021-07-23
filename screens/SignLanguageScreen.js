import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { Header } from 'react-native-elements';

export default class SignLanguageScreen extends Component{
  constructor(props){
    super(props);

    this.state = {
      search: ''
    }
  }
  
  render(){
    let singLanguage_images = {
      image_1: require("../assets/signLanguageAa.png")
    }

    return(
      <View style = {styles.container}>
        <View style = {{marginBottom: 20}}>
          <Header
            backgroundColor = "#0f0f0f"
            centerComponent = {{
              text: 'Sign Language',
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

        <View style = {styles.inputView}>
         <TextInput 
          style={styles.inputBox}
          onChangeText={(search) => {
            this.setState({
                search: search
              })
            }}
            value={this.state.search}>
        </TextInput>
        <TouchableOpacity 
            style={styles.searchButton}
            onPress={()=>{
              
            }}>
            <Text style={styles.buttonText}>Scan</Text>
          </TouchableOpacity>
        </View>

        <Image source = {require("../assets/signLanguageAa.png")} style = {{width: 120, height: 250}}/>
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
  buttonText: {
    textAlign: 'center',
    color: "#c8c8c8",
    fontWeight: 'bold',
    fontSize: 15.5,
    marginTop: 3
  },
  introductionText: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  }, 
  inputBox: { 
    marginBottom: 20, 
    width: '100%', 
    alignSelf: 'left', 
    height: 40, 
    textAlign: 'center', 
    borderWidth: 4, 
    outline: 'none', 
    color: 'white',
    borderColor: 'white',
    borderRadius: 0
  },
  searchButton: {
    backgroundColor: '#0f0f0f',
    width: 45,
    borderWidth: 4,
    borderLeftWidth: 0,
    justifyContent: 'top',
    height: 40,
    borderColor: '#c8c8c8'
  },
  inputView:{
    flexDirection: 'row',
    margin: 20
  },
})