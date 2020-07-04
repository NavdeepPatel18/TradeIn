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

export default class Project extends Component {
  static navigationOptions = {
    title: 'Category',
  };
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource:'',
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
          backgroundColor: '#66ff00',
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

    const {navigation} = this.props;

    return (
      <View style={styles.MainContainer}>
        <View style={styles.Container}>
          <FlatList
            data={this.state.dataSource}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({item}) => (
              <Text
                style={styles.FlatListItemStyle}
                onPress={() => {
                  this.props.navigation.navigate('View_Product', {
                    category_id: item.category_id,
                  });
                }}>
                {item.category_name}
              </Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#C0C0C0',
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
