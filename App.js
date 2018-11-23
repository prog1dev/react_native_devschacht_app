import React from 'react';
import { Container, Content } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import AppFooterContainer from './src/containers/AppFooterContainer.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import { MODES } from './src/constants';

const intialState = {
  mode: MODES.ARTICLES
};
const store = createStore(reducers, intialState)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const App = () => (
  <Provider store={store}>
    <Container>
      <Content>
        <View style={styles.container}>
          <Text>
            Hello world!
          </Text>
        </View>
      </Content>
      <AppFooterContainer/>
    </Container>
  </Provider>
)

export default App;
