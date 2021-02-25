import { useNavigation } from "@react-navigation/native";
import React from "react"
import { createContainer } from "unstated-next"
import { IUserForm } from "../../../share/types/user_type";
import { GlobalStore } from "../../../share/useStore/global_store";

export const useSignInStore = () => {
  const navigation = useNavigation()
  const [message, setMessage] = React.useState<string>("")

  const { storeUser, user } = GlobalStore.useContainer().userStore;
  const { submitAuthen, decodeJWT } = GlobalStore.useContainer().useUserAPI;

  const submit = React.useCallback(async (value: IUserForm) => {
    const result = await submitAuthen(value, "login");
    if (result.data.error) {
      setMessage(result.data.error);
    } else {
      let user: any = decodeJWT(result.data.token);
      storeUser(user)
      navigation.navigate("Drawer")
    }
  }, [])

  const moveToSignUp = React.useCallback((props) => {
    navigation.navigate("SignUp")

  }, [])

  React.useEffect(() => {
    user.account?.length ? navigation.navigate("Drawer") : null
  }, [user]);

  return { submit, moveToSignUp, message, setMessage };
}

export const SignInStore = createContainer(useSignInStore);