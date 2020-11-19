import React from "react";
import {
  View,
  Text,
  Alert,
  Modal,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { DrawerActions, drawerIcon } from "react-navigation-drawer";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default class PakistanScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../images/back.png")}
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
        >
          <View>
            <View>
              <Image
                source={require("../images/Pakistan.jpg")}
                style={styles.drawerImage}
              />
            </View>
          </View>
          <View>
            <View>
              <Image
                source={require("../images/pak2.jpg")}
                style={styles.drawerImage}
              />
            </View>
          </View>
          <View>
            <View>
              <Image
                source={require("../images/pak3.jpg")}
                style={styles.drawerImage}
              />
            </View>
          </View>
        </ScrollView>
        <ScrollView>
          <View
            style={{
              marginTop: 5,
              backgroundColor: "#fff",
              borderRadius: 20,
              marginBottom: 10,
              elevation: 20,
            }}
          >
            <View style={{ justifyContent: "space-evenly" }}>
              <Text style={styles.Textheading}>Pakistan</Text>
              <Text style={styles.Textcountry}>
                Pakistan, officially the Islamic Republic of Pakistan, is a
                country in South Asia. It is the world's fifth-most populous
                country with a population exceeding 212.2 million. It has the
                world's second-largest Muslim population. It is the 33rd-largest
                country by area, spanning 881,913 square kilometres (340,509
                square miles). Pakistan has a 1,046-kilometre (650-mile)
                coastline along the Arabian Sea and Gulf of Oman in the south
                and is bordered by India to the east, Afghanistan to the west,
                Iran to the southwest, and China to the northeast. It is
                separated narrowly from Tajikistan by Afghanistan's Wakhan
                Corridor in the northwest, and also shares a maritime border
                with Oman.
              </Text>
            </View>
          </View>
          <View style={styles.Textbutton}>
            <Text
              style={{
                color: "white",
                fontFamily: "SemiBold",
                fontSize: 20,
                textAlign: "center",
              }}
              onPress={() => this.props.navigation.navigate("Booking")}
            >
              Book Now!
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const win = Dimensions.get("window");
const styles = StyleSheet.create({
  Textcountry: {
    fontSize: 16,
    color: "#000",
    fontFamily: "RobotoRegular",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  Textbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0000",
    paddingVertical: 10,
    borderRadius: 23,
    marginBottom: 5,
  },
  Textheading: {
    fontSize: 20,
    color: "#522289",
    fontFamily: "RobotoBold",
    textAlign: "center",
    marginTop: 10,
  },
  drawerImage: {
    width: win.width,
    height: win.height / 3,
    borderRadius: 30,
  },
});
