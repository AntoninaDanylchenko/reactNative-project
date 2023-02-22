import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "flex-end",
    fontFamily: "Roboto-Black",
  },
  imgContainer: {
    position: "absolute",
    width: 120,
    height: 120,
    left: Dimensions.get("window").width / 2 - 60,
    top: -60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  addImgContainer: {
    position: "absolute",
    bottom: 15,
    right: -12,
    width: 25,
    height: 25,
  },
  logInContainer: {
    backgroundColor: "#ffffff",
    width: "100%",
    // height: 459,
    borderColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderWidth: 1,
    paddingTop: 32,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: " #212121",
    marginBottom: 32,
  },
  form: {
    marginHorizontal: 20,
    marginBottom: 22,
  },
  input: {
    borderColor: "rgba(232, 232, 232, 1)",
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginBottom: 16,
    padding: 10,
    backgroundColor: "rgba(246, 246, 246, 1)",
  },
  visibilityBtn: {
    position: "absolute",
    top: 80,
    right: 15,
    padding: 0,
  },
  button: {
    padding: 16,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 26,
    marginBottom: 16,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 11,
  },
  linkText: {
    textAlign: "center",
    color: "#1B4371",
  },
});
