import React from "react"
import { createContainer } from "unstated-next"
import { IUserForm } from "../../../share/types/user_type";
import { GlobalStore } from "../../../share/useStore/global_store";

export const useInformationStore = () => {
  const [accountImage] = React.useState("https://pyxis.nymag.com/v1/imgs/2ed/dbe/0820fa9512cd237db5830c32c68cc3b0bd-jennifer-lawrence.rvertical.w1200.jpg")
  const [coverImage] = React.useState("https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-modern-abstract-dark-blue-color-image_27358.jpg")
  const [inforImage] = React.useState("https://static.vecteezy.com/system/resources/previews/001/234/260/non_2x/blue-white-low-poly-triangle-shapes-vector.jpg")

  const [visible, setVisible] = React.useState(false);
  const { user, storeUser, getUser } = GlobalStore.useContainer().userStore;
  const { editUser, decodeJWT } = GlobalStore.useContainer().useUserAPI;
  const [isMessage, setMessage] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const toggleMessage = React.useCallback(() => {
    setMessage(!isMessage)
    toggleOverlay()
  }, [isMessage])

  const editUserSubmit = React.useCallback(async (value: IUserForm) => {
    const result = await editUser(value, "changeInfoUser");
    if (result.data.error) {
    } else {
      let user: any = decodeJWT(result.data.token);
      storeUser(user[0])
      setMessage(true)
      getUser()
    }
  }, [isMessage, setMessage])

  return {
    accountImage, coverImage, inforImage, visible, toggleOverlay, user, editUserSubmit
    , isMessage, toggleMessage
  };
}

export const InformationStore = createContainer(useInformationStore);