import React, {Component} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {Card, ListItem} from 'react-native-elements';

class Report extends Component {
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
        this.props.navigation.navigate(item.screen);
      }}
      bottomDivider
      chevron
    />
  );

  render() {
    const list = [
      {
        screen: 'Weekly_Report',
        name: 'Weekly Report',
      },
      {
        screen: 'Monthly_Report',
        name: 'Monthly Report',
      },
      {
        screen: 'Yearly_Report',
        name: 'Yearly Report',
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

export default Report;

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
