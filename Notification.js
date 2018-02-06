import React from 'react';
import { StyleSheet, Text, View, Image, AlertIOS, ImageBackground, AsyncStorage } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Header,Left,Icon, Button, Right,Body,Title, Card, CardItem, Content, Thumbnail} from 'native-base';
import {hook} from 'cavy';


//class that corresponds to the Notification screen
export default class Notification extends React.Component {

  constructor(){
    super();
    this.state = {
      //data stores user information that comes from Github API 
      data: [],
    }
    const notifs = this.testNotification();
    this.setState({data: notifs});
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

  //set the drawer label and icon for Profile 
  static navigationOptions = {
    tabBarLabel: 'Screen 8',
    drawerIcon: () => null,
    drawerLabel: () => null
  }


  //function for render notifications
  renderNotifications(navi)
  {
    let notifs = this.state.data.map(function(notification){
      return (
        <Card>
          <CardItem icon>
            <Text>{notifications.description}</Text>
          </CardItem>
        </Card>
      )
    });
    return notifs;
  }

  render(){
    return (
      <View style={styles.view}>
        {/*Set background for Profile screen*/}
        <ImageBackground
          source={require('./index.jpg')}
          style={styles.background}>
            {/*Set up header for Profile screen*/}
          <Header>
            {/*Set up hamburger button for Profile screen*/}
               <Left>
                {/*Open drawer navigation view if button is clicked*/}
               <Button transparent
                      onPress={() => this.props.navigation.navigate('DrawerOpen')}
               >
                 <Icon name='menu' />
               </Button>
               </Left>
               <Body>
                 <Title>Notifications</Title>
               </Body>
               <Right>
               </Right>
            </Header>
          <Content>
            {this.renderNotifications(this.props.navigation)}
          </Content>        
          </ImageBackground>
      </View>
    );


  }
}

//component for customize style
const styles = StyleSheet.create({
  container: {
    fontSize: 20, 
    color: 'black',
    marginLeft: 10,
  },
  view: {
    flex: 1,
  justifyContent:'center',
  alignItems: 'stretch'
  },
  image: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 120,
    marginBottom: 60,
  },
  background: {
    flex: 1,
  },
  login: {
    fontSize: 20, 
    color: 'green',
    marginLeft: 10,
    marginBottom: 8,
  },
  chart: {
        width: 200,
        height: 200,
  },
});