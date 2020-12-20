import React from "react"
import { createContainer } from "unstated-next"

export const useSearchStore = () =>{
  const [title] = React.useState("Sign in");
  const [info] = React.useState(" Please sign in to continue");


  return {title, info};
}

export const SearchStore = createContainer(useSearchStore);