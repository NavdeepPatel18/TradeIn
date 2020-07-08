import React, {Component} from 'react';

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Alert,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {Card, ListItem,} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    return fetch('http://192.168.43.106/Ninelight/View_Category.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {},
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

  renderItem = ({item}) => (
    <ListItem
      title={item.category_name}
      leftAvatar={{
        size: 100,
        source: item.image && {uri: item.image},
        title: item.category_name,
      }}
      onPress={() => {
        this.props.navigation.navigate('Order_Product', {
          category_id: item.category_id,
        });
      }}
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

    const {navigation} = this.props;

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

  FlatListItemStyle: {
    padding: 10,
    fontSize: 20,
    height: 50,
  },
});
