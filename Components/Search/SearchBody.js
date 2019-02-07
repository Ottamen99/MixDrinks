import React from 'react';
import { StyleSheet, Text, View, Image, Keyboard, FlatList } from 'react-native';
import { Content, ListItem, List } from 'native-base';

class SearchBody extends React.Component {
    render() {

        const cocktailData = this.props.cocktailData
        console.log(cocktailData);
        
        return (
            <Content>
                <ListItem itemDivider style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image source={{uri: cocktailData.strDrinkThumb}} style={{height: 200, width: 200}}/>
                </ListItem>
                <List>
                    <ListItem itemDivider>
                        <Text>Name</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{cocktailData.strDrink}</Text>
                    </ListItem>
                </List>
            </Content>
        )
    }
}

export default SearchBody