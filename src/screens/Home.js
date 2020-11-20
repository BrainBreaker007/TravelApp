import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "react-navigation-drawer";
import firebase from "../config";
import {
  View,
  Text,
  Alert,
  Image,
  ImageBackground,
  TextInput,
  BackHandler,
  LogBox,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    this.state = {
      isLoading: true,
      sData: [],
    };

    //this.fetchList = this.fetchList.bind(this);
  }
  construct() {
    LogBox.ignoreWarnings([10000 * 1000]);
  }
  componentDidMount() {
    //this.fetchList();

    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? "Home" : "Login");
    });

    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }
  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  fetchList() {
    return fetch("http://192.168.10.156/project/travel.php")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            sData: responseJson,
          },
          function () {
            // In this block you can do something with new state.
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <ImageBackground
        source={require("../images/back.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flexDirection: "row",
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
            size={30}
            color="#a2a2db"
            style={{ justifyContent: "space-evenly", marginVertical: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}
          />
        </View>

        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text
            style={{
              fontSize: 40,
              color: "#522289",
              fontFamily: "MotionPicture",
            }}
          >
            Hello
          </Text>

          <Text
            style={{
              fontSize: 25,
              paddingVertical: 10,
              paddingRight: 80,
              lineHeight: 22,
              fontFamily: "MotionPicture",
              color: "#a2a2db",
            }}
          >
            Welcome to the Travel Agency.
          </Text>

          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#FFF",
              borderRadius: 40,
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginTop: 30,
            }}
          >
            <Image
              source={require("../images/search.png")}
              style={{ height: 14, width: 14 }}
            />

            <GooglePlacesAutocomplete
              style={{ paddingHorizontal: 20, fontSize: 15, color: "#000" }}
              placeholder="Search Destination"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                alert(data, details);
              }}
              query={{
                key: "",
                language: "en",
              }}
              requestUrl={{
                useOnPlatform: "web", // or "all"
                url:
                  "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api", // or any proxy server that hits https://maps.googleapis.com/maps/api
              }}
            />
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ alignSelf: "center", marginTop: 30 }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Booking")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#5facdb",
              }}
            >
              <Image
                source={require("../images/p.png")}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#ff5c83",
                marginHorizontal: 22,
              }}
            >
              <Icon
                name="office-building"
                color="white"
                size={32}
                onPress={() => this.props.navigation.navigate("Booking")}
              />
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#ffa06c",
              }}
            >
              <Icon
                name="bus"
                color="white"
                size={32}
                onPress={() =>
                  this.props.navigation.navigate("Location", {
                    lat: null,
                    lan: null,
                  })
                }
              />
            </View>
          </ScrollView>

          <Text
            style={{
              color: "#FFF",
              fontFamily: "RobotoBold",
              marginTop: 40,
              fontSize: 20,
            }}
          >
            Recommended
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -15, marginTop: 30 }}
          >
            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("PakistanScreen")}
                activeOpacity={1}
              >
                <Image
                  source={require("../images/Pakistan.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    onPress={() =>
                      this.props.navigation.navigate("PakistanScreen")
                    }
                    style={{
                      fontFamily: "SemiBold",
                      fontSize: 11,
                      color: "#522289",
                      textAlign: "center",
                    }}
                  >
                    Pakistan
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    A country in South Asia. It is the world's fifth-most
                    populous country.
                  </Text>
                </View>
                <Icon
                  name="map-marker"
                  size={25}
                  color="#ff5c83"
                  onPress={() =>
                    this.props.navigation.navigate("Location", {
                      lat: 69.3451,
                      lan: 30.3753,
                    })
                  }
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
                marginHorizontal: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("TurkeyScreen")}
                activeOpacity={1}
              >
                <Image
                  source={require("../images/turkey1.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    onPress={() =>
                      this.props.navigation.navigate("TurkeyScreen")
                    }
                    style={{
                      fontFamily: "SemiBold",
                      fontSize: 11,
                      color: "#522289",
                      textAlign: "center",
                    }}
                  >
                    Turkey
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    A transcontinental country located mainly on Western Asia,
                  </Text>
                </View>
                <Icon
                  name="map-marker"
                  size={25}
                  color="#5facdb"
                  onPress={() =>
                    this.props.navigation.navigate("Location", {
                      lat: 38.9637,
                      lan: 35.2433,
                    })
                  }
                />
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 190,
                borderRadius: 15,
                padding: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("MaldiveScreen")}
                activeOpacity={1}
              >
                <Image
                  source={require("../images/maldives.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    onPress={() =>
                      this.props.navigation.navigate("MaldiveScreen")
                    }
                    style={{
                      fontFamily: "SemiBold",
                      fontSize: 11,
                      color: "#522289",
                      textAlign: "center",
                    }}
                  >
                    Maldives
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#a2a2db",
                    }}
                  >
                    Maldives is situated in the Arabian Sea of the Indian Ocean.
                  </Text>
                </View>
                <Icon
                  name="map-marker"
                  size={25}
                  color="#bb32fe"
                  onPress={() =>
                    this.props.navigation.navigate("Location", {
                      lat: 3.2028,
                      lan: 73.2207,
                    })
                  }
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
