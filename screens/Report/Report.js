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
  title: {
    fontSize: 20,
    textAlign: 'left',
    margin: '0%',

    marginBottom: '0%',
  },

  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  icon: {
    flexDirection: 'row',
    marginLeft: '3.5%',
    alignItems: 'center',
    backgroundColor: '#ff8913',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 145,
    width: 150,
    borderRadius: 25,
    margin: 5,
  },

  baseText: {
    fontSize: 20,
    marginLeft: 31,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },

  center1: {
    marginLeft: 10,
    marginTop: '15%',
    //justifyContent:'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  center: {
    marginLeft: 10,
    marginTop: '16%',
    //justifyContent:'center',
    flexDirection: 'row',
    marginLeft: '28%',
  },

  inputIcon: {
    width: 100,
    height: 100,
    marginLeft: 15,
    justifyContent: 'center',
  },

  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: 90,
    height: 90,
    borderRadius: 20,
  },
});
