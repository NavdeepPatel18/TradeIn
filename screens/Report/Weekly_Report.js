import React, {Component} from 'react';
import {
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

export default class Weekly_Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    return fetch('http://192.168.43.106/Ninelight/Weekly_Report.php')
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

  GetFlatListItem(productName) {
    Alert.alert(productName);
  }

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
            data={this.state.dataSource}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={({item}) => (
              <Text
                style={styles.FlatListItemStyle}
                onPress={this.GetFlatListItem.bind(this, item.user_id)}>
                <Text style={styles.column1}>{item.product_name}</Text>
                {'\n'}
                {'\n'}Quantity:{' '}
                <Text style={styles.column2}>{item.quantity}</Text>
                {'\n'}Price:{' '}
                <Text style={styles.total}>{item.total_price}</Text>
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
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  FlatListItemStyle: {
    padding: 10,
    fontSize: 20,
    height: 120,
  },
  total: {
    color: 'orange',
  },
  heading: {
    fontSize: 20,
  },
  column1: {
    textAlign: 'left',
  },
  column2: {
    justifyContent: 'center',
    textAlign: 'right',
  },
  line: {
    height: 20,
    width: 3,
    borderColor: 'black',
  },
});
