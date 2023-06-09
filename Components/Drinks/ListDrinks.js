import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import FlatGrid from 'react-native-super-grid';
import OfflineNotice from '../Tools/OfflineNotice'

class ListDrinks extends React.Component {

    state = {
        cocktails: {},
        loaded: false,
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('categoryName', 'NO-CAT')
        }
    }

    cocktailSearch = (cat) => {
        const query = 'https://ottamendev.com/MixDrinks/restAPI/categories/filter.php?idCategory=' + cat
        fetch(query).then((response) => {
            var data = response._bodyInit ? JSON.parse(response._bodyInit) : false

            if (data) {
                this.setState({
                    cocktails: data,
                    loaded: true,
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
        const cate = navigation.getParam('idCategory', 'NO-CAT');
        this.cocktailSearch(cate)
    }

    render() {

        if (this.state.cocktails[0] != undefined) {
            bigArray = []
            this.state.cocktails.forEach(element => {
                
                tmp = { idDrink: element.idDrink, name: element.drinkName, image: element.drinkThumb }
                bigArray.push(tmp)
            });
            return (
                <Container>
                    <FlatGrid
                        itemDimension={130}
                        items={bigArray}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: '#ecf0f1', width: '100%', }]} onPress={() => this.props.navigation.navigate('CocktailDetail', { cocktail: item.name })}>
                                <View>
                                    <Image source={{ uri: item.image }} style={styles.image} />
                                    <View style={styles.absoluteView}>
                                        <Text style={styles.itemName}>{item.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                    <OfflineNotice />
                </Container>
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
        width: '100%',
        height: 150,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        width: '100%',
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
        position: 'absolute',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 5,
    },
});

export default ListDrinks;