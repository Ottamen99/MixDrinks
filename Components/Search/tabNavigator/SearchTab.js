import React from 'react';
import { StyleSheet, Text, View, Image, Keyboard, FlatList } from 'react-native';
import { Container, Content } from 'native-base';
import SearchHeader  from '../SearchHeader'
import SearchBody  from '../SearchBody'

import Axios from 'axios';

class SearchTab extends React.Component {

    constructor(props) {
        super(props)
    }
    
    state = {
        cocktailData: {},
        searchCocktail: "",
        cocktailFound: false
    }
    
    cocktailSearch = () => {
        Keyboard.dismiss()
        const drinkName = this.state.searchCocktail.toLocaleLowerCase()
        const query = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=manhattan'
        fetch(query).then((response) => {
            var data = response._bodyInit ? JSON.parse(response._bodyInit) : false
            if (data) {
                console.log("TOZ");
                this.setState({
                    cocktailData: data.drinks[0],
                    cocktailFound: true
                }) 
            }
        }).catch((error) => {
            this.setState({cocktailFound: false})
        })
    }

    renderContent = () => {
        if(this.state.cocktailFound) {
            return <SearchBody cocktailData={this.state.cocktailData}/>
        } else {
            console.log('Cocktail not found');
        }
    }

    render(){
        return (
            <Container>
                <SearchHeader
                        value={this.state.searchCocktail}
                        onChangeText={(searchCocktail) => this.setState({searchCocktail})}
                        cocktailSearch={this.cocktailSearch}
                    />
                    
                <Content>
                    {this.renderContent()}
                </Content>
            </Container>
        )
    }
}

export default SearchTab;