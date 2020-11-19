import React from "react";
import { Text, View, Image, TextInput, ImageBackground } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "../config";

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userEmail: "",
      userPhone: "",
      userPass: "",
      userConfPass: "",
    };
  }

  userRegister = () => {
    const { userName } = this.state;
    const { userEmail } = this.state;
    const { userPhone } = this.state;
    const { userPass } = this.state;
    const { userConfPass } = this.state;

    // const {currentUser} = await firebase.auth()
    // let userUid = currentUser.uid
    // let userUid;
    // fetch('http://192.168.10.156/project/travel.php?add=register', {
    //     method: 'post',
    // 	header:{
    // 		'Accept': 'application/json',
    // 		'Content-type': 'application/json'
    // 	},
    // 	body:JSON.stringify({
    // 		   name: userName,
    //         email: userEmail,
    //         phone: userPhone,
    //         password: userPass,
    //         Confpassword: userConfPass
    // 	})
    // })
    //     .then((response) => response.json())
    //     .then((responseJson) =>{
    //         alert(responseJson.data);
    //         if(responseJson.data === "User Registered Successfully")
    //         {
    //             global.MyVar = responseJson.id;
    //             this.props.navigation.navigate("Home");
    //         }
    //         // this.props.navigation.navigate("Home");
    //     })
    //     .catch((error)=>{
    //         console.error(error);
    //     })

    if (this.state.userEmail === "" && this.state.userPass === "") {
      alert("Enter details to signup!");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.state.userEmail,
          this.state.userPass
        )
        .then((res) => {
          res.user.updateProfile({
            displayName: userName,
            Email: userEmail,
            phoneNumber: userPhone,
            password: userPass,
            Confpassword: userConfPass,
          });
          console.log("User registered successfully!");
          //   alert(auth().currentUser.uid);
          this.setState({
            userName: "",
            userEmail: "",
            userPass: "",
            userConfPass: "",
            userPhone: "",
          });
          firebase
            .database()
            .ref("/users/" + res.user.uid)
            .set({
              Name: userName,
              Email: userEmail,
              Phone: userPhone,
              password: userPass,
              Confpassword: userConfPass,
            });
          this.props.navigation.navigate("Login");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };

  render() {
    return (
      <ImageBackground
        source={require("../images/back.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <ScrollView>
          <View
            style={{
              marginTop: "50%",
              backgroundColor: "#fff",
              borderRadius: 80,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontFamily: "SemiBold",
                alignSelf: "center",
                color: "#522289",
              }}
            >
              Register
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 50,
                paddingHorizontal: 10,
                borderColor: "#5552bb",
                borderRadius: 23,
                paddingVertical: 2,
              }}
            >
              <Icon name="user" color="#5552bb" size={24} />
              <TextInput
                placeholder="Name"
                style={{ paddingHorizontal: 10 }}
                value={this.state.userName}
                onChangeText={(userName) => this.setState({ userName })}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#5552bb",
                borderRadius: 23,
                paddingVertical: 2,
              }}
            >
              <Icon name="mail" color="#5552bb" size={24} />
              <TextInput
                keyboardType={"email-address"}
                placeholder="Email"
                style={{ paddingHorizontal: 10 }}
                value={this.state.userEmail}
                onChangeText={(userEmail) => this.setState({ userEmail })}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#5552bb",
                borderRadius: 23,
                paddingVertical: 2,
              }}
            >
              <Icon name="phone" color="#5552bb" size={24} />
              <TextInput
                keyboardType={"numeric"}
                placeholder="Phone"
                style={{ paddingHorizontal: 10 }}
                value={this.state.userPhone}
                onChangeText={(userPhone) => this.setState({ userPhone })}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#5552bb",
                borderRadius: 23,
                paddingVertical: 2,
              }}
            >
              <Icon name="key" color="#5552bb" size={24} />
              <TextInput
                secureTextEntry
                placeholder="Password"
                style={{ paddingHorizontal: 10 }}
                value={this.state.userPass}
                onChangeText={(userPass) => this.setState({ userPass })}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginHorizontal: 55,
                borderWidth: 2,
                marginTop: 15,
                paddingHorizontal: 10,
                borderColor: "#5552bb",
                borderRadius: 23,
                paddingVertical: 2,
              }}
            >
              <Icon name="key" color="#5552bb" size={24} />
              <TextInput
                secureTextEntry
                placeholder="Confirm Password"
                style={{ paddingHorizontal: 10 }}
                value={this.state.userConfPass}
                onChangeText={(userConfPass) => this.setState({ userConfPass })}
              />
            </View>

            <View
              style={{
                marginHorizontal: 55,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                backgroundColor: "#5552bb",
                paddingVertical: 10,
                borderRadius: 23,
                marginBottom: 20,
              }}
            >
              <Text
                onPress={this.userRegister}
                style={{
                  color: "white",
                  fontFamily: "SemiBold",
                }}
              >
                Register
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
