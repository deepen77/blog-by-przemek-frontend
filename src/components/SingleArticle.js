import React, {useEffect} from "react";
import { useParams} from "react-router-dom";
import { SectionContainer } from "../style-components/SectionContainer";
import { SingleArticleStyles } from "../style-components/SingleArticleStyles";
import { Fade } from "react-awesome-reveal";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "./store/actions/articleActions";
import CodeEditorTemplate from "./CodeEditorTemplate";

const SingleArticle = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const content = articles.map((article) => {
    return id === article.articleTitle ? (
      <div key={article._id}>
        <h1>{article.articleTitle}</h1>
        <div className="date">{moment(article.dateCreated).fromNow()}</div>
        <div className="image-container">
          <img src={article.imageTitle} alt={article.imageTitle} />
        </div>
        <p>{article.articleIntroduction}</p>
        {article.codeIntroduction !== "" ? (
          <CodeEditorTemplate value={article.codeIntroduction} />
        ) : null}
        {article.articleSubtitle01 ? (
          <h2 className="article-subtitle1">{article.articleSubtitle01}</h2>
        ) : null}
        <hr />
        {article.articleContent01 ? (
          <p className="article-description1">{article.articleContent01}</p>
        ) : null}
        {article.code01 !== "" ? (
          <CodeEditorTemplate value={article.code01} />
        ) : null}
        {article.articleSubtitle02 ? (
          <h2 className="article-subtitle1">{article.articleSubtitle02}</h2>
        ) : null}
        <hr />
        {article.articleContent02 ? (
          <p className="article-description1">{article.articleContent02}</p>
        ) : null}
        {article.code02 !== "" ? (
          <CodeEditorTemplate value={article.code02} />
        ) : null}
        {article.articleSubtitle03 ? (
          <h2 className="article-subtitle1">{article.articleSubtitle03}</h2>
        ) : null}
        <hr />
        {article.articleContent03 ? (
          <p className="article-description1">{article.articleContent03}</p>
        ) : null}
        {article.code03 !== "" ? (
          <CodeEditorTemplate value={article.code03} />
        ) : null}
        {article.articleSubtitle04 ? (
          <h2 className="article-subtitle1">{article.articleSubtitle04}</h2>
        ) : null}
        <hr />
        {article.articleContent04 ? (
          <p className="article-description1">{article.articleContent04}</p>
        ) : null}
        {article.code04 !== "" ? (
          <CodeEditorTemplate value={article.code04} />
        ) : null}
        {article.articleSubtitle05 ? (
          <h2 className="article-subtitle1">{article.articleSubtitle05}</h2>
        ) : null}
        <hr />
        {article.articleContent05 ? (
          <p className="article-description1">{article.articleContent05}</p>
        ) : null}
        {article.code05 !== "" ? (
          <CodeEditorTemplate value={article.code05} />
        ) : null}
      </div>
    ) : null;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionContainer>
      <Fade duration={1500}>
        <SingleArticleStyles>
          <div className="article-content">{content}</div>
        </SingleArticleStyles>
      </Fade>
    </SectionContainer>
  );
};

export default SingleArticle;
