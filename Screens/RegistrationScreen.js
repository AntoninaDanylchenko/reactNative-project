import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Image,
} from "react-native";
import { styles } from "./StylesForm.styles";

const RegistrationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsFocus(false);
  };

  const handleSubmit = () => {
    keyboardHide();
    console.log(`login: ${login}, email: ${email}, password: ${password}`);
    return { login, email, password };
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={{ ...styles.logInContainer, paddingTop: 75 }}>
          <View style={styles.imgContainer}>
            <TouchableOpacity style={styles.addImgContainer}>
              <Image source={require("../assets/add.png")} />
            </TouchableOpacity>
          </View>
          <Text style={{ ...styles.title, marginBottom: 22 }}>Sing Up</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                // marginBottom: 100,
                marginBottom: isFocus ? -111 : 60,
              }}
            >
              <TextInput
                style={styles.input}
                value={login}
                placeholder="Enter your login"
                onChangeText={(text) => setLogin(text)}
                onFocus={() => setIsFocus(true)}
                onSubmitEditing={keyboardHide}
              />
              <TextInput
                style={styles.input}
                value={email}
                placeholder="Enter your email"
                onChangeText={(text) => setEmail(text)}
                onFocus={() => setIsFocus(true)}
                onSubmitEditing={keyboardHide}
              />
              <TextInput
                style={{ ...styles.input, position: "relative" }}
                value={password}
                placeholder="Enter your password"
                secureTextEntry={hidePassword}
                onChangeText={(text) => setPassword(text)}
                onFocus={() => setIsFocus(true)}
                onSubmitEditing={handleSubmit}
              />
              {password && (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{ ...styles.visibilityBtn, top: 146 }}
                  onPress={() => setHidePassword(!hidePassword)}
                >
                  <Text style={styles.btnImage}>
                    {hidePassword ? "Show" : "Hide"}
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>SING UP</Text>
              </TouchableOpacity>
              <Text style={styles.linkText}>
                Already have an account? Log in
              </Text>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default RegistrationScreen;
