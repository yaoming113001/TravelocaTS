import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  container: { width: 350 },
  title:{
    textAlign: "center", 
    fontSize: 28, 
    fontWeight: "bold", 
    letterSpacing: 2,
    margin: 5
  },
  colorAdd:{
    color: "#66af83", 
  },
  colorDelete:{
    color: "#dc5562", 
  },
  buttonAdd:{
    backgroundColor: "#66af83", 
  },
  buttonDelete:{
    backgroundColor: "#dc5562", 
  },
  containerContentMessage:{ 
    height: 100, 
    marginTop: 20, 
    marginBottom: 20, 
    justifyContent: "center" 
  },
  messageContent:{
    textAlign: "center",
    fontSize: 18, 
    fontWeight: "bold",
    color: "#223748", 
    margin: 5,
  },
  buttonContainer:{ justifyContent: "space-around" },
  button:{
    width: 100
  }
});