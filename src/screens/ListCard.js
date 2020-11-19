import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class ListCard extends React.Component {
  constructor(props) {
    super(props);

    // alert(this.props.details);

    // this.state = {
    //   details : this.props.details
    // }
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          paddingHorizontal: 32,
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#FFF",
          height: 182,
          elevation: 1,
          width: 270,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 20,
              flex: 1,
              flexDirection: "row",
            }}
          >
            {this.props.details.initialshort}
          </Text>

          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 12,
            }}
          >
            - - - - -
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 20,
              justifyContent: "space-between",
            }}
          >
            {this.props.details.destinationshort}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",

            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              fontSize: 11,
              flex: 1,
              flexDirection: "row",
            }}
          >
            {this.props.details.initial}
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              justifyContent: "space-between",
            }}
          >
            {this.props.details.destination}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              fontSize: 16,
              flex: 1,
            }}
          >
            {this.props.details.startTime}
          </Text>

          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              paddingLeft: 60,
              fontSize: 16,
            }}
          >
            {this.props.details.endTime}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 12,
              color: "#a2a2db",
              fontFamily: "RobotoRegular",
              flex: 1,
              flexDirection: "row",
            }}
          >
            {this.props.details.startDate}
          </Text>

          <Text
            style={{
              fontSize: 12,
              color: "#a2a2db",
              fontFamily: "RobotoRegular",
              justifyContent: "space-between",
            }}
          >
            {this.props.details.endDate}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 17,
            marginRight: -5,
            marginVertical: 8,
            color: "#a2a2db",
          }}
        >
          - - - - - - - - - - -
        </Text>

        <View
          style={{
            flexDirection: "row",
            marginTop: -8,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#522289",
              fontSize: 16,
              flex: 1,
              flexDirection: "row",
            }}
          >
            Total Cost
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 16,
              justifyContent: "space-evenly",
              marginVertical: 10,
            }}
          >
            Rs: {this.props.details.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
