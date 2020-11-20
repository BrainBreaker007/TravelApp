import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Platform,
  ImageBackground,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { DrawerActions, drawerIcon } from "react-navigation-drawer";
import moment from "moment";
import CountryPicker from "rn-country-picker";
import firebase from "../config";

export default function Booking({ navigation }) {
  // render(){
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [date1, setDate1] = useState(new Date());
  const [mode1, setMode1] = useState("date1");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [state, setState] = useState("Pakistan");
  const [state1, setState1] = useState("Pakistan");
  const [statecurrency, setcurrencyState] = useState("PKR");
  const [statecurrency1, setcurrencyState1] = useState("PKR");
  const [count, setcount] = useState(1);

  const _selectedValue = (index) => {
    setState({ index });
  };

  const _selectedValue1 = (index1) => {
    setState1({ index1 });
  };

  const _selectedCurrencyValue = (index) => {
    setcurrencyState({ index });
  };

  const _selectedCurrencyValue1 = (index1) => {
    setcurrencyState1({ index1 });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };
  const onChange1 = (event, selectedDate1) => {
    const currentDate1 = selectedDate1 || date1;
    setShow1(Platform.OS === "ios");
    setDate1(currentDate1);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showMode1 = (currentMode1) => {
    setShow1(true);
    setMode1(currentMode1);
  };

  const showDatepicker = () => {
    showMode("date");
  };
  const showDatepicker1 = () => {
    showMode1("date1");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const addBooking = () => {
    // fetch('http://192.168.10.156/project/travel.php?book=booking', {
    //     method: 'post',
    //     header:{
    //         'Accept': 'application/json',
    //         'Content-type': 'application/json'
    //     },
    //     body:JSON.stringify({
    //         startDate: date.getFullYear()+"-"+[date.getMonth()+1]+"-"+date.getDate(),
    //         endDate:  date1.getFullYear()+"-"+[date1.getMonth()+1]+"-"+date1.getDate(),
    //         startTime: date.getHours()+ ":" + date.getMinutes(),
    //         endTime: [date.getHours()+5]+ ":" + date.getMinutes(),
    //         seats: count.toString(),
    //         price: 50000,
    //         id: global.MyVar
    //     })
    // })
    //     .then((response) => response.text())
    //     .then((responseJson) =>{
    //          alert(responseJson);
    //         // if(responseJson.data === "Value Updated")
    //         // {
    //         //     Alert.alert("Ticket Booked! We will notify to shortly");
    //         // }

    //     })
    //     .catch((error)=>{
    //         console.error(error);
    //     })

    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .database()
        .ref("/booking/" + user.uid)
        .update({
          Name: user.displayName,
          initialshort: statecurrency.index,
          initial: state.index,
          destination: state1.index1,
          destinationshort: statecurrency1.index1,
          seats: count.toString(),
          price: 50000 * count,
          startDate:
            date.getFullYear() +
            "-" +
            [date.getMonth() + 1] +
            "-" +
            date.getDate(),
          endDate:
            date1.getFullYear() +
            "-" +
            [date1.getMonth() + 1] +
            "-" +
            date1.getDate(),
          startTime: date.getHours() + ":" + date.getMinutes(),
          endTime: [date.getHours() + 5] + ":" + date.getMinutes(),
        });
    });
    Alert.alert("Ticket Booked! We will notify to shortly");
  };

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
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
      <View style={{ marginTop: 20, alignSelf: "center" }}>
        <Text
          style={{
            fontSize: 40,
            color: "#522289",
            fontFamily: "MotionPicture",
          }}
        >
          Book Now!
        </Text>
      </View>
      <View
        style={{
          marginTop: "15%",
          backgroundColor: "#fff",
          borderRadius: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text
            style={{
              fontSize: 20,
              color: "#5552bb",
              fontFamily: "RobotoBold",
              textAlign: "left",
              paddingLeft: 20,
            }}
          >
            Initial:
          </Text>

          <Text
            style={{
              fontSize: 20,
              color: "#5552bb",
              fontFamily: "RobotoBold",
              paddingLeft: 50,
            }}
          >
            Destination:
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <CountryPicker
            disable={false}
            animationType={"slide"}
            containerStyle={styles.pickerStyle}
            pickerTitleStyle={styles.pickerTitleStyle}
            selectedCountryTextStyle={styles.selectedCountryTextStyle}
            countryNameTextStyle={styles.countryNameTextStyle}
            pickerTitle={"Country Picker"}
            searchBarPlaceHolder={"Search......"}
            hideCountryFlag={false}
            hideCountryName={false}
            searchBarStyle={styles.searchBarStyle}
            countryName={state}
            selectedValue={_selectedValue}
            selectedCurrency={_selectedCurrencyValue}
          />
          <CountryPicker
            disable={false}
            animationType={"slide"}
            containerStyle={styles.pickerStyle}
            pickerTitleStyle={styles.pickerTitleStyle}
            selectedCountryTextStyle={styles.selectedCountryTextStyle}
            countryNameTextStyle={styles.countryNameTextStyle}
            pickerTitle={"Country Picker"}
            searchBarPlaceHolder={"Search......"}
            hideCountryFlag={false}
            hideCountryName={false}
            searchBarStyle={styles.searchBarStyle}
            countryName={state1}
            selectedValue={_selectedValue1}
            selectedCurrency={_selectedCurrencyValue1}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#5552bb",
            paddingVertical: 10,
            borderRadius: 23,
            marginTop: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "SemiBold",
              fontSize: 20,
            }}
            onPress={showDatepicker}
          >
            Start:{" "}
            {date.getDate() +
              "/" +
              [date.getMonth() + 1] +
              "/" +
              date.getFullYear()}
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#5552bb",
            paddingVertical: 10,
            borderRadius: 23,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "SemiBold",
              fontSize: 20,
            }}
            onPress={showDatepicker1}
          >
            End:{" "}
            {date1.getDate() +
              "/" +
              [date1.getMonth() + 1] +
              "/" +
              date1.getFullYear()}
          </Text>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#5552bb",
            paddingVertical: 10,
            borderRadius: 23,
            marginTop: 20,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "SemiBold",
              fontSize: 20,
            }}
            onPress={showTimepicker}
          >
            Time: {date.getHours() + " : " + date.getMinutes() + ""}{" "}
            {date.getHours() >= 12 ? "pm" : "am"}
          </Text>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            minDate={moment().toDate()}
            onChange={onChange}
          />
        )}
        {show1 && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date1}
            mode1={mode1}
            is24Hour={true}
            display="default"
            onChange={onChange1}
          />
        )}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
            backgroundColor: "#5552bb",
            paddingVertical: 10,
            borderRadius: 23,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontFamily: "RobotoBold",
              flexDirection: "row",
              textAlign: "center",
              paddingHorizontal: 10,
            }}
          >
            {count < 2 ? "Seat:" : "Seats:"}
          </Text>
          <View
            style={{
              fontSize: 20,
              color: "#5552bb",
              fontFamily: "RobotoBold",
              flexDirection: "row",
              textAlign: "center",
              backgroundColor: "#fff",
              borderRadius: 15,
              paddingHorizontal: 15,
            }}
          >
            <Text
              onPress={() => setcount(count + 1)}
              style={{
                fontSize: 20,
                color: "#5552bb",
                fontFamily: "RobotoBold",
                backgroundColor: "#fff",
                paddingRight: 20,
                paddingHorizontal: 10,
              }}
            >
              +{count > 5 ? setcount(5) : null}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
                fontFamily: "RobotoBold",
                backgroundColor: "#5552bb",
                borderRadius: 3,
                paddingHorizontal: 10,
              }}
            >
              {count}
            </Text>
            <Text
              onPress={() => setcount(count - 1)}
              style={{
                fontSize: 20,
                color: "#5552bb",
                fontFamily: "RobotoBold",
                backgroundColor: "#fff",
                paddingLeft: 20,
                paddingHorizontal: 10,
              }}
            >
              -{count < 1 ? setcount(1) : null}
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ff0000",
            paddingVertical: 10,
            borderRadius: 23,
            marginTop: 20,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "SemiBold",
              fontSize: 20,
              textAlign: "center",
            }}
            onPress={addBooking}
          >
            Book!
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  titleText: {
    color: "#000",
    fontSize: 25,
    marginBottom: 25,
    fontWeight: "bold",
  },
  pickerTitleStyle: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "center",
    fontWeight: "bold",
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  pickerStyle: {
    alignItems: "center",
    height: 60,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#5552bb",
    backgroundColor: "white",
    borderRadius: 23,
    marginTop: 5,
    marginBottom: 10,
    flex: 1,
    flexDirection: "row",
    margin: 2,
  },
  selectedCountryTextStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    color: "#000",
    textAlign: "right",
  },

  countryNameTextStyle: {
    paddingLeft: 10,
    color: "#000",
    textAlign: "right",
  },

  searchBarStyle: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: 8,
    marginRight: 10,
  },
});
