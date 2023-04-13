import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import FlatGrid from 'react-native-super-grid';

class RandomTab extends React.Component {


    state = {
        categories: {},
        loaded: false,
        isFetching: false,
    }

    onRefresh() {
        this.setState({ isFetching: true }, function () { this.categoriesSearch() });
    }

    categoriesSearch = () => {
        //const drinkName = this.state.searchCocktail.toLocaleLowerCase()
        const query = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        fetch(query).then((response) => {
            var data = response._bodyInit ? JSON.parse(response._bodyInit) : false

            if (data) {
                this.setState({
                    categories: data.drinks,
                    loaded: true,
                    isFetching: false
                })
            }
        }).catch((error) => {
            //this.setState({cocktailFound: false})
        })
    }

    componentDidMount() {

    }

    componentWillMount() {
        this.categoriesSearch()
    }

    render() {

        if (this.state.categories[0] != undefined) {
            bigArray = []
            cpt = 0
            this.state.categories.forEach(element => {
                tmp = { name: element.strDrink, image: element.strDrinkThumb }
                cpt++
                bigArray.push(tmp)
            });
            return (
                <FlatGrid
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}
                    itemDimension={300}
                    items={bigArray}
                    style={styles.gridView}
                    // staticDimension={300}
                    // fixed
                    // spacing={20}
                    renderItem={({ item, index }) => (
                        <Container>
                            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: '#ecf0f1', width: '100%' }]} onPress={() => this.props.navigation.navigate('CocktailDetail', { cocktail: item.name })}>
                                <View>
                                    <Image source={{ uri: item.image }} style={styles.image} />
                                    <View style={styles.absoluteView}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.desc}>
                                <Text style={styles.desc}>Pull to find another random drink !</Text>
                            </View>
                        </Container>
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
        height: 400,
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
    desc: {
        fontSize: 18,
        color: '#fb7900',
        fontWeight: '600',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default RandomTab;