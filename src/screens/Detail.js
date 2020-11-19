import React from "react";
import { View, Text, Alert, Modal, Image, ImageBackground } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ModalCard from "./ModalCard";
import ListCard from "./ListCard";
import { ScrollView } from "react-native-gesture-handler";
import { DrawerActions, drawerIcon } from "react-navigation-drawer";
import firebase from "../config";

export default class Detail extends React.Component {
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
    //   // setModalVisible = (visible) => {
    //   //   this.setState({ modalVisible: visible });
    //   // },
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
        .ref("booking/" + user.uid)
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

          <Icon
            name="account-circle"
            size={33}
            color="#a2a2db"
            style={{ justifyContent: "space-evenly", marginVertical: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}
          />
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 25,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              backgroundColor: "#5facdb",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../images/p.png")}
              style={{ height: 26, width: 26 }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
            {this.state.sData.initialshort}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "#a2a2db",
              paddingHorizontal: 10,
            }}
          >
            - - - - - - - - -
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontFamily: "RobotoBold",
              color: "#FFF",
            }}
          >
            {this.state.sData.destinationshort}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 40,
          }}
        >
          <Text
            style={{
              color: "#a2a2db",
              fontFamily: "RobotoRegular",
            }}
          >
            {this.state.sData.initial}
          </Text>
          <Text
            style={{
              color: "#a2a2db",
              fontFamily: "RobotoRegular",
              paddingLeft: 148,
            }}
          >
            {this.state.sData.destination}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              paddingHorizontal: 40,
              color: "#a2a2db",
              fontFamily: "RobotoRegular",
              flex: 1,
              flexDirection: "row",
            }}
          >
            {this.state.sData.startDate}
          </Text>

          <Text
            style={{
              paddingHorizontal: 40,
              color: "#a2a2db",
              fontFamily: "RobotoRegular",
              justifyContent: "space-between",
            }}
          >
            {this.state.sData.endDate}
          </Text>
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginVertical: 5,
          }}
        >
          <ListCard
            details={this.state.sData}
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
          <ListCard
            details={this.state.sData}
            onPress={() => {
              this.setModalVisible(true);
            }}
          />
          <ListCard
            details={this.state.sData}
            onPress={() => {
              this.setModalVisible(true);
            }}
          />

          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal is closed");
              }}
            >
              <ModalCard
                details={this.state.sData}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              />
            </Modal>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
