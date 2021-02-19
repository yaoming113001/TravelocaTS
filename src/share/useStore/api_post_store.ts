import React from "react"
import axios from "axios"
import { ipconfig } from "../config/config";


export const useAPIPostStore = () => {

  const getPost = React.useCallback((url: string) => {
    return axios
      .get(`${ipconfig}posts/${url}`)
      .then(result => {
        return result
      });
  }, [])

  const postPost = React.useCallback(<T>(url: string, object: T) => {
    return axios
      .post(`${ipconfig}posts/${url}`, object)
      .then(result => {
        return result
      });
  }, [])

  const deletePost = React.useCallback(<T>(url: string, object: T) => {
    return axios
      .delete(`${ipconfig}posts/${url}`, object)
      .then(result => {
        return result
      });
  }, [])


  return { getPost, postPost, deletePost };
}