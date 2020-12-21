import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({

    discountContainer: {
        marginTop: 30
    },
    discountItemContainer: {
        backgroundColor:"blue",
        width: width-40,
        height: 120,
        borderRadius: 10,
        padding: 3,
        borderWidth: 2,
        borderColor: "#f73b4c",
        flexDirection:"row"
    },
    discountImage:{
        width: "30%",
        height: "100%"
    },
    discountTitle:{
        fontSize: 18,
        fontWeight:"600",
        padding: 10
    },
    starContainer:{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", paddingLeft: 10, paddingRight: 10 },
    rating:{ fontSize: 14 },
    priceAndHeartContainer:{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", paddingLeft: 10 },
    price:{ color: "red", fontSize: 20, fontWeight: "bold" }
});