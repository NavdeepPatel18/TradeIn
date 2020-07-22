import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Icon, Avatar} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {ListItem} from 'react-native-elements';

import Dashboard from './Dashboard_Shopkeeper';
import View_Category from '../screens/View_Category';
import View_Product from '../screens/View_Product';
import Order_Category from '../screens/Order_Category';
import Order_Product from '../screens/Order_Product';
import Order_List from '../screens/Order_List';
import View_Cart from '../screens/View_Cart';
import View_Profile from '../screens/View_profile';
import Edit_Profile from '../screens/Edit_profile';

import View_placed_order from '../screens/Order_shopkeeper/View_placed_order';
import View_shopkeeper_orders from '../screens/Order_shopkeeper/View_shopkeeper_orders';

import Report from '../screens/Report/Report';
import Weekly_Report from '../screens/Report/Weekly_Report';
import Monthly_Report from '../screens/Report/Monthly_Report';
import Yearly_Report from '../screens/Report/Yearly_Report';
import Rejan from '../screens/Report/Rejan';

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

const Report_StackNavigator = createStackNavigator(
  {
    Report: {
      screen: Report,
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

    Weekly_Report: {
      screen: Weekly_Report,
    },

    Monthly_Report: {
      screen: Monthly_Report,
    },

    Yearly_Report: {
      screen: Yearly_Report,
    },

    Rejan: {
      screen: Rejan,
    },
  },
  {
    initialRouteName: 'Report',
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
    </ScrollView>
  );
}

const DrawerNavigatorExample = createDrawerNavigator(
  {
    View_Category: {
      //Title
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

    Order_Category: {
      //Title
      screen: Order_Category_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Order',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="cart-plus"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },

    View_Cart: {
      //Title
      screen: View_cart_StackNavigator,
      navigationOptions: {
        drawerLabel: 'View Cart',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="shopping-cart"
            type="font-awesome"
            size={24}
            color={tintColor}
          />
        ),
      },
    },

    Report: {
      //Title
      screen: Report_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Report',
        drawerIcon: ({tintColor, focused}) => (
          <Icon
            name="chart-pie"
            type="font-awesome-5"
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
