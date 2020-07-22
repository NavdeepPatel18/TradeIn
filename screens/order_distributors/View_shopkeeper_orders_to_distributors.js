import React, {Component} from 'react';

import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Platform,
} from 'react-native';

export default class Project extends Component {
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#ff8918',
        }}
      />
    );
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({item}) => (
    <ListItem
      title={item.name}
      onPress={() => {
        this.props.navigation.navigate('View_shopkeeper_list', {
          no_id: item.no_id,
        });
      }}
      bottomDivider
      chevron
    />
  );

  render() {
    const list = [
      {
        no_id: 1,
        name: 'New Orders',
      },
      {
        no_id: 2,
        name: 'Confirmed Orders',
      },
      {
        no_id: 3,
        name: 'Accepted Orders',
      },
      {
        no_id: 4,
        name: 'Delivered Orders',
      },
    ];
    return (
      <View style={styles.MainContainer}>
        <Card containerStyle={{padding: 0}}>
          <FlatList
            // keyExtractor={this.keyExtractor}
            data={list}
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
