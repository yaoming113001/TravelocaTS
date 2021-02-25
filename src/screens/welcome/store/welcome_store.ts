import { createContainer } from "unstated-next"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { GlobalStore } from "../../../share/useStore/global_store"

export const useWelcomeStore = () => {
  const navigation = useNavigation()
  const { user } = GlobalStore.useContainer().userStore;

  const [imageBanner] = React.useState<string>("https://tour.dulichvietnam.com.vn/uploads/tour/1554722331_du-lich-da%20-lat-ngam-hoa-3.jpg")

  const moveToHome = () => {
    navigation.navigate("Drawer")
  }

  const moveToSignIn = () => {
    navigation.navigate("SignIn")
  }

  React.useEffect(() => {
    user.account?.length ? navigation.navigate("Drawer") : null
  }, [user]);

  return { imageBanner, moveToHome, moveToSignIn };
}

export const WelcomeStore = createContainer(useWelcomeStore);