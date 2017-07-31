import React from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

const AppFooter = () => (
  <Footer>
    <FooterTab>
      <Button active>
        <Text>Статьи</Text>
      </Button>
      <Button>
        <Text>Подкасты</Text>
      </Button>
    </FooterTab>
  </Footer>
);

export default AppFooter;
