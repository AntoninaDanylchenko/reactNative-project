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
  ImageBackground,
} from "react-native";
import { styles } from "./StylesForm.styles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsFocus(false);
  };

  const handleSubmit = () => {
    keyboardHide();
    console.log(`email: ${email}, password: ${password}`);
    return { email, password };
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/bgMounty.png")}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={keyboardHide}>
          <View style={styles.logInContainer}>
            <Text style={styles.title}>Log In</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View
                style={{ ...styles.form, marginBottom: isFocus ? -100 : 60 }}
              >
                <TextInput
                  style={styles.input}
                  value={email}
                  placeholder="Enter your email"
                  onChangeText={(text) => setEmail(text)}
                  onFocus={() => setIsFocus(true)}
                  onSubmitEditing={keyboardHide}
                />
                <TextInput
                  style={styles.input}
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
                    style={styles.visibilityBtn}
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
                  <Text style={styles.buttonText}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.linkText}>
                    Don't have an account? Sing up
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
