import { createContainer } from "unstated-next"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import { GlobalStore } from "../../../share/useStore/global_store"

export const useWelcomeStore = () => {
  const navigation = useNavigation()
  const { user } = GlobalStore.useContainer().userStore;

  const [imageBanner] = React.useState<string>("https://lh3.googleusercontent.com/proxy/6YOX-pecLDwbCZeKh5Z1_kY6lA5DcbEud1nOpIr6bqIHmdg6UMD_qxhtQqYksZVDpnk_RSf4aRyEZjDpOFy1wAN6PjzYmicPk1svFkfGREJp-6pqwlCttyKnELDtegHcZ_A")

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