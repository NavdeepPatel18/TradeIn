import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import Dashboard from './Dashboard_Manufacturer';
import View_Category from '../screens/View_Category';
import View_Product from '../screens/View_Product';
import Signup from '../screens/Signup';
import View_User from '../screens/View_User';
import Add_Category from '../screens/Add_Category';
import Add_Product from '../screens/Add_Product';

const Dashboard_StackNavigator = createStackNavigator(
  {
    Dashboard: {screen: Dashboard},
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#512DA8',
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="white"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },
);

const View_Category_StackNavigator = createStackNavigator(
  {
    View_Category: {
      screen: View_Category,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <Icon
            name="menu"
            size={24}
            color="#ff8913"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },

    View_Product: {
      screen: View_Product,
    },
  },
  {
    initialRouteName: 'View_Category',
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#ecf0f1',
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
      // headerLeft: (
      //   <Icon
      //     name="menu"
      //     size={24}
      //     color="#ff8913"
      //     onPress={() => navigation.toggleDrawer()}
      //   />
      // ),
    }),
  },
);

const Signup_StackNavigator = createStackNavigator(
  {
    Signup: {screen: Signup},
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#ecf0f1',
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="#ff8913"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },
);

const View_User_StackNavigator = createStackNavigator(
  {
    View_User: {screen: View_User},
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#ecf0f1',
      },
      headerTitleStyle: {
        color: '#ff8918',
      },
      headerTintColor: '#ff8918',
      headerLeft: (
        <Icon
          name="menu"
          size={32}
          color="#ff8913"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },
);

const Add_Category_StackNavigator = createStackNavigator(
  {
    Add_Category: {screen: Add_Category},
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#ecf0f1',
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="#ff8913"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },
);

const Add_Product_StackNavigator = createStackNavigator(
  {
    Add_Product: {screen: Add_Product},
  },
  {
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#ecf0f1',
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff',
      headerLeft: (
        <Icon
          name="menu"
          size={24}
          color="#ff8913"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    }),
  },
);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <View style={styles.drawerHeader}>
          <View style={{flex: 1}}>
            <Image
              resizeMode={'contain'}
              source={require('../image/Logo1.png')}
              style={styles.drawerImage}
            />
          </View>
        </View>
        <DrawerItems {...props} />
      </SafeAreaView>
    </SafeAreaProvider>
  </ScrollView>
);

const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    // Home: {
    //   //Title
    //   screen: Dashboard_StackNavigator,
    //   navigationOptions: {
    //     drawerLabel: 'Home',
    //   },
    // },

    View_Category: {
      //Title
      screen: View_Category_StackNavigator,
      navigationOptions: {
        drawerLabel: 'View Product',
      },
    },

    Signup: {
      //Title
      screen: Signup_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Add Distributor',
      },
    },

    View_User: {
      //Title
      screen: View_User_StackNavigator,
      navigationOptions: {
        drawerLabel: 'My Distributor',
      },
    },

    Add_Category: {
      //Title
      screen: Add_Category_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Add Category',
      },
    },

    Add_Product: {
      //Title
      screen: Add_Product_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Add Product',
      },
    },
  },
  {
    // initialRouteName: 'Home',
    drawerBackgroundColor: '#ecf0f1',
    contentComponent: CustomDrawerContentComponent,
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerImage: {
    margin: 10,
    width: '100%',
    height: '100%',
  },
});

export default createAppContainer(DrawerNavigatorExample);