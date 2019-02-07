import React from 'react';
import { StyleSheet, Text, View, Image, Keyboard, FlatList } from 'react-native';
import { Content, ListItem, List, Container } from 'native-base';
import { Card } from 'react-native-elements';
import { LinearGradient } from 'expo';

class CocktailView extends React.Component {

  state = {
    cocktail: {},
    loaded: false
  }

  getInfos = (cocktail) => {
    //const drinkName = this.state.searchCocktail.toLocaleLowerCase()
    const query = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktail
    fetch(query).then((response) => {
      var data = response._bodyInit ? JSON.parse(response._bodyInit) : false

      if (data) {
        this.setState({
          cocktail: data.drinks,
          loaded: true
        })
      }
    }).catch((error) => {
      //this.setState({cocktailFound: false})
    })
  }

  componentDidMount() {

  }

  componentWillMount() {
    const { navigation } = this.props;
    const cocktail = navigation.getParam('cocktail', 'NO-COCKTAIL');
    this.getInfos(cocktail)
  }

  render() {
    if (this.state.cocktail[0] != undefined) {
      return (
        <Container >
          <Content >
            <Card title={this.state.cocktail[0].strDrink} wrapperStyle={styles.card} containerStyle={styles.container}>
              <ListItem style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Image source={{ uri: this.state.cocktail[0].strDrinkThumb }} style={styles.image} />
              </ListItem>

              <LinearGradient
                colors={['#ffbc00', '#fe9c00', '#fb7900', '#f45200', '#eb1212']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}
              >
                <ListItem >
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Ingredients</Text>
                </ListItem>
              </LinearGradient>

              {this.state.cocktail[0].strIngredient1 != "" ? (this.state.cocktail[0].strMeasure1 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient1} - {this.state.cocktail[0].strMeasure1}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient1}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient2 != "" ? (this.state.cocktail[0].strMeasure2 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient2} - {this.state.cocktail[0].strMeasure2}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient2}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient3 != "" ? (this.state.cocktail[0].strMeasure3 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient3} - {this.state.cocktail[0].strMeasure3}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient3}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient4 != "" ? (this.state.cocktail[0].strMeasure4 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient4} - {this.state.cocktail[0].strMeasure4}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient4}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient5 != "" ? (this.state.cocktail[0].strMeasure5 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient5} - {this.state.cocktail[0].strMeasure5}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient5}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient6 != "" ? (this.state.cocktail[0].strMeasure6 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient6} - {this.state.cocktail[0].strMeasure6}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient6}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient7 != "" ? (this.state.cocktail[0].strMeasure7 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient7} - {this.state.cocktail[0].strMeasure7}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient7}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient8 != "" ? (this.state.cocktail[0].strMeasure8 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient8} - {this.state.cocktail[0].strMeasure8}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient8}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient9 != "" ? (this.state.cocktail[0].strMeasure9 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient9} - {this.state.cocktail[0].strMeasure9}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient9}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient10 != "" ? (this.state.cocktail[0].strMeasure10 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient10} - {this.state.cocktail[0].strMeasure10}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient10}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient11 != "" ? (this.state.cocktail[0].strMeasure11 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient11} - {this.state.cocktail[0].strMeasure11}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient11}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient12 != "" ? (this.state.cocktail[0].strMeasure12 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient12} - {this.state.cocktail[0].strMeasure12}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient12}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient13 != "" ? (this.state.cocktail[0].strMeasure13 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient13} - {this.state.cocktail[0].strMeasure13}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient13}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient14 != "" ? (this.state.cocktail[0].strMeasure14 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient14} - {this.state.cocktail[0].strMeasure14}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient14}</Text></ListItem>) : console.log(false)}
              {this.state.cocktail[0].strIngredient15 != "" ? (this.state.cocktail[0].strMeasure15 != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient15} - {this.state.cocktail[0].strMeasure15}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient15}</Text></ListItem>) : console.log(false)}

              <LinearGradient
                colors={['#ffbc00', '#fe9c00', '#fb7900', '#f45200', '#eb1212']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}
              >
                <ListItem >
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Glass type</Text>
                </ListItem>
              </LinearGradient>
              <ListItem>
                <Text>{this.state.cocktail[0].strGlass}</Text>
              </ListItem>

              <LinearGradient
                colors={['#ffbc00', '#fe9c00', '#fb7900', '#f45200', '#eb1212']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}
              >
                <ListItem >
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Instructions</Text>
                </ListItem>
              </LinearGradient>
              <ListItem>
                <Text>{this.state.cocktail[0].strInstructions}</Text>
              </ListItem>
            </Card>
          </Content>
        </Container>
      )
    } else {
      return <View></View>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#FFF6EE',
  },
  card: {
    flex: 1,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    margin: 5,
    borderRadius: 5,
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    color: '#fff'
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ddd'
  },
  description_container: {
    flex: 4,
    justifyContent: 'center'
  },
  description_text: {
    fontStyle: 'italic',
    color: '#ddd'
  },
  date_container: {
    flex: 2,
    justifyContent: 'center'
  },
  date_text: {
    fontSize: 18,
    color: '#ddd'
  }
})

export default CocktailView