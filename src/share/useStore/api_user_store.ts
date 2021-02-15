import React from "react"
import { isUndefined } from "lodash"
import axios from "axios"
import jwt_decode from "jwt-decode";
import { ipconfig } from "../config/config";


export const useAPIUserStore = () => {

  const submitCode = React.useCallback((code: string, account: string) => {
    return axios
      .get(`${ipconfig}users/active/${account}/${code}`)
      .then(result => {
        return result
      });
  }, [])

  const submitAuthen = React.useCallback(<T>(value: T, url: string) => {
    return axios
      .post(`${ipconfig}users/${url}`, value)
      .then(result => {
        return result
      });
  }, [axios])

  const editUser = React.useCallback(<T>(value: T, url: string) => {
    return axios
      .put(`${ipconfig}users/${url}`, value)
      .then(result => {
        return result
      });
  }, [axios])

  const decodeJWT = React.useCallback(<T>(token: string) => {
    if (token != null) {
      var decoded: T = jwt_decode(token);
      if (!isUndefined(decoded)) {
        return decoded
      }
    }
  }, [])

  return { submitAuthen, submitCode, decodeJWT, editUser };
}