import { result } from "lodash";
import React from "react"
import { createContainer } from "unstated-next"
import { IUser } from "../../../share/types/user";
import { GlobalStore } from "../../../share/useStore/global_store";

export const useInformationStore = () =>{
  const [visible, setVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const [accountImage] = React.useState("https://pyxis.nymag.com/v1/imgs/2ed/dbe/0820fa9512cd237db5830c32c68cc3b0bd-jennifer-lawrence.rvertical.w1200.jpg")
  const [coverImage] = React.useState("https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-modern-abstract-dark-blue-color-image_27358.jpg")
  const [inforImage] =React.useState("https://static.vecteezy.com/system/resources/previews/001/234/260/non_2x/blue-white-low-poly-triangle-shapes-vector.jpg")

  const {user} = GlobalStore.useContainer().userStore;

  React.useEffect(()=>{
  },[user])

  return {accountImage, coverImage,inforImage, visible, toggleOverlay, user};

}

export const InformationStore = createContainer(useInformationStore);