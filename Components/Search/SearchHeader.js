import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Header, Icon, Input } from 'native-base';

class SearchHeader extends React.Component {

    render(){
        return (
            <Header
            style={{height: 80}}
                searchBar
                rounder
            >
                <Icon name='ios-search'></Icon>
                <Input
                    placeholder="Enter cocktail name"
                    onChangeText={this.props.onChangeText}
                    returnKeyType='search'
                    onSubmitEditing={this.props.cocktailSearch}
                ></Input>
            </Header>
        )
    }
}

export default SearchHeader;