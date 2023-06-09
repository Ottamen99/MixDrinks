import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content } from 'native-base';
import FlatGrid from 'react-native-super-grid';
import OfflineNotice from '../../Tools/OfflineNotice'

class CategoryTab extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }

    state = {
        categories: {},
        loaded: false
    }

    imgs = [
        "https://www.thecocktaildb.com/images/media/drink/xyrppt1469090521.jpg",
        "https://www.thecocktaildb.com/images/media/drink/s00d6f1504883945.jpg",
        "https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg",
        "https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg",
        "https://www.thecocktaildb.com/images/media/drink/pra8vt1487603054.jpg",
        "https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg",
        "https://www.thecocktaildb.com/images/media/drink/uyrpww1441246384.jpg",
        "https://www.thecocktaildb.com/images/media/drink/yxswtp1441253918.jpg",
        "https://www.thecocktaildb.com/images/media/drink/ttsvwy1472668781.jpg",
        "https://www.thecocktaildb.com/images/media/drink/xuwpyu1441248734.jpg",
        "https://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg"
    ]

    categoriesSearch = () => {
        
        const query = 'https://ottamendev.com/MixDrinks/restAPI/categories'
        fetch(query).then((response) => {            
            var data = response._bodyInit ? JSON.parse(response._bodyInit) : false
            if (data) {
                this.setState({
                    categories: data,
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
        this.categoriesSearch()
    }

    render() {

        if (this.state.categories[0] != undefined) {
            bigArray = []
            cpt = 0
            this.state.categories.forEach(element => {
                tmp = { id: element.idCategory, name: element.categoryName, image: this.imgs[cpt] }
                cpt++
                bigArray.push(tmp)
            });
            return (
                <Container>
                    <FlatGrid
                        itemDimension={130}
                        items={bigArray}
                        style={styles.gridView}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: '#ecf0f1', width: '100%' }]} onPress={() => this.props.navigation.navigate('ListDrinksNavigator', { idCategory: item.id,  categoryName: item.name})}>
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

export default CategoryTab;