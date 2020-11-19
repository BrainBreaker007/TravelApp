import MapView, {
  Callout,
  Marker,
  AnimatedRegion,
  Animated,
  MapViewAnimated,
} from "react-native-maps";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { DrawerActions, drawerIcon } from "react-navigation-drawer";
import * as React from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  BackHandler,
  Alert,
} from "react-native";

export default class Location extends React.Component {
  constructor(props) {
    super(props);
    let curlat = this.props.navigation.getParam("lat");
    let curlan = this.props.navigation.getParam("lan");
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      mapRegion: null,
      lastLat: null,
      lastLong: null,
      loclat: curlat,
      loclan: curlan,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
    if (this.state.loclat == null && this.state.loclan == null) {
      this.watchID = navigator.geolocation.getCurrentPosition(
        (position) => {
          // Create the object to update this.state.mapRegion through the onRegionChange function
          let region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.00922 * 2.5,
            longitudeDelta: 0.00421 * 2.5,
          };
          this.onRegionChange(region, region.latitude, region.longitude);
        },
        (error) => console.log(error)
      );
    } else {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude: this.state.loclat,
        longitude: this.state.loclan,
        latitudeDelta: 0.00922 * 2.5,
        longitudeDelta: 0.00421 * 2.5,
      };
      this.onRegionChange(region, region.latitude, region.longitude);
    }
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong,
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleBackButtonClick
    );
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  onMapPress(e) {
    let region = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.00922 * 2.5,
      longitudeDelta: 0.00421 * 2.5,
    };
    this.onRegionChange(region, region.latitude, region.longitude);
  }

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
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

        <MapView
          style={styles.mapStyle}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          zoomEnabled={true}
          showsBuildings={true}
          showsTraffic={true}
          showsIndoors={true}
          onPress={this.onMapPress.bind(this)}
          mapType="standard"
          onRegionChange={this.onRegionChange.bind(this)}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.state.lastLat + 0.0005 || -36.82339,
              longitude: this.state.lastLong + 0.0005 || -73.03569,
            }}
          >
            <View>
              <Text style={{ color: "#000" }}>
                {this.state.lastLong} / {this.state.lastLat}
              </Text>
            </View>
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}
module.exports = Location;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
