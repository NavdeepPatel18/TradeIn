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
  TouchableHighlight,
} from 'react-native';
import {Button} from 'native-base';
import {Card, ListItem} from 'react-native-elements';

export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 'hii',
      isLoading: true,
    };
  }

  order = () => {
    return fetch('http://192.168.43.106/Ninelight/Order_List.php')
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert(responseJson);
        () => this.props.navigation.goback();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    return fetch('http://192.168.43.106/Ninelight/View_Cart.php')
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson === 'NO') {
          Alert.alert('Cart is Empty');
        } else {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
            },
            function () {
              // In this block you can do something with new state.
            },
          );
        }
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
            quantity: {item.quantity}
            Total Price: {item.total_price}
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
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    const {navigation} = this.props;
    const c_id = navigation.getParam('id', 'NO-User');

    return (
      <ScrollView>
        <View style={styles.MainContainer}>
          <Card containerStyle={{padding: 0}}>
            <FlatList
              // keyExtractor={this.keyExtractor}
              Vertical={true}
              data={this.state.dataSource}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              renderItem={this.renderItem}
            />
            <TouchableHighlight
              style={[styles.buttonContainer, styles.signupButton]}
              onPress={this.order}>
              <Text style={styles.signUpText}>Confirm Order</Text>
            </TouchableHighlight>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: 150,
    borderRadius: 30,
    marginLeft: '28%',
  },
  signupButton: {
    backgroundColor: '#FF8913',
  },
  signUpText: {
    color: 'white',
  },

  buttonContainer2: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: 150,
    borderRadius: 30,
    marginLeft: '28%',
  },
  signupButton2: {
    backgroundColor: '#FF8913',
  },
  signUpText2: {
    color: 'white',
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ff8918',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },

  ratingText: {
    paddingLeft: 10,
    color: 'grey',
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
