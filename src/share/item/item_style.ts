import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({

    discountContainer: {
        marginTop: 30
    },
    discountItemContainer: {
        marginTop: 20,
        width: 200,
        height: 270,
        marginRight: 10,
        borderRadius: 10,
        padding: 3,
        borderWidth: 2,
        borderColor: "#f73b4c"
    },
    discountImage:{
        width: "100%",
        height: 140
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