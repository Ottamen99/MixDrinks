import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, FlatList } from 'react-native';
import { Content, ListItem, List, Container } from 'native-base';
import { Card } from 'react-native-elements';
import { LinearGradient } from 'expo';
import OfflineNotice from '../Tools/OfflineNotice'

class CocktailView extends React.Component {

  static navigationOptions = {
    /*headerRight: (
      <TouchableHighlight onPress={() => {console.log("fav")}}>
        <Image
          style={{alignItems: 'center', marginRight: 10,}}
          source={require('../../assets/fullStar.png')}
        />
      </TouchableHighlight>
    ),*/
  }

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

              {this.state.cocktail[0].strIngredient1 != null && this.state.cocktail[0].strIngredient1 != "" ? this.state.cocktail[0].strIngredient1.trim() != "" ? (this.state.cocktail[0].strMeasure1.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient1.trim()} - {this.state.cocktail[0].strMeasure1.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient1.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient2 != null && this.state.cocktail[0].strIngredient2 != "" ? this.state.cocktail[0].strIngredient2.trim() != "" ? (this.state.cocktail[0].strMeasure2.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient2.trim()} - {this.state.cocktail[0].strMeasure2.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient2.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient3 != null && this.state.cocktail[0].strIngredient3 != "" ? this.state.cocktail[0].strIngredient3.trim() != "" ? (this.state.cocktail[0].strMeasure3.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient3.trim()} - {this.state.cocktail[0].strMeasure3.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient3.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient4 != null && this.state.cocktail[0].strIngredient4 != "" ? this.state.cocktail[0].strIngredient4.trim() != "" ? (this.state.cocktail[0].strMeasure4.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient4.trim()} - {this.state.cocktail[0].strMeasure4.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient4.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient5 != null && this.state.cocktail[0].strIngredient5 != "" ? this.state.cocktail[0].strIngredient5.trim() != "" ? (this.state.cocktail[0].strMeasure5.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient5.trim()} - {this.state.cocktail[0].strMeasure5.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient5.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient6 != null && this.state.cocktail[0].strIngredient6 != "" ? this.state.cocktail[0].strIngredient6.trim() != "" ? (this.state.cocktail[0].strMeasure6.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient6.trim()} - {this.state.cocktail[0].strMeasure6.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient6.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient7 != null && this.state.cocktail[0].strIngredient7 != "" ? this.state.cocktail[0].strIngredient7.trim() != "" ? (this.state.cocktail[0].strMeasure7.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient7.trim()} - {this.state.cocktail[0].strMeasure7.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient7.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient8 != null && this.state.cocktail[0].strIngredient8 != "" ? this.state.cocktail[0].strIngredient8.trim() != "" ? (this.state.cocktail[0].strMeasure8.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient8.trim()} - {this.state.cocktail[0].strMeasure8.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient8.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient9 != null && this.state.cocktail[0].strIngredient9 != "" ? this.state.cocktail[0].strIngredient9.trim() != "" ? (this.state.cocktail[0].strMeasure9.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient9.trim()} - {this.state.cocktail[0].strMeasure9.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient9.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient10 != null && this.state.cocktail[0].strIngredient10 != "" ? this.state.cocktail[0].strIngredient10.trim() != "" ? (this.state.cocktail[0].strMeasure10.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient10.trim()} - {this.state.cocktail[0].strMeasure10.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient10.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient11 != null && this.state.cocktail[0].strIngredient11 != "" ? this.state.cocktail[0].strIngredient11.trim() != "" ? (this.state.cocktail[0].strMeasure11.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient11.trim()} - {this.state.cocktail[0].strMeasure11.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient11.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient12 != null && this.state.cocktail[0].strIngredient12 != "" ? this.state.cocktail[0].strIngredient12.trim() != "" ? (this.state.cocktail[0].strMeasure12.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient12.trim()} - {this.state.cocktail[0].strMeasure12.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient12.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient13 != null && this.state.cocktail[0].strIngredient13 != "" ? this.state.cocktail[0].strIngredient13.trim() != "" ? (this.state.cocktail[0].strMeasure13.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient13.trim()} - {this.state.cocktail[0].strMeasure13.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient13.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient14 != null && this.state.cocktail[0].strIngredient14 != "" ? this.state.cocktail[0].strIngredient14.trim() != "" ? (this.state.cocktail[0].strMeasure14.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient14.trim()} - {this.state.cocktail[0].strMeasure14.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient14.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}
              {this.state.cocktail[0].strIngredient15 != null && this.state.cocktail[0].strIngredient15 != "" ? this.state.cocktail[0].strIngredient15.trim() != "" ? (this.state.cocktail[0].strMeasure15.trim() != "" ? <ListItem><Text>{this.state.cocktail[0].strIngredient15.trim()} - {this.state.cocktail[0].strMeasure15.trim()}</Text></ListItem> : <ListItem><Text>{this.state.cocktail[0].strIngredient15.trim()}</Text></ListItem>) : console.log(false) : console.log(false)}

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
          <OfflineNotice />
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
    backgroundColor: '#ecf0f1',
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
  },
  test: {
    alignItems: 'center',
    marginLeft: 10,
  },
})

export default CocktailView