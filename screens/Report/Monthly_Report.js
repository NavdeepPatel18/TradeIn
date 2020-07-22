import React, {Component} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {Card, ListItem} from 'react-native-elements';

class Monthly_Report extends Component {
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
        this.props.navigation.navigate('Rejan', {month: item.no_id});
      }}
      bottomDivider
      chevron
    />
  );

  render() {
    const list = [
      {no_id: 1, name: 'January'},
      {no_id: 2, name: 'Febuary'},
      {no_id: 3, name: 'March'},
      {no_id: 4, name: 'April'},
      {no_id: 5, name: 'May'},
      {no_id: 6, name: 'June'},
      {no_id: 7, name: 'July'},
      {no_id: 8, name: 'August'},
      {no_id: 9, name: 'September'},
      {no_id: 10, name: 'October'},
      {no_id: 11, name: 'November'},
      {no_id: 12, name: 'December'},
    ];
    return (
      <View style={styles.MainContainer}>
        <Card containerStyle={{padding: 0}}>
          <FlatList
            data={list}
            ItemSeparatorComponent={this.FlatListItemSeparator}
            renderItem={this.renderItem}
          />
        </Card>
      </View>
    );
  }
}

export default Monthly_Report;

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
