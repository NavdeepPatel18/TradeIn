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

import Dashboard from './Dashboard_Shopkeeper';
import View_Category from '../screens/View_Category';
import View_Product from '../screens/View_Product';
import Order_Category from '../screens/Order_Category';
import Order_Product from '../screens/Order_Product';
import Order_List from '../screens/Order_List';
import View_Cart from '../screens/View_Cart';

import View_placed_order from '../screens/Order_shopkeeper/View_placed_order';
import View_shopkeeper_orders from '../screens/Order_shopkeeper/View_shopkeeper_orders';


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
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleStyle: {
          color: '#ff8913',
          fontWeight: 'bold',
        },
        headerTintColor: '#ff8918',
      }),
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

const Order_Category_StackNavigator = createStackNavigator(
  {
    Order_Category: {
      screen: Order_Category,
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
    Order_Product: {screen: Order_Product},
    Order_List: {screen: Order_List},
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
    }),
  },
);

const View_cart_StackNavigator = createStackNavigator(
  {
    View_Cart: {screen: View_Cart},
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

const View_placed_order_StackNavigator = createStackNavigator(
  {
    View_placed_order: {
      screen: View_placed_order,
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

    View_shopkeeper_orders: {
      screen: View_shopkeeper_orders,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleStyle: {
          color: '#ff8913',
          fontWeight: 'bold',
        },
        headerTintColor: '#ff8918',
      }),
    },
  },
  {
    initialRouteName: 'View orders',
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
    View_Category: {
      //Title
      screen: View_Category_StackNavigator,
      navigationOptions: {
        drawerLabel: 'View Product',
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="product-hunt" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },

    Order_Category: {
      //Title
      screen: Order_Category_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Order',
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="cart-plus" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },

    View_Cart: {
      //Title
      screen: View_cart_StackNavigator,
      navigationOptions: {
        drawerLabel: 'View Cart',
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="shopping-cart" type="font-awesome" size={24} color={tintColor} />
        ),
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
    width: 80,
    height: 60,
  },
});

export default createAppContainer(DrawerNavigatorExample);
