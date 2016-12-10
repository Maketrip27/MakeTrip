import React,{Component} from 'react';
import { Footer,FooterTab, Header, Title, Button, Icon,
          Container, Content, List, ListItem, Thumbnail, 
          Text, Badge, Card, CardItem, Spinner } from 'native-base';

import {
  AsyncStorage,
  StatusBar,View,ToastAndroid
} from 'react-native';

export default class TripDetail extends Component {

  constructor(props) {
    super(props);
  }

  _navigate(name) {
    this.props.navigator.push({
      name: name,
      passProps: {
        id: this.props.id
      }
    })
  }

  
  render() {
    return (
        <Container>
          <Header backgroundColor="#212121">
              <Button transparent onPress={() => {this.props.navigator.pop()}}>
                  <Icon name='ios-arrow-back' />
              </Button>
              <Title>Taj Mahal</Title>
          </Header>
           <Content>
             <View>
              <List>
                <ListItem>
                  <Thumbnail circle size={80} source={{uri: 'http://siliconindia.com:81/travelcity/images/special_images/ga69Z4z2rf5mAdn.jpeg' }} />
                  <Text>Taj mahal</Text>
                  <Text note>Planned By Shailesh</Text>
                </ListItem>
              </List>
            </View>
          </Content>   
         </Container>
    );
  }
}
