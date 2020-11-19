import React from "react";
import {
  View,
  Text,
  Alert,
  Modal,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ModalCard from "./ModalCard";
import ListCard from "./ListCard";
import { ScrollView } from "react-native-gesture-handler";
import { DrawerActions, drawerIcon } from "react-navigation-drawer";
import firebase from "../config";

export default class Profile extends React.Component {
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

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

    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .database()
        .ref("users/" + user.uid)
        .once("value")
        .then((snapshot) => {
          let sData = snapshot.val();
          console.log("User Data: ", snapshot.val());
          this.setState({ sData });
        });
    });
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <ImageBackground
        source={require("../images/back2.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Icon
            name="menu"
            size={30}
            color="#a2a2db"
            style={{ flex: 1, flexDirection: "row" }}
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }
          />
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 20,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              source={require("../images/2.jpg")}
              style={styles.drawerImage}
            />
          </View>
        </View>

        <View>
          <Text style={styles.Textname}>{this.state.sData.Name}</Text>
        </View>

        <View style={{ marginTop: 5 }}>
          <Text style={styles.Textemail}>{this.state.sData.Email}</Text>
        </View>

        <View>
          <Text style={styles.Textphone}>{this.state.sData.Phone}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 50,
            marginTop: 50,
          }}
        >
          <Image
            source={require("../images/dots.png")}
            style={{ width: 18, height: 16 }}
          />
          <Image
            source={require("../images/filter.png")}
            style={{ marginLeft: 228, width: 20, height: 18 }}
          />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  Textname: {
    fontSize: 24,
    fontFamily: "RobotoBold",
    color: "#FFF",
    textAlign: "center",
  },
  Textemail: {
    color: "#fff",
    fontFamily: "RobotoRegular",
    textAlign: "center",
  },
  Textphone: {
    paddingHorizontal: 40,
    color: "#fff",
    fontFamily: "RobotoRegular",
    textAlign: "center",
  },
  drawerImage: {
    height: 100,
    width: 100,
    borderRadius: 75,
    alignSelf: "center",
  },
});
