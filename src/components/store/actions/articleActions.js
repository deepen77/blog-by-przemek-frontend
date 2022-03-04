import axios from "axios";
import { url } from "../../../api";
import { toast } from "react-toastify";

export const addArticle = (newArticle) => {
  return (dispatch, getState) => {
    axios
      .post(`${url}/articles`, newArticle)
      .then((article) => {
        dispatch({
          type: "ADD_ARTICLE",
          article,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const getArticles = () => {
  return (dispatch) => {
    axios
      .get(`${url}/articles`)
      .then((articles) => {
        dispatch({
          type: "GET_ARTICLES",
          articles,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const updateArticle = (updatedArticle, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/articles/${id}`, updatedArticle)
      .then((article) => {
        dispatch({
          type: "UPDATE_ARTICLE",
          article,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

export const deleteArticle = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/articles/${id}`)
      .then(() => {
        dispatch({
          type: "DELETE_ARTICLE",
          id,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
