import React from 'react';
import { StyleSheet, Text, View, Image, AlertIOS, ImageBackground, AsyncStorage } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Header,Left,Icon, Button, Right,Body,Title, Card, CardItem, Content, Thumbnail} from 'native-base';
import {hook} from 'cavy';


//class that corresponds to the Profile screen
export default class Visualization extends React.Component {

  constructor(){
    super();
    this.state = {
      //data stores user information that comes from Github API 
      data: [],
      size: 0
    }
  }

  //get user profile data from github   
  getData() {
    //connect Github API and store response data into state 
      return fetch('https://api.github.com/repos/andersontr15/Angular-Scheduler/stats/contributors')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({data: responseJson[0].author, size: responseJson.length});
          console.log(responseJson)
          console.log(this.state.data)
        })
        .catch((error) => {
          console.error(error);
      });
  }

  componentDidMount()
  {
    this.getData();
  }


  //set the drawer label and icon for Profile 
  static navigationOptions = {
    tabBarLabel: 'Screen 1',
    drawerLabel: () => null,
    drawerIcon: () => null
    
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
                 <Title>Profile</Title>
               </Body>
               <Right>
               </Right>
            </Header>
          <Content>
          {/*Set up text user information*/}
          <Text style={styles.container}>
            <Text>
              Number of unique contributors: {this.state.size}{`\n`}
              Name: {this.state.data.login}
            </Text>
          </Text>
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

});