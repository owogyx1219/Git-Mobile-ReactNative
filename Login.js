import React, { Component } from 'react';
import { Text, StyleSheet, View, WebView, Linking } from 'react-native';
import {Header,Left,Icon, Button, Right,Body,Title} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Repositories from './Repositories'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


console.disableYellowBox = true;
const uri = 'https://github.com/login';


//class that corresponds to a Repository screen
export default class Login extends Component {

  constructor(){
    super();
    this.state = {
      data: [],
    };
    const conn = this.testAuthentication();
    console.log(conn);
    const conn2 = this.testNotification();
    console.log(conn2);
  }


  //test connections after user authenticated using AccessToken
  testAuthentication()
  {
    console.log("before authentication");

    return fetch("https://api.github.com/users", {
      header: {
        Authorization: "token ffb9193bf4dd91a0f8a871b64444e9bdb1e778a4",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "GET"
    });
  }

  //testNotification after user authenticated using AccessToken
  testNotification()
  {
    console.log("before notification");

    return fetch("https://api.github.com/notifications", {
      header: {
        Authorization: "token ffb9193bf4dd91a0f8a871b64444e9bdb1e778a4",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "GET"
    });
  }

  //set the drawer label and icon for Repository
  static navigationOptions = {
    tabBarLabel: 'Screen 6',
    drawerIcon: () => {
      return (
        <MaterialIcons
        name="inbox"
        size={24}
        style={{color:'purple'}}
        >
        </MaterialIcons>
      );
    },
  }


  render() {
    return (
      <View style={styles.view}>
        {/*Set up header for Repository screen*/}
        <Header>
           <Left>
           {/*Open drawer navigation view if button is clicked*/}
           <Button transparent
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
           >
               <Icon name='home' />
           </Button>
           </Left>
           <Body>
             <Title>Login</Title>
           </Body>
           <Right>
           </Right>
        </Header>
        <WebView
          ref={(ref) => { this.webview = ref; }}
          source={{ uri }}
          onNavigationStateChange={(event) => {
            if (event.url !== uri) {
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