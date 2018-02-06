import React from 'react';
import {StyleSheet, Text, View, Image, Linking, ScrollView, AsyncStorage } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Header,Button,Body,Title, Content, List, ListItem, Switch,Left, Right, Icon, Card, CardItem, Thumbnail} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

//class that corresponds to the Followers screen
export default class Following extends React.Component {

	constructor(){
		super();
		this.state = {
			data: [],
		}
	}

	//get following data from github 	
	getData() {
	    return fetch('https://api.github.com/users/andersontr15/following')
	      .then((response) => response.json())
	      .then((responseJson) => {
	        this.setState({data: responseJson});
	        this.saveDataOnStorage();
	        this.followUser();
	      })
	      .catch((error) => {
	        console.error(error);
	    });
	}

	componentDidMount()
	{
		this.getData();
	}

	followUser()
	{
		fetch("https://api.github.com/users/following/faraazkhan", {
		  header: {
		    Authorization: "token ffb9193bf4dd91a0f8a871b64444e9bdb1e778a4",
		    "Content-Type": "application/x-www-form-urlencoded"
		  },
		  method: "PUT"
		})
	}

	//save data into AsyncStorage
	saveDataOnStorage()
	{
		AsyncStorage.setItem('Repos', JSON.stringify(this.state.data));
		const repoData = AsyncStorage.getItem('Repos');

		console.log("Data from AsyncStorage-Following");
		console.log(repoData);

	}

	//set the drawer label and icon for Followers
	static navigationOptions = {
		tabBarLabel: 'Screen 4',
		drawerIcon: () => {
			return (
				<MaterialIcons
				name="link"
				size={24}
				style={{color:'green'}}
				>
				</MaterialIcons>
			);
		}
	}

	renderFollowings(navi)
	{

		let followings = this.state.data.map(function(following){
				return (
					<ListItem>
						<Thumbnail source={{uri: following.avatar_url}} style={{height: 80, width: 80}}/>
	            		<Body>
	            			<Text onPress={() => console.log(following.avatar_url)}>   {following.login}</Text>
	            		</Body>
	            		<Right>
	            			<Button transparent onPress={() => navi.navigate('FProfile', {loginName: following.login, PreviousPage: 'Following'}) }>
	            				<Icon name="arrow-forward" />
	            			</Button>
	            		</Right>
	            	</ListItem>
				)
		});
		return followings;
	}

	render(){

		console.log(this.state.data);


		return (
			<View style={styles.view}>
				{/*Set up header for Followers screen*/}
				<Header>
			       <Left>
			       <Button transparent
			              onPress={() => this.props.navigation.navigate('DrawerOpen')}
			       >
			         <Icon name='menu' />
			       </Button>
			       </Left>
			       <Body>
			         <Title>Following</Title>
			       </Body>
			       <Right>
			       </Right>
			    </Header>
				<ScrollView>
					<Content style={{backgroundColor:'#FFFFFF', marginTop: 23}}>
						<List>
							{this.renderFollowings(this.props.navigation)}
						</List>
			        </Content>
		        </ScrollView>
			</View>
		);


	}
}

//component for customize view and text
const styles = StyleSheet.create({
  container: {
    fontSize: 20, 
    color: 'blue',
    marginLeft: 10,
  },
  view: {
  	flex: 1,
  },
  image:{
  	flex: 1,
  },
});