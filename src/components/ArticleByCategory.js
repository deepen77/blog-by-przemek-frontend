import React, {useEffect} from "react";
import CardArticle from "../components/CardArticle";
import { SectionContainer } from "../style-components/SectionContainer";
import { SectionTitle, SectionText } from "../style-components/GlobalStyles";
import { ArticlesByCategory } from "../style-components/ArticlesByCategoryStyles";
import { Fade } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../components/store/actions/articleActions";

const ArticleByCategory = ({ categoryTag, handleClick }) => {

const dispatch = useDispatch();
const articles = useSelector((state) => state.articles);
useEffect(() => {
  dispatch(getArticles());
}, [dispatch]);

const descendingArticles = articles.sort(function compare(obj1, obj2) {
  return new Date(obj2.dateCreated) - new Date(obj1.dateCreated);
});

  const displayArticlesByCategory = descendingArticles
    .filter((article) => article.tagsCategory.includes(categoryTag))
    .map((article) => {
      return (
        <Fade key={Math.random(2)} duration={1500}>
          <CardArticle
            handleClick={handleClick}
            key={article.id}
            data={article}
          />
        </Fade>
      );
    });


  return (
    <SectionContainer>
      <SectionTitle>Category</SectionTitle>
      <SectionText>By {categoryTag}</SectionText>
      {displayArticlesByCategory.length === 0 ? <SectionText>No posts yet for category {categoryTag}</SectionText> :
       <ArticlesByCategory>
        <div className="grid">{displayArticlesByCategory}</div>
      </ArticlesByCategory>}

    </SectionContainer>
  );
};

export default ArticleByCategory;


