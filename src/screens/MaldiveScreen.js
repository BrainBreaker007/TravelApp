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

export default class MaldiveScreen extends React.Component {
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
                source={require("../images/maldives.jpg")}
                style={styles.drawerImage}
              />
            </View>
          </View>
          <View>
            <View>
              <Image
                source={require("../images/maldives2.jpg")}
                style={styles.drawerImage}
              />
            </View>
          </View>
          <View>
            <View>
              <Image
                source={require("../images/maldives3.jpg")}
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
              <Text style={styles.Textheading}>Maldives</Text>
              <Text style={styles.Textcountry}>
                Maldives, officially the Republic of Maldives, is a small
                archipelagic island country in South Asia, situated in the
                Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka
                and India, about 700 kilometres (430 mi) from the Asian
                continent's mainland. The chain of 26 atolls stretches from
                Ihavandhippolhu Atoll in the north to Addu Atoll in the south to
                the Equator. Comprising a territory spanning roughly 298 square
                kilometres (115 sq mi), the Maldives is one of the world's most
                geographically dispersed sovereign states as well as the
                smallest Asian country by land area and population, with around
                515,696 inhabitants. Malé is the capital and the most populated
                city, traditionally called the "King's Island" where the ancient
                royal dynasties ruled for its central location.
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
