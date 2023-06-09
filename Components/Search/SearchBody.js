import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { Content, ListItem, List } from 'native-base';
import FlatGrid from 'react-native-super-grid';

class SearchBody extends React.Component {
    render() {

        const cocktailData = this.props.cocktailData
        const nav = this.props.myNav

          if (cocktailData != undefined) {
            bigArray = []
            cpt = 0
            cocktailData.forEach(element => {
                tmp = { name: element.strDrink, image: element.strDrinkThumb }
                cpt++
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
                        <TouchableOpacity style={[styles.itemContainer, { backgroundColor: '#ecf0f1', width: '100%' }]} onPress={() => nav.navigate('CocktailDetail', { cocktail: item.name })}>
                        <View>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <View style={styles.absoluteView}>
                                <Text style={styles.itemName}>{item.name}</Text>
                            </View>
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
      image: {
          justifyContent: 'flex-end',
          borderRadius: 5,
          width: '100%',
          height: '100%',
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 170,
        width: '100%',
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
          position: 'absolute',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          backgroundColor: 'rgba(52, 52, 52, 0.5)',
          borderRadius: 5,
      },
});

export default SearchBody