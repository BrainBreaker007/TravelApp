import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  LogBox,
} from "react-native";
import { Container, Content, Header, Body } from "native-base";
import firebase from "../config";

import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Profile from "../screens/profile";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Booking from "../screens/Booking";
import Location from "../screens/Location";
import PakistanScreen from "../screens/PakistanScreen";
import TurkeyScreen from "../screens/TurkeyScreen";
import MaldiveScreen from "../screens/MaldiveScreen";

const stackNavigatorOptions = {
  headerShown: false,
};

class CustomDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sData: [],
      modalVisible: false,
    };

    this.fetchList = this.fetchList.bind(this);
  }
  componentDidMount() {
    this.fetchList();
  }
  fetchList() {
    // return fetch('http://192.168.10.156/project/travel.php?id='+global.MyVar)
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   this.setState({
    //     sData: responseJson,
    //   },
    //   function() {
    //     // In this block you can do something with new state.
    //   });
    // })
    // .catch((error) => {
    //   console.error(error);
    // });

    // alert(firebase.auth().currentUser.uid);
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .database()
        .ref("users/" + user.uid)
        .once("value")
        .then((snapshot) => {
          let sData = snapshot.val();
          // console.log('User Data: ',snapshot.val())
          this.setState({ sData });
        });
    });
  }

  render() {
    return (
      <Container>
        <Header style={styles.drawerHeader}>
          <Body
            style={{
              backgroundColor: "#fff",
              borderRadius: 75,
              height: 200,
              marginBottom: 5,
            }}
          >
            <Image
              style={styles.drawerImage}
              source={require("../images/2.jpg")}
            />
            <Text style={styles.Textname}>
              {this.state.sData ? this.state.sData.Name : ""}
            </Text>
            <Text style={styles.Textemail}>
              {this.state.sData ? this.state.sData.Email : ""}
            </Text>
          </Body>
        </Header>
        <Content>
          <DrawerItems {...this.props} />
        </Content>
        <TouchableOpacity
          onPress={() =>
            firebase
              .auth()
              .signOut()
              .then(() => {
                this.props.navigation.navigate("Login");
              })
              .catch((error) => this.setState({ errorMessage: error.message }))
          }
        >
          <View
            style={{ marginBottom: 15, backgroundColor: "#5552bb", height: 40 }}
          >
            <Text style={styles.logout}>Logout</Text>
          </View>
        </TouchableOpacity>
      </Container>
    );
  }
}

const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        drawerIcon: () => (
          <Image
            source={require("../images/home.png")}
            style={{ width: 20, height: 20 }}
          />
        ),
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        drawerIcon: () => (
          <Image
            source={require("../images/tablet.png")}
            style={{ width: 20, height: 20 }}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        drawerIcon: () => (
          <Image
            source={require("../images/profile.png")}
            style={{ width: 20, height: 20 }}
          />
        ),
      },
    },
    Booking: {
      screen: Booking,
      navigationOptions: {
        drawerIcon: () => (
          <Image
            source={require("../images/booking.png")}
            style={{ width: 20, height: 20 }}
          />
        ),
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    Location: {
      screen: Location,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    PakistanScreen: {
      screen: PakistanScreen,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    TurkeyScreen: {
      screen: TurkeyScreen,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
    MaldiveScreen: {
      screen: MaldiveScreen,
      navigationOptions: {
        drawerLabel: () => null,
      },
    },
  },
  {
    unmountInactiveRoutes: true,
    initialRouteName: "Login",
    contentComponent: CustomDrawer,

    contentOptions: {
      activeTintColor: "#5552bb",
      labelStyle: {
        fontSize: 20,
        marginLeft: 10,
      },
    },
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    drawerWidth: 250,
  },
  {
    defaultNavigationOptions: stackNavigatorOptions,
  }
);

const styles = StyleSheet.create({
  logout: {
    margin: 5,
    position: "relative",
    fontSize: 20,
    alignSelf: "center",
    fontFamily: "SemiBold",
    color: "#fff",
  },
  Textname: {
    fontFamily: "RobotoBold",
    fontSize: 16,
    marginTop: 20,
    alignSelf: "center",
    color: "#000",
  },
  Textemail: {
    fontFamily: "RobotoBold",
    color: "#000",
    marginBottom: 10,
    alignSelf: "center",
  },
  drawerHeader: {
    height: 200,
    backgroundColor: "#5552bb",
  },
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 75,
    marginTop: 5,
    alignSelf: "center",
  },
});

export default createAppContainer(AppNavigator);
