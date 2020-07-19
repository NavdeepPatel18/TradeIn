import React, {Component} from 'react';

import {
  Button,
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {Card, ListItem,} from 'react-native-elements';


export default class Project extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: '',
    };
  }

  componentDidMount() {
    return fetch('http://192.168.43.106/Ninelight/Profile.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#ff8913',
        }}
      />
    );
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem
      title={item}
      bottomDivider
      chevron
    />
  );

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
          <Card containerStyle={{padding: 0}}>
            <FlatList
              // keyExtractor={this.keyExtractor}
              data={this.state.dataSource}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              renderItem={this.renderItem}
            />
          </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ff8918',
  },
  Container: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    // backgroundColor:'#696969',
    color: '#008080',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  FlatListItemStyle: {
    padding: 10,
    fontSize: 20,
    height: 50,
  },
});