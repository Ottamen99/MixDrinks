import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'native-base';

var backgroundImage = require('../../assets/startImage.jpg')

class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    render(){
        return(
            <View style={styles.homeScreenView}>
                <View style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', }}>
                    <Image source={backgroundImage} style={{flex: 1, height: null, width: null}}/>
                </View>
                <Button
                    block={true}
                    onPress={() => this.props.navigation.navigate('SearchTabNavigator')}
                    >
                    <Text >Search for cocktails</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeScreenView: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})

export default HomeScreen