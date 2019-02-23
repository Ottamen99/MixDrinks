import React from 'react';
import { StyleSheet, Text, View, Image, Keyboard, SegmentedControlIOS } from 'react-native';
import { Container, Content, Radio, ListItem, Left, Right } from 'native-base';
import OfflineNotice from '../../Tools/OfflineNotice'
import SearchBody from '../SearchBody'
import { SearchBar } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';


class SearchTab extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        cocktailData: {},
        searchCocktail: "",
        cocktailFound: false,
        data: [
            {
                label: 'cocktail',
                value: "cocktail",
                color: '#fb7900',
            },
            {
                label: 'ingredient',
                value: "ingredient",
                color: '#fb7900',
            },
        ],
    }

    cocktailSearch = (searchType) => {
        console.log(searchType);

        Keyboard.dismiss()
        const drinkName = this.state.searchCocktail.toLocaleLowerCase().trim()
        if (searchType == 'ingredient') {
            const query = 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + drinkName
            fetch(query).then((response) => {
                var data = response._bodyInit ? JSON.parse(response._bodyInit) : false
                console.log(data);

                if (data) {
                    this.setState({
                        cocktailData: data.drinks,
                        cocktailFound: true
                    })
                }
            }).catch((error) => {
                this.setState({ cocktailFound: false })
            })
        } else {
            const query = 'http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkName
            fetch(query).then((response) => {
                var data = response._bodyInit ? JSON.parse(response._bodyInit) : false
                if (data) {
                    this.setState({
                        cocktailData: data.drinks,
                        cocktailFound: true
                    })
                }
            }).catch((error) => {
                this.setState({ cocktailFound: false })
            })
        }
    }

    renderContent = () => {
        if (this.state.cocktailFound) {
            return <SearchBody cocktailData={this.state.cocktailData} myNav={this.props.navigation} />
        } else {
            console.log('Cocktail not found');
        }
    }

    // update state
    onPress = data => this.setState({ data });

    render() {
        let selectedButton = this.state.data.find(e => e.selected == true);
        selectedButton = selectedButton ? selectedButton.value : this.state.data[0].label;
        place = "Enter " + selectedButton + " name"
        return (
            <Container style={styles.gridView}>
                <SearchBar
                    platform="ios"
                    placeholder={place}
                    value={this.state.searchCocktail}
                    onChangeText={(searchCocktail) => this.setState({ searchCocktail })}
                    returnKeyType="search"
                    onEndEditing={() => this.cocktailSearch(selectedButton)}
                />

                <View style={styles.container}>
                    <RadioGroup radioButtons={this.state.data} onPress={this.onPress} flexDirection='row' />
                </View>
                <Content>
                    {this.renderContent()}
                    <OfflineNotice />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default SearchTab;