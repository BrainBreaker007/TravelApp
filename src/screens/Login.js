import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  Keyboard,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";
import { ProgressBar, Colors } from "react-native-paper";
import firebase from "../config";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: "",
      userPass: "",
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.props.navigation.navigate(user ? "Home" : "Login");
    });
  }
  login = () => {
    const { userEmail, userPass } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if(userEmail==""){
    //   this.setState({email:'Please enter Email address'})
    // }

    // else if(reg.test(userEmail) === false)
    // {
    //     this.setState({email:'Email is Not Correct'})
    //     return false;
    // }

    // else if(userPass==""){
    // 	this.setState({password:'Please enter password'})
    // }
    // else{

    // fetch('http://192.168.10.156/project/travel.php',{
    //     method:'post',
    //     header:{
    //         'Accept': 'application/json',
    //         'Content-type': 'application/json'
    //     },
    //     body:JSON.stringify({
    //         email: userEmail,
    //         password: userPass
    //     })

    // })
    // .then((response) => response.json())
    // .then((responseJson)=>{

    //     if(responseJson.data === "ok"){
    //         alert("Successfully Login " + responseJson.id);
    //         global.MyVar = responseJson.id;
    //         this.props.navigation.navigate("Home");
    //     }else{
    //         alert(responseJson.data);
    //     }
    // })
    // .catch((error)=>{
    // console.error(error);
    // });

    if (this.state.userEmail === "" && this.state.userPass === "") {
      alert("Enter details to signin!");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.userEmail, this.state.userPass)
        .then((res) => {
          console.log("User Logged-in successfully!");
          //   alert(auth().currentUser.uid);
          this.setState({
            userEmail: "",
            userPass: "",
          });

          this.props.navigation.navigate("Home");
        })
        .catch((error) => this.setState({ errorMessage: error.message }));
    }
    // }
    Keyboard.dismiss();
  };

  render() {
    const { navigate } = this.props.navigation;
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
              Login
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
              <Icon name="mail" color="#5552bb" size={24} />
              <TextInput
                keyboardType={"email-address"}
                placeholder="Email"
                style={{
                  paddingHorizontal: 10,
                }}
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
              <Icon name="key" color="#5552bb" size={24} />
              <TextInput
                secureTextEntry
                placeholder="Password"
                style={{
                  paddingHorizontal: 10,
                }}
                value={this.state.userPass}
                onChangeText={(userPass) => this.setState({ userPass })}
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
              }}
            >
              <Text
                onPress={this.login}
                style={{
                  color: "white",
                  fontFamily: "SemiBold",
                }}
              >
                Login
              </Text>
            </View>

            <Text
              onPress={() => this.props.navigation.navigate("Register")}
              style={{
                alignSelf: "center",
                color: "#5552bb",
                fontFamily: "SemiBold",
                paddingVertical: 30,
              }}
            >
              Create a new account ?
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
