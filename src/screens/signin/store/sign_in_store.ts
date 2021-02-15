import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React from "react"
import { createContainer } from "unstated-next"
import { IUserForm } from "../../../share/types/user_type";
import { GlobalStore } from "../../../share/useStore/global_store";
import jwt_decode from "jwt-decode";
import { isUndefined } from "lodash";

export const useSignInStore = () => {
  const navigation = useNavigation()
  const [title] = React.useState("Sign in");
  const [info] = React.useState(" Please sign in to continue");
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

  return { title, info, submit, moveToSignUp, message, setMessage };
}

export const SignInStore = createContainer(useSignInStore);