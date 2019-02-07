import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import FlatGrid from 'react-native-super-grid';

class CategoryTab extends React.Component {

    state = {
        categories: {},
        loaded: false
    }

    colors = [
        "#1abc9c",
        "#3498db",
        "#34495e",
        "#27ae60",
        "#8e44ad",
        "#f1c40f",
        "#e74c3c",
        "#95a5a6",
        "#d35400",
        "#bdc3c7",
        "#2ecc71",
        "#9b59b6",
        "#16a085",
        "#2980b9",
        "#2c3e50",
        "#e67e22",
        "#f39c12",
        "#c0392b",
        "#7f8c8d"
    ]

    categoriesSearch = () => {
        //const drinkName = this.state.searchCocktail.toLocaleLowerCase()
        const query = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        fetch(query).then((response) => {
            var data = response._bodyInit ? JSON.parse(response._bodyInit) : false
            
            if (data) {
                this.setState({
                    categories: data.drinks,
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
        this.categoriesSearch()
    }

    render() {
    
        if (this.state.categories[0] != undefined) {
            bigArray = []
            this.state.categories.forEach(element => {
                const min = 0;
                const max = this.colors.length;
                const rand = Math.trunc(min + Math.random() * (max - min));
                console.log(rand);
                
                tmp = {name: element.strCategory, color: this.colors[rand]}
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
                    <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.color }]} onPress={() => this.props.navigation.navigate('ListDrinksNavigator', {category: item.name} )}>
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
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
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
  });

export default CategoryTab;