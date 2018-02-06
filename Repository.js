import React, { Component } from 'react';
import { Text, StyleSheet, View, WebView, Linking } from 'react-native';
import {Header,Left,Icon, Button, Right,Body,Title} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Repositories from './Repositories'

console.disableYellowBox = true;
// const uri = 'https://github.com/andersontr15/Angular-Scheduler';


//class that corresponds to a Repository screen
export default class Repository extends Component {

  //set the drawer label and icon for Repository
  static navigationOptions = {
    tabBarLabel: 'Screen 1',
    drawerLabel: () => null,
    drawerIcon: () => null
  }

  render() {
    return (
      <View style={styles.view}>
        {/*Set up header for Repository screen*/}
        <Header>
           <Left>
           {/*Open drawer navigation view if button is clicked*/}
           <Button transparent
                  onPress={() => this.props.navigation.navigate('Repositories')}
           >
             <Ionicons name="logo-github" size={30}></Ionicons>
           </Button>
           </Left>
           <Body>
             <Title>Repository</Title>
           </Body>
           <Right>
           </Right>
        </Header>
        <WebView
          ref={(ref) => { this.webview = ref; }}
          source={{ uri: this.props.navigation.state.params.repoUrl }}
          onNavigationStateChange={(event) => {
            if (event.url !== this.props.navigation.state.params.repoUrl) {
              this.webview.stopLoading();
              Linking.openURL(event.url);
            }
          }}
          style={styles.webview}
        />
      </View>
      
    );
  }
}

//component for customizing view, text and webview
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    fontSize: 20, 
    color: 'blue',
    marginLeft: 10,
  },
  webview: {
    marginTop: 0,
    flex: 1,
  }

});