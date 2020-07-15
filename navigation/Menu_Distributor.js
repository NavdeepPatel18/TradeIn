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

import Dashboard from './Dashboard_Distributor';
import View_Category from '../screens/View_Category';
import View_Product from '../screens/View_Product';
import Signup from '../screens/Signup';
import View_User from '../screens/View_User';

import View_Order_main from '../screens/order_distributors/View_orders_main';
import View_my_orders from '../screens/order_distributors/View_order_manufacturer';
import View_shop_orders from '../screens/order_distributors/View_shopkeeper_orders_to_distributors';
import View_my_orders2 from '../screens/order_distributors/View_accepted_order';
import View_shopkeeper_list from '../screens/order_distributors/View_accepted_order';
import View_orders_distributors from '../screens/order_distributors/View_orders_distributors';
import View_confirmed_order from '../screens/order_distributors/View_confirmed_order';
import View_accepted_order from '../screens/order_distributors/View_accepted_orders';


const Dashboard_StackNavigator = createStackNavigator(
  {
    Dashboard: {screen: Dashboard,
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
            size={38}
            color="#ff8913"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),},
  },
  
);

const View_Category_StackNavigator = createStackNavigator(
  {
    View_Category: {
      headerTitle:View_Category,
      screen: View_Category,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleStyle: {
          color: '#ff8913',
          fontWeight: 'bold',
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
  
);

const Signup_StackNavigator = createStackNavigator(
  {
    Signup: {
      screen: Signup,
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
            size={38}
            color="#ff8913"
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }),
    },
  },
  
);

const View_User_StackNavigator = createStackNavigator(
  {
    View_User: {
      screen: View_User,
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
  },
  
);

const View_Order_main_StackNavigator = createStackNavigator(
  {
    View_Order_main: {
      headerTitle:View_Order,
      screen: View_Order_main,
      navigationOptions: ({navigation}) => ({
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTitleStyle: {
          color: '#ff8913',
          fontWeight: 'bold',
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

    View_my_orders: {
      screen: View_my_orders,
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
    View_shop_orders: {
      screen: View_shop_orders,
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
    View_my_orders2: {
      screen: View_my_orders2,
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
    View_shopkeeper_list: {
      screen: View_shopkeeper_list,
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
    View_orders_distributors: {
      screen: View_orders_distributors,
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
    View_confirmed_order: {
      screen: View_confirmed_order,
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
    View_accepted_order: {
      screen: View_accepted_order,
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
              source={require('../image/Logo3.png')}
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
      title: 'View Product',
      screen: View_Category_StackNavigator,
      navigationOptions: {
        drawerLabel: 'View Product',
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="product-hunt" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },

    Signup: {
      title: 'Add Shopkeeper',
      screen: Signup_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Add Shopkeeper',
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="user-plus" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },

    View_User: {
      title: 'My Shopkeeper',
      screen: View_User_StackNavigator,
      navigationOptions: {
        drawerLabel: 'My Shopkeeper',
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="users" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },

    View_Order_main: {
      title: 'View Order',
      screen: View_Order_main_StackNavigator,
      navigationOptions: {
        drawerLabel: 'View Product',
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="product-hunt" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    // initialRouteName: 'Home',
    drawerBackgroundColor: '#E6E6FA',
    drawerTintColor: '#fff',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor :'#ff8918',
       inactiveTintColor :'#fff',
    }
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#ff8913',
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
    margin: 1,
    width: '100%',
    height: '100%',
  },
});

export default DrawerNavigatorExample;
