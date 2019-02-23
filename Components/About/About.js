import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, List, Card, Body, Title } from 'native-base';
import { ListItem } from 'react-native-elements';
import OfflineNotice from '../Tools/OfflineNotice';
import { LinearGradient } from 'expo';
class About extends React.Component {
  render() {
    return (
      <Container >
        <Content >
          <Body>
            <Title>The developer</Title>
            <Text>OK</Text>
          </Body>
        </Content>
        <OfflineNotice />
      </Container>
    )
  }
}

export default About;