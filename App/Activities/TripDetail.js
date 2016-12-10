import React,{Component} from 'react';
import { Footer,FooterTab, Header, Title, Button, Icon,
          Container, Content, List, ListItem, Thumbnail, 
          Text, Badge, Card, CardItem, Spinner } from 'native-base';

import {
  AsyncStorage,Modal,
  StatusBar,View,ToastAndroid,Dimensions,Image
} from 'react-native';

import ImageViewer from 'react-native-image-zoom-viewer';

const images = [{
    url: 'http://scimg.jb51.net/allimg/160815/103-160Q509544OC.jpg'
}, {
    url: 'http://img.sc115.com/uploads1/sc/jpgs/1508/apic22412_sc115.com.jpg'
}, {
    url: 'http://v1.qzone.cc/avatar/201407/07/00/24/53b9782c444ca987.jpg!200x200.jpg'
}]

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
             <Modal visible={false} transparent={true} onRequestClose={() => {alert("Modal has been closed.")}}>
                <Header backgroundColor="#212121">
                  <Button transparent onPress={() => {this.props.navigator.pop()}}>
                      <Icon name='ios-arrow-back' />
                  </Button>
                  <Title>Taj Mahal</Title>
              </Header>
                <ImageViewer imageUrls={images}/>
            </Modal>
          </Content>   
         </Container>
    );
  }
}
