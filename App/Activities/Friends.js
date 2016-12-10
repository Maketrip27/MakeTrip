import React,{Component} from 'react';
import { Container, Content, List, ListItem, Thumbnail,
        Header, Title, Button, Icon, Text} from 'native-base';


export default class Friends extends Component {

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
                  <ListItem>
                    <Thumbnail source={{uri:'https://media.licdn.com/media/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}} />
                    <Text>Shailesh</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                 </ListItem>
                 <ListItem>
                    <Thumbnail source={{uri:'https://media.licdn.com/media/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}}/>
                    <Text>Kumar Sanket</Text>
                    <Text note>Life is one time offer! Use it well</Text>
                </ListItem>
                <ListItem>
                    <Thumbnail source={{uri:'https://media.licdn.com/media/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}} />
                    <Text>Kumar Pratik</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                 </ListItem>
                 <ListItem>
                    <Thumbnail source={{uri:'https://media.licdn.com/media/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}}/>
                    <Text>Kumar Sanket</Text>
                    <Text note>Life is one time offer! Use it well</Text>
                </ListItem>
                <ListItem>
                    <Thumbnail source={{uri:'https://media.licdn.com/media/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}} />
                    <Text>Kumar Pratik</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                 </ListItem>
                 <ListItem>
                    <Thumbnail source={{uri:'https://media.licdn.com/media/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}}/>
                    <Text>Kumar Sanket</Text>
                    <Text note>Life is one time offer! Use it well</Text>
                </ListItem>
                <ListItem>
                    <Thumbnail source={{uri:'https://media.licdn.com/media/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}} />
                    <Text>Kumar Pratik</Text>
                    <Text note>Doing what you like will always keep you happy . .</Text>
                 </ListItem>
                 <ListItem>
                    <Thumbnail source={{uri:'https://media.licdn.com/media/AAEAAQAAAAAAAAgzAAAAJDZjMmIxODk0LTNjNDktNDgyMi04OTY3LTNiMDU0YWE0ZjQwMw.jpg'}}/>
                    <Text>Kumar Sanket</Text>
                    <Text note>Life is one time offer! Use it well</Text>
                </ListItem>
                </List>
          </Content> 
        </Container>
        );
    }
}
