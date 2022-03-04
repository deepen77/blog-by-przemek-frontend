import { toast } from "react-toastify";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_ARTICLES":
      return action.articles.data;
    case "ADD_ARTICLE":
      toast.success("A article was added...!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return [action.article.data, ...state];
    case "UPDATE_ARTICLE":
      toast.success("A article was updated...!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return state.map((article) => {
        return article._id === action.article.data._id
          ? action.article.data
          : article;
      });
    case "DELETE_ARTICLE":
      toast.dark("A article was deleted...!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return state.filter((article) => article._id !== action.id);
    default:
      return state;
  }
};

export default articleReducer;
