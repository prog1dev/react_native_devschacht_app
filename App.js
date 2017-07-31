import React from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import AppFooter from './components/AppFooter.js';
import MODES from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const App = () => (
  <Container>
    <Content>
      <View style={styles.container}>
        <Text>
          Hello world!
        </Text>
      </View>
    </Content>
    <AppFooter/>
  </Container>
)

export default App;
