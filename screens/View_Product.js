import React, {Component} from 'react';

import {
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  ActivityIndicator,
  Platform,
} from 'react-native';

import {Card, ListItem} from 'react-native-elements';

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isLoading: true,
      dataSource: '',
    };
  }
  componentDidMount() {
    const {navigation} = this.props;
    const c_id = navigation.getParam('category_id', 'NO-ID');

    return fetch('http://192.168.43.106/Ninelight/View_Product.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: c_id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            // In this block you can do something with new state.
          },
        );
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
      title={item.product_name}
      subtitle={
        <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>
            Weight: {item.product_weight}
          </Text>
        </View>
      }
      leftAvatar={{
        size: 100,
        source: item.image && {uri: item.image},
        title: item.product_name,
      }}
      bottomDivider
    />
  );

  render() {
    const {navigation} = this.props;
    const c_id = navigation.getParam('category_id', 'NO-ID');
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
    // margin: 10,
    backgroundColor: '#ff8918',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },

  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },

  FlatListItemStyle: {
    padding: 10,
    fontSize: 25,
  },

  Flat: {
    flex: 1,
  },

  fonts: {
    fontSize: 12,
  },
});
