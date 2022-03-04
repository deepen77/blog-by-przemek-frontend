import "./styles.css";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleArticle from "./components/SingleArticle";

import { categories } from "./data/categories-data";
import ArticleByCategory from "./components/ArticleByCategory";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "./components/store/actions/articleActions";


function App() {


  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  const [categoryTag, setCategoryTag] = useState(
    localStorage.getItem("category")
  );

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);


  const handleClick = (e) => {
    window.scrollTo(0, 0);
    return categories.map((cat, index) =>
      cat.title === e.target.innerText.substring(1)
        ? setCategoryTag(cat.title)
        : null
    );
  };


  useEffect(() => {
    localStorage.setItem("category", categoryTag)
  }, [categoryTag])



  return (
    <Router>
        <Navbar />
        <div style={{ marginTop: "120px" }}></div>
        <Routes>
          <Route
            path="/"
            element={
              <Home categoryTag={categoryTag} handleClick={handleClick} />
            }
          />
          <Route
            path="/blog"
            element={
              <Blog categoryTag={categoryTag} handleClick={handleClick} />
            }
          />
          <Route
            path="/blog/:id"
            element={<SingleArticle/>}
          />
          <Route
            path="/blog/category/:id"
            element={
              <ArticleByCategory

                data={articles}
                categoryTag={categoryTag}
                handleClick={handleClick}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
