import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import FlatGrid from 'react-native-super-grid';

class ListDrinks extends React.Component {

    state = {
        cocktails: {},
        loaded: false
    }

    cocktailSearch = (cat) => {
        const query = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + cat
        fetch(query).then((response) => {
            var data = response._bodyInit ? JSON.parse(response._bodyInit) : false
            
            if (data) {
                this.setState({
                    cocktails: data.drinks,
                    loaded: true
                }) 
            }
        }).catch((error) => {
            //this.setState({cocktailFound: false})
        })
    }

    componentDidMount(){
        
    }

    componentWillMount(){
        const { navigation } = this.props;
        const category = navigation.getParam('category', 'NO-CAT');
        this.cocktailSearch(category)
    }

    render() {

        if (this.state.cocktails[0] != undefined) {
            bigArray = []
            this.state.cocktails.forEach(element => {
                tmp = {idDrink: element.idDrink, name: element.strDrink, image: element.strDrinkThumb}
                bigArray.push(tmp)
            });
            return (
                <FlatGrid
                  itemDimension={130}
                  items={bigArray}
                  style={styles.gridView}
                  // staticDimension={300}
                  // fixed
                  // spacing={20}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity style={[styles.itemContainer, { backgroundColor: '#ecf0f1' }]} onPress={() => this.props.navigation.navigate('CocktailDetail', {cocktail: item.name} )}>
                    <Image source={{uri: item.image}} style={styles.image}/>
                      <View style={styles.absoluteView}>
                        <Text style={styles.itemName}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  />
              );
        } else {
            return <View></View>
        }
    }
}

const styles = StyleSheet.create({
    gridView: {
      flex: 1,
      marginBottom: 15,
    },
    image: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        //padding: 10,
        marginTop: 100,
        height: 150,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 170,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
    absoluteView: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        width: 172,
        height: 170,
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 5,
    },
  });

export default ListDrinks;