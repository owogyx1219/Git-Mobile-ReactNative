import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, WebView, Linking, AsyncStorage } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header,Button,Body,Title, Content, List, ListItem, Switch,Left, Right, Icon, Card, CardItem} from 'native-base';
import Repository from './Repository'
import {hook} from 'cavy';

//class that corresponds to the Repositories screen
export default class Repositories extends React.Component {

	constructor(){
		super();
		this.state = {
			data: [],
			stat: [],
		}
	}

	getData() {
	    return fetch('https://api.github.com/users/andersontr15/repos')
	      .then((response) => response.json())
	      .then((responseJson) => {
	        this.setState({data: responseJson});
	        this.saveData();
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
	saveData()
	{
		AsyncStorage.setItem('Repos', JSON.stringify(this.state.data));
		const repoData = AsyncStorage.getItem('Repos');

		console.log("Data from AsyncStorage-Repositories");
		console.log(repoData);
	}

	//set the drawer label and icon for Repositories 
	static navigationOptions = {
		tabBarLabel: 'Screen 2',
		drawerIcon: () => {
			return (
				<MaterialIcons
				name="library-books"
				size={24}
				style={{color:'orange'}}
				>
				</MaterialIcons>
			);
		}
	}
	
	//function for render Repositories and their information on Repositories page
	renderRepositories(navi)
	{
		let git_repos = this.state.data.map(function(git_repo){
			return (
				<Card>
					<CardItem icon>
	            		<Ionicons name="logo-github" size={24}></Ionicons>
	            		<Body>
	            			<Text>  Name :{git_repo.name}</Text>
	            			<Text>  Owner :{git_repo.owner.login}</Text>
	            			<Text>  Description :{git_repo.description}</Text>
	            		</Body>
	            		<Button transparent style={{height: 30, width: 40}} onPress={() => navi.navigate('Visualization') }>
	            			<MaterialIcons
							name="insert-chart"
							size={24}
							style={{color:'green'}}
							>
							</MaterialIcons>
	            		</Button>
            			<Button transparent onPress={() => navi.navigate('Repository', {repoUrl: git_repo.html_url}) }>
            				<Icon name="arrow-forward" />
            			</Button>
	            	</CardItem>
            	</Card>
			)
		});
		return git_repos;
	}

	render(){
		return (
			<View style={styles.view}>
				{/*Set up header for Repositories screen*/}
				<Header>
			       <Left>
			   		{/*Open drawer navigation view if button is clicked*/}
			       <Button transparent
			              onPress={() => this.props.navigation.navigate('DrawerOpen')}
			       >
			         <Icon name='menu' />
			       </Button>
			       </Left>
			       <Body>
			         <Title>Repositories</Title>
			       </Body>
			       <Right>
			       </Right>
			    </Header>
				{/*Set up information for each of the Github Repository*/}
				<Content style={{backgroundColor:'#FFFFFF', marginTop: 30}}>
		            {this.renderRepositories(this.props.navigation)}
		        </Content>
			</View>
		);



	}
}

//component for customize style
const styles = StyleSheet.create({
  container: {
    fontSize: 30, 
    color: 'green'
  },
  view: {
  	flex: 1,
	alignItems: 'stretch'
  }
});


