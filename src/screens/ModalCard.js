import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

export default class ModalCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          paddingHorizontal: 32,
          alignSelf: "center",
          marginTop: 290,
          backgroundColor: "#FFF",
          height: 386,
          elevation: 1,
          width: 270,
          borderRadius: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 20,
            }}
          >
            {this.props.details.initialshort}
          </Text>

          <Text
            style={{
              fontSize: 20,
              color: "#a2a2db",
              paddingHorizontal: 16,
            }}
          >
            - - - - -
          </Text>
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              fontSize: 20,
            }}
          >
            {this.props.details.destinationshort}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 3,
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
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              fontSize: 12,
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
              fontSize: 16,
              flex: 1,
              color: "#522289",
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

        <View
          style={{
            flexDirection: "row",
            marginTop: 15,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              fontSize: 12,
            }}
          >
            Name
          </Text>
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              fontSize: 12,
              paddingLeft: 146,
            }}
          >
            Seat
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
              color: "#522289",
              flex: 1,
              fontSize: 16,
            }}
          >
            {this.props.details.Name}
          </Text>

          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#522289",
              paddingLeft: 106,
              fontSize: 16,
            }}
          >
            {this.props.details.seats}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 17,
            marginTop: 3,
            marginVertical: 16,
            color: "#a2a2db",
          }}
        >
          - - - - - - - - - - -
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: -20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              fontSize: 12,
              flex: 1,
              flexDirection: "row",
            }}
          >
            Class
          </Text>
          <Text
            style={{
              fontFamily: "RobotoRegular",
              color: "#a2a2db",
              fontSize: 12,
              paddingLeft: 144,
              justifyContent: "space-evenly",
            }}
          >
            Price
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
              fontSize: 16,
              fontFamily: "RobotoRegular",
              color: "#522289",
              flex: 1,
              flexDirection: "row",
            }}
          >
            Total Cost
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "RobotoBold",
              color: "#4b3ca7",
              paddingLeft: 72,
              justifyContent: "space-evenly",
              marginVertical: 10,
            }}
          >
            Rs: {this.props.details.price}
          </Text>
        </View>

        <TouchableHighlight
          underlayColor="#6600bb"
          style={{
            width: 200,
            marginLeft: 5,
            elevation: 2,
            marginTop: 25,
            backgroundColor: "#44FEA1",
            paddingVertical: 13,
            borderRadius: 25,
            alignSelf: "center",
          }}
          onPress={this.props.onPress}
        >
          <Text
            style={{
              fontFamily: "RobotoBold",
              color: "#FFF",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            Check Out
          </Text>
        </TouchableHighlight>

        <Text
          style={{
            color: "#a2a2db",
            alignSelf: "center",
            paddingLeft: 20,
            fontSize: 12,
            marginVertical: 16,
            fontFamily: "RobotoRegular",
          }}
        >
          Thank You so using our travel app,
        </Text>
      </View>
    );
  }
}
