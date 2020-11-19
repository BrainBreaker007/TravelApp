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

export default class TurkeyScreen extends React.Component {
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
                source={require("../images/turkey1.jpg")}
                style={styles.drawerImage}
              />
            </View>
          </View>
          <View>
            <View>
              <Image
                source={require("../images/turkey2.jpg")}
                style={styles.drawerImage}
              />
            </View>
          </View>
          <View>
            <View>
              <Image
                source={require("../images/turkey3.jpg")}
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
              <Text style={styles.Textheading}>Turkey</Text>
              <Text style={styles.Textcountry}>
                Turkey (Turkish: Türkiye [ˈtyɾcije]), officially the Republic of
                Turkey, is a transcontinental country located mainly on the
                Anatolian Peninsula in Western Asia, with a smaller portion on
                the Balkan Peninsula in Southeastern Europe. Turkey is bordered
                on its northwest by Greece and Bulgaria; north by the Black Sea;
                northeast by Georgia; east by Armenia, Azerbaijan, and Iran;
                southeast by Iraq; south by Syria and the Mediterranean Sea; and
                west by the Aegean Sea. Approximately 70 to 80 percent of the
                country's citizens identify as Turkish, while Kurds are the
                largest minority, at between 15 to 20 percent of the population.
                Istanbul, which straddles Europe and Asia, is the country's
                largest city, while Ankara is the capital.
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
