import React,{Component} from 'react';

import { Container, Content, CardItem, Card, Text, Icon, Badge, Thumbnail } from 'native-base';

import {
  View,Image,AsyncStorage
} from 'react-native'
export default class Menu extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  _navigate(name) {
    this.props.navigator.push({
      name: name,
    })
  }

  render() {
    let {closeDrawer} = this.props
    return (
     <Container backgroundColor='white'>
      <Content>
        <Image style={{width: 300, height: 150}}source={{uri: 'https://images.designtrends.com/wp-content/uploads/2015/11/30142526/Cool-Plain-Grey-Background1.jpg'}}>
          <View style={{flex:1,flexDirection:'column', justifyContent:'center', alignItems:'center',padding:30}}>
              <Image source={{uri:'https://media.licdn.com/media/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}} style={{width: 50, height: 50,borderRadius: 25}}/>
              <Text style={{top:10,color:'white'}}>Shailesh Prajapati</Text>
          </View>
        </Image>

        <Card>
          <CardItem> 
            <Icon name="ios-contact" style={{ color: '#0A69FE' }} />
            <Text>Profile</Text>
          </CardItem>

          <CardItem iconLeft button onPress={ () => this._navigate('Login') }>
            <Icon name="md-log-out" style={{ color: '#0A69FE' }} />
            <Text>Logout</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
    )
  }
}
