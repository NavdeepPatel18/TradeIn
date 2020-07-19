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
import {ListItem} from 'react-native-elements';

import Dashboard from './Dashboard_Distributor';
import View_Category from '../screens/View_Category';
import View_Product from '../screens/View_Product';
import Signup from '../screens/Signup';
import View_User from '../screens/View_User';
import View_Profile from '../screens/View_profile';
import Edit_Profile from '../screens/Edit_profile';

import View_orders_mains from '../screens/order_distributors/View_orders_mains';
import View_orders_distributors from '../screens/order_distributors/View_orders_distributors';
import View_shopkeeper_list from '../screens/order_distributors/View_shopkeeper_list';
import View_confirmed_order from '../screens/order_distributors/View_confirmed_order';
import View_accepted_order from '../screens/order_distributors/View_accepted_orders';
import View_shop_orders from '../screens/order_distributors/View_shopkeeper_orders_to_distributors';
import View_my_orders from '../screens/order_distributors/View_my_orders';
import View_my_orders2 from '../screens/order_distributors/View_my_orders2';

const Dashboard_StackNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard,
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
});

const View_Category_StackNavigator = createStackNavigator({
  View_Category: {
    headerTitle: View_Category,
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
});

const Signup_StackNavigator = createStackNavigator({
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
});

const View_User_StackNavigator = createStackNavigator({
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
});

const View_Order_mains_StackNavigator = createStackNavigator({
  View_Order_mains: {
    screen: View_orders_mains,
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
});

const View_Profile_StackNavigator = createStackNavigator(
  {
    View_Profile: {
      screen: View_Profile,
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

    Edit_Profile: {
      screen: Edit_Profile,
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
    initialRouteName: 'View_Profile',
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

function CustomDrawerContentComponent(props) {
  const {navigation} = props;
  const user = navigation.getParam('item', 'NO-ID');

  return (
    <ScrollView>
      <SafeAreaProvider>
        <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
          <View style={styles.header}>
            <View
              style={{
                height: 5,
                // marginTop:10,
                width: '100%',
                backgroundColor: '#ff8913',
              }}
            />
            <ListItem
              title={
                <Text>
                  {user.first_name} {user.last_name}{' '}
                </Text>
              }
              subtitle={user.email_id}
              leftAvatar={
                <Avatar
                  rounded
                  showEditButton
                  overlayContainerStyle={{backgroundColor: '#ecf0f1'}}
                  icon={{
                    name: 'user',
                    type: 'font-awesome',
                    color: '#ff8918',
                  }}
                  size="large"
                />
              }
              bottomDivider
              chevron
            />
            <View
              style={{
                height: 5,
                // marginTop:10,
                width: '100%',
                backgroundColor: '#ff8913',
              }}
            />
          </View>
          <DrawerItems {...props} />
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}

const DrawerNavigatorExample = createDrawerNavigator(
  {
    View_Category: {
      title: 'View Product',
      screen: View_Category_StackNavigator,
      navigationOptions: {
        drawerLabel: 'View Product',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="product-hunt"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },

    View_Profile: {
      //Title
      screen: View_Profile_StackNavigator,
      navigationOptions: {
        drawerLabel: 'View Profile',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="id-badge"
            type="font-awesome-5"
            size={24}
            color={tintColor}
          />
        ),
      },
    },

    Signup: {
      title: 'Add Shopkeeper',
      screen: Signup_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Add Shopkeeper',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="user-plus"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
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

    View_Order_mains_StackNavigator: {
      title: 'View Order',
      screen: View_Order_mains_StackNavigator,
      navigationOptions: {
        drawerLabel: 'View Order',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="product-hunt"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    // initialRouteName: 'Home',
    drawerBackgroundColor: '#d0d3d4',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: '#ff8918',
      inactiveTintColor: '#000000',

      activeBackgroundColor: '#85c1e9',
      labelStyle: {
        fontSize: 15,
        marginLeft: 10,
      },
    },
  },
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default createAppContainer(DrawerNavigatorExample);