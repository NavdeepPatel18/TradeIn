import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

import {Card, Icon} from 'react-native-elements';

import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

export default class SignUpView extends Component {
  onClickListener = (viewId, data) => {
    this.props.navigation.navigate(viewId, {item: this.state.dataSource});
  };

  constructor(props) {
    super(props);
    this.state = {
      email_id: '',
      password: '',
    };
  }

  CheckLogin = () => {
    return fetch('http://192.168.43.106/Ninelight/checkuser.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_id: this.state.email_id,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())

      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
        // If server response message same as Data Matched
        if (this.state.dataSource.user_type == 1) {
          //Then open Profile activity and send user email to profile activity.
          this.onClickListener('Menu_Shopkeeper', this.state.dataSource);
        } else if (this.state.dataSource.user_type == 2) {
          //Then open Profile activity and send user email to profile activity.
          this.onClickListener('Menu_Distributor', this.state.dataSource);
        } else if (this.state.dataSource.user_type == 3) {
          //Then open Profile activity and send user email to profile activity.
          this.onClickListener('Menu_Manufacturer', this.state.dataSource);
        } else {
          Alert.alert(responseJson);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const baseUrl =
      'https://www.balajiwafers.com/wp-content/themes/custom/img/BalajiWafers.svg';
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Card
            // title='Balaji'
            image={require('../image/Balaji.jpg')}
            imageStyle={{width: 200, height: 200}}>
            <View style={styles.inputContainer}>
              <Icon
                raised
                name="envelope"
                type="font-awesome"
                color="#ff8913"
              />
              <TextInput
                style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={(email_id) =>
                  this.setState({
                    email_id,
                  })
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon raised name="key" type="font-awesome" color="#ff8913" />
              <TextInput
                style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={(password) =>
                  this.setState({
                    password,
                  })
                }
              />
            </View>
            <TouchableHighlight
              style={[styles.loginbuttonContainer, styles.loginButton]}
              onPress={this.CheckLogin}>
              <Text style={styles.signUpText}> Login </Text>
            </TouchableHighlight>
            <Text style={{marginLeft: 50}}>Balaji Wafers & Namkeens</Text>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    marginTop: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    width: 360,
  },
  inputContainer: {
    borderBottomColor: '#ecf0f1',
    backgroundColor: '#ecf0f1',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 270,
    height: 45,
    marginTop: 5,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#ff8918',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
    color: '#ff8913',
  },

  signupbuttonContainer: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 150,
    width: 150,
  },

  loginbuttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    marginLeft: 50,
    width: 150,
    borderRadius: 30,
  },

  signupButton: {
    width: '50%',
    backgroundColor: '#979a9a',
  },

  loginButton: {
    marginLeft: 50,
    backgroundColor: '#FF8913',
  },
  signUpText: {
    color: 'white',
  },
});
