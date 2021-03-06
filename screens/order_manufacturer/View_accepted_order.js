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
import {Card} from 'react-native-elements';

export default class Project extends Component {
  static navigationOptions = {
    title: 'Products',
    headerStyle: {
      backgroundColor: '#f4511e',
    },

    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const {navigation} = this.props;
    const d_id = navigation.getParam('distributor_id', 'NO-User');

    return fetch(
      'http://192.168.43.161/Ninelight/Manufacturer_order/View_accepted_order.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          distributor_id: d_id,
        }),
      },
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson === 'NO') {
          Alert.alert('No orders!!');
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
        <Card>
          <FlatList
            Vertical={true}
            data={this.state.dataSource}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({item}) => (
              <Text style={styles.FlatListItemStyle}>
                {' '}
                {item.product_name}
                <Text style={styles.fonts}>
                  {'\n'}
                  {'\n'}quantity: {item.quantity} Total Price:{item.total}{' '}
                </Text>
              </Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </Card>
      </View>
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

  Flat: {
    flex: 1,
  },

  fonts: {
    fontSize: 12,
  },
});
