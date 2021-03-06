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

import Dashboard from './Dashboard_Manufacturer';
import View_Category from '../screens/View_Category';
import View_Product from '../screens/View_Product';
import Signup from '../screens/Signup';
import View_User from '../screens/View_User';
import Add_Category from '../screens/Add_Category';
import Add_Product from '../screens/Add_Product';
import View_Profile from '../screens/View_profile';
import Edit_Profile from '../screens/Edit_profile';

import View_Order_main from '../screens/order_manufacturer/View_orders_main';
import View_order_manufacturer from '../screens/order_manufacturer/View_order_manufacturer';
import View_distributor_list from '../screens/order_manufacturer/View_distributor_list';
import View_accepted_order from '../screens/order_manufacturer/View_accepted_order';

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
          size={24}
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

const Add_Category_StackNavigator = createStackNavigator({
  Add_Category: {
    screen: Add_Category,
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

const Add_Product_StackNavigator = createStackNavigator({
  Add_Product: {
    screen: Add_Product,
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

const View_Order_main_StackNavigator = createStackNavigator(
  {
    View_Order_main: {
      screen: View_Order_main,
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

    View_distributor_list: {
      screen: View_distributor_list,
    },

    View_order_manufacturer: {
      screen: View_order_manufacturer,
    },

    View_accepted_order: {
      screen: View_accepted_order,
    },
  },
  {
    initialRouteName: 'View_Order_main',
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
      //Title
      screen: Signup_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Add Distributor',
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
      //Title
      screen: View_User_StackNavigator,
      navigationOptions: {
        drawerLabel: 'My Distributor',
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="users" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },

    Add_Category: {
      //Title
      screen: Add_Category_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Add Category',
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="plus" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },

    Add_Product: {
      //Title
      screen: Add_Product_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Add Product',
        drawerIcon: ({tintColor, focused}) => (
          <Icon name="plus" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },

    View_Order_main: {
      //Title
      screen: View_Order_main_StackNavigator,
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
