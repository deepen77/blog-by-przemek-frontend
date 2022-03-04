import React, {useState, useEffect} from 'react'
import CardArticle from "../components/CardArticle";
import { SectionContainer } from "../style-components/SectionContainer";
import { SectionTitle, SectionText } from "../style-components/GlobalStyles";
import { BlogStyles } from "../style-components/BlogStyles";
import Category from '../components/Category';
import ReactPaginate from "react-paginate";
import { Fade, } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../components/store/actions/articleActions";


const Blog = ({ handleClick }) => {

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);


  const [pageNumber, setPageNumber] = useState(0);

  const articlesPerPage = 6;
  const pagesVisited = pageNumber * articlesPerPage;

  const descendingArticles = articles.sort(function compare(obj1, obj2) {
    return new Date(obj2.dateCreated) - new Date(obj1.dateCreated);
  });

  const displayArticles = descendingArticles
    .slice(pagesVisited, pagesVisited + articlesPerPage)
    .map((article) => {
      return (
        <CardArticle
          handleClick={handleClick}
          key={article._id}
          data={article}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      );
    });

  const pageCount = Math.ceil(articles.length / articlesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto" }}>
        <SectionContainer>
          <SectionTitle>Blog</SectionTitle>
          <SectionText>All posts</SectionText>
          <Fade duration={1500}>
              <BlogStyles>
                <div className="grid">{displayArticles}</div>
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </BlogStyles>
          </Fade>
        </SectionContainer>

        <Category handleClick={handleClick} />
      </div>
    </>
  );
};

export default Blog


