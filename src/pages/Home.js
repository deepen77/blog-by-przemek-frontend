import React, { useState, useEffect } from "react";
import { SectionContainer } from "../style-components/SectionContainer";
import { SectionTitle, SectionText } from "../style-components/GlobalStyles";
import { HomeStyles } from "../style-components/HomeStyles";
import CardArticle from "../components/CardArticle";
import { Link } from "react-router-dom";
import Welcome from "../components/Welcome";
import Category from "../components/Category";
import { Fade } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../components/store/actions/articleActions";

const Home = ({ handleClick }) => {

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const countSearched = searchResults.length
  const totalArticles = articles.length
  const notFound = `no results for '${searchTerm}''`;


  const renderArticles = () => {
    if (searchTerm === "") {
      return (
        <>
          <SectionTitle>Recently published</SectionTitle>
          <SectionText>
            <span className="articles-counter">2</span> articles
          </SectionText>
          <Fade duration={1500}>
            <div className="grid">{displayArticles}</div>
          </Fade>
          <Link to="/blog">
            <button className="button-all-posts">All posts</button>
          </Link>
        </>
      );
    } else if (Object.keys(searchResults).length === 0) {
      return (
        <>
          <SectionTitle>Sorry.</SectionTitle>
          <SectionText>
            Couldn't find anything to match your criteria.
          </SectionText>
          <div className="articles-not-found">{notFound}</div>
          <Link to="/blog">
            <button className="button-all-posts">All posts</button>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <SectionTitle>Search result</SectionTitle>
          <SectionText>
            <span className="articles-counter">{countSearched}</span>{" "}
            {countSearched === 1 ? "article" : "articles"}
          </SectionText>
          <Fade duration={1500}>
            <div className="grid">{displayArticlesSearched}</div>
          </Fade>
          <Link to="/blog">
            <button className="button-all-posts">All posts</button>
          </Link>
        </>
      );
    }
  };


  const descendingArticles = articles.sort(function compare(obj1, obj2) {
    return new Date(obj2.dateCreated) - new Date(obj1.dateCreated);
  })


  const displayArticles = descendingArticles.slice(0, 2).map((article) => {
    return (
      <Fade key={Math.random(2)} duration={1500}>
        <CardArticle
          handleClick={handleClick}
          key={article._id}
          data={article}
        />
      </Fade>
    );
  });

  const displayArticlesSearched = searchResults.map((article) => {
    return (
      <Fade key={Math.random(2)} duration={1500}>
        <CardArticle
          handleClick={handleClick}
          key={article._id}
          data={article}
        />
      </Fade>
    );
  });



  useEffect(() => {
    const getResults = () => {
      searchTerm === ""
        ? setSearchResults([])
        : setSearchResults(
            articles.filter((art) =>
              art.articleTitle.toLowerCase().includes(searchTerm.toLowerCase())
            )
          );
    };

    getResults();
  }, [searchTerm]);

  return (
    <>
      <Welcome setSearchTerm={setSearchTerm} totalArticles={totalArticles} />
      <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto" }}>
        <SectionContainer>
            <HomeStyles>{renderArticles()}</HomeStyles>
        </SectionContainer>
        <Category handleClick={handleClick} />
      </div>
    </>
  );
};;

export default Home;
