import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1
  },
  titleContainer: {
    width: width,
    height: 170,
    justifyContent: "flex-end",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 20
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
  },
  info: {
    marginTop: 12,
    fontSize: 19,
    fontWeight: "bold",
    color: "#656565",
  },
  inputContainer: {
    width: width,
    minHeight: 250,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 80,

  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: width,
    height: height,
  },
  forgetContainer: {
    alignItems: "flex-end",
    marginBottom: 30
  },
  forget: {
    color: "#01adff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonContainer: {
    width: width,
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  button: {
    width: width / 2,
    borderRadius: 10,
    height: 50,
  },
  buttonTitle: {
    fontSize: 20
  },
  signUpTitle: {
    marginTop: 30,
    color: "#ff6363",
    fontSize: 18,
    fontWeight: "bold"
  },
  scrollviewSignUpContainer: {
    height: 520,
    marginTop: 10
  }
});