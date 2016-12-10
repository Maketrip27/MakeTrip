import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail,
        Header, Title, Button, Icon, Text} from 'native-base';


export default class Trips extends Component {

    _navigate(name,id) {
      this.props.navigator.push({
        name: name,
        passProps: {
          id: id
        }
      })
    }

    render() {
      return(
            <Container>
              <Content>
                <List>
                  <ListItem button onPress={() => this._navigate('TripDetail')}>
                    <Thumbnail size={50} source={{uri:'http://siliconindia.com:81/travelcity/images/special_images/ga69Z4z2rf5mAdn.jpeg'}} />
                    <Text>Taj Mahal</Text>
                    <Text note>Challo Taj Mahal this Vaction</Text>
                  </ListItem>
                  <ListItem>
                    <Thumbnail size={50} source={{uri:'http://jagrukbharat.com/wp-content/uploads/2016/07/Goa.jpg'}}/>
                    <Text>Challo Goa  </Text>
                    <Text note>Challo Goa this Vaction</Text>
                  </ListItem>
                </List>
          </Content> 
        </Container>
        );
    }
}
