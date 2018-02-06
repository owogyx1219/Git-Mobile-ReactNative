import React from 'react';
import { StyleSheet, Text, View, Image, AlertIOS, ImageBackground } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Header,Left,Icon, Button, Right,Body,Title, Card, CardItem, Content, Thumbnail, List, ListItem} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

//class that corresponds to the Profile screen
export default class Profile extends React.Component {

	constructor(){
		super();
		this.state = {
			//data stores user information that comes from Github API 
			data: [],
		}
	}
	
	getData(login) {
		//connect Github API and store response data into state 
	    return fetch('https://api.github.com/users/' + login)
	      .then((response) => response.json())
	      .then((responseJson) => {
	        this.setState({data: responseJson})
	      })
	      .catch((error) => {
	        console.error(error);
	    });
	}

	componentDidMount()
	{
		this.getData(this.props.navigation.state.params.loginName);
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
				              onPress={() => this.props.navigation.navigate(this.props.navigation.state.params.PreviousPage)}
				       >
				         <MaterialIcons name='face' size={30} style={{color:'green'}}/>
				       </Button>
				       </Left>
				       <Body>
				         <Title>Profile</Title>
				       </Body>
				       <Right>
				       </Right>
				    </Header>
					{/*Set up avatar image for the user*/}
					<Thumbnail source={{uri: this.state.data.avatar_url}} style={{height: 160, width: 160, marginLeft: 100, marginTop: 20}}/>
					{/*Set up text user information*/}
				    <Text style={styles.container}>
						<Text>
							{`\n`}Name: {this.state.data.name} {`\n\n`}
						</Text>
						<Text>
							Username: {this.state.data.login} {`\n\n`}
						</Text>
						<Text>
							Website: {this.state.data.html_url} {`\n\n`}
						</Text>
						<Text>
							Create Date: {this.state.data.created_at} {`\n\n`}
						</Text>
					</Text>
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
  }

});