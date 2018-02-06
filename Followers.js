import React from 'react';
import {StyleSheet, Text, View, Image, Linking, ScrollView, AsyncStorage } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Header,Button,Body,Title, Content, List, ListItem, Switch,Left, Right, Icon, Card, CardItem, Thumbnail} from 'native-base';

//class that corresponds to the Followers screen
export default class Followers extends React.Component {

	constructor(){
		super();
		this.state = {
			data: [],
		}
	}

	//get followers data from github 	
	getData() {
	    return fetch('https://api.github.com/users/andersontr15/followers')
	      .then((response) => response.json())
	      .then((responseJson) => {
	        this.setState({data: responseJson});
	        this.saveDataOnStorage();
	      })
	      .catch((error) => {
	        console.error(error);
	    });
	}

	componentDidMount()
	{
		this.getData();
	}

	//save data into AsyncStorage
	saveDataOnStorage()
	{
		AsyncStorage.setItem('Repos', JSON.stringify(this.state.data));
		const repoData = AsyncStorage.getItem('Repos');

		console.log("Data from AsyncStorage-Followers");
		console.log(repoData);

	}
	

	//set the drawer label and icon for Followers
	static navigationOptions = {
		tabBarLabel: 'Screen 3',
		drawerIcon: () => {
			return (
				<MaterialIcons
				name="face"
				size={24}
				style={{color:'blue'}}
				>
				</MaterialIcons>
			);
		}
	}

	renderFollowers(navi)
	{

		console.log(this.state.data);

		let followers = this.state.data.map(function(follower){
			return (
				<ListItem>
					<Thumbnail source={{uri: follower.avatar_url}} style={{height: 80, width: 80}}/>
            		<Body>
            			<Text>   {follower.login}</Text>
            		</Body>
            		<Right>
            			<Button transparent onPress={() => navi.navigate('FProfile', {loginName: follower.login, PreviousPage: 'Followers'}) }>
            				<Icon name="arrow-forward" />
            			</Button>
            		</Right>
            	</ListItem>
			)
		});
		return followers;
	}

	render()
	{
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
			         <Title>Followers</Title>
			       </Body>
			       <Right>
			       </Right>
			    </Header>
				<ScrollView>
					<Content style={{backgroundColor:'#FFFFFF', marginTop: 23}}>
						<List>
							{this.renderFollowers(this.props.navigation)}
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
});